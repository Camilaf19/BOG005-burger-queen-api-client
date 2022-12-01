import '../styles.css'
import { Link, Outlet} from "react-router-dom";
import { useNavigate } from "react-router-dom";


function AdminProfile() {
    const navigate = useNavigate();
    const handleBack = () => navigate("/")
    

    return (
        <main className='backgroundAdmin'>
            <header className='headerApp'>
                <h1 className='titleApp'>BURGER QUEEN</h1>
                <button onClick={handleBack}>Back</button>
            </header>
            <section>
                <nav >
                    <ul className='navAdmin'>
                        <li>
                             <Link to="/products"  className='menuAdmin'>Products</Link>
                             </li>
                        <li> <Link to="/users" className='menuAdmin'>Users</Link></li>
                    </ul>
                </nav>
                <Outlet />
                <article className='feedAdmin'>
                    <button className='buttonNewProduct'>Add new product + </button>
                </article>
                <button className='buttonSaveAll'>Save</button>
            </section>
        </main>
    )
}

export { AdminProfile }