import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"
/* import { useEffect } from 'react'; */

export const CardsProductsWaiter = ({addProductInOrder, product}) => {
  return (
    <>
      <Card border="warning" style={{ width: '18rem' }}>
        <Card.Header>{product.type}</Card.Header>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>{product.id}</Card.Text>
          <Button onClick={() => addProductInOrder(product)}>Add</Button>
        </Card.Body>
      </Card>
      <br />

    </>
  )
}