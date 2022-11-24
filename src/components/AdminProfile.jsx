import '../styles.css'
//import { ArrowRightFromArc} from "@fortawesome/free-regular-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//<FontAwesomeIcon icon="fa-regular fa-arrow-right-from-arc" />


export function AdminProfile() {
    return (
        <main className='backgroundAdmin'>
            <header className='headerApp'>
                <h1 className='titleApp'>BURGER QUEEN</h1>
                <button>Back</button>
            </header>
            <section>
                <nav >
                    <ul className='navAdmin'>
                        <li><a className='menuAdmin' href="#">Products</a></li>
                        <li><a className='menuAdmin' href="#">Users</a></li>
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