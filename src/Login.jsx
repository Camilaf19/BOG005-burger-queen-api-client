import './styles.css'

export function LoginView() {
    return (
        <main className='backgroundLogin' >
            <section>
                <img src={require('./img/logo.png')}
                    alt='Logo Burguer Queen' />
            </section>
            <section>
                <form>
                    <p className='formP'>Email:</p>
                    <input type='text' name='email' />
                    <p className='formP'>Password:</p>
                    <input type='password' name='password' />
                    <button>Sign In</button>
                </form>
            </section>
        </main >
    )
};