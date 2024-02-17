"use client";

const User = ({ params }) => {
  return (
    <span className="text-red-600 text-5xl font-bold">
      Hello {params.user}!
    </span>
  );
};

export default User;
