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

  console.log("Supabase client initialized.");

  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";

  let geo = { country: "Unknown", city: "Unknown" };

  try {
    // Uncomment if you want geo lookups:
    // const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    // const geoData = await geoRes.json();
    // geo = {
    //   country: geoData.country_name || "Unknown",
    //   city: geoData.city || "Unknown",
    // };

    // ✅ Find the most recent visit for this IP
    const { data: lastVisit, error: selectError } = await supabase
      .from("visits")
      .select("visited_at")
      .eq("ip_address", ip)
      .order("visited_at", { ascending: false })
      .limit(1);

    if (selectError) {
      console.error("Error selecting last visit:", selectError);
      return Response.json(
        { error: "Failed to fetch last visit", details: selectError.message },
        { status: 500 }
      );
    }

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
      const { error: insertError } = await supabase.from("visits").insert({
        ip_address: ip,
        country: geo.country,
        city: geo.city,
        user_agent: req.headers.get("user-agent") || "",
        page: "home",
        visited_at: new Date().toISOString(),
      });

      if (insertError) {
        console.error("Error inserting visit:", insertError);
        return Response.json(
          { error: "Failed to insert visit", details: insertError.message },
          { status: 500 }
        );
      }
    }

    // ✅ Total hits
    const { count: totalHits, error: countError } = await supabase
      .from("visits")
      .select("*", { count: "exact", head: true });

    if (countError) {
      console.error("Error counting total hits:", countError);
      return Response.json(
        { error: "Failed to count total hits", details: countError.message },
        { status: 500 }
      );
    }

    // ✅ Unique visitors via RPC
    const { data: uniqueVisitors, error: rpcError } = await supabase.rpc(
      "count_unique_visitors"
    );

    if (rpcError) {
      console.error("Error calling count_unique_visitors RPC:", rpcError);
      return Response.json(
        { error: "Failed to get unique visitors", details: rpcError.message },
        { status: 500 }
      );
    }

    return Response.json({
      totalHits: totalHits || 0,
      uniqueVisitors: uniqueVisitors || 0,
    });
  } catch (e) {
    console.error("Unexpected error:", e);
    return Response.json(
      { error: "Unexpected error occurred", details: String(e) },
      { status: 500 }
    );
  }
}
