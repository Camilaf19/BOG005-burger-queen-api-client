import { requestHTTPGetOrders, requestHTTPEditStatusOrder } from "../requests";
import { CardsOrdersWaiter } from "../CardsOrdersWaiter";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { CardsOrdersDeliveredWaiter } from "../CardsOrdersDeliveredWaiter";

export const OrdersReadyWaiter = () => {

  const [readyOrders, setReadyOrders] = useState([])
  const [deliveredOrders, setDeliveredOrders] = useState([])
  const [ordersWaiter, setOrdersWaiter] = useState([])
  const tokenAccess = localStorage.getItem('loginToken');

  useEffect(() => {
    requestHTTPGetOrders(tokenAccess).then((res) => {
      setOrdersWaiter(res)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChangeSelector = (event) => {
    const readyFilter = ordersWaiter.filter((order) => event.target.value === order.status && order.status === 'ready')
    setReadyOrders(readyFilter)
    const deliveredFilter = ordersWaiter.filter((order) => event.target.value === order.status && order.status === 'delivered')
    setDeliveredOrders(deliveredFilter)
  }

  const addOrderDelivered = (order) => {
    const dataEditOrder = {
      status: 'delivered',
      dateProcessedDelivered: new Date().toLocaleString('sv-SE')
    }
    requestHTTPEditStatusOrder(dataEditOrder, order.id, tokenAccess).then((res) => {
      console.log(res)
    })

  }

  return (
    <>
      <header className='headerApp'>
        <h1 className='titleApp'>BURGER QUEEN</h1>
        <nav>
      <ul>
        <li>
        <Link className='buttonOrdersWaiter'to="/profile/waiter">Home</Link>
        </li>
        <li>
        <Link  className='buttonLogOut' to="/">Log Out</Link>
        </li>
      </ul>
    </nav>
    <Outlet/>
      </header>
      <main>
        <Form className="selectMenu">
          <Form.Select onChange={handleChangeSelector} >
            <option>Select the order type</option>
            <option value='ready'>Ready Orders</option>
            <option value='delivered'>Delivered Orders</option>
          </Form.Select>
        </Form>
        <section className="containerOrders">
          {readyOrders.map((order, index) =>
            <CardsOrdersWaiter key={index} order={order} addOrderDelivered={addOrderDelivered} />)}
        </section>
        <section className="containerOrders">
          {deliveredOrders.map((order, index) =>
            <CardsOrdersDeliveredWaiter key={index} order={order} />)}
        </section>
      </main>
    </>
  )

}