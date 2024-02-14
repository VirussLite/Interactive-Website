import React, { useEffect, useRef } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
  const btn1 = useRef(null);
  const btn2 = useRef(null);

  const mousemove1 = (e) => {
    let x = e.pageX - btn1.current.offsetLeft;
    let y = e.pageY - btn1.current.offsetTop;

    btn1.current.style.setProperty("--x", x + "px");
    btn1.current.style.setProperty("--y", y + "px");
  };

  const mousemove2 = (e) => {
    let x = e.pageX - btn2.current.offsetLeft;
    let y = e.pageY - btn2.current.offsetTop;

    btn2.current.style.setProperty("--x", x + "px");
    btn2.current.style.setProperty("--y", y + "px");
  };
  useEffect(() => {
    btn1.current.addEventListener("mousemove", mousemove1);
    btn2.current.addEventListener("mousemove", mousemove2);

    return () => {
      btn1.current.removeEventListener("mousemove", mousemove1);
      btn2.current.removeEventListener("mousemove", mousemove2);
    };
  }, []);

  return (
    <footer
      data-scroll-container
      data-scroll
      className="flex flex-col justify-center items-center  max-h-[140vh] gap-32 pt-28 overflow-hidden relative"
    >
      <div
        data-scroll-container
        className="w-1/2 text-[5.8vw]  text-center leading-none"
      >
        <h1 data-scroll data-scroll-speed="-.22">
          LET'S TALK <br /> ABOUT THE NEXT <br />{" "}
          <h1 data-scroll data-scroll-speed=".02">
            BIG THING
          </h1>
        </h1>
      </div>
      <div className="flex  justify-evenly  w-full">
        <button
          ref={btn1}
          className="w-[43%] border-2 border-white text-xl py-9 font-bold  overflow-hidden rounded-full relative cursor-pointer"
          style={{ backgroundColor: "transparent" }}
        >
          {" "}
          <span className="z-20 relative"> Write a Message</span>
        </button>
        <button
          ref={btn2}
          className="w-[43%] border-2 border-white py-9 text-xl font-bold  rounded-full relative overflow-hidden cursor-pointer"
          style={{ backgroundColor: "transparent" }}
        >
          <span className="z-20 relative"> Discuss Project</span>
        </button>
      </div>
      <div
        data-scroll
        data-scroll-section
        className="w-full flex justify-evenly items-start"
      >
        {[
          { name: "Behance", id: "behance_jha" },
          { name: "Instagram", id: "insta_jha" },
          { name: "Twitter", id: "twitter_jha" },
          { name: "Dribbble", id: "driblle_jha" },
        ].map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-center border-t-[1px] border-white py-2 w-1/6 footer_desc relative"
            >
              <div data-scroll data-scroll-speed=".04">
                <h1 className="text-2xl font-bold z-10 relative">
                  {item.name}
                </h1>
                <p className="cursor-pointer text-sm  text-gray-400 z-10 relative">
                  {item.id}
                </p>
              </div>
              <div
                data-scroll
                data-scroll-speed=".04"
                className="rounded-full overflow-hidden bg-black  cursor-pointer"
              >
                {item.name === "Behance" && (
                  <FaBehance
                    size={32}
                    className="p-2 z-10 relative"
                    style={{
                      backgroundColor: "black",
                    }}
                  />
                )}
                {item.name === "Instagram" && (
                  <FaInstagram
                    size={30}
                    className="p-2 z-10 relative"
                    style={{
                      backgroundColor: "black",
                    }}
                  />
                )}
                {item.name === "Twitter" && (
                  <FaXTwitter
                    size={30}
                    className="p-2 z-10 relative"
                    style={{
                      backgroundColor: "black",
                    }}
                  />
                )}
                {item.name === "Dribbble" && (
                  <FaDribbble
                    size={30}
                    className="p-2 z-10 relative"
                    style={{
                      backgroundColor: "black",
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between w-full px-24 mb-12  text-sm">
        <p>©2024 Abhishek Jha, All Rights Reserved</p>
        <p>2020 Portfolio</p>
      </div>
      <svg
        data-scroll
        data-scroll-speed="-1"
        viewBox="0 0 1254 1254"
        fill="none"
        className="absolute w-[86%] top-[30%] pointer-events-none"
      >
        <circle
          cx="627"
          cy="627"
          r="627"
          fill="url(#paint0_radial_3260_3)"
        ></circle>
        <defs>
          <radialGradient
            id="paint0_radial_3260_3"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(627) rotate(90) scale(813)"
          >
            {" "}
            <stop stopColor="#F3F3F3" stopOpacity="0.45"></stop>{" "}
            <stop offset="1" stopColor="white" stopOpacity="0"></stop>{" "}
          </radialGradient>
        </defs>
      </svg>
    </footer>
  );
};

export default Footer;
