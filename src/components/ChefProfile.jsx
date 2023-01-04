import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestHTTPGetOrders } from "../requests";
import {CardsOrdersKitchen} from "../CardsOrdersKitchen.js"

export function ChefProfile() {
    const navigate = useNavigate();
    const handleBack = () => navigate("/")
    const [ordersKitchen, setOrdersKitchen] = useState([]) 
    const tokenAccess = localStorage.getItem('loginToken');

    console.log(ordersKitchen)

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
        if (pendingOrders.length !== 0) { 
    return (
        <main className='backgroundWaiter'>
            <header className='headerApp'>
                <h1 className='titleApp'>BURGER QUEEN</h1>
                <button className='buttonLogOut' onClick={handleBack}>Log Out</button>
            </header>
            <section>  
              <h2> Pending Orders:</h2>
              {pendingOrders.map((order, index) =>  
            <CardsOrdersKitchen  key={index} order={order} /> )}
               </section>
        </main>
    )
}
}