import '../styles.css'
import React, { useState } from 'react';
import { requestHTTPLogin } from '../requests';
import { useNavigate } from "react-router-dom";
import ModalWrongUser from "../Modals.js"

export function LoginView() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const getRequestHTTPLogin = await requestHTTPLogin(email, password)
        
        if (getRequestHTTPLogin === "Cannot find user") {
             <ModalWrongUser/>
        } else if ("accessToken" in getRequestHTTPLogin) {
             navigate("profile/admin")    
             const token= getRequestHTTPLogin.accessToken
             window.localStorage.setItem("loginToken", token);
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
                    <ModalWrongUser/>
                </form>
            </section>
        </main >
        
    )
};

//<button className='buttonLogin' type='submit'>Log In</button>




