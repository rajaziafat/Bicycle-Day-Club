import React from "react";

function Title({ children }) {
  return (
    <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center text-white font-semibold">
      {children}
    </h1>
  );
}

export default Title;
