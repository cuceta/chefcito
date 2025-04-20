// Nav.js
import React from 'react';
import "./nav.css"
import hatLogo from "../../img/hatLogo.png";

const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav-list">
                <li className="nav-item"><a href="/breakfast">BREAKFAST</a></li>
                <li className="nav-item"><a href="/lunch">LUNCH</a></li>
                <li className="nav-item logo">
                    <a href="/">
                        <img src={hatLogo} alt="Logo" className="site-logo" />
                    </a>
                </li>
                <li className="nav-item"><a href="/dinner">DINNER</a></li>
                <li className="nav-item"><a href="/snack-baking">SNACK/BAKING</a></li>
            </ul>
        </div>
    );
};

export default Nav;
