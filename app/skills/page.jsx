"use client";
import FramerAnimation from "@/components/FramerAnimation";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "HTML5 && CSS3",
    color: "#F06318",
    background: "rgb(240,99,24)",
    background:
      "linear-gradient(90deg, rgba(240,99,24,1) 22%, rgba(33,76,229,1) 100%)",
  },
  {
    title: "JAVASCRIPT && TYPESCRIPT",
    color: "#f0dc4e",
    background: " rgb(240,220,78)",
    background:
      "linear-gradient(90deg, rgba(240,220,78,1) 12%, rgba(45,121,199,1) 100%)",
  },
  {
    title: "REACT.18 && NEXT.13",
    color: "#18F0E8",
    background: "rgb(0,216,255)",
    background:
      "linear-gradient(90deg, rgba(0,216,255,1) 37%, rgba(255,255,255,1) 100%)",
  },
  {
    title: "NODE && EXPRESS",
    color: "#56A444",
  },
  {
    title: "MONGODB && MONGOOSE",
    color: "#4682B4",
  },
  {
    title: "PRISMA && ZOD",
    color: "#4682B4",
  },
  {
    title: "TAILWIND && MUI",
    color: "#16BECB",
  },
  {
    title: "FIREBASE && NEXT-AUTH ",
    color: "#FCCA3F",
  },
  {
    title: "GIT && GITHUB",
    color: "#F05030",
  },

  {
    title: "REACT:FORM QUERY EMAIL",
    color: "#91F018",
  },
  {
    title: "REDUX && ZUSTAND",
    color: "gray",
  },
];
const words = ["MY SKILLS"];

export default function Skills() {
  const elementRefs = useRef([]);

  const manageMouseEnter = (e, index) => {
    const topValue = window.innerWidth <= 480 ? "-5vw" : "-2vw";
    gsap.to(e.target, {
      top: topValue,
      backgroundColor: projects[index].color,
      background: projects[index].background,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "white",
      background: "white",
      duration: 0.3,
      delay: 0.1,
    });
  };
  const handleMouseEnter = (index) => (e) => {
    manageMouseEnter(e, index);
  };

  const handleMouseLeave = (index) => (e) => {
    manageMouseLeave(e, index);
  };
  useEffect(() => {
    // Add an event listener for window resize
    const handleResize = () => {
      // Rerun the animation with the updated top value when the window is resized
      elementRefs.current.forEach((el, index) => {
        if (el) {
          const topValue = window.innerWidth <= 480 ? "-5vw" : "-2vw";
          gsap.to(el, {
            top: topValue,
            duration: 0.3,
          });
        }
      });
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <FramerAnimation words={words} />

      <div className={styles.container}>
        <div className={styles.projectContainer}>
          {projects.map((project, index) => {
            return (
              <div
                ref={(el) => (elementRefs.current[index] = el)}
                onMouseEnter={handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave(index)}
                onTouchStart={handleMouseEnter(index)}
                onTouchEnd={handleMouseLeave(index)}
                key={index}
              >
                <p>{project.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
