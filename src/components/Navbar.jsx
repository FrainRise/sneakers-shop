import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render(){
        return (
            <nav className="nav-wrapper black">
                <div className="container">
                    <Link to='/' className="brand-logo">Shopping</Link>
                    <ul className="right">
                        <li><Link to='/'>Shop</Link></li>
                        <li><Link to='/cart'>My Cart</Link></li>
                        <li><Link to='/cart'><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>  
            </nav>
        )
    }
}

export default Navbar;