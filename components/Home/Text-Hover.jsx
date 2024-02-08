"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const TextHover = () => {
  const [scale, setScale] = useState(1); // state for the scale of the spans
  const textContainers = useRef([]); // ref for the text containers
  const defaultScale = 1; // default scale value
  const maxScale = 2; // maximum scale value
  const neighborScale = 1.5; // scale value for the neighboring spans

  // function to handle the mouse move event
  const handleMouseMove = (e) => {
    const target = e.target; // the span element that is hovered
    const textContainer = e.currentTarget; // the text container element that contains the span
    const spans = textContainer.querySelectorAll("span"); // the span elements in the text container
    const index = Array.from(spans).indexOf(target); // the index of the span element that is hovered
    // loop through the span elements and update their scale based on their index
    spans.forEach((span, i) => {
      let newScale = defaultScale; // the new scale value for the span element
      if (i === index) {
        // if the span element is the one that is hovered, set the new scale to the maximum value
        newScale = maxScale;
      } else if (i === index - 1 || i === index + 1) {
        // if the span element is adjacent to the one that is hovered, set the new scale to the neighbor value
        newScale = neighborScale;
      }
      span.style.transform = `scaleY(${newScale})`; // apply the new scale value to the span element
    });
  };

  // function to handle the mouse leave event
  const handleMouseLeave = (e) => {
    const textContainer = e.currentTarget; // the text container element that the mouse leaves
    const spans = textContainer.querySelectorAll("span"); // the span elements in the text container
    // loop through the span elements and reset their scale to the default value
    spans.forEach((span) => {
      span.style.transform = `scaleY(${defaultScale})`;
    });
  };

  // effect to add the event listeners to the text containers
  useEffect(() => {
    // loop through the text containers and add the mouse move and mouse leave event listeners
    textContainers?.current.forEach((textContainer) => {
      textContainer?.addEventListener("mousemove", handleMouseMove);
      textContainer?.addEventListener("mouseleave", handleMouseLeave);
    });
    // return a cleanup function to remove the event listeners
    return () => {
      // loop through the text containers and remove the mouse move and mouse leave event listeners
      textContainers.current.forEach((textContainer) => {
        textContainer?.removeEventListener("mousemove", handleMouseMove);
        textContainer?.removeEventListener("mouseleave", handleMouseLeave);
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
