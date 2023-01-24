import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestHTTPGetOrders } from "../requests";
import { CardsOrdersKitchen } from "../CardsOrdersKitchen.js"
import { CardsOrdersReady } from "../CardsOrdersReady";
import { requestHTTPEditStatusOrder } from "../requests";
import Form from "react-bootstrap/Form";

export function ChefProfile() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/")
  const [ordersKitchen, setOrdersKitchen] = useState([])
  const [pendingOrders, setPendingOrders] = useState([])
  const [readyOrders, setReadyOrders] = useState([])
  const tokenAccess = localStorage.getItem('loginToken');

  useEffect(() => {
    requestHTTPGetOrders(tokenAccess).then((res) => {
      setOrdersKitchen(res)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChangeSelector = (event) => {
    const pendingFilter = ordersKitchen.filter((order) => event.target.value === order.status && order.status === 'pending')
    setPendingOrders(pendingFilter)
    const readyFilter = ordersKitchen.filter((order) => event.target.value === order.status && order.status === 'ready')
    setReadyOrders(readyFilter)
  }

  const addOrderReady = (order) => {
    const dataEditOrder = {
      status: 'ready',
      dateProcessed: new Date().toLocaleString('sv-SE')
    }
    requestHTTPEditStatusOrder(dataEditOrder, order.id, tokenAccess).then((res) => {
      console.log(res)
    })
  }

  return (
    <>
      <header className='headerApp'>
        <h1 className='titleApp'>BURGER QUEEN</h1>
        <button className='buttonLogOut' onClick={handleBack}>Log Out</button>
      </header>
      <main className='backgroundWaiter'>
        <section className="containerOrdersChef">
          <Form className="selectMenu">
            <Form.Select onChange={handleChangeSelector}>
              <option>Select the order type</option>
              <option value='pending'>Pending Orders</option>
              <option value='ready'>Ready Orders</option>
            </Form.Select>
          </Form>
          <section className="containerOrders">
            {pendingOrders.map((order, index) =>
              <CardsOrdersKitchen key={index} order={order} addOrderReady={addOrderReady} />)}
          </section>
          <section className="containerOrders">
            {readyOrders.map((order, index) =>
              <CardsOrdersReady key={index} order={order} />)}
          </section>
        </section>
      </main>
    </>
  )

}