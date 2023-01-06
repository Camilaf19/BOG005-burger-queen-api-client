import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestHTTPGetOrders } from "../requests";
import { CardsOrdersKitchen } from "../CardsOrdersKitchen.js"
import { requestHTTPEditStatusOrder } from "../requests";

export function ChefProfile() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/")
  const [ordersKitchen, setOrdersKitchen] = useState([])
  const tokenAccess = localStorage.getItem('loginToken');

  useEffect(() => {
    requestHTTPGetOrders(tokenAccess).then((res) => {
      setOrdersKitchen(res)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pendingOrders = ordersKitchen.filter((order) => {
    if (order.status === "pending") {
      return true
    }
    return false
  })

  const addOrderReady = (order) => {
    const dataEditOrder = {
      status: 'ready',
      dateProcessed: new Date().toLocaleString('sv-SE')
    }
    requestHTTPEditStatusOrder(dataEditOrder, order.id, tokenAccess).then((res) => {
      console.log(res)
  })}
  
  if (pendingOrders.length !== 0) {
    return (
      <>
        <header className='headerApp'>
          <h1 className='titleApp'>BURGER QUEEN</h1>
          <button className='buttonLogOut' onClick={handleBack}>Log Out</button>
        </header>
        <main className='backgroundWaiter'>
          <section className="containerOrdersChef">
            <h2 className="pendingTitle"> Pending Orders:</h2>
            <section className="containerPendingOrders">
              {pendingOrders.map((order, index) =>
                <CardsOrdersKitchen key={index} order={order} addOrderReady={addOrderReady} />)}
            </section>
          </section>
        </main>
      </>
    )
  }
}