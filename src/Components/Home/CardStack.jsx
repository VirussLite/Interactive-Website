import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const CardStack = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".kk",
        start: "-500px top",
        end: "bottom top",
        scrub: true,
      },
    });
    tl.to(
      "#cardstack1",
      {
        rotate: -4,
        xPercent: -10,
      },
      "a"
    )
      .to(
        "#cardstack2",
        {
          rotate: 0,
        },
        "a"
      )
      .to(
        "#cardstack3",
        {
          rotate: 1,
          xPercent: 15,
        },
        "a"
      )
      .to(
        "#cardstack3 > img",
        {
          xPercent: 8,
        },
        "a"
      );
  });
  return (
    <section className="w-full  relative kk">
      <div className="w-full text-4xl tracking-tighter p-20">
        <h2>
          I AM ABHINAV, I<br />
          CREATE
          <br /> <span className="italic text-[#14CF93] ">Unconventional </span>
          YET
          <br /> FUNCTIONAL & <br />
          VISUALLY PLEASING
          <br />
          INTERFACES FOR
          <br /> THE MOBILE AND
          <br /> WEB.
        </h2>
      </div>
      <img
        id="cardstack1"
        className=" w-[30vw] h-[40vw] object-cover absolute z-[1] -top-[14%] right-[30%] rounded-3xl -rotate-[13deg]"
        src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="an img"
      />
      <img
        id="cardstack2"
        className="absolute -top-[0%] right-[15%]  -rotate-[8deg]  w-[30vw]  h-[40vw] object-cover z-[2] rounded-3xl"
        src="https://images.pexels.com/photos/3261143/pexels-photo-3261143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="img"
      />
      <div
        id="cardstack3"
        className="absolute top-[12%] right-[6%]  w-[30vw]  h-[40vw] bg-transparent  z-[3] rounded-3xl  -rotate-[4deg] overflow-hidden"
      >
        <img
          className="scale-[1.15] w-full h-full rounded-3xl"
          src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="img"
        />
      </div>
    </section>
  );
};

export default CardStack;
