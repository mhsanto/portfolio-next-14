import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";
const Footer = () => {
  return (
    <div className={styles.hire}>
      <div className={styles.image}>
        <Image
          src="/photos/my.jpg"
          height={130}
          width={90}
          alt="Mahmodul Hasan"
          className={styles.my_image}
        />
      </div>
      <h1>Hireme or Let's work together</h1>
    </div>
  );
};

export default Footer;
