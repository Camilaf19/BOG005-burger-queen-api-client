import Card from 'react-bootstrap/Card';
import { requestHTTPGetOnlyProduct } from './requests';
import { useState } from 'react';
const tokenAccess = localStorage.getItem('loginToken');


export const CardsProductsWaiter = (props) => {
  const [order, setOrder] = useState([])

  const addProductInOrder = () => {
    requestHTTPGetOnlyProduct(tokenAccess, props.id).then((res) => {
      const productExists = order.find((item) => item.id === props.id)
      console.log(productExists)
      console.log(res)
    
        setOrder(res)
        console.log(order)
      })
   
    }
  
  return (
    <>
      <Card border="warning" style={{ width: '18rem' }}>
        <Card.Header>{props.type}</Card.Header>
        <Card.Body onClick={addProductInOrder} >
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>${props.price}</Card.Text>
          <Card.Text>{props.id}</Card.Text>
        </Card.Body>
      </Card>
      <br />
      {/* //carrito? */}
      <table>
        <tbody>
          <tr>
            <th>Products</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>aqui deberia ser la orden</td>
            <td>el precio</td>
          </tr>
          <tr>
            <td>el precio total totalismo</td>
            <td>el precio total en numbers</td>
          </tr>
        </tbody>
      </table>

    </>


  )

}