import React from "react";
import Magnet from "../MakeThingsMagnet";
import styles from "./styles.module.scss";
import Link from "next/link";
const RoundedButton = () => {
  return (
    <Magnet>
      <Link
        href="https://www.facebook.com/messages/t/100004883266236"
        target="_blank"
        className={styles.button}
      >
        Message
      </Link>
    </Magnet>
  );
};

export default RoundedButton;
