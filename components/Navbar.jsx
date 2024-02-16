import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-evenly">
        <li className="text-blue-600 underline">
          <Link href="/">Home</Link>
        </li>
        <li className="text-blue-600 underline">
          <Link href="/about">About</Link>
        </li>
        <li className="text-blue-600 underline">
          <Link href="/about/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
