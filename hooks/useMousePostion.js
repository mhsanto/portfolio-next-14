import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: null, y: null });

  const updatePosition = (e) => {
    if (e.type === "mousemove" || e.type === "touchmove") {
      const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
      const clientY = e.clientY || (e.touches && e.touches[0]?.clientY);
      
      if (clientX !== undefined && clientY !== undefined) {
        setPosition({ x: clientX, y: clientY });
      }
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
