import FramerAnimation from "@/components/FramerAnimation";
import styles from "./styles.module.scss";


import Link from "next/link";

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
    <main >
      {/* <FramerAnimation words={words} /> */}

      <header className={styles.header}>
        <div className={styles.logo}>
          {/* <Image src={logo} height={50} width={200}alt="MAHMODUL HASAN"/> */}
          <Link href="/">MH</Link>
        </div>

        <span className={styles.connect}>Let's Connect </span>
      </header>
      <section className={styles.hero}>
        <p>FRONTEND</p>
        <p>DEVELOPER</p>
     <div>
     <span>MAHMODUL HASAN</span>
     </div>
      </section>
    </main>
  );
}
