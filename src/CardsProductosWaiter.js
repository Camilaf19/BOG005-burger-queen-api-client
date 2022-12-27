import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"

export const CardsProductsWaiter = ({addProductInOrder, product}) => {
  return (
    <>
      <Card border="warning" style={{ width: '12rem', height: '10rem', display: 'grid'}}>
        <Card.Header style={{ fontSize: '13px'}}>{product.type}</Card.Header>
        <Card.Body>
          <Card.Title style={{ fontSize: '17px'}}>{product.name}</Card.Title>
          <Card.Text style={{ fontSize: '13px', margin: '4px'}} >${product.price}</Card.Text>
          <Button  style={{ fontSize: '14px'  }} onClick={() => addProductInOrder(product)}>Add</Button>
        </Card.Body>
      </Card>
      <br />
    </>
  )
}