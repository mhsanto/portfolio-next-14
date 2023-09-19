import Image from "next/image";
import styles from "./style.module.scss";
import RoundedButton from "@/components/RoundedButton";
import Link from "next/link";

import AnimatingSocialLinks from "@/components/AnimatingSocialLinks";
import FramerAnimation from "@/components/FramerAnimation";

const Footer = async () => {
  const getData = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random/", {
        cache: "no-cache",
      });
      if (!res.ok) {
       console.error("something went wrong");
      }

      return await res.json();
    } catch (error) {
      console.log(error.message);
    }
  };
  const data = await getData();
  const words = ["HIRE ME"];
  return (
    <>
      <FramerAnimation words={words} />

      <div className={styles.hire}>
        <div className={styles.quote}>
          <p>❝{data?.content}❞</p>
          <p>〞{data?.author} 〟</p>
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
          <AnimatingSocialLinks />
          <div className={styles.footer}>
            <p>
              {" "}
              &copy;Mahmodul Hasan Santo.All Rights Reserved{" "}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
