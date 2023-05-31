import React from "react";
import styles from "./index.module.css";
import { Table } from "@nextui-org/react";

const StockViewTable = ({grns}) => {
  console.log(grns)
  return (
    <div>
      <Table
        bordered
        shadow={false}
        aria-label="Example table with dynamic content & infinity pagination"
        css={{ height: "calc($space$10 * 10)" }}
        selectionMode="single"
        color="warning"
      >
        <Table.Header>
          <Table.Column>No</Table.Column>
          <Table.Column>Code</Table.Column>
          <Table.Column>Description</Table.Column>
          <Table.Column>Qty</Table.Column>
          <Table.Column>Sales Price</Table.Column>
          <Table.Column>Quality</Table.Column>
          <Table.Column>Part No</Table.Column>
          <Table.Column>Supply No</Table.Column>
        </Table.Header>
        <Table.Body>
        {          
            grns.map(product =>(
                
              <Table.Row key={product._id}>
              <Table.Cell>01</Table.Cell>
              <Table.Cell>{product.code}</Table.Cell>
              <Table.Cell>{product.description}</Table.Cell>
              <Table.Cell>{product.qty}</Table.Cell>
              <Table.Cell>{product.salesPrice}</Table.Cell>
              <Table.Cell>{product.quality}</Table.Cell>
              <Table.Cell>{product.partNo}</Table.Cell>
              <Table.Cell>{product.supInvNo}</Table.Cell>
            </Table.Row>
            ))
          }
          
            

         

        </Table.Body>
      </Table>
    </div>
  );
};

export default StockViewTable;
