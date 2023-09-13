import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./curve";
import Footer from "./footer/index";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "ABOUT",
    href: "/about",
  },
  {
    title: "PROJECTS",
    href: "/projects",
  },
  {
    title: "SKILLS",
    href: "/skills",
  },
  {
    title: "CONTACT ME",
    href: "/footer",
  },
];

export default function index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>
         
            santomh27@gmail.com
            </p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>

        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
