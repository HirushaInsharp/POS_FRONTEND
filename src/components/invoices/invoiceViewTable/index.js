import React, {useState} from "react";
import styles from "./index.module.css";
import { Table } from "@nextui-org/react";

const InvoiceTable = ({selectProducts, changeProductQyt}) => {

  const handleCellClick = (event) => {
    // Perform actions when the cell is clicked
    console.log("Cell clicked!");
  };

  const handleChange = (event, product) => {
    product.new_qty = event.target.value;
    changeProductQyt(product)
    //setOption({ ...option, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <Table
        bordered
        shadow={false}
        aria-label="Example table with dynamic content & infinity pagination"
        css={{ height: "calc($space$10 * 10)" }}
        color="warning"
      >
        <Table.Header>
          <Table.Column>ItemNo</Table.Column>
          <Table.Column>Description</Table.Column>
          <Table.Column>Part No</Table.Column>
          <Table.Column>Qty</Table.Column>
          <Table.Column>Price</Table.Column>
          <Table.Column></Table.Column>
        </Table.Header>

        <Table.Body>
          {          
            selectProducts.map(product =>(
                
              <Table.Row key={product._id}>           
                <Table.Cell>{product.grnNo}</Table.Cell>
                <Table.Cell>{product.description}</Table.Cell>
                <Table.Cell>{product.partNo}</Table.Cell>
                <Table.Cell><input type="number" name="customerName" max={product.qty}  placeholder={product.qty}  onChange={e => handleChange(e,product)}/> </Table.Cell>
                {/* <Table.Cell>{product.qty}</Table.Cell> */}
                <Table.Cell>{product.salesPrice}</Table.Cell>                
                <Table.Cell>
                  <div onClick={handleCellClick} className={styles.tableCell}>
                    Delete
                  </div>
                </Table.Cell>
            </Table.Row>
            ))
          }
          

        </Table.Body>
      </Table>
    </div>
  );
};

export default InvoiceTable;
