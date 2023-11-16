import Image from "next/image";
import styles from "./style.module.scss";
import RoundedButton from "@/components/RoundedButton";

import AnimatingSocialLinks from "@/components/AnimatingSocialLinks";
import FramerAnimation from "@/components/FramerAnimation";
import { unstable_noStore as noStore } from "next/cache";
const Footer = async () => {
  // noStore()
  const res = await fetch("https://api.quotable.io/random/").then((res) =>
    res.json()
  );
  if (!res.ok) {
    console.error("something went wrong");
  }

  const words = ["HIRE ME"];
  return (
    <>
      {/* <FramerAnimation words={words} /> */}

      <div className={styles.hire}>
        <div className={styles.quote}>
          <p>❝{res?.content}❞</p>
          <p>〞{res?.author} 〟</p>
        </div>
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
         
          <AnimatingSocialLinks  />
          <div className={styles.footer}>
            <span>
              &copy; {new Date().getFullYear()} Mahmodul Hasan Santo.All Rights
              Reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
