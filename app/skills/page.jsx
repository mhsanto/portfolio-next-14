"use client";
import FramerAnimation from "@/components/FramerAnimation";
import styles from "./styles.module.scss";
import gsap from "gsap";

const projects = [
  {
    title: "HTML5 && CSS3",
    color: "#F06318",
    background: "rgb(240,99,24)",
    background:
      "linear-gradient(90deg, rgba(240,99,24,1) 22%, rgba(33,76,229,1) 100%)",
  },
  {
    title: "JAVASCRIPT &&TYPESCRIPT",
    color: "#f0dc4e",
    background: " rgb(240,220,78)",
    background:
      "linear-gradient(90deg, rgba(240,220,78,1) 12%, rgba(45,121,199,1) 100%)",
  },
  {
    title: "REACT && NEXT.13",
    color: "#18F0E8",
    background: "rgb(0,216,255)",
    background:
      "linear-gradient(90deg, rgba(0,216,255,1) 37%, rgba(255,255,255,1) 100%)",
  },
  {
    title: "NODE.JS && EXPRESS.JS",
    color: "#56A444",
  },
  {
    title: "MONGODB && PRISMA && MONGOOSE",
    color: "#123B51",
  },
  {
    title: "BOOTSTRAP.5 && TAILWIND && MUI",
    color: "#16BECB",
  },
  {
    title: "FIREBASE && NEXT-AUTH ",
    color: "#FCCA3F",
  },
  {
    title: "GIT && GITHUB",
    color: "#F05030",
  },

  {
    title: " REACT=>FORM,QUERY,REDUX",
    color: "#91F018",
  },
];
const words = ["MY SKILLS"];


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
      backgroundColor: "white",
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
                onTouchStart={(e) => {
                  manageMouseEnter(e, index);
                }}
                onTouchEnd={(e) => {
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
