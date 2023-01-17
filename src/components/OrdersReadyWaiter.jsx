import { requestHTTPGetOrders, requestHTTPEditStatusOrder } from "../requests";
import { CardsOrdersWaiter } from "../CardsOrdersWaiter";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { CardsOrdersDeliveredWaiter } from "../CardsOrdersDeliveredWaiter";

export const OrdersReadyWaiter = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate("/")
    const handleHome = () => navigate("profile/waiter/")
    const [readyOrders, setReadyOrders] = useState([])
    const [deliveredOrders, setDeliveredOrders] = useState([])
    const [ordersReadyWaiter, setOrdersReadyWaiter] = useState([])
    const tokenAccess = localStorage.getItem('loginToken');

    useEffect(() => {
        requestHTTPGetOrders(tokenAccess).then((res) => {
          setOrdersReadyWaiter(res)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      const handleChangeSelector = (event) => {

        const readyFilter = ordersReadyWaiter.filter((order) => event.target.value === order.status && order.status === 'ready')
        setReadyOrders(readyFilter)
        const deliveredFilter = ordersReadyWaiter.filter((order) => event.target.value === order.status && order.status === 'delivered')
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
                <button className='buttonOrdersWaiter' onClick={handleHome}>Home</button>
                <button className='buttonLogOut' onClick={handleBack}>Log Out</button>
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
              <CardsOrdersDeliveredWaiter key={index} order={order}/>)}
          </section>
            </main>
        </>
    )

}