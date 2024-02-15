"use client";
import FramerAnimation from "@/components/FramerAnimation";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useEffect, useRef, } from "react";
import useDevicewidth from "../../hooks/useDevicewidth";
import { projects } from "./datas";

const words = ["MY SKILLS"];

export default function Skills() {
  const elementRefs = useRef([]);
  const isMobileWidth = useDevicewidth(480);

  const manageHoverStyles = (el, index, isHovered) => {
    const topValue = isHovered ? (isMobileWidth ? "-2vw" : "-5vw") : "0";
    const backgroundColor = isHovered ? projects[index].color : "white";
    const background = isHovered ? projects[index].background : "white";

    gsap.to(el, {
      top: topValue,
      backgroundColor,
      background,
      duration: 0.3,
    });
  };

  const handleMouseEnter = (index) => (e) => {
    manageHoverStyles(e.target, index, true);
  };

  const handleMouseLeave = (index) => (e) => {
    manageHoverStyles(e.target, index, false);
  };

  const handleTouchStart = (index) => (e) => {
    e.preventDefault();
    manageHoverStyles(elementRefs.current[index], index, true);
  };

  const handleTouchMove = (index) => (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);

    if (elementRefs.current[index] === target) {
      manageHoverStyles(elementRefs.current[index], index, true);
    } else {
      manageHoverStyles(elementRefs.current[index], index, false);
    }
  };

  const handleTouchEnd = (index) => (e) => {
    e.preventDefault();
    manageHoverStyles(elementRefs.current[index], index, false);
  };

  useEffect(() => {
    const handleResize = () => {
      elementRefs.current.forEach((el, index) => {
        if (el) {
          const topValue = isMobileWidth ? "-2vw" : "-5vw";
          gsap.to(el, {
            top: topValue,
            duration: 0.3,
          });
        }
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isMobileWidth]);


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
                key={index}
              >
                <p>{project.title}</p>
              </div>
            );
          })
          }
        </div>
      </div>
    </>
  );
}
