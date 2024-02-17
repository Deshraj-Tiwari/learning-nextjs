"use client";

import { redirect } from "next/navigation";

const User = ({ params }) => {
  if (params.user == "chirag") {
    redirect("/login");
  }
  return (
    <span className="text-red-600 text-5xl font-bold">
      Hello {params.user}!
    </span>
  );
};

export default User;
