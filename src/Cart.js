import { ListGroup,/*  Button  */} from "react-bootstrap"
/* import { useEffect, useState } from "react" */
export const Cart = ({productSelect}) => {

  return productSelect.map((orderItem) => 
 (
        <ListGroup  horizontal key={orderItem.product.id}>
      <ListGroup.Item className="name">{orderItem.product.name}</ListGroup.Item>
      <ListGroup.Item>{/* <Button className='select-btn' >-</Button> */}{orderItem.qty}{/* <Button className='select-btn'>+</Button> */}</ListGroup.Item>
      <ListGroup.Item className='price'>${orderItem.product.price * orderItem.qty}</ListGroup.Item>
    </ListGroup>
           
    ))
    
}

