"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePostion";
import FramerAnimation from "@/components/FramerAnimation";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
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
            style={{
              paddingTop: "3rem", // default padding
              "@media (max-width: 480px)": {
                paddingTop: "3rem",
              },
            }}
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
            className={bebas.className}
          >
            When I'm not creating or exploring new web experiences, I'm probably
            watching anime or hanging out  with my friends. I love the challenge of
            solving problems with code, and there's nothing more satisfying than
            seeing lines of code come to life as something real and
            useful. I’m quickly
            adaptable and well-organized, able to work independently or
            collaboratively with a team. I am always looking for new
            opportunities to learn and grow.
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
            className={bebas.className}
          >
            "Treat others how you would like to be treated."
          </motion.p>
        </motion.div>

        <div className={styles.body}>
          <motion.p
            initial="initial"
            animate="animate"
            className={bebas.className}
          >
            I'm <span>Mahmodul Hasan Santo</span> a{" "}
            <span>Fullstack developer</span> who loves creating interactive and
            responsive websites that delight users and drive business results.I
            have built websites for clients in various industries, using
            technologies such as HTML, CSS, JavaScript, React, Next.js, Node,
            Express ,Mongodb,Prisma and so on. My long-term objective is to work
            as a senior full-stack developer and expand my skills and knowledge
            in web development.
          </motion.p>

          <motion.p
            initial="initial"
            animate="animate"
            className={bebas.className}
          >
            In life i try to follow to the golden rule
          </motion.p>
        </div>
      </main>
    </>
  );
}
