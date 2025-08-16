import React from "react";

function HeroSection() {
  return (
    <>
      <section className="flex  flex-col justify-center items-center text-center p-10 bg-gradient-to-r from-gray-700 to-gray-950 text-white">
        <h1 className="text-6xl font-semibold mb-5">
          Hey,I'm{" "}
          <img
            className="inline-block h-8 w-8 mr-2 rounded-full ring-2 ring-gray-200 hover:scale-400 tranform duration-1000"
            src="./public/short-2.jpg"
            alt=""
          />{" "}
          Ritesh Kumar
        </h1>
        <p className=" max-w-xl">
          Analyze, predict, and stay ahead{" "}
          <img
            className="inline-block h-9 w-9 mx-2 rounded-full ring-2 ring-gray-200 hover:scale-200 tranform duration-500"
            src="https://randomuser.me/api/portraits/women/4.jpg"
            alt=""
          />{" "}
          with our professional trading tools.
          <img
            className="inline-block mx-1 h-9 w-9 rounded-full ring-2 ring-gray-200 hover:scale-200 tranform duration-500"
            src="https://randomuser.me/api/portraits/women/9.jpg"
            alt=""
          />
        </p>
      </section>
    </>
  );
}

export default HeroSection;
