import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";

  let geo = { country: "Unknown", city: "Unknown" };

  try {
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geoData = await geoRes.json();
    geo = {
      country: geoData.country_name || "Unknown",
      city: geoData.city || "Unknown",
    };
  } catch (e) {
    console.error("Geo lookup failed:", e);
  }

  // ✅ Find the most recent visit for this IP
  const { data: lastVisit } = await supabase
    .from("visits")
    .select("visited_at")
    .eq("ip_address", ip)
    .order("visited_at", { ascending: false })
    .limit(1);

  let shouldInsert = true;

  if (lastVisit && lastVisit.length > 0) {
    const lastTime = new Date(lastVisit[0].visited_at);
    const now = new Date();

    const diffMs = now.getTime() - lastTime.getTime();
    const diffMins = diffMs / 1000 / 60;

    if (diffMins < 1) {
      shouldInsert = false;
    }
  }

  // ✅ Only insert if it's a new visit
  if (shouldInsert) {
    await supabase.from("visits").insert({
      ip_address: ip,
      country: geo.country,
      city: geo.city,
      user_agent: req.headers.get("user-agent") || "",
      page: "home",
      visited_at: new Date().toISOString(),
    });
  }

  // Total hits
  const { count: totalHits } = await supabase
    .from("visits")
    .select("*", { count: "exact", head: true });

  // Unique visitors via RPC
  const { data: uniqueVisitors, error } = await supabase.rpc(
    "count_unique_visitors"
  );

  return Response.json({
    totalHits: totalHits || 0,
    uniqueVisitors: uniqueVisitors || 0,
  });
}
