"use client";
// ! Import from next/navigation. Not next/router
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [pageTo, setPageTo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    router.push(pageTo);
  }

  // ? You also have another desktop opened for CBSE STUFF. Check it out as well
  return (
    <section>
      <span className="text-red-600 text-5xl font-bold">Home</span>
      <hr className="my-8" />
      <span className="text-red-600 text-5xl font-bold">useRouter</span>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setPageTo(e.target.value)}
          className="border-black border-2 me-3 px-3 py-1"
          type="text"
          name="pageName"
          id="pageNameInput"
        />
        <button
          type="submit"
          className="bg-green-600 px-3 py-1 border-black border-2"
        >
          Redirect
        </button>
      </form>
    </section>
  );
}
