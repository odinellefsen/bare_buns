Bun.serve({
    port: 3001,
    async fetch(req: Request) {
        if (req.method === "POST") {
            const body = req.json();
            return Response.json({ ok: true, body })
        }
        
        return new Response("hello world")
    }
})