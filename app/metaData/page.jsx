import React from "react";

const metaDataInNext = () => {
  return (
    <span className="text-yellow-400 text-3xl font-bold">
      This page has different Title, author and Descripton
    </span>
  );
};

export default metaDataInNext;
// - The name of the function should not be changed. It should me generateMetadata for it to work
export const generateMetadata = () => {
  return {
    title: "Changed Title",
    description: "This has a Different Description",
  };
};
