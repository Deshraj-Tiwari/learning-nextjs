"use client";
import React from "react";

const AllProjects = ({ params }) => {
  console.log("🚀 ~ AllProjects ~ params.allProjects:", params.allProjects);
  return (
    <span className="text-red-600 text-3xl font-bold">
      {params.allProjects.join("/")}
    </span>
  );
};

export default AllProjects;
