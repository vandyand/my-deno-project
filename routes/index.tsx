import { Head } from "https://deno.land/x/fresh@1.1.5/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        {/* <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        /> */}
        <p class="my-6">This is a website with a counter!</p>
        <Counter start={3} />
      </div>
    </>
  );
}
