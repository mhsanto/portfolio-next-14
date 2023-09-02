"use client"
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "../Loader";

const FramerAnimation = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
      }, 2300);
    }, []);
  return (
    <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
  );
};

export default FramerAnimation;
