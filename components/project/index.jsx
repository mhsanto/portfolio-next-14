"use client";
import styles from "./style.module.scss";
import Link from "next/link";

export default function index({ index, title, href, setModal, tech }) {
  return (
    <Link
      href={href}
      target="_black"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      onTouchStart={() => {
        setModal({ active: true, index });
      }}
      onTouchEnd={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2> {title}</h2>
      <p>{tech}</p>
    </Link>
  );
}
