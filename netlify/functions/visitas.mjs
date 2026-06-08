import { getStore } from "@netlify/blobs";

// Contador de visitas do portfólio.
// - GET /.netlify/functions/visitas          -> apenas lê o total
// - GET /.netlify/functions/visitas?hit=1     -> incrementa e lê o total
// Os dados ficam no Netlify Blobs (sem cookies, sem dados pessoais).
export default async (req) => {
  const headers = {
    "content-type": "application/json",
    "cache-control": "no-store",
    "access-control-allow-origin": "*",
  };

  try {
    const store = getStore("contador-visitas");
    const url = new URL(req.url);
    const shouldIncrement = url.searchParams.get("hit") === "1";

    let total = Number((await store.get("total")) || 0);

    if (shouldIncrement) {
      total += 1;
      await store.set("total", String(total));
    }

    return new Response(JSON.stringify({ total }), { headers });
  } catch (err) {
    return new Response(JSON.stringify({ total: null, error: true }), {
      status: 500,
      headers,
    });
  }
};
