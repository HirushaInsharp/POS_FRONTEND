import React, { useState } from "react";
import styles from "./index.module.css";
import UserSettings from "./userSettings";
const Settings = () => {
  return (
    <>
      <div>
        <div className={styles.customerTopDiv}>
          <h2>Users Settings</h2>
        </div>
        <UserSettings />
      </div>
    </>
  );
};

export default Settings;
