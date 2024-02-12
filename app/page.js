"use client";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import FramerAnimation from "@/components/FramerAnimation";
import { LinkedinIcon } from "lucide-react";
import HomeText from "../components/Home/Home";
import CanvasDrawing from "@/components/Home/CanvasDrawing";
import TextHover from "@/components/Home/TextHover";

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
  return (
    <main className={styles.main}>
      <FramerAnimation words={words} />
      <header className={styles.header}>
        <div className={styles.connect}>
          <span className={styles.spanText}>Let's Connect </span>
          <Link href="https://www.linkedin.com/in/mh-santo/" target="_blank">
            <LinkedinIcon size={20} />
          </Link>
        </div>
      </header>

      <HomeText />

      <TextHover />
      {/* Canvas element */}
      <CanvasDrawing />
    </main>
  );
}
