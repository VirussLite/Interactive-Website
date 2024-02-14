import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./locomotive.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function App() {
  const body = useRef();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: body.current,
      smooth: true,
      multiplier: 1.5,
    });

    return () => {
      scroll.destroy();
    };
  });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hello",
        start: "top top",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    });

    tl.to(".hello", {
      backgroundColor: "black",
    });
    tl.to(".hello", {
      backgroundColor: "black",
    });
    tl.to(".hello", {
      backgroundColor: "white",
    });

    tl.to(".hello", {
      backgroundColor: "white",
    });

    tl.to(".hello", {
      backgroundColor: "#131313",
    });
  });

  return (
    <main ref={body}>
      <Navbar />
      <div
        data-scroll
        data-scroll-container
        className="pt-28 px-16 relative hello bg-black"
      >
        <HomePage />
        <svg
          data-scroll
          data-scroll-speed="-1.6"
          viewBox="0 0 1254 1254"
          fill="none"
          className="absolute top-[3%]  left-[4%] pointer-events-none"
          // style={{ backgroundColor: "transparent" }}
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
              <stop stopColor="#F3F3F3" stopOpacity="0.65"></stop>{" "}
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>{" "}
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Footer />
    </main>
  );
}

export default App;
