import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  POST(req, ctx) {
    return new Response("");
  },
};

export default function Signup() {
  return (
    <>
      <main class="container mx-auto p-4 border-box">
        <section class="border rounded bg-slate-600 p-4">
          <h1 class="text-xl text-center underline">Signup</h1>
          <form action="/signup" method="post" class="flex-column">
            <input
              class="bg-gray-400 rounded p-2"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              class="bg-gray-400 rounded p-2"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button class="" type="submit">Signup</button>
          </form>
        </section>
      </main>
    </>
  );
}
