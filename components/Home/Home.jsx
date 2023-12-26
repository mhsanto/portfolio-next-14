"use client";
import "./style.css";
import TextAnimation from "./TextAnimation";
import { TweenMax } from "gsap/gsap-core";
import { useEffect, useRef } from "react";
const Home = () => {
  const svgRef = useRef(null);
  const mouse = useRef(svgRef.current?.createSVGPoint());
  const leftEye = useRef(null);
  const rightEye = useRef(null);
  useEffect(() => {
    
    const svg = svgRef.current;
    mouse.current = svg.createSVGPoint();
    leftEye.current = createEye("#left-eye");
    rightEye.current = createEye("#right-eye");

    let requestId = null;

    function onFrame() {
      let point = mouse.current.matrixTransform(svg.getScreenCTM().inverse());
      leftEye.current.rotateTo(point);
      rightEye.current.rotateTo(point);
      requestId = null;
    }

    function onMouseMove(event) {
      // Check if it's a touch event
      if (event.type === "touchmove") {
        // For touch events, use the first touch point
        mouse.current.x = event.touches[0].clientX;
        mouse.current.y = event.touches[0].clientY;
      } else {
        // For mouse events, use clientX and clientY directly
        mouse.current.x = event.clientX;
        mouse.current.y = event.clientY;
      }

      if (!requestId) {
        requestId = requestAnimationFrame(onFrame);
      }
    }

    function createEye(selector) {
      const element = document.querySelector(selector);
      TweenMax.set(element, {
        transformOrigin: "center",
      });
      let bbox = element.getBBox();
      let centerX = bbox.x + bbox.width / 2;
      let centerY = bbox.y + bbox.height / 2;
      function rotateTo(point) {
        let dx = point.x - centerX;
        let dy = point.y - centerY;
        let angle = Math.atan2(dy, dx);
        TweenMax.to(element, 0.3, {
          rotation: angle + "_rad_short",
        });
      }
      return {
        element,
        rotateTo,
      };
    }

    // Add event listeners for both mousemove and touchmove
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <svg ref={svgRef} id="svg" viewBox="0 0 1000 1000 ">
          <g id="left-eye">
            <circle
              className="eye-outer"
              cx="400"
              cy="500"
              r="120"
              stroke="#0f0f0f" // Set the stroke color
              strokeWidth={1} // Set the stroke width
              fill="#fff"
            />
            <circle
              className="eye-outer"
              cx="400"
              cy="500"
              r="90"
              fill="#0f0f0f"
            />

            <circle
              className="eye-inner"
              cx="480"
              cy="500"
              r="15"
              fill="#fff"
            />
          </g>
          <g id="right-eye">
            <circle
              className="eye-outer"
              cx="630"
              cy="500"
              r="120"
              stroke="#0f0f0f" // Set the stroke color
              strokeWidth={1} // Set the stroke width
              fill="#fff"
            />
            <circle
              className="eye-outer"
              cx="630"
              cy="500"
              r="90"
              fill="#0f0f0f"
            />
            <circle
              className="eye-inner"
              cx="700"
              cy="500"
              r="15"
              fill="#fff"
            />
          </g>
        </svg>
       <TextAnimation />
      </div>
    </>
  );
};

export default Home;
