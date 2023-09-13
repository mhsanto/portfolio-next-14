import React from "react";
import Magnet from "../MakeThingsMagnet";
import styles from "./styles.module.scss";
const RoundedButton = () => {
  return (
    <Magnet>
      <button className={styles.button}>Message Me</button>
    </Magnet>
  );
};

export default RoundedButton;
