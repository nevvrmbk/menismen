import { HandlerContext } from "$fresh/server.ts";

export const handler = (req: Request, _ctx: HandlerContext): Response => {
  return new Response(JSON.stringify(Object.fromEntries(req.headers)), {
    headers: { "Content-Type": "application/json" },
  });
};
