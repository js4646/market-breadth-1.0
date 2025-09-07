export async function GET() {
  const today = new Date().toISOString().split("T")[0];
  console.error("Fetching Fear & Greed data for:", today);

  try {
    const res = await fetch(
      `https://production.dataviz.cnn.io/index/fearandgreed/graphdata/${today}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0 Safari/537.36",
        },
      }
    );

    console.error("API status:", res.status, res.statusText);

    if (!res.ok) throw new Error(`Status ${res.status}`);

    const data = await res.json();
    console.error("Fetched data:", data);

    return new Response(
      JSON.stringify({
        value: data.fear_and_greed?.score ?? null,
        rating: data.fear_and_greed?.rating ?? null,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
