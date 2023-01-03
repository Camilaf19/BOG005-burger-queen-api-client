import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestHTTPGetOrders } from "../requests";
import {CardsOrdersKitchen} from "../CardsOrdersKitchen.js"

export function ChefProfile() {
    const navigate = useNavigate();
    const handleBack = () => navigate("/");
    /* const [ordersKitchen, setOrdersKitchen] = useState([]) */
    const tokenAccess = localStorage.getItem('loginToken');

    useEffect(() => {
        requestHTTPGetOrders(tokenAccess).then((res) => {
          console.log(res)
        })
      }, [])

    return (
        <main className='backgroundWaiter'>
            <header className='headerApp'>
                <h1 className='titleApp'>BURGER QUEEN</h1>
                <button className='buttonLogOut' onClick={handleBack}>Log Out</button>
            </header>
            {/* {ordersKitchen.map(order => 
               <CardsOrdersKitchen  key={order.id} order={order} /> )}
 */}

        </main>
    )
}
