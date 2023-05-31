import React, { useState } from "react";
import styles from "./index.module.css";
import AddCustomer from "./addCustomer";

const Customer = () => {
  return (
    <>
      <div>
        <div className={styles.customerTopDiv}>
          <h2>Add Customer</h2>
       
        </div>
        <AddCustomer />
      </div>
    </>
  );
};

export default Customer;
