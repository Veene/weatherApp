import React from 'react';
import './Navbar.css'

const navbar = (props) => {
    return (
        <div className="Navbar">
            <li className="Navbar-li">
                <a className="Navbar-a" style={{color:"white"}} href="/">HOME</a>
            </li>
            <li className="Navbar-li">
                <a className="Navbar-a" style={{color:"white"}} href="/">SEARCH</a>
            </li>
        </div>
    )
}
export default navbar;