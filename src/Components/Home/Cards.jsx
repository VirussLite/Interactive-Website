import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Cards = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#card1,#card2", {
      scrollTrigger: {
        trigger: ".kk",
        start: "-140px center",
        end: "bottom center",
        scrub: true,
      },
      y: "80px",
    });
    gsap.to("#card3", {
      scrollTrigger: {
        trigger: ".kk2",
        start: "0px bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
      y: "85px",
    });
    gsap.to("#card4,#card5", {
      scrollTrigger: {
        trigger: ".kk3",
        start: "-100px center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
      y: "50px",
    });
  });

  return (
    <section className="min-h-screen">
      <div className="m-36 flex justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-9xl">
            Feat Wo
            <em className="text-[#14CF93]">r</em>
            ks <span className="text-xl">(05)</span>
          </h1>
          <svg
            stroke="black"
            stroke-width="1.6"
            fill="white"
            width={32}
            height={17}
            viewBox="0 0 32 32"
            className="rotate-[90deg]  scale-[3.5] bg-transparent"
          >
            <path d="M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z" />
          </svg>
        </div>
      </div>
      <section className="flex flex-col w-full">
        <div className="w-full flex justify-around items-center mb-16vh   kk">
          <div className="w-[55%]  rounded-[50px] overflow-hidden">
            <img
              id="card1"
              className="scale-[1.2] rounded-[50px] object-cover"
              src="./1st card/aheading.png"
              alt="an img"
            />
          </div>
          <div className="w-[28%] h-[20vw] rounded-[50px]  kk">
            <img
              id="card2"
              className="scale-[1.3] w-full h-full rounded-[50px] object-cover"
              src="./2nd card/dheading.png"
              alt="an img"
            />
          </div>
        </div>
        <div className="w-full my-32  flex  justify-center items-center kk2">
          <div className="w-[53%] h-[38.5vw] overflow-hidden rounded-[50px] mr-12">
            <img
              id="card3"
              className="h-full w-full rounded-[50px] object-cover  scale-[1.2]"
              src="./3rd card/qheading.png"
              alt="an img"
            />
          </div>
        </div>
        <div className="w-full  h-[110vh] mb-28 mt-24  flex justify-around">
          <div className="w-[33%] h-[28vw] mr-4 rounded-[50px] self-end kk3">
            <img
              id="card4"
              className="object-cover h-full w-full rounded-[50px] "
              src="./4th card/mheading.png"
              alt="an img"
            />
          </div>
          <div className="w-[44%] h-[33vw] rounded-[50px] kk3">
            <img
              id="card5"
              className="object-cover w-full h-full rounded-[50px]"
              src="./5th card/vheading.png"
              alt="an img"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Cards;
