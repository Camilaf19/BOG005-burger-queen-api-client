import React, { useEffect, useState } from "react";
import { requestHTTPGetProducts } from './requests';
import { ModalCreateProduct, ModalEditProduct, ModalDeleteProduct } from "./Modals";
import Table from 'react-bootstrap/Table';
const tokenAccess = localStorage.getItem('loginToken');

export const TableProducts = () => {

  const [products, setProducts] = useState([]);
  const [updateListProducts, setUpdateListProducts] = useState(false);
  const [dataEditProduct, setDataEditProduct] = useState({});

  useEffect(() => {
    requestHTTPGetProducts(tokenAccess).then((res) => {
      setProducts(res)
    })
  }, [updateListProducts])


  return (
    <section>
      <Table className="tableAdmin" >
        <tbody>
          {products.map((product) =>
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.type}</td>
              <td><ModalEditProduct product={product} setUpdateListProducts={setUpdateListProducts}
                updateListProducts={updateListProducts} setDataEditProduct={setDataEditProduct}
                dataEditProduct={dataEditProduct} /></td>
              <td><ModalDeleteProduct product={product} setUpdateListProducts={setUpdateListProducts}
                updateListProducts={updateListProducts} /></td>
            </tr>
          )}
        </tbody>
      </Table>
      <ModalCreateProduct setUpdateListProducts={setUpdateListProducts}
        updateListProducts={updateListProducts} />
    </section>
  )
}
