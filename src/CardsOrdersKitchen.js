
import { ListGroup,  Card } from "react-bootstrap"

export const CardsOrdersKitchen = ({ order }) => {
  return (
    <>
      <Card border="warning" style={{ width: '12rem', height: '10rem'}}>
        <Card.Header style={{ fontSize: '13px' }}>{order.client}</Card.Header>
        <Card.Body>
          <Card.Title style={{ fontSize: '17px' }}>
          </Card.Title>
          {order.products.map((element, index) => {
            return ( 
              <ListGroup key={index} horizontal>
              <ListGroup.Item >{element.product.name}</ListGroup.Item>
              <ListGroup.Item>{element.qty} </ListGroup.Item>
            </ListGroup >
            )}
          )}
        </Card.Body>
      </Card>
      <br/>
    </>
  )
}