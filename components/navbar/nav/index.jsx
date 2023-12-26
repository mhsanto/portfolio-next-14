import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import NavLinks from "./Link";
import Curve from "./curve";
import Footer from "./footer/index";
import Link from "next/link";

const navItems = [
  {
    title: "HOME",
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
            <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWPGKjwgXlHFBlZxTdnPMSFBVNRDSqbrZFRXmqxhRGWkKFFffBcDFCnBDCqJLvtXQxVcg" target="_blank">
              santomh27@gmail.com
            </Link>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLinks
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></NavLinks>
            );
          })}
        </div>

        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
