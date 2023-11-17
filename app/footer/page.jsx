import Image from "next/image";
import styles from "./style.module.scss";
import RoundedButton from "@/components/RoundedButton";

import AnimatingSocialLinks from "@/components/AnimatingSocialLinks";
import FramerAnimation from "@/components/FramerAnimation";
import Quotes from "./components/Quotes";
import { Suspense } from "react";

const Footer = async () => {
  const words = ["HIRE ME"];
  return (
    <>
      <FramerAnimation words={words} />

      <div className={styles.hire}>
        <Suspense fallback={<div>Loading...</div>}>
          <Quotes styles={styles} />
        </Suspense>

        <div className={styles.between}>
          <div className={styles.flexbox}>
            <div className={styles.image}>
              <Image
                src="/photos/my.webp"
                height={130}
                width={90}
                alt="Mahmodul Hasan"
                className={styles.my_image}
              />
              <h1>
                Have A Project? <span>or</span> <br />
                Let's work together.
              </h1>
            </div>
            <div>
              <RoundedButton />
            </div>
          </div>
          <AnimatingSocialLinks />
          <div className={styles.footer}>
            <p>
              {" "}
              &copy;{new Date().getFullYear()} Mahmodul Hasan Santo.All Rights
              Reserved{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
