import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./locomotive.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Loader from "./Components/Loader";

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

  window.addEventListener("load", () => window.scrollTo(0, 0));

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

    const tl1 = gsap.timeline();

    tl1
      .fromTo(
        "#span",
        {
          x: "60px",
          opacity: 0,
        },
        {
          x: "0px",
          duration: 0.7,
          opacity: 1,
        }
      )
      .fromTo(
        "#loader h1",
        {
          x: "130px",
        },
        {
          x: "-20px",
          duration: 0.7,
        },
        "-=.5"
      )
      .to("#loader h1", {
        duration: 0.3,
        y: "-40px",
        opacity: 0,
      })
      .to(
        "#loader",
        {
          yPercent: "-100",
          duration: 0.4,
        },
        "-=.2"
      )
      .to(
        "#loader_mid",
        {
          yPercent: "-100",
          duration: 2,
          ease: "expo.out",
        },
        "-=.2"
      )
      .to(
        "#loader_top",
        {
          top: "-100%",
          duration: 2,
          ease: "expo.out",
        },
        "-=1.6"
      )
      .fromTo(
        "#heading",
        {
          y: "100px",
          opacity: 0,
          skewY: -5,
        },
        {
          y: "0px",
          opacity: 1,
          duration: 0.6,
          ease: "power1.out",
          stagger: 0.1,
          skewY: 0,
        },
        "-=1.7"
      )
      .fromTo(
        "#svg",
        {
          opacity: 0,
        },
        {
          opacity: 0.5,
          duration: 0.6,
        },
        "-=1.4"
      )
      .fromTo(
        "nav *",
        {
          opacity: 0,
          yPercent: -30,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          stagger: 0.06,
        },
        "-=1.7"
      )
      .to(
        "#loader,#loader_mid,#loader_top",
        {
          display: "none",
          onComplete: () => body.current.classList.remove("is_loading"),
        },
        "-=1.3"
      );
  });

  return (
    <>
      <main className="is_loading" ref={body}>
        <Loader />
        <Navbar />
        <div
          data-scroll
          data-scroll-container
          className="pt-28 px-16 relative hello bg-black"
        >
          <HomePage />
          <svg
            id="svg"
            data-scroll
            data-scroll-speed="-1.6"
            viewBox="0 0 1254 1254"
            fill="none"
            className="absolute top-[3%]  left-[4%] pointer-events-none inline-block"
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
    </>
  );
}

export default App;
