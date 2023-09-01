'use client'
import { AnimatePresence,motion } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";
const PageWrapper = ({ children }) => {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>{children}</motion.div>
      <motion.div
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration:10, ease: [0.22, 1, 0.36, 1] }}
          >
          </motion.div>
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 2.3, ease: [0.22, 1, 0.36, 1] }}
          >
          </motion.div>
    </AnimatePresence>
    
  );
};

export default PageWrapper;
