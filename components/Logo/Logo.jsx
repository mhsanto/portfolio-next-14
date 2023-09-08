import React from "react";
import styles from "./styles.module.scss"
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <p className={styles.copyright}>mh</p>
      <div className={styles.name}>
        <p className={styles.codeBy}>MAHMODUL</p>
        <p className={styles.dennis}>HASAN</p>
        <p className={styles.snellenberg}>SANTO</p>
    </div>
      </Link >
  );
};

export default Logo;
