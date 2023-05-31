import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import InvoiceTable from "./invoiceViewTable";
import { Modal, Text } from "@nextui-org/react";
import AddItemToInvoice from "./addItemToInvoce";

const Invoices = () => {
  const [option, setOption] = useState({
    option: "",
    customerName: "",
    invoiceNo: "",
    invoiceDate: "",
    grn:[],
  });
  const [products, setProduct] = useState([]);
  const [customers, setCustomer] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectProducts, setSelectProduct] = useState([]);
  const [visible, setVisible] = useState(false);
  const [total, setTotal] = useState(0);
  const [productTot, setProductTot] = useState({});
  const [error, setError] = useState({
    message: '',
    is_show: false,
  });

  useEffect(() => {
    const fetchData = async () => {
        const response =await fetch(`http://127.0.0.1:3001/listGrn`);      
        response.json().then((data) =>{
          setProduct(data);          
        });        
    } 
    const fetchCustomers = async () => {
      const response =await fetch(`http://127.0.0.1:3001/listCustomer`);      
      response.json().then((data) =>{
        console.log(data);
        setCustomer(data);          
      });        
  }    
    fetchData();
    fetchCustomers()
  }, []);


  const checkProductAllreadyThere = (product) => {
    let value = false;
    selectProducts.map(element => {

      if (element._id === product._id) {
        value = true;
      }
    });
        
    return value;
  };

  const selectedProductShow = (product)=> {
    setError({ ...error, 'message' : '' });
    let obj = []
    let total_values = total;
    if (selectProducts.length != 0) {
      obj = selectProducts;
      let isProducThere = checkProductAllreadyThere(product)
      if( isProducThere === false) {
        obj.push(product);        
        setSelectProduct(obj);
        total_values = total_values + (product.salesPrice * product.qty);
        setTotal(total_values)
      }
    }else{
      obj.push(product);
      setSelectProduct(obj);
      total_values = product.salesPrice * product.qty;
      setTotal(total_values)
    }
  }
  const handleChange = (event) => {
    setError({ ...error, 'message' : '' });
    console.log(event)
    setOption({ ...option, [event.target.name]: event.target.value });
  };

  const changeProductQyt = (product) => {
    let productTotal = productTot; 
    productTotal[product._id] = product.salesPrice * product.new_qty
    let total_values = 0 ;
    for (let x in productTotal) {
      total_values = total_values + productTotal[x]
   }
    // total_values = total_values + (product.salesPrice * product.qty);
     setTotal(total_values)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("option:", option);
    option.discount = total * 0.05;
    option.total = total * 0.95;
    option.grns = selectProducts;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(option)
    };

    if(option.grns.length == 0 )
    {
      setError({ ...error, 'message' : "Error Select GRN First" });
    }else if (option. customerName == "")
    {
      setError({ ...error, 'message' : "Select Customer First" });
    }else if (option. invoiceNo == "")
    {
      setError({ ...error, 'message' : "Select Invoice No" });
    }
    else{
      fetch('http://127.0.0.1:3001/addInvoice', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          alert('Success');
         // onGRNs(data)
          setProduct({})
        });
    }
    

  };
  const handleSelectCity = (event) => {
    console.log(event);
  }

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const optionsForUser = customers.map((option) => {
      // eslint-disable-next-line react/jsx-key
      return <option value={option.fullname}>{option.fullname}</option>
  })
  
  return (
    <>
      <div className={styles.mainDiv}>
        <h2>Invoice</h2>
        <div className={styles.viewForm}>
          <div className={styles.bottomGrnFormInput}>
            <text>Option</text>
            <select
              name="option"
              value={option.option}
              onChange={handleChange}
            >
              <option value="">Select Options</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
          <div className={styles.bottomGrnFormInput}>
            {/* <text>Customer Name:</text>
            <input
              type="text"
              name="customerName"
              required
              value={option.customerName}
              onChange={handleChange}
            /> */}
            <text>Customers</text>
            <select
              name="customerName"
              value={option.customerName}
              onChange={handleChange}
            >
              <option value="">Select Options</option>
              {optionsForUser}
              
             
            </select>
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>invoiceNo:</text>
            <input
              type="text"
              name="invoiceNo"
              required
              value={option.invoiceNo}
              onChange={handleChange}
            />
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>invoiceDate:</text>
            <input
              type="date"
              name="invoiceDate"
              value={option.invoiceDate}
              onChange={handleChange}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.submitButton} onClick={handler}>
              Search Item
            </button>
          </div>
        </div>

        {/* ************************************* */}
        <div className={styles.invoiceTable}>
          <InvoiceTable selectProducts={selectProducts} changeProductQyt={changeProductQyt}/>
          <div className={styles.totalDiv}>
            { 
            error.message != '' ? (<h2  className={styles.totalDiv}> {error.message}</h2>): (<h2></h2>)
              
            }
           
            <div className={styles.totalDetails}>
              <p>Discount</p>
              <p>{total * 0.05}</p>
            </div>
            <div className={styles.totalDetails}>
              <p>Total</p>
              <p>{total * 0.95}</p>
            </div>
          </div>
          <div className={styles.buttonGroup2}>
            <button  className={styles.submitButton} onClick={handleSubmit}>
              Save
            </button>
            <button className={styles.submitButton} onClick={handleSubmit}>
              Preview
            </button>
          </div>
        </div>
      </div>

      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        width={1300}
        scroll={true}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={20}>
            Select Item
          </Text>
        </Modal.Header>
        <Modal.Body>
          <AddItemToInvoice  allproducts={products} addProduct={selectedProductShow}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Invoices;
