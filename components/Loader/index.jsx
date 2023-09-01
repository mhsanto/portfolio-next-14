"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { slideUp ,opacity} from "./anim";

const Loader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  const words = [
    "FRONTEND DEVELOPER",
    "WEB DESIGNER",
    "REACT",
    "NEXT 13",
    'NEXTAUTH',
    "PRISMA",
    "NODE",
    "TAILWIND",
    "MATERIAL UI",
    "FIREBASE",
    "EXPRESS",
    "MONGODB",
    "TYPESCRIPT",
  ];

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 500 : 150
    );
  }, [index]);
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
   
    >
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter" >
        
            {words[index]}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Loader;
