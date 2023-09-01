"use client";
import Loader from "@/components/Loader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 2300);
  }, []);

  return (
    <main className="">
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      <h1>Home</h1>
    </main>
  );
}
