"use client";
import React, { useRef, useEffect } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const TextHover = () => {
  const textContainers = useRef([]);
  const defaultScale = 1;
  const maxScale = 2;
  const neighborScale = 1.5;

  const handleMove = (index, spans, newScale) => {
    spans.forEach((span, i) => {
      span.style.transform = `scaleY(${
        i === index
          ? maxScale
          : i === index - 1 || i === index + 1
          ? neighborScale
          : newScale
      })`;
    });
  };

  const handleMouseMove = (e) => {
    const target = e.target;
    const textContainer = e.currentTarget;
    const spans = textContainer.querySelectorAll("span");
    const index = Array.from(spans).indexOf(target);
    handleMove(index, spans, defaultScale);
  };

  const handleTouchMove = (e) => {
    e.preventDefault(); // Prevent scrolling while swiping
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    const textContainer = e.currentTarget;
    const spans = textContainer.querySelectorAll("span");
    const index = Array.from(spans).indexOf(target);
    handleMove(index, spans, defaultScale);
  };

  const handleMouseLeave = (e) => {
    const textContainer = e.currentTarget;
    const spans = textContainer.querySelectorAll("span");
    spans.forEach((span) => {
      span.style.transform = `scaleY(${defaultScale})`;
    });
  };

  useEffect(() => {
    textContainers?.current.forEach((textContainer) => {
      textContainer?.addEventListener("mousemove", handleMouseMove);
      textContainer?.addEventListener("mouseleave", handleMouseLeave);
      textContainer?.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      textContainer?.addEventListener("touchend", handleMouseLeave);
    });

    return () => {
      textContainers.current.forEach((textContainer) => {
        textContainer?.removeEventListener("mousemove", handleMouseMove);
        textContainer?.removeEventListener("mouseleave", handleMouseLeave);
        textContainer?.removeEventListener("touchmove", handleTouchMove);
        textContainer?.removeEventListener("touchend", handleMouseLeave);
      });
    };
  }, []); // run the effect only once when the component mounts

  // render the component
  return (
    <div className={styles.container}>
      <Link
        href="https://github.com/mhsanto"
        target="_blank"
        className={styles.word}
        ref={(el) => (textContainers.current[0] = el)}
      >
        <span>G</span>
        <span>I</span>
        <span>T</span>
        <span>H</span>
        <span>U</span>
        <span>B</span>
      </Link>
      <Link
        href="https://www.facebook.com/mhsanto072"
        target="_blank"
        className={styles.word}
        ref={(el) => (textContainers.current[1] = el)}
      >
        <span>F</span>
        <span>A</span>
        <span>C</span>
        <span>E</span>
        <span>B</span>
        <span>O</span>
        <span>O</span>
        <span>K</span>
      </Link>
      <Link
        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWPGKjwgXlHFBlZxTdnPMSFBVNRDSqbrZFRXmqxhRGWkKFFffBcDFCnBDCqJLvtXQxVcg"
        target="_blank"
        className={styles.word}
        ref={(el) => (textContainers.current[2] = el)}
      >
        <span>E</span>
        <span>M</span>
        <span>A</span>
        <span>I</span>
        <span>L</span>
      </Link>
    </div>
  );
};

export default TextHover;
