"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { username, email, password };
    let response = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
    response = await response.json();
    if (response.ok) {
      alert("User registered successfully");
      router.push("/login");
    } else {
      alert("Error registering user");
    }
  };

  return (
    <form
      className="flex flex-col w-96 bg-slate-400 p-10 mx-auto mt-10"
      onSubmit={handleSubmit}
      action="http://localhost:3000/api/users/route.js"
      method="POST"
    >
      <input
        className="border border-black px-3 py-1 my-2"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
        name="username"
        placeholder="Username"
      />
      <input
        className="border border-black px-3 py-1 my-2"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        className="border border-black px-3 py-1 my-2"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button
        className="border border-black px-3 py-2 bg-blue-400"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
