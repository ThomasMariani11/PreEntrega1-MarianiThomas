import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"

const Nabvar = () => {
return (
    <nav className="navbar">
        <div className="navbar-logo">
            <h1>Street Style</h1>
        </div>
        <div className="navbar-links">
            <ul>
                <li><a href="#">INICIO</a></li>
                <li><a href="#">REMERAS</a></li>
                <li><a href="#">PANTALONES</a></li>
                <li><a href="#">ZAPATILLAS</a></li>
            </ul>
        </div>
        <CartWidget/>
    </nav>
    )
}

export default Nabvar