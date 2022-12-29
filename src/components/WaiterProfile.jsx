import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { requestHTTPGetProducts, requestHTTPNewOrder } from '../requests';
import { CardsProductsWaiter } from "../CardsProductosWaiter";
import { Cart } from '../Cart';
import { useNavigate } from "react-router-dom";
import { ListGroup, Button } from "react-bootstrap"
import '../styles.css'
const tokenAccess = localStorage.getItem('loginToken');



export const WaiterProfile = () => {

  const navigate = useNavigate();
  const handleBack = () => navigate("/")
  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState([]);
  const [orderList, setOrderList] = useState([])
  const [customerName, setCustomerName] = useState('')
  const userId = localStorage.getItem('userId');

  const dataOrder = {
    userId: userId,
    client: customerName,
    products: orderList,
    status: 'pending',
    dataEntry: new Date().toLocaleString('sv-SE'),

}
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    requestHTTPNewOrder(dataOrder,tokenAccess).then((res) => {
    console.log(res)
    })

  }

  useEffect(() => {
    requestHTTPGetProducts(tokenAccess).then((res) => {
      setProducts(res)
    })
  }, [])

  const handleChangeSelector = (event) => {
    const result = products.filter((product) => {
      if (event.target.value === product.type) {
        return true
      }
      return false
    })
    setMenu(result)
  }

  const addProductInOrder = (product) => {
    const productRepeated = orderList.find((item) => item.product.id === product.id)

    if (productRepeated) {
      const resultIncrease = orderList.map(item => item.product.id === product.id
        ? { ...item, qty: item.qty + 1 }
        : item,
      )
      setOrderList(resultIncrease)

    } else {
      setOrderList([...orderList, { qty: 1, product: product }])
    }
  }

  const deleteProductInOrder = (product) => {
    const productExist = orderList.find((item) => item.product.id === product.product.id)
    if (productExist.qty === 1) {
      const resultDecrease = orderList.filter(item => item.product.id !== product.product.id)
      setOrderList(resultDecrease)

    } else {
      setOrderList(orderList.map((item) =>
        item.product.id === product.product.id ? { ...item, qty: item.qty - 1 } : item,
      ))
    }
  }

 const calcuteTotalOrder = () => {
    if (orderList.length !== 0) {
      const productsPrices = orderList.map((item) => item.product.price * item.qty)
      const totalPrice = productsPrices.reduce((a, b) => a + b)
      return totalPrice
    }
  }

  const handleChangeNameCustomer = (event) => {
    setCustomerName(event.target.value)
  }

  return (
    <main className='backgroundWaiter'>
      <header className='headerApp'>
        <h1 className='titleApp'>BURGER QUEEN</h1>
        <button className='buttonLogOut' onClick={handleBack}>Log Out</button>
      </header>
      <Form className="selectMenu">
        <Form.Select onChange={handleChangeSelector}>
          <option>Select a Menu</option>
          <option value="Desayuno">Breakfast</option>
          <option value="Almuerzo">Lunch</option>
        </Form.Select>
      </Form>
      <section className='cardsProducts'>
        {menu.map((product) =>
          <CardsProductsWaiter key={product.id} id={product.id} image={product.image} name={product.name}
            price={product.price} type={product.type} product={product} addProductInOrder={addProductInOrder} />
        )}
      </section>
      <section className="cartList" >
        <h2 className="orderTitle">Order:</h2>
        <Form onSubmit={handleSubmitOrder} >
          <Form.Group>
            <Form.Control
              className="nameInput"
              type='text'
              name='customerName'
              placeholder="Customer name"
              value={customerName}
              onChange={handleChangeNameCustomer}
              required
            />
          </Form.Group>
          <Cart
            orderList={orderList} deleteProductInOrder={deleteProductInOrder} />
          <Form.Group className="total">
            <ListGroup horizontal >
              <ListGroup.Item >Total:</ListGroup.Item>
              <ListGroup.Item>${calcuteTotalOrder()} </ListGroup.Item>
            </ListGroup >
          </Form.Group>
          <article className="order-buttons">
            <Button variant="success" type='submit'>Send to kitchen</Button>
            <Button variant="danger"/*onClick= {handleDeleteOrder} */>Delete order</Button>
          </article>
        </Form>
      </section>
    </main>
  )

}