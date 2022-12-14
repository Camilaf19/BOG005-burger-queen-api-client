import React, { useEffect, useState } from "react";
import { requestHTTPGetProducts } from './requests';
import { ModalCreateProduct } from "./Modals";
import Table from 'react-bootstrap/Table';
const tokenAccess = localStorage.getItem('loginToken');

export const TableProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    requestHTTPGetProducts(tokenAccess).then((res) => {
      setProducts(res)
    })
  }, [])

  return (
    <section>
    <Table className="tableAdmin" >
      <tbody>
        <tr>
        {/*   <th>Image</th> */}
         {/*  <th>Product</th>
          <th>Price</th> */}
        </tr>
        {products.map((product, index) =>
            <tr key={index}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.type}</td>
            </tr>
        )}  
 </tbody>
    </Table>
    <ModalCreateProduct />
    </section>
  )
}
