import { ListGroup,  Button } from "react-bootstrap"

export const Cart = ({orderList, deleteProductInOrder}) => {

  return orderList.map((orderItem) => 
 (
        <ListGroup style={{height:'3em', borderRadius:'4px'}} horizontal key={orderItem.product.id}>
      <ListGroup.Item style={{width:'46%', fontSize:'0.9em', padding:'4px', textAlign:'center'}}>{orderItem.product.name}</ListGroup.Item>
      <ListGroup.Item>{orderItem.qty}</ListGroup.Item>
      <ListGroup.Item style={{width:'22%', textAlign:'center'}}>${orderItem.product.price * orderItem.qty}</ListGroup.Item>
      <ListGroup.Item style={{padding:'7px', width:'20%'}}><Button variant="warning" style={{ padding:'3px 5px', fontSize:'0.8em', }} onClick={() => deleteProductInOrder(orderItem)} >Delete</Button></ListGroup.Item>
    </ListGroup>
           
    ))
    
}

