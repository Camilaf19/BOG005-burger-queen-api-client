import { ListGroup, Button } from "react-bootstrap"

export const Cart = (props) => {

 /*    if (props.product.qty === 1) {
        props.productSelect([...props.productSelect.slice(0, props.index), ...props.productSelect.slice(props.index + 1)])
      } */
  
      console.log(props.product.qty)
    return (
        <ListGroup horizontal>
      <ListGroup.Item className="name">{props.product.product.name}</ListGroup.Item>
      <ListGroup.Item><Button className='select-btn' >-</Button>{props.product.qty}<Button className='select-btn'>+</Button></ListGroup.Item>
      <ListGroup.Item className='price'>${props.product.product.price * props.product.qty}</ListGroup.Item>
      <ListGroup.Item><Button className='delete-btn' variant="danger" ></Button></ListGroup.Item>
    </ListGroup>
           
    )
}

