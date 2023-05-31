import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import InvoiceViewSingleCard from "./invoiceViewSingleCard";

const InvoiceView = () => {
  const [product, setProduct] = useState({
    invoiceNo: "",
    option: "",
    from: "",
    to: "",
  });
  const [invoices, setInvoices] = useState([]);
  const [filterInvoices, setFilterInvoices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response =await fetch(`http://127.0.0.1:3001/listInvoice`);      
        response.json().then((data) =>{
          if (Object.keys(data).length != 0)
          {
            setInvoices(data);  
            setFilterInvoices(data); 
          }
                
        });        
    }    
    fetchData();
  }, []);

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
    let filter = filterInvoices;
    if (event.target.name == "invoiceNo")
    {
        if (event.target.value != "")
        {
          filter = filter.filter(product => product.invoiceNo.toString().startsWith(event.target.value ) )
        }              
    }

    setFilterInvoices(filter)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilterInvoices(invoices)
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <h2>Invoice View</h2>
        <div className={styles.viewForm}>
          <div className={styles.bottomGrnFormInput}>
            <text>invoiceNo:</text>
            <input
              type="text"
              name="invoiceNo"
              value={product.invoiceNo}
              onChange={handleChange}
            />
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>Option</text>
            <select
              name="option"
              value={product.option}
              onChange={handleChange}
            >
              <option value="">Select Options</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>From:</text>
            <input
              type="text"
              name="from"
              value={product.from}
              onChange={handleChange}
            />
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>To:</text>
            <input
              type="text"
              name="to"
              value={product.to}
              onChange={handleChange}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.submitButton} onClick={handleSubmit}>
              Clear
            </button>
          </div>
        </div>

        {/* ---------------------------------------------- */}
      {
        filterInvoices.length != 0 ? (
          <div className={styles.viewTable}>
          {         
            filterInvoices.map(invoice =>(
              // eslint-disable-next-line react/jsx-key
              <InvoiceViewSingleCard
                invoiceNo={invoice.invoiceNo}
                total={invoice.total}
                customerName={invoice.customerName}
                date={invoice.registeredDate}
              />    
            ))
          }
               
        </div>
        ): (
          <div></div>
        )
      }
        
      </div>
    </>
  );
};

export default InvoiceView;
