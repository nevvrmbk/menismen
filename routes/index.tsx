import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Counter from "../islands/Counter.tsx";
import Todo from "../islands/Todo.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    return ctx.render(JSON.stringify(Object.fromEntries(req.headers)));
  },
};

export default function Home(props: PageProps) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
        <Todo />
        <pre>{ props.data }</pre>
      </div>
    </>
  );
}
