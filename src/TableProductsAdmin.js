import React, { useEffect, useState } from "react";
import { requestHTTPGetProducts } from './requests';
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
    <Table className="tableAdmin" striped>
      <tbody>
        <tr>
        {/*   <th>Image</th> */}
          <th>Product</th>
          <th>Price</th>
        </tr>
        {products.map((product, index) =>
            <tr key={index}>
              <td>{product.name}</td>
              <td>${product.price}</td>
            </tr>
        )}
         
 </tbody>
    </Table>
    <button className='buttonNewProduct'>Add new product + </button>
    </section>
  )
}
