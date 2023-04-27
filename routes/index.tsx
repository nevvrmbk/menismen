import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Counter from "../islands/Counter.tsx";
import Todo from "../islands/Todo.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    const ip = ctx.remoteAddr;
    return ctx.render(
      { ip, ...Object.fromEntries(req.headers) },
    );
  },
};

export default function Home(props: PageProps) {
  console.log({ props });
  return (
    <>
      <Head>
        <title>Sample Fresh Apps</title>
      </Head>
      <header>
        <nav class="flex flex-row justify-around items-center">
          <a href="/">
            <img
              src="/logo.svg"
              class="w-24 h-24"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
          </a>
          <div class="flex">
            <a class="mx-2" href="/resolve">Resolve</a>
            <a class="mx-2" href="/login">Login</a>
            <a class="mx-2" href="/signup">Signup</a>
          </div>
        </nav>
      </header>
      <main class="p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
        <Todo />
        <pre>{props.data}</pre>
      </main>
    </>
  );
}
