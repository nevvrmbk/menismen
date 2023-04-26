import { useEffect, useState } from "preact/hooks";
export default function Joke() {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    console.log("Effect running...");
    fetch("/api/joke").then((res) => res.text).then((joke) => setJoke("joke"))
      .catch(console.error);
  }, []);

  return (
    <>
      <main>
        <section>
          <h1>Joke</h1>
          <p>{joke}</p>
        </section>
      </main>
    </>
  );
}
