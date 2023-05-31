import React, { useState } from "react";
import styles from "./index.module.css";
import GRNViewSingleCard from "./grnViewSingleCard";

const GRNView = () => {
  const [options, setOptions] = useState({
    option: "",
    from: "",
    to: "",
    grnNo: "",
  });

  const [products, setProduct] = useState([]);
  const [filterProducts, setFilterProduct] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
        const response =await fetch(`http://127.0.0.1:3001/listGrn`);
        
        response.json().then((data) =>{
          setProduct(data);
          setFilterProduct(data);
        });
        console.log(products)
    }

    fetchData();
  }, []);

  const handleChange = (event) => {
    setOptions({ ...options, [event.target.name]: event.target.value });
    let filter = products;
    if (event.target.name == "option")
    {
      if (event.target.value != "0")
      {
        filter = filter.filter(product =>product.option == event.target.value)
      }
      
    }

    if (event.target.name == "grnNo"){
      if (event.target.value != "")
      {
        filter = filter.filter(product => product.grnNo.toString().startsWith(event.target.value ) )
      }
      
    }

    setFilterProduct(filter)
    
    

    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("options:", options);
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <h2>GRN View</h2>
        <div className={styles.viewForm}>
          <div className={styles.bottomGrnFormInput}>
            <text>GRN No:</text>
            <input
              type="text"
              name="grnNo"
              value={options.grnNo}
              onChange={handleChange}
            />
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>Option</text>
            <select
              name="option"
              value={options.option}
              onChange={handleChange}
            >
              <option value="0">Select Options</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>From:</text>
            <input
              type="text"
              name="from"
              value={options.from}
              onChange={handleChange}
            />
          </div>
          <div className={styles.bottomGrnFormInput}>
            <text>To:</text>
            <input
              type="text"
              name="to"
              value={options.to}
              onChange={handleChange}
            />
          </div>

          {/* <div className={styles.buttonGroup}>
            <button className={styles.submitButton} onClick={handleSubmit}>
              Find
            </button>
          </div> */}
        </div>

        {/* ---------------------------------------------- */}

        <div className={styles.viewTable}>
          {filterProducts.map((product) =>(
              // eslint-disable-next-line react/jsx-key
              <GRNViewSingleCard
              grnNo={product.grnNo}
              option={product.option}
              supName={product.supName}
              date={product.invDate}
            />    
          ))

          }
              
        </div>
      </div>
    </>
  );
};

export default GRNView;
