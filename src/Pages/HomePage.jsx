import React from "react";
import Hero from "../Components/Home/Hero";
import CardStack from "../Components/Home/CardStack";
import Cards from "../Components/Home/Cards";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CardStack />
      <section className="w-full h-[26vw]  flex justify-start">
        <div className="h-full w-1/6 flex justify-start items-start">
          <svg
            stroke="black"
            strokeWidth="1.6"
            fill="white"
            width={32}
            height={18}
            viewBox="0 0 32 32"
            className="scale-[3.5] bg-transparent mt-28 ml-8"
          >
            <path d="M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z" />
          </svg>
        </div>
        <div className="h-full w-5/6 border-b-2 border-white">
          <div className="w-1/4 tracking-wide h-full flex flex-col gap-7 justify-center">
            <h2 className="text-stone-700 text-[.7rem]">
              THINGS I <span className="text-stone-700 italic">CAN</span> HELP
              YOU <br /> WITH. <br />
            </h2>
            <p className="text-[1.2rem]">
              WEB & MOBILE / UI&UX / BRANDING / FRONT-END DEVELOPMENT
            </p>
          </div>
        </div>
      </section>
      <Cards />
    </>
  );
};

export default HomePage;
