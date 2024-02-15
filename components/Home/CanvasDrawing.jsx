"use client";
import React, { useEffect } from "react";
import styles from "./style.module.scss";
import useDeviceWidth from "@/hooks/useDevicewidth";

const CanvasDrawing = () => {
  const isMobileWidth = useDeviceWidth(480);
  useEffect(() => {
    const canvas = document.querySelector("#" + styles.canvas);
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = "#BADA55";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = isMobileWidth ? 60 : 30;
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;

    function draw(e) {
      if (!isDrawing) return;
      const x = e.clientX || e.touches[0].clientX;
      const y = e.clientY || e.touches[0].clientY;

      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      lastX = x;
      lastY = y;
      hue++;
      if (hue >= 360) {
        hue = 0;
      }
    }

    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function handleStart(e) {
      isDrawing = true;
      const x = e.clientX || e.touches[0].clientX;
      const y = e.clientY || e.touches[0].clientY;
      lastX = x;
      lastY = y;
    }

    function handleEnd() {
      isDrawing = false;
      clearCanvas();
    }

    function handleCancel() {
      isDrawing = false;
    }

    canvas.addEventListener("mousedown", handleStart);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", handleEnd);
    canvas.addEventListener("mouseout", handleCancel);

    canvas.addEventListener("touchstart", handleStart);
    canvas.addEventListener("touchmove", draw);
    canvas.addEventListener("touchend", handleEnd);
    canvas.addEventListener("touchcancel", handleCancel);

    // Cleanup event listeners when the component unmounts
    return () => {
      canvas.removeEventListener("mousedown", handleStart);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", handleEnd);
      canvas.removeEventListener("mouseout", handleCancel);

      canvas.removeEventListener("touchstart", handleStart);
      canvas.removeEventListener("touchmove", draw);
      canvas.removeEventListener("touchend", handleEnd);
      canvas.removeEventListener("touchcancel", handleCancel);
    };
  }, []);

  return <canvas id={styles.canvas}></canvas>;
};

export default CanvasDrawing;
