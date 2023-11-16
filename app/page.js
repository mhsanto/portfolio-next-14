import styles from "./styles.module.scss";
import Link from "next/link";
import FramerAnimation from "@/components/FramerAnimation";
import {LinkedinIcon}from "lucide-react"
import HomeText from "../components/Home/Home";
const words = [
  "FRONTEND DEVELOPER",
  "JAVASCRIPT",
  "REACT",
  "NEXT 13",
  "NEXT-AUTH",
  "PRISMA",
  "NODE",
  "TAILWIND",
  "MATERIAL-UI",
  "FIREBASE-FIRESTORE",
  "EXPRESS",
  "MONGODB",
  "TYPESCRIPT",
];
export default function Home() {
  return (
    <main className={styles.main}>
      {/* <FramerAnimation words={words} /> */}
      <header className={styles.header}>
        <div className={styles.connect}>
          <span>Let's Connect </span>
          <Link href="https://www.linkedin.com/in/mh-santo/" target="_blank">
            <LinkedinIcon size={30} />
          </Link>
        </div>
      </header>

      <HomeText />
    </main>
  );
}
