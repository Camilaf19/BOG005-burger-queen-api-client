import '../styles.css'
import React, { useState } from 'react';
import { requestHTTPLogin } from '../requests';
import { useNavigate, Outlet } from "react-router-dom";
import { ModalWrongUser } from "../Modals.js"

export function LoginView() {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const [dataLogin, setDataLogin] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value
        });
        return dataLogin
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        requestHTTPLogin(dataLogin).then((res) => {

            if (res.user && res.user.role === 'admin') {
                const token = res.accessToken;
                localStorage.setItem("loginToken", token);
                navigate('profile/admin')
            }
            else if (res.user && res.user.role === 'waiter') {
                const token = res.accessToken;
                const userID = res.user.id;
                localStorage.setItem("loginToken", token);
                localStorage.setItem("userId", userID);
                navigate('profile/waiter/')
                
            } else if (res.user && res.user.role === 'chef') {
                const token = res.accessToken;        
                localStorage.setItem("loginToken", token);
                navigate('profile/chef')
                
            } else {
                setShow(true);
            }
        })
    }

    return (
        <main className='backgroundLogin' >
            <section className='logoContainer'>
                <img className='logo' src={require('../img/logo-final-queenburger.png')}
                    alt='Logo Burguer Queen' />
            </section>
            <section className='formContainer'>
                <form className='formLogin' onSubmit={handleSubmit}>
                    <p className='formP'>Email:</p>
                    <input className='inputLogin' id='email' onChange={handleChange} type='text' name='email' required placeholder='example@example.com' />
                    <p className='formP'>Password:</p>
                    <input className='inputLogin' id="password" onChange={handleChange} type='password' name='password' required placeholder='password' />
                    <button className='buttonLogin' type='submit'>Log In</button>
                    <ModalWrongUser show={show} setShow={setShow} />
                </form>
            </section>
            <Outlet />
        </main >
    )
};
