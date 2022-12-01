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
          {products.map((product, index) =>
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.name}</td>
              <td>{product.name}</td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  )
}
