import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import AddItemTable from "./addItemTable";

const AddItemToInvoice = ({allproducts,  addProduct}) => {
  const [option, setOption] = useState({
    partNo: "",
    code: "",
    description: "",
    quantity: "",
  });
  const [products, setProduct] = useState([]);
  const [filterProducts, setFilterProduct] = useState([]);
  const [selectProducts, setSelectProduct] = useState([]);
  
  useEffect(() => {
    setFilterProduct(allproducts)
    setProduct(allproducts)  
  }, []);


  const handleChange = (event) => {
    setOption({ ...option, [event.target.name]: event.target.value });
    let filter = filterProducts;
    if (event.target.name == "partNo")
    {
        if (event.target.value != "")
        {
          filter = filter.filter(product => product.partNo.toString().startsWith(event.target.value ) )
        }              
    }
    if (event.target.name == "code")
    {
        if (event.target.value != "")
        {
          filter = filter.filter(product => product.code.toString().startsWith(event.target.value ) )
        }              
    }
    setFilterProduct(filter)
  };

  const removeSelectedProduct = (selectProduct) => {
    let prouct = products.filter(product => product._id != selectProduct._id)
    setProduct(prouct);
    setFilterProduct(prouct);
    addProduct(selectProduct)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilterProduct(products)
  };
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.viewForm}>
          <div className={styles.bottomGrnFormInput}>
            <text>partNo</text>
            <input
              type="text"
              name="partNo"
              value={option.partNo}
              onChange={handleChange}
            />
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>Code:</text>
            <input
              type="text"
              name="code"
              value={option.code}
              onChange={handleChange}
            />
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>description:</text>
            <input
              type="text"
              name="description"
              value={option.description}
              onChange={handleChange}
            />
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>quantity:</text>
            <input
              type="text"
              name="quantity"
              value={option.quantity}
              onChange={handleChange}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.submitButton} onClick={handleSubmit}>
              Clear
            </button>
          </div>
        </div>
        <div className={styles.invoiceTable}>
          <AddItemTable  products={filterProducts} setSelectProduct={removeSelectedProduct}/>
        </div>
      </div>
    </>
  );
};

export default AddItemToInvoice;
