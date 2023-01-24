import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"

export const CardsProductsWaiter = ({addProductInOrder, product}) => {
  return (
    <article className='containerCard'>
      <Card border="warning" style={{ width: '12rem', height: '11rem'}}>
        <Card.Header style={{ fontSize: '13px', textAlign:'center'}}>{product.type}</Card.Header>
        <Card.Body  style={{ padding: '2px', display:'flex', alignItems:'center', flexDirection:'column', justifyContent:'center'}}>
          <Card.Title style={{ fontSize: '17px', textAlign:'center'}}>{product.name}</Card.Title>
          <Card.Text style={{ fontSize: '13px', margin: '4px', textAlign:'center'}}>${product.price}</Card.Text>
          <Button style={{ fontSize: '14px', marginTop:'6px', marginLeft:'5px' }} onClick={() => addProductInOrder(product)}>Add</Button>
        </Card.Body>
      </Card>
      <br/>
    </article>
  )
}