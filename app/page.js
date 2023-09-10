
import styles from "./styles.module.scss";
import LinkedinImage from "../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";
import FramerAnimation from "@/components/FramerAnimation";

const words = [
  "FRONTEND DEVELOPER",
  "WEB DESIGNER",
  "REACT",
  "NEXT 13",
  "NEXTAUTH",
  "PRISMA",
  "NODE",
  "TAILWIND",
  "MATERIAL UI",
  "FIREBASE",
  "EXPRESS",
  "MONGODB",
  "TYPESCRIPT",
];
export default function Home() {
  return (
    <main>
      <FramerAnimation words={words} />
      <header className={styles.header}>
        {/* <div className={styles.logo}> */}
        {/* <Image src={logo} height={50} width={200}alt="MAHMODUL HASAN"/> */}
        {/* <Link href="/">MH</Link> */}
        {/* </div> */}

        <div className={styles.connect}>
          {" "}
          <span>Let's Connect </span>
          <Link href="https://www.linkedin.com/in/mh-santo/" target="_blank">
            {" "}
            <Image
              className="linkedin"
              src={LinkedinImage}
              height={30}
              width={30}
              alt="linkedin Logo"
            />
          </Link>
        </div>
      </header>
 
   
    </main>
  );
}
