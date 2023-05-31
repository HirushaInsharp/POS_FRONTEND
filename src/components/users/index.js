import React, { useState } from "react";
import styles from "./index.module.css";
import AddUser from './addUsers'
const Users = () => {
  return (
    <>
      <div>
        <div className={styles.customerTopDiv}>
          <h2>Add Users</h2>
        </div>
        <AddUser/>
      </div>
    </>
  );
};

export default Users;
