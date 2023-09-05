"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import Project from "@/components/project";
import Modal from "@/components/modal";
import FramerAnimation from "@/components/FramerAnimation";

const projects = [
  {
    title: `Restaurant Site `,
    src: "restaurant.webp",
    color: "#000000",
    href:"https://santo-react-restaurant.netlify.app/"
  },
  {
    title: "Netflix Clone",
    src: "netflixClone.webp",
    color: "#EFE8D3",
    href:"https://clone-netflix-clone.netlify.app"
  },
  {
    title: "Bootstrap E-Commerce",
    src: "bootstrap.webp",
    color: "#EFE8D3",

    href:"https://mhsanto.github.io/Bootstarp-E-commerce-website/"

  },

  {
    title: "Concept Social Media",
    src: "SocialSite.webp",
    color: "#706D63",
    href:"https://mhsanto.github.io/mySocialMedia/"
  },
];
const words = ["MY PROJECTS"]
export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <FramerAnimation words={words} />

      <main className={styles.main}>
        <div className={styles.body}>
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}

                href={project.href}

                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
    </>
  );
}
