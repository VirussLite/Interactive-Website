import React, { useState } from "react";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState();

  function updateTime() {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();

    setCurrentTime(hour + ":" + min);
  }

  useState(() => {
    updateTime();
  }, []);

  return (
    <section className="h-[90vh] relative">
      <div
        data-scroll-container
        className="flex items-center  justify-evenly"
        id="heading"
      >
        <h1
          data-scroll
          data-scroll-speed=".5"
          className="text-[15vw] pl-4 bg-transparent"
        >
          Creative
        </h1>
        <div
          className="flex text-[.8rem] w-1/2 justify-evenly pb-9 gap-12 font-[200]"
          id="heading"
        >
          <p>
            Currently Available <em className="text-gray-500">For</em>
            <br /> FREELANCE WORLDWIDE
          </p>
          <p>
            My Local Time {currentTime} <br /> GMT(+5:30)
          </p>
        </div>
      </div>
      <div className="flex justify-end items-end -mt-[5vw] gap-6" id="heading">
        <div>
          <div className="text-[9vw]">
            <p
              data-scroll
              data-scroll-speed=".2"
              className="text-[#14CF93] skew-x-[-20deg]"
            >
              visual
            </p>
          </div>
        </div>
        <div className="leading-none">
          <h1
            data-scroll
            data-scroll-speed=".4"
            className="text-[15vw] bg-transparent"
          >
            Designer
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
