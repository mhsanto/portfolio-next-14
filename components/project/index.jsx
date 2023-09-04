"use client";
import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

export default function index({ index, title, href, setModal }) {
  return (
    <Link href={href} target="_black" onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}>

     
        <h2> {title}</h2>
        <p>Design & Development</p>
 
    </Link>
  );
}
