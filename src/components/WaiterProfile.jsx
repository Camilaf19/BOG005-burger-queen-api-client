import React, { useEffect, useState } from "react";
import {  requestHTTPGetProducts } from '../requests';
import { CardsProductsWaiter } from "../CardsProductosWaiter";

import { useNavigate } from "react-router-dom";
import '../styles.css'
const tokenAccess = localStorage.getItem('loginToken');


export const WaiterProfile = () => {

    const navigate = useNavigate();
    const handleBack = () => navigate("/")
    const [products, setProducts] = useState([]);
 /*    const [orderList, setOrderList] = useState([]); */

 const getProductsMenu = () => { 
 requestHTTPGetProducts(tokenAccess).then((res) => {
    setProducts(res.map((product) => {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            type: product.type,
        }
    }))
})}
    useEffect(() => {
        getProductsMenu()
    }, [])



    return (
        <main className='backgroundWaiter'>
            <header className='headerApp'>
                <h1 className='titleApp'>BURGER QUEEN</h1>
                <button onClick={handleBack}>Log Out</button>
            </header>
            <section>
                {products.map((product, index) =>
                    <CardsProductsWaiter key={index} id={product.id} image={product.image} name={product.name} price={product.price} type={product.type} />
                )}
            </section>
            <section>
        {/*     <Cart/> */}
        </section>
 </main >
)

}