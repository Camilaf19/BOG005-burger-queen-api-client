import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"

export const CardsProductsWaiter = (props) => {

  const addProductInOrder = () => {
    const productRepeated = props.productSelect.find((item) => item.product.id === props.id)
 
if (productRepeated) {
  props.setProductSelect(props.productSelect.map(item => item.product.id === props.id
    ? { ...item, qty: item.qty+1 }
    : item,
  ))

} else {
      props.setProductSelect([...props.productSelect, { qty: 1, product: props.product }])
    }
  }
  console.log(props.productSelect)

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
    </>
  )
}