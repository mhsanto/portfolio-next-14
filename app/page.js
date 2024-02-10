"use client"
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import FramerAnimation from "@/components/FramerAnimation";
import { LinkedinIcon } from "lucide-react";
import HomeText from "../components/Home/Home";
import TextHover from "@/components/Home/text-hover";

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
  useEffect(() => {
    const canvas = document.querySelector("#" + styles.canvas);
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = "#BADA55";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 60;
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    
    function draw(e) {
      if (!isDrawing) return;
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      lastX = e.clientX;
      lastY = e.clientY;
      hue++;
      if (hue >= 360) {
        hue = 0;
      }
    }

    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function handleMouseDown(e) {
      isDrawing = true;
      lastX = e.clientX;
      lastY = e.clientY;
    }

    function handleMouseUp() {
      isDrawing = false;
      clearCanvas();
    }

    function handleMouseOut() {
      isDrawing = false;
    }

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseout", handleMouseOut);

    // Cleanup event listeners when the component unmounts
    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <main className={styles.main}>
      <FramerAnimation words={words} />

      <header className={styles.header}>
        <div className={styles.connect}>
          <span>Let's Connect </span>
          <Link href="https://www.linkedin.com/in/mh-santo/" target="_blank">
            <LinkedinIcon size={30} />
          </Link>
        </div>
      </header>

      <HomeText />

      <TextHover />

      {/* Canvas element */}
      <canvas id={styles.canvas}></canvas>
    </main>
  );
}
