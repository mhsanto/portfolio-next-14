"use client";
import React, { useState } from "react";
import useMightyMouse from "react-hook-mighty-mouse";

import "./eyeStyles.scss";

export default function EyesFollow() {
  const {
    selectedElement: {
      position: { angle: angleRightEye },
    },
  } = useMightyMouse(true, "right-eye", { x: 45, y: 45 });

  const {
    selectedElement: {
      position: { angle: angleLeftEye },
    },
  } = useMightyMouse(true, "left-eye", { x: 45, y: 45 });

  const redEye =
    (angleLeftEye < 30 || (angleLeftEye < 360 && angleLeftEye > 330)) &&
    angleRightEye > 150 &&
    angleRightEye < 210;
  const styleLeftEye = {
    transform: `rotate(${-angleLeftEye}deg)`,
    backgroundColor: redEye ? "#f8c6c6" : "#f3efef",
  };
  const styleRightEye = {
    transform: `rotate(${-angleLeftEye}deg)`,
    backgroundColor: redEye ? "#f8c6c6" : "#f3efef",
  };
  return (
    <div className="eyes-follow-tired">
      <div className="eye-container">
        <div className="eyes">
          <div id="left-eye" className="eye" style={styleLeftEye}>
            <div className="pupil" />
          </div>
          <div id="right-eye" className="eye" style={styleRightEye}>
            <div className="pupil" />
          </div>
        </div>
      </div>
    </div>
  );
}
