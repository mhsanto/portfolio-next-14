"use client";
import React, { useEffect } from "react";
import "./styles.css";
import {
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsMailbox,
  BsPhone,
} from "react-icons/bs";
import Link from "next/link";
const socials = [
  {
    name: "Git",
    nameTwo: "hub",
    icon: <BsGithub />,
    href: "https://github.com/mhsanto",
  },
  {
    name: "Link",
    nameTwo: "edIn",
    icon: <BsLinkedin />,
    href: "https://www.linkedin.com/in/mh-santo/",
  },
  {
    name: "Face",
    nameTwo: "book",
    icon: <BsFacebook />,
    href: "https://www.facebook.com/mhsanto072",
  },
  {
    name: "Insta",
    nameTwo: "gram",
    icon: <BsInstagram />,
    href: "https://www.instagram.com/direct/t/119904386064127",
  },
  {
    name: "santomh27",
    nameTwo: "@gmail.com",
    icon: <BsMailbox />,
    href: "",
  },
  {
    name: "+8801969",
    nameTwo: "528025",
    icon: <BsPhone />,
    href: "",
  },
];

const AnimatingSocialLinks = () => {
  useEffect(() => {
    // Function to get a random character
    function getRandomCharacter() {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return chars[Math.floor(Math.random() * chars.length)];
    }

    // Function to perform the shuffle animation
    function shuffleAnimation(event) {
      const target = event.currentTarget;
      if (target.dataset.animating) {
        return;
      }
      target.dataset.animating = true;
      const words = target.querySelectorAll(".word");
      const originalWords = Array.from(words).map((word) => word.textContent);

      let shuffles = 0;
      const maxShuffles = 10;
      const intervalDuration = 700 / maxShuffles;
      let animationInterval = setInterval(() => {
        if (shuffles >= maxShuffles) {
          clearInterval(animationInterval);
          words.forEach((word, index) => {
            word.textContent = originalWords[index];
          });
          delete target.dataset.animating;
        } else {
          words.forEach((word) => {
            const length = word.textContent.length;
            let shuffledText = "";
            for (let i = 0; i < length; i++) {
              shuffledText += getRandomCharacter();
            }
            word.textContent = shuffledText;
          });
          shuffles++;
        }
      }, intervalDuration);
    }

    // Attach event listeners to elements with the 'item' class
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
      item.addEventListener("mouseenter", shuffleAnimation);
    });

    // Remove event listeners when the component unmounts
    return () => {
      items.forEach((item) => {
        item.removeEventListener("mouseenter", shuffleAnimation);
      });
    };
  }, []);
  return (
    <div>
      <div className="container">
        {socials.map((social, i) => (
          <Link href={social.href} target="_blank">
            <div className="item item-1" key={i}>
              <div className="word w1">{social.name} </div>
              <div className="img">{social.icon}</div>
              <div className="word w2">{social.nameTwo} </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimatingSocialLinks;
