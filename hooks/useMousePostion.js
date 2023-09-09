import { useState, useEffect } from "react";

const useMousePosition = () => {

    const [position, setPosition] = useState({ x: null, y: null });
  
    const updatePosition = (e) => {
      if (e.type === "mousemove" || e.type === "touchmove") {
        setPosition({ x: e.clientX || e.touches[0].clientX, y: e.clientY || e.touches[0].clientY });
      }
    };
  
    useEffect(() => {
      window.addEventListener("mousemove", updatePosition);
      window.addEventListener("touchmove", updatePosition);
  
      return () => {
        window.removeEventListener("mousemove", updatePosition);
        window.removeEventListener("touchmove", updatePosition);
      };
    }, []);

  return position;
};

export default useMousePosition;