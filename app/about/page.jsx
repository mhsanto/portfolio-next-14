"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePostion";
import FramerAnimation from "@/components/FramerAnimation";

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
            onTouchStart={() => {
              setIsHovered(true);
            }}
            onTouchEnd={() => {
              setIsHovered(false);
            }}
          >
            When I'm not building or exploring new web experiences, I'm probably
            watching animes or playing games.I was a big wrestling fan.Used to
            be a gamer but now just a developer. Web development this shit is
            hard but  I'm doing my best to get better every day.
          </motion.p>
          <motion.p
            initial="initial"
            animate="animate"
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            onTouchStart={() => {
              setIsHovered(true);
            }}
            onTouchEnd={() => {
              setIsHovered(false);
            }}
          >
            If you're tired of starting over, stop giving up
          </motion.p>
        </motion.div>

        <div className={styles.body}>
          <motion.p initial="initial" animate="animate">
            I'm <span>Mahmodul Hasan Santo</span> a{" "}
            <span>Frontend Web Developer</span> that creates interactive
            responsive websites.Quickly adaptable and well-organized. Able to
            perform successfully both alone and in teams. I'm a full stack
            engineer on the route to becoming one.
          </motion.p>

          <motion.p initial="initial" animate="animate">
            My Philosophy is simple
          </motion.p>
        </div>
      </main>
    </>
  );
}
//
