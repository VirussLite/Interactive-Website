import React from "react";

const Loader = () => {
  return (
    <>
      <div
        id="loader"
        className="w-full h-screen fixed  bg-white flex justify-evenly items-center tracking-wider z-[50] "
      >
        <h1 className="text-gray-950 text-7xl font-semibold">
          Website <em className="text-[#14CF93]">is </em>
          <span id="span" className="text-gray-950 inline-block">
            {" "}
            created by
          </span>
        </h1>
      </div>
      <div
        id="loader_mid"
        className="w-full fixed h-screen bg-[#14CF93]  top-0 z-[49]"
      ></div>
      <div
        id="loader_top"
        className="w-full fixed h-screen bg-black  top-0 z-[48]"
      ></div>
    </>
  );
};

export default Loader;
