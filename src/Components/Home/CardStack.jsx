// import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef } from "react";

const CardStack = () => {
  return (
    <section className="w-full  relative">
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
        className="absolute -top-[10%] right-[30%] w-[30vw] h-[40vw] object-cover -rotate-[15deg] z-[1]  rounded-3xl"
        src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="an img"
      />
      <img
        className="absolute top-[0%] right-[15%]  -rotate-[16deg]  w-[30vw]  h-[40vw] object-cover z-[2] rounded-3xl"
        src="https://images.pexels.com/photos/3261143/pexels-photo-3261143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="img"
      />
      <img
        className="absolute top-[6%] right-[6%]  w-[30vw]  h-[40vw] object-cover -rotate-[20deg] z-[3] rounded-3xl"
        src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="img"
      />
    </section>
  );
};

export default CardStack;
