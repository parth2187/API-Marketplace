import React from "react";
import Card from "../../components/CardComponent/Card";
import Banner from "../../components/Banner/Banner";
import styles from "./DashboardPage.module.scss";
import data from "../../utils/data";

const DashboardPage = () => {
  const dataList = data.map((d) => (
    <Card
      key={d.title}
      title={d.title}
      img={d.img}
      description={d.description}
    />
  ));
  return (
    <>
      <Banner />
      <div className={styles.container}>
        <h3>Your uploaded APIs</h3>
        <div className={styles.cards}>{dataList}</div>
      </div>
    </>
  );
};

export default DashboardPage;
