"use client";
import styles from "./styles.module.scss";
import LinkedinImage from "../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";
import FramerAnimation from "@/components/FramerAnimation";
import { inView, useInView, motion } from "framer-motion";
import {  useRef } from "react";
import TextAnimation from "@/components/TextAnimation";
const words = [
  "FRONTEND DEVELOPER",
  "WEB DESIGNER",
  "REACT",
  "NEXT 13",
  "NEXTAUTH",
  "PRISMA",
  "NODE",
  "TAILWIND",
  "MATERIAL UI",
  "FIREBASE",
  "EXPRESS",
  "MONGODB",
  "TYPESCRIPT",
];
export default function Home() {
  const body = useRef(null);
  const isInView = useInView(body, {
    once: true,
    margin: "-20%",
  });
  const animate = {
    initial: { y: "140%" },
    open: { y: "0%", transition: { duration: 1.5 } },
  };


  return (
    <main className={styles.main}>
      {/* <FramerAnimation words={words} /> */}
      <header className={styles.header}>
        {/* <div className={styles.logo}> */}
        {/* <Image src={logo} height={50} width={200}alt="MAHMODUL HASAN"/> */}
        {/* <Link href="/">MH</Link> */}
        {/* </div> */}

        <div className={styles.connect}>
        
          <span>Let's Connect </span>
          <Link href="https://www.linkedin.com/in/mh-santo/" target="_blank">
        
            <Image
              className="linkedin"
              src={LinkedinImage}
              height={25}
              width={25}
              alt="linkedin Logo"
            />
          </Link>
        </div>
      </header>
      {/* <div className={styles.hero}>
        <Image src="/photos/my.webp" width={200} height={150} alt="my image" />
        <div ref={body} style={{ overflow: "hidden" }}>
          <motion.h2
            className={styles.headerTwo}
            variants={animate}
            initial="initial"
            animate={isInView ? "open" : ""}
          >
            MAHMODUL Hasan Santo
          </motion.h2>
        </div>

        <div ref={body} style={{ overflow: "hidden" }}>
          <motion.h2
            className={styles.headerOne}
            variants={animate}
            initial="initial"
            animate={isInView ? "open" : ""}
          >
            Frontend-WEB-DEVELOPER
          </motion.h2>
        </div>
      </div> */}

     <TextAnimation/>
    </main>
  );
}
