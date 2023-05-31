import React, { useState, useEffect} from "react";
import styles from "./index.module.css";
import StockViewTable from "./stockViewTable";

const StockView = () => {
  const [product, setProduct] = useState({
    itemType: "",
    model: "",
    category: "",
    code: "",
    description: "",
    partNo: "",
  });
  const [GRNS, getGRNS] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        const response =await fetch(`http://127.0.0.1:3001/listGrn`);      
        response.json().then((data) =>{
          if (Object.keys(data).length != 0)
          {
            console.log(data)
            getGRNS(data);  
            //setFilterInvoices(data); 
          }
                
        });        
    }    
    fetchData();
  }, []);

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Product:", product);
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <h2>Invoice View</h2>
        <div className={styles.viewForm}>
          <div className={styles.topInvoiceView}>
            <div className={styles.bottomGrnFormInput}>
              <text>Item Type</text>
              <select
                name="itemType"
                value={product.itemType}
                onChange={handleChange}
              >
                <option value="">Select Options</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className={styles.bottomGrnFormInput}>
              <text>Model</text>
              <select
                name="model"
                value={product.model}
                onChange={handleChange}
              >
                <option value="">Select Options</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className={styles.bottomGrnFormInput}>
              <text>Category</text>
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
              >
                <option value="">Select Options</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
          <div className={styles.bottomInvoiceView}>
            <div className={styles.bottomGrnFormInput}>
              <text>Code:</text>
              <input
                type="text"
                name="code"
                value={product.code}
                onChange={handleChange}
              />
            </div>
            <div className={styles.bottomGrnFormInput}>
              <text>Description:</text>
              <input
                type="text"
                name="description"
                value={product.description}
                onChange={handleChange}
              />
            </div>
            <div className={styles.bottomGrnFormInput}>
              <text>Part No:</text>
              <input
                type="text"
                name="partNo"
                value={product.partNo}
                onChange={handleChange}
              />
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.submitButton} onClick={handleSubmit}>
                Find
              </button>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------- */}

        <div className={styles.viewTable}>
          <StockViewTable grns={GRNS}/>
        </div>
      </div>
    </>
  );
};

export default StockView;
