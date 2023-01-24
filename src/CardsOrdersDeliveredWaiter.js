import { ListGroup, Card } from "react-bootstrap"

export const CardsOrdersDeliveredWaiter = ({ order }) => {
 
  return (
    <article className="containerCard">
      <Card border="warning" style={{ width: '14rem', padding: '0px', margin: 'auto' }}>
        <Card.Header style={{ fontSize: '13px', textAlign: 'center' }}>Customer name: {order.client}</Card.Header>
        <Card.Body className='card h-100' style={{ padding: '0px', display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '0px' }}>
          <Card.Title style={{ fontSize: '15px', padding:'0.5em', margin: '0px' }}>Status: '{order.status}'</Card.Title>
          {order.products.map((element, index) => {
            return (
              <ListGroup style={{ margin: '5px', border: 'none' }} key={index} horizontal>
                <ListGroup.Item style={{border: 'none', borderTop:'none', textAlign: 'center', width: '9em', padding: '0px', fontSize: '0.9em' }}>
                  {element.product.name}</ListGroup.Item>
                <ListGroup.Item style={{border: 'none', textAlign: 'center', width: '3em', padding: '0px', fontSize: '0.9em' }}>
                  {element.qty} </ListGroup.Item>
              </ListGroup >
            )
          })}
          <ListGroup style={{ margin: '5px', border: 'none' }} horizontal>
            <ListGroup.Item style={{ border: 'none', textAlign: 'center', width: '8em', padding: '0px', fontSize: '0.9em' }}>
              Waiter: {order.userId}</ListGroup.Item>
          </ListGroup >
          <ListGroup style={{ margin: '5px', border: 'none' }} horizontal>
            <ListGroup.Item style={{ border: 'none', width: '12em', padding: '0px', fontSize: '0.9em', textAlign: 'center' }}>
              Date of Delivered: {order.dateProcessedDelivered}</ListGroup.Item>
          </ListGroup >
        </Card.Body>
      </Card>
      <br />
    </article>
  )
}