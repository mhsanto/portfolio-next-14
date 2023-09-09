import Image from "next/image";
import styles from "./style.module.scss";
import RoundedButton from "@/components/RoundedButton";
const Footer = async () => {
  // https://api.quotable.io/random/?tags=technology,famous-quotes

  const getData = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random/", {
        cache: "force-cache",
      });
      if (!res.ok) {
        throw new Error("something went wrong");
      }

      return await res.json();
    } catch (error) {
      console.log(error.message);
    }
  };
  const data = await getData();
  return (
    <div className={styles.hire}>
      <div className={styles.quote}>
        <p>❝{data?.content}❞</p>
        <p>〞{data?.author}  〟</p>
      </div>
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
            Hireme <span>or</span> <br />
            Let's work together
          </h1>
        </div>
        <div>
         <RoundedButton/>
        </div>
      </div>
    </div>
  );
};

export default Footer;


        