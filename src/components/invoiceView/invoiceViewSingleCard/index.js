import React from "react";
import styles from "./index.module.css";

const InvoiceViewSingleCard = ({ invoiceNo, total, customerName, date }) => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.OneDetail}>
          <p>Invoice NO : </p>
          <p>{invoiceNo} </p>
        </div>
        <div className={styles.OneDetail}>
          <p>Total</p>
          <p>{total} </p>
        </div>
        <div className={styles.OneDetail}>
          <p>Customer Name</p>
          <p>{customerName} </p>
        </div>
        <div className={styles.OneDetail}>
          <p>Date</p>
          <p>{date} </p>
        </div>
      </div>
    </>
  );
};

export default InvoiceViewSingleCard;
