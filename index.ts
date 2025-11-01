Bun.serve({
    port: 3001,
    fetch(req: Request) {
        return new Response("hello world");
    }
})