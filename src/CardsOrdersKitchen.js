
import { ListGroup, Card, Button } from "react-bootstrap"

export const CardsOrdersKitchen = ({ order, addOrderReady }) => {
  return (
    <article className="containerCard">
      <Card className='card h-100' border="warning" style={{ width: '12rem', height: '12rem' }}>
        <Card.Header style={{ fontSize: '13px', textAlign: 'center' }}>{order.client}</Card.Header>
        <Card.Body style={{ padding: '0px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Card.Title style={{ fontSize: '17px' }}>
          </Card.Title>
          {order.products.map((element, index) => {
            return (
              <ListGroup style={{ margin: '5px' }} key={index} horizontal>
                <ListGroup.Item style={{ border: 'none', textAlign: 'center', width: '8em', padding: '0px', fontSize: '0.9em' }}>
                  {element.product.name}</ListGroup.Item>
                <ListGroup.Item style={{ border: 'none', textAlign: 'center', width: '3em', padding: '0px', fontSize: '0.9em' }}>
                  {element.qty} </ListGroup.Item>
              </ListGroup >
            )
          }
          )}

          <ListGroup style={{ margin: '5px' }} horizontal> 
            <ListGroup.Item style={{ border: 'none', textAlign: 'center', width: '8em', padding: '0px', fontSize: '0.9em' }}>
              Waiter: {order.userId}</ListGroup.Item>
          </ListGroup >
          <ListGroup style={{ margin: '5px' }} horizontal>
          <ListGroup.Item style={{ border: 'none', width: '3em', padding: '0px', fontSize: '0.9em' }}>
              Date: {order.dataEntry} </ListGroup.Item>
              </ListGroup >
          <Button style={{ fontSize: '12px', width: '8em', padding: '0px', marginTop: '1.3em' }}
            onClick={() => addOrderReady(order)}>Add order ready to serve</Button>
        </Card.Body>
      </Card>
      <br />
    </article>
  )
}