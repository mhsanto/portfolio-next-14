"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePostion";
import FramerAnimation from "@/components/FramerAnimation";
import Image from "next/image";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  const words = ["ABOUT ME"];


  return (
    <>
      <FramerAnimation words={words} />
      <main className={styles.main}>
 
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <motion.p
            initial="initial"
            animate="animate"
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            Eager to
            quickly become knowledgeable about the newest software and web
            technologies. Able to perform successfully both alone and in teams.
           ( Not sure about this one.)
          </motion.p>
        </motion.div>

        <div className={styles.body}>
          <motion.p initial="initial" animate="animate" >
            I'm <span>Mahmodul Hasan Santo</span> a{" "}
            <span>Frontend Web Developer</span> that creates interactive
            responsive websites.Quickly adaptable and well-organized.I'm a full
            stack engineer on the route to becoming one.
          </motion.p>
        </div>
      </main>
    </>
  );
}
