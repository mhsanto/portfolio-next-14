import FramerAnimation from "@/components/FramerAnimation";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
export default function Home() {
  return (
    <main >
      <FramerAnimation />


        <div className={styles.logo}>
          {/* <Image src={logo} height={50} width={200}alt="MAHMODUL HASAN"/> */}
          <Link href="/">Mahmodul</Link>
        </div>

    
 
    </main>
  );
}
