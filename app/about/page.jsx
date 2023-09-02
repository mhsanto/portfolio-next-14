"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePostion";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Eager to quickly become knowledgeable about the newest software and
          web technologies.Able to perform successfully both alone and in teams.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          I'm <span>Mahmodul Hasan Santo</span>  a <span>Frontend Web Developer</span> that creates interactive
          responsive websites.Quickly adaptable and well-organized.
        </p>
      </div>
    </main>
  );
}
