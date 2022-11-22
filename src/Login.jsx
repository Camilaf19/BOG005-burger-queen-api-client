import './styles.css'

export function LoginView() {
    return (
        <main className='backgroundLogin' >
            <section className='logoContainer'>
                <img className='logo' src={require('./img/logo.png')}
                    alt='Logo Burguer Queen' />
            </section>
            <section className='formContainer'>
                <form className='formLogin'>
                    <p className='formP'>Email:</p>
                    <input className='inputLogin' type='text' name='email' />
                    <p className='formP'>Password:</p>
                    <input className='inputLogin' type='password' name='password' />
                    <button className='buttonLogin'>Sign In</button>
                </form>
            </section>
        </main >
    )
};