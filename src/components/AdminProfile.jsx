import '../styles.css'
import { useNavigate } from "react-router-dom";
// import { Navigation } from "./Navigation"
import { TableProducts } from '../TableProductsAdmin'
import { TableUsers } from '../TableUsersAdmin'
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function AdminProfile() {
    const navigate = useNavigate();
    const handleBack = () => navigate("/")

    const [clickUsers, setClickUsers] = useState(false);
    const [clickProducts, setClickProducts] = useState(true);

    const handleNavUsers = () => {
        setClickUsers(true);
        setClickProducts(false);
    };

    const handleNavProducts = () => {
        setClickProducts(true);
        setClickUsers(false);
    };


    return (
        <>
        <header className='headerApp'>
        <h1 className='titleApp'>BURGER QUEEN</h1>
        <button  className='buttonLogOut' onClick={handleBack}>Log Out</button>
    </header>
        <main className='backgroundAdmin'>
            <section>
                <nav>
                    <ul className='navAdmin'>
                        <li>
                            <Link className='menuAdmin' onClick={handleNavProducts}>Products</Link>
                        </li>
                        <li> <Link className='menuAdmin' onClick={handleNavUsers}>Users</Link></li>
                    </ul>
                </nav >
                <article className='feedAdmin'>
                    {clickUsers ? <TableUsers /> : undefined}
                    {clickProducts ? <TableProducts /> : undefined}
                </article>
            </section>
        </main>
        </>
    )
}

export { AdminProfile }
