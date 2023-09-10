"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "../Loader";

const FramerAnimation = ({ words }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, words.length === 1 ? 1000 : 2300);
  }, []);
  return (
    <AnimatePresence mode="wait">
      {isLoading && <Loader words={words} />}
    </AnimatePresence>
  );
};

export default FramerAnimation;
