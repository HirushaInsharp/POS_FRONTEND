import React, { useState } from "react";
import styles from "./index.module.css";

const AddCustomer = () => {
  const [customer, setCustomer] = useState({
    customerName: "",
    emailAddress: "",
    telephoneNumber: "",
    address: "",
    companyName: "",
    status: "",
  });
  const handleChange = (event) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("customer: ", customer);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "fullname": "Hirusha Fernando",
        "email": "hirusha12@gmail.com",
        "address": "02, fonseka rd",
        "company" : "asdsad",
        "status" : "1"
    })
  };
  fetch('http://127.0.0.1:3001/addCustomer', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  };
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.topGrnForm}>
          <div className={styles.leftGrnForm}>
            <div className={styles.leftGrnFormInput}>
              <text>customer Name</text>
              <input
                type="text"
                name="customerName"
                value={customer.customerName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.leftGrnFormInput}>
              <text>telephoneNumber</text>
              <input
                type="text"
                name="telephoneNumber"
                value={customer.telephoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className={styles.leftGrnFormInput}>
              <text>companyName</text>
              <input
                type="text"
                name="companyName"
                value={customer.companyName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.rightGrnForm}>
            <div className={styles.leftGrnFormInput}>
              <text>emailAddress</text>
              <input
                type="text"
                name="emailAddress"
                value={customer.emailAddress}
                onChange={handleChange}
              />
            </div>
            <div className={styles.leftGrnFormInput}>
              <text>address</text>
              <input
                type="text"
                name="address"
                value={customer.address}
                onChange={handleChange}
              />
            </div>
            <div className={styles.leftGrnFormInput}>
              <text>Status</text>
              <select
                name="status"
                value={customer.status}
                onChange={handleChange}
              >
                <option value="">Select Options</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.bottomGrnForm}>
          <div className={styles.bottomGrnDownForm}>
            <div className={styles.buttonGroup}>
              <button className={styles.submitButton} onClick={handleSubmit}>
                Save
              </button>
              <button className={styles.editButton} >View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
