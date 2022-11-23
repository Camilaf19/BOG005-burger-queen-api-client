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
                    <ul className='listProductsAdmin'>
                        <li className='productAdmin'><img className='imageProductAdmin' 
                        src={require('../img/coffee.png')} alt='Product Image' />American Coffee</li>
                        <li className='productAdmin'><img className='imageProductAdmin' 
                        src={require('../img/coffewithmilk.png')} alt='Product Image' />Coffee With Milk</li>
                        <li className='productAdmin'><img className='imageProductAdmin' 
                        src={require('../img/sandwich.png')} alt='Product Image'/>Ham and Cheese Sandwich</li>
                        <li className='productAdmin'><img className='imageProductAdmin' 
                        src={require('../img/juice.png')} alt='Product Image' />Natural Fruit Juice</li>
                        <li className='productAdmin'>Simple Hamburger</li>
                        <li className='productAdmin'>Double hamburger</li>
                        <li className='productAdmin'>French Fries</li>
                        <li className='productAdmin'>Onion Rings</li>
                        <li className='productAdmin'>Water 500ml</li>
                        <li className='productAdmin'>Water 750ml</li>
                        <li className='productAdmin'>Drink/Soda 500ml</li>
                        <li className='productAdmin'>Drink/Soda 750ml</li>
                    </ul>
                    <button className='buttonNewProduct'>Add new product + </button>
                </article>
                <button className='buttonSaveAll'>Save</button>
            </section>
        </main>
    )
}