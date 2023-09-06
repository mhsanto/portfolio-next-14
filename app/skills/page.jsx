"use client";
import FramerAnimation from "@/components/FramerAnimation";
import styles from "./styles.module.scss";
import gsap from "gsap";

const projects = [
  {
    title: "HTML5 & CSS3",
    color: "#F06318",
  },
  {
    title: "JAVASCRIPT & TYPESCRIPT",
    color: "#f0dc4e",
    background: " rgb(240,220,78)",
    background:
      "linear-gradient(90deg, rgba(240,220,78,1) 12%, rgba(45,121,199,1) 100%)",
  },
  {
    title: "REACT & NEXT.13",
    color: "#18F0E8",
  },
  {
    title: "NODE.JS & EXPRESS.JS",
    color: "#8C0CF0",
  },
  {
    title: "MONGODB & PRISMA & MONGOOSE",
    color: "#F0183C",
  },
  {
    title: "BOOTSTRAP.5 & TAILWIND & MUI",
    color: "#F0BA18",
  },
  {
    title: "GIT & GITHUB",
    color: "#0C34F0",
  },
  {
    title: "FIREBASE & FIRESTORE",
    color: "#0CBCF0",
  },
  {
    title: " PHOTOSHOP & FIGMA & ILLUSTRATOR",
    color: "#91F018",
  },
];
const words = ["MY SKILLS"];
//https://anacuna.com/

export default function Skills() {
  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {
      top: "-2vw",
      backgroundColor: projects[index].color,
      background: projects[index].background,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {
      top: "0",
      background: "white",
      duration: 0.3,
      delay: 0.1,
    });
  };

  return (
    <>
      <FramerAnimation words={words} />

      <div className={styles.container}>
        <div className={styles.projectContainer}>
          {projects.map((project, index) => {
            return (
              <div
                onMouseEnter={(e) => {
                  manageMouseEnter(e, index);
                }}
                onMouseLeave={(e) => {
                  manageMouseLeave(e, index);
                }}
                key={index}
              >
                <p>{project.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
