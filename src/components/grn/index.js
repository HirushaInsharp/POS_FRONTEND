import React , { useState }from "react";
import styles from "./index.module.css";
import AddGRN from "./AddGRN";
import GRNViewTable from "./grnViewTable";

const GRN = () => {
  const [GRNs, setGRN] = useState('');
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.componentDiv}>
          <h2>Add GRN</h2>
          <AddGRN onGRNs={setGRN}/>
          <GRNViewTable GRNs={GRNs}/>
        </div>
      </div>
    </>
  );
};

export default GRN;
