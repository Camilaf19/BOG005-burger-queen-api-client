import '../styles.css'
import {  Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { requestHTTPGetProductsAdmin } from '../requests';

//import { ArrowRightFromArc} from "@fortawesome/free-regular-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//<FontAwesomeIcon icon="fa-regular fa-arrow-right-from-arc" />


export function AdminProfile() {
    const navigate = useNavigate();
    function handleBack () {
        navigate("/") 
    }
 const getProductosAdmin = async () => {
    let tokenAccess= localStorage.getItem('loginToken');
   const example = await requestHTTPGetProductsAdmin(tokenAccess)
    console.log(example)
 }
    getProductosAdmin()


    return (
        <main className='backgroundAdmin'>
            <header className='headerApp'>
                <h1 className='titleApp'>BURGER QUEEN</h1>
                <button onClick={handleBack}>Back</button>
            </header>
            <section>
                <nav >
                    <ul className='navAdmin'>
                        <li> <Link  className='menuAdmin'>Products</Link></li>
                        <li> <Link  className='menuAdmin'>Users</Link></li>
                    </ul>
                </nav>
                <article className='feedAdmin'>
                    
                    <button className='buttonNewProduct'>Add new product + </button>
                </article>
                <button className='buttonSaveAll'>Save</button>
            </section>
        </main>
    )
}