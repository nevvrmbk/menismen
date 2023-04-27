import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    console.log(ctx.remoteAddr);
    const data = await req.formData();
    const domain = data.get("domain")?.toString();
    const recordType = data.get("recordType")?.toString();

    if (domain && recordType) {
      console.log(domain);
      try {
        const answers = await Deno.resolveDns(
          domain,
          recordType as Deno.RecordType,
        );
        return ctx.render(answers);
      } catch (e) {
        console.error(e);
        return ctx.render(["Not Found"]);
      }
    }
    return ctx.render(["Not Found"]);
  },
};

export default function Resolve(props: PageProps | null) {
  console.log({ props });
  return (
    <>
      <main class="container mx-auto min-h-screen">
        <section class="rounded border-black border-solid bg-blue-200 p-2">
          <h1 class="text-2xl text-bold underline text-center">Resolve</h1>
          <form
            method="post"
            action="/resolve"
            class="flex flex-row justify-around my-4"
          >
            <div>
              <label htmlFor="domain">Domain</label>
              <input
                type="text"
                name="domain"
                id="domain"
                placeholder="Domain"
              />
            </div>
            <div>
              <label htmlFor="recordType">RecordType</label>
              <select name="recordType" id="recordType">
                <option value="A">A</option>
                <option value="AAAA">AAAA</option>
                <option value="TXT">TXT</option>
                <option value="SOA">SOA</option>
                <option value="MX">MX</option>
                <option value="NS">NS</option>
              </select>
            </div>
            <div>
              <button
                class="rounded bg-black text-white p-2 hover:bg-black-500 hover:text-slate-600"
                type="submit"
              >
                Resolve
              </button>
            </div>
          </form>
          <output>
            {props?.data.map((result: Object) => <pre>{result}</pre>)}
          </output>
        </section>
      </main>
    </>
  );
}
