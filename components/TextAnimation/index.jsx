"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import "./styles.module.scss";
const banner = {
  animate: {
    transition: {
      delayChildren: 0.01,
      staggerChildren: 0.15,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};
const TextAnimation = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2);
  }, []);
  return (
    <div className={styles.animation}>
      <motion.div className={styles.banner} variants={banner}>
        <div className={styles.something}>
          {/* <div
            style={{
              display: "flex",
              gap: "1rem",
              margin: "1rem 0",

              width: "100vw",
              justifyContent: "center",
              padding: ".1rem 0",
            }}
          >
            <BannerHeader title={"WELCOME"} />
            <BannerHeader title={"TO"} />
            <BannerHeader title={"my"} />
            <BannerHeader title={"portfolio"} />
          </div> */}

          <BannerRowTop title={"Frontend"} />

          <div className={styles.marquee_style}>
            <BannerRowCenter title={"JAVASCRIPT"} playMarquee={playMarquee} />
          </div>
          <BannerRowTop title={"Developer"} />
        </div>

        {/* <div className={styles.flex}>
          <BannerRowBottom title={"Mahmodul"} />
          <BannerRowBottom title={"Hasan"} />
          <BannerRowBottom title={"Santo"} />
        </div> */}
      </motion.div>
    </div>
  );
};
const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className={styles.row_title}
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter) => (
      <motion.span
        className={styles.row_letter}
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);
const BannerRowTop = ({ title }) => {
  return (
    <div className={styles.banner_row}>
      <div className={styles.row_col}>
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};
const BannerHeader = ({ title }) => {
  return (
    <div className={styles.banner_header}>
      <div className={styles.row_col}>
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};
// const BannerRowBottom = ({ title }) => {
//   return (
//     <div className={styles.banner_header}>
//       <AnimatedLetters title={title} />
//     </div>
//   );
// };

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div
      className={`${styles.banner_row} ${styles.marquee}  ${
        playMarquee && `${styles.animate}`
      }`}
    >
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ duration: 5 }}
        className={styles.marquee__inner}
      >
        {/* <AnimatedLetters title={(title = "JAVASCRIPT")} />
        <AnimatedLetters title={(title = "REACT")} />
        <AnimatedLetters title={(title = "NEXT")} /> */}

        <AnimatedLetters title={"JAVASCRIPT"} />
        <AnimatedLetters title={"REACT"} />
        <AnimatedLetters title={"NEXT13"} />
        <AnimatedLetters title={"TAILWIND"} disabled />
        <AnimatedLetters title={"REDUX-TOOLKIT"} disabled />
        <AnimatedLetters title={"NODE"} disabled />
        <AnimatedLetters title={"MONGODB"} disabled />
        <AnimatedLetters title={"PRISMA"} disabled />
        <AnimatedLetters title={"ETC.."} disabled />
      </motion.div>
    </div>
  );
};

export default TextAnimation;
