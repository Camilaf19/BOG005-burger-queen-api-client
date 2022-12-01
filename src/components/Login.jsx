import '../styles.css'
import React, { useState } from 'react';
import { requestHTTPLogin } from '../requests';
//import { useNavigate } from "react-router-dom";
import ModalWrongUser from "../Modals.js"
import { AdminProfile  } from './AdminProfile';

export function LoginView() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);

    //const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const responseRequestLogin = await requestHTTPLogin(email, password);
        const error = "Cannot find user"
        if (responseRequestLogin === error) {
            setShow(true);
        } else if ("accessToken" in responseRequestLogin) {
            const token = responseRequestLogin.accessToken;
            localStorage.setItem("loginToken", token);
            return <AdminProfile/>
        }
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
                    <input className='inputLogin' id='email' onChange={e => setEmail(e.target.value)} type='text' name='email' required placeholder='example@example.com' />
                    <p className='formP'>Password:</p>
                    <input className='inputLogin' id="password" onChange={e => setPassword(e.target.value)} type='password' name='password' required placeholder='password' />
                    <button className='buttonLogin' type='submit'>Log In</button>
                    <ModalWrongUser show={show} setShow={setShow} />
                </form>
            </section>
        </main >
    )
};
