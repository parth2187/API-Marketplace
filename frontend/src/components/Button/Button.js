import React from "react";
import styles from "./Button.module.scss";

const Button = ({ text }) => {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  );
};

export default Button;
