import { useEffect } from "react";

const useTextAnimation = () => {
  useEffect(() => {
    const handleMouseOver = (element) => {
      element.classList.remove("play");
    };

    document.querySelectorAll(".text").forEach((element) => {
      const innerText = element.innerText;
      element.innerHTML = "";

      const textContainer = document.createElement("div");
      textContainer.classList.add("block");

      innerText.split("").forEach((letter) => {
        const span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
      });

      element.appendChild(textContainer);
      element.appendChild(textContainer.cloneNode(true));

      element.addEventListener("mouseover", () => handleMouseOver(element));
    });
    
  }, []); // Empty dependency array to run the effect once on mount

  // If you need to expose any values or functions, you can return them here
};

export default useTextAnimation;
