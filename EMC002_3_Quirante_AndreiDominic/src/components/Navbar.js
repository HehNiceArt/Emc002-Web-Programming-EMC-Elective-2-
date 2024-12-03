import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div className="Navbar-Container">
            <div style={{ 'marginLeft': 'auto', 'display': 'flex' }}>
                <li className="Nav-li"><Link to='/'>Home</Link></li>
                <li className="Nav-li"><Link to='/Card'>Card</Link></li>
                <li className="Nav-li"><Link to='/About'>About</Link></li>
                <li className="Nav-li"><Link to='/Counter'>Counter</Link></li>
                <li className="Nav-li"><Link to='/Contact'>Contact</Link></li>
            </div>
        </div>
    )
}