import Card from "../../components/CardComponent/Card";
import styles from "./MarketPlace.module.scss";
import data from "../../utils/data";
import Banner from "../../components/Banner/Banner";
import React from "react";

const MarketPlace = () => {
  const dataList = data.map((d) => (
    <Card
      key={d.title}
      title={d.title}
      img={d.img}
      description={d.description}
    />
  ));

  return (
    <div>
      <Banner />
      <div className={styles.container}>
        <h3>All APIs </h3>
        <div className={styles.cards}>{dataList}</div>
      </div>
    </div>
  );
};

export default MarketPlace;
