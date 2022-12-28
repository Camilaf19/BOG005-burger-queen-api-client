import { ListGroup,  Button } from "react-bootstrap"

export const Cart = ({orderList, deleteProductInOrder}) => {

  return orderList.map((orderItem) => 
 (
        <ListGroup horizontal key={orderItem.product.id}>
      <ListGroup.Item className="name">{orderItem.product.name}</ListGroup.Item>
      <ListGroup.Item>{orderItem.qty}</ListGroup.Item>
      <ListGroup.Item className='price'>${orderItem.product.price * orderItem.qty}</ListGroup.Item>
      <ListGroup.Item className='delete'><Button variant="warning" className='deletebtn' onClick={() => deleteProductInOrder(orderItem)} >Delete</Button></ListGroup.Item>
    </ListGroup>
           
    ))
    
}

