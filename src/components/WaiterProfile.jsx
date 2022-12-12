import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { requestHTTPGetProducts } from '../requests';
import { CardsProductsWaiter } from "../CardsProductosWaiter";
import { Cart } from '../Cart';
import { useNavigate } from "react-router-dom";
import '../styles.css'
const tokenAccess = localStorage.getItem('loginToken');


export const WaiterProfile = () => {

  const navigate = useNavigate();
  const handleBack = () => navigate("/")
  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState([]);
  const [productSelect, setProductSelect] = useState([])

  useEffect(() => {
    requestHTTPGetProducts(tokenAccess).then((res) => {
      setProducts(res)
    })
  }, [])

  function handleChangeSelector(event) {
    const result = products.filter((product) => {
      if (event.target.value === product.type) {
        return true
      }
      return false
    })
    setMenu(result)
  }



  return (
    <main className='backgroundWaiter'>
      <header className='headerApp'>
        <h1 className='titleApp'>BURGER QUEEN</h1>
        <button onClick={handleBack}>Log Out</button>
      </header>
      <Form className="select-menu">
        <Form.Select onChange={handleChangeSelector}>
          <option>Select a Menu</option>
          <option value="Desayuno">Breakfast</option>
          <option value="Almuerzo">Lunch</option>
        </Form.Select>
      </Form>
      <section>
        {menu.map((product) =>
          <CardsProductsWaiter key={product.id} id={product.id} image={product.image} name={product.name}
            price={product.price} type={product.type} product={product} setProductSelect={setProductSelect}
            productSelect={productSelect} />
        )}
      </section>
      <section>
        {productSelect.map((product, index) =>
          <Cart key={index} index={index} product={product} setProductSelect={setProductSelect}
            productSelect={productSelect} />
        )}
      </section>
    </main >
  )

}