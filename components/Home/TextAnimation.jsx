"use client"
import useTextAnimation from "@/hooks/useTextElements";
import "./style.css";

const TextAnimation = () => {
  useTextAnimation();
  return (
    <div className="container">
      <div className="dis_flex">
        <p className="text">Frontend</p>
      </div>
      {/* Remove the empty <p> element */}
      <div className="dis_flex">
        <div className="text"></div>
      </div>
      <div className="dis_flex">
        <p className="text">Developer</p>
      </div>
    </div>
  );
};

export default TextAnimation;
