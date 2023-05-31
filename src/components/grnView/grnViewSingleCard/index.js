import React from "react";
import styles from "./index.module.css";

const GRNViewSingleCard = ({ grnNo, option, supName, date }) => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.OneDetail}>
          <p>GRN NO : </p>
          <p>{grnNo} </p>
        </div>
        <div className={styles.OneDetail}>
          <p>Option</p>
          <p>{option} </p>
        </div>
        <div className={styles.OneDetail}>
          <p>SUP.Name</p>
          <p>{supName} </p>
        </div>
        <div className={styles.OneDetail}>
          <p>Date</p>
          <p>{date} </p>
        </div>
      </div>
    </>
  );
};

export default GRNViewSingleCard;
