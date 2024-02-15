import Image from "next/image";
import styles from "./style.module.scss";
import RoundedButton from "@/components/RoundedButton";

import AnimatingSocialLinks from "@/components/AnimatingSocialLinks";
import FramerAnimation from "@/components/FramerAnimation";
import Quotes from "./__components/Quotes";
import { Suspense } from "react";
import QuotesSkeleton from "./__components/QuotesSkeleton";
import CanvasDrawing from "@/components/Home/CanvasDrawing";

const Footer = async () => {
  const words = ["HIRE ME"];
  return (
    <>
      {/* <FramerAnimation words={words} /> */}

      <div className={styles.hire}>
        <Suspense fallback={<QuotesSkeleton />}>
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
      
        </div>
        <CanvasDrawing />
      </div>
    </>
  );
};

export default Footer;
