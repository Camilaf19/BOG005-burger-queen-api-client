import '../styles.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { TableProducts} from '../TableProductsAdmin';



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
                        <li> <Link to="/profile/admin/products" /* getProduct={<GetProductosAdmin />} */ className='menuAdmin'>Products</Link></li>
                        <li> <Link className='menuAdmin'>Users</Link></li>
                    </ul>
                </nav>
                <article className='feedAdmin'>
               {/*  <TableProducts products={getProductosAdmin}></TableProducts> */}
                    <button className='buttonNewProduct'>Add new product + </button>
                </article>
                <button className='buttonSaveAll'>Save</button>
            </section>
        </main>
    )
}

export { AdminProfile }