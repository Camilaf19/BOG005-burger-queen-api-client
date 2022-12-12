import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"

export const CardsProductsWaiter = (props) => {

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
        <Card.Body >
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>${props.price}</Card.Text>
          <Card.Text>{props.id}</Card.Text>
          <Button onClick={addProductInOrder}>Agregar</Button>
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