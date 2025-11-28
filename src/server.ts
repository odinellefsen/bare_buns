Bun.serve({
    port: 3000,
    async fetch(req: Request) {
        if (req.method === "POST") {
            const body = req.json();
            return Response.json({ ok: true, body })
        }

        if (new URL(req.url).pathname === "/health") {
            return new Response("OK");
        }
        
        return new Response("hello world")
    }
})