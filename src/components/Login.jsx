import '../styles.css'
import React, { useState } from 'react';

const loginUser = async (email, password) => {
    fetch('http://localhost:8080/login', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(email, password)
    })
    
.then(res => res.json())
.then(res=> {
      console.log(res, "hello");
});
}

export function LoginView() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    async function handleSubmit(e) {
        e.preventDefault();
 const res= loginUser({email, password}).then(res=> {
    console.log(res, "dixuqe el res");
});

 if ( "accessToken.user" in res ) {
    console.log("estasbien") 
  .then(res => {
    window.location.href = "profile/admin"
  })
} else {
    alert("ya casi")

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
                    <input className='inputLogin' id='email' onChange={e => setEmail(e.target.value)} type='text' name='email' required placeholder='example@example.com'  />
                    <p className='formP'>Password:</p>
                    <input className='inputLogin' id="password" onChange={e => setPassword(e.target.value)} type='password' name='password' required placeholder='password' />
                    <button className='buttonLogin' type='submit'>Sign In</button>
                </form>
            </section>
        </main >
    )
};







