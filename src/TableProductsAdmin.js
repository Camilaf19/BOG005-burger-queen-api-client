import React, { useEffect, useState } from "react";
import { requestHTTPGetProductsAdmin } from './requests';
const tokenAccess = localStorage.getItem('loginToken');

export const TableProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    requestHTTPGetProductsAdmin(tokenAccess).then((res) => {
      setProducts(res)
    })
  }, [])

  return (
    <div>
      <table>
      <tbody>
        <tr>
          <th>Image</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
        {products.map((product, index) =>
            <tr key={index}>
              <td>{product.image}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
        )}
 </tbody>
      </table>
      <button className='buttonNewProduct'>Add new product + </button>
    </div>
  )
}
