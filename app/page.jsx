"use client";
// ! Import from next/navigation. Not next/router
import { useRouter } from "next/navigation";
import { useState } from "react";

import Image from "next/image";
import myImage from "../public/image.jpg";

export default function Home() {
  const router = useRouter();
  const [pageTo, setPageTo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    router.push(pageTo);
  }

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
      {/* //- Using NEXT js image tag will compress and optimise your image */}
      <Image
        className="inline"
        src={myImage}
        alt="Image of teamwork"
        style={{ width: "25rem", height: "auto" }}
      />
      {/* //- To use an image with the help of an external link, you have to provide the domain of the image provider in the nex.config.mjs file by creating an images object and then providing an array as value for they key of domains, which should be including the domain of the provider. */}
      <Image
        className="inline"
        src="https://images.unsplash.com/photo-1707762745645-45bf0b25eb7d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Image of lighthouse"
        width={200}
        height={200}
      />
    </section>
  );
  // ? You also have another desktop opened for CBSE STUFF. Check it out as well
}
