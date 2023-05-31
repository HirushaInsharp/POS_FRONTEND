import React from "react";
import styles from "./index.module.css";

const DashboardSingleCard = ({ name, amount, icon }) => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div>{icon}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.amount}>{amount}</div>
      </div>
    </>
  );
};

export default DashboardSingleCard;
