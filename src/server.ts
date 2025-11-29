Bun.serve({
    port: 3000,
    routes: {
        "/": (req: Request) => {
            if (req.method === "POST") {
                const body = req.json();

                return Response.json({ok: true})
            }

            return new Response("Hello World!");
        }
    }
})