import { Bebas_Neue } from "next/font/google";
import EyesFollow from "./EyesFollow";
import styles from "./style.module.scss";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={bebas.className}>Full Stack Next</h1>
        <EyesFollow />
        <h1 className={bebas.className}> js Developer</h1>
      </div>
    </>
  );
};

export default Home;
