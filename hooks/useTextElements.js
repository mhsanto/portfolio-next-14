"use client"
import { useEffect } from 'react';

function createTextElements() {
  const elements = document.querySelectorAll(".text");
  elements.forEach((element) => {
    const innerText = element.innerText;
    element.innerHTML = "";
    const textContainer = document.createElement("div");
    textContainer.classList.add("block");
    for (const letter of innerText) {
      const span = document.createElement("span");
      span.innerText = letter.trim() === "" ? "\u00A0" : letter;
      span.classList.add("letter");
      textContainer.appendChild(span);
    }
    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
  });

  elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.classList.remove("play");
    });
  });
}

function useTextElements() {
  useEffect(() => {
    createTextElements();
  }, []); // Empty dependency array to run this effect once after the initial render
}

export default useTextElements;