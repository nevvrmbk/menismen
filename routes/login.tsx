import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const formData = await req.formData();
    console.log({ formData });
    const uuid = crypto.randomUUID();
    return new Response(JSON.stringify(uuid), {
      headers: { "Content-Type": "application/json" },
    });
  },
};

export default function Login() {
  return (
    <>
      <main>
        <section>
          <h1>Login</h1>
          <form method="post" action="/login">
            <input type="email" name="email" id="email" />
            <br />
            <input type="password" name="password" id="password" />
            <br />
            <button type="submit">Login</button>
          </form>
        </section>
      </main>
    </>
  );
}
