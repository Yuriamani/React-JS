import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/"><div className="nav-logo nav-link">EV-olution</div></Link>
            <ul className='nav-menu'>
             <li><Link to="/pricing" className="nav-link">Price</Link></li>
             <li><Link to="/features" className="nav-link">Features</Link></li>
             <li><Link to="/about" className="nav-link">About</Link></li>
             <li className='nav-contact'><Link to="/contact" className="nav-link">Contact</Link></li>
             </ul>
        </div>
                )
                }


export default Navbar;