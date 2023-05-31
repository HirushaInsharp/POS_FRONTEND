import React, { useState } from "react";
import styles from "./index.module.css";

const AddGRN = ({onGRNs}) => {
  const [product, setProduct] = useState({
    option: "",
    supName: "",
    code: "",
    description: "",
    partNo: "",
    qty: "",
    salesPrice: "",
    quality: "",
    feedDate: "",
    grnNo: "",
    totInvAmt: "",
    supInvNo: "",
    invDate: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Product:", product);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch('http://127.0.0.1:3001/addGrn', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          onGRNs(data)
          setProduct({})
        });
  };
  return (
    <>
      <div className={styles.mainDiv}>
        <form>
          <div className={styles.topGrnForm}>
            <div className={styles.leftGrnForm}>
              <div className={styles.leftGrnFormInput}>
                <text>Option</text>
                <select
                  name="option"
                  value={product.option}
                  onChange={handleChange}
                >
                  <option value="">Select Options</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
              <div className={styles.leftGrnFormInput}>
                <text>Code</text>
                <input
                  type="text"
                  name="code"
                  value={product.code}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.leftGrnSubForm}>
                <div className={styles.leftGrnFormInput}>
                  <text>Part No</text>
                  <input
                    type="text"
                    name="partNo"
                    value={product.partNo}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.leftGrnFormInput}>
                  <text>Qty</text>
                  <input
                    type="text"
                    name="qty"
                    value={product.qty}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.leftGrnSubForm}>
                <div className={styles.leftGrnFormInput}>
                  <text>Sales Price</text>
                  <input
                    type="text"
                    name="salesPrice"
                    value={product.salesPrice}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.leftGrnFormInput}>
                  <text>Quality</text>
                  <select
                    name="quality"
                    value={product.quality}
                    onChange={handleChange}
                  >
                    <option value="">Select Options</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.rightGrnForm}>
              <div className={styles.rightGrnFormInput}>
                <text>SUP Name:</text>
                <input
                  type="text"
                  name="supName"
                  value={product.supName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.rightGrnFormInput}>
                <text>Description:</text>
                <textarea
                  type="textarea"
                  rows={7}
                  name="description"
                  style={{ resize: "none" }}
                  value={product.description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={styles.bottomGrnForm}>
            <div className={styles.bottomGrnTopForm}>
              <div className={styles.bottomGrnFormInput}>
                <text>Feed Date:</text>
                <input
                  type="text"
                  name="feedDate"
                  value={product.feedDate}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.bottomGrnFormInput}>
                <text>GRN No:</text>
                <input
                  type="text"
                  name="grnNo"
                  value={product.grnNo}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.bottomGrnFormInput}>
                <text>Tot.INV.AMT:</text>
                <input
                  type="text"
                  name="totInvAmt"
                  value={product.totInvAmt}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.bottomGrnFormInput}>
                <text>SUP.INV.NO:</text>
                <input
                  type="text"
                  name="supInvNo"
                  value={product.supInvNo}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.bottomGrnDownForm}>
              <div className={styles.bottomGrnFormInput}>
                <text>INV Date:</text>
                <input
                  type="text"
                  name="invDate"
                  value={product.invDate}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.submitButton} onClick={handleSubmit}>
                  Submit
                </button>
                <button className={styles.editButton}>Edit</button>
                <button className={styles.deleteButton}>Delete</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddGRN;
