import React from "react";
import styles from "./Card.module.scss";
const Card = ({ img, title, description }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={img} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
