import { NextResponse } from "next/server";

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      {
        error: "Supabase URL or Key missing in environment variables.",
      },
      { status: 500 }
    );
  }

  const url = `${supabaseUrl}/rest/v1/visits?select=*`;

  try {
    const res = await fetch(url, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    });

    const text = await res.text();

    return NextResponse.json({
      status: res.status,
      body: text,
    });
  } catch (e) {
    return NextResponse.json(
      {
        error: "Fetch to Supabase failed.",
        details: (e as Error).message,
      },
      { status: 500 }
    );
  }
}
