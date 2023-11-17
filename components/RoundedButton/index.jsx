"use client";
import React, { forwardRef, useRef } from "react";

import styles from "./styles.module.scss";
import StickyCursor from "../stickyCursor";
const RoundedButton = () => {
  const stickyElement = useRef(null);
  return (
    <>
      <Button ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
    </>
  );
};
const Button = forwardRef((props, ref) => {
  return (
    <button ref={ref} className={styles.button}>
      <span className={styles.button__text}>Message Me</span>
    </button>
  );
});
export default RoundedButton;
