import Card from 'react-bootstrap/Card';
import { requestHTTPGetOnlyProduct } from './requests';
import { useState,  /*  useEffect   */ } from 'react';
import { Cart } from './Cart';

const tokenAccess = localStorage.getItem('loginToken');


export const CardsProductsWaiter = (props) => {
  const [productSelect, setProductSelect] = useState([])
  const [cart, setCart] = useState([])

  const addProductInOrder = () => {
    requestHTTPGetOnlyProduct(tokenAccess, props.id).then((res) => {
      setProductSelect(res)
     
    })
   /*  const productSelect = productSelect.find((item) => item.id === props.id) */
   setCart(productSelect)
  }
  console.log({productSelect, cart})
/*  useEffect(() => {
    addProductInOrder()
      // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])   */
/* {qty: 1, product: } */
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
      <>
      <Cart order={productSelect}/>
      </>
    </>

  )
}