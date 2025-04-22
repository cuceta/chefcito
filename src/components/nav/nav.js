import React from 'react';
import { Link } from 'react-router-dom';      // ← import Link
import './nav.css';
import hatLogo from '../../img/hatLogo.png';

const Nav = () => (
    <div className="nav">
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/breakfast">BREAKFAST</Link>
            </li>
            <li className="nav-item">
                <Link to="/lunch">LUNCH</Link>
            </li>
            <li className="nav-item logo">
                <Link to="/home">
                    <img src={hatLogo} alt="Logo" className="site-logo" />
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/dinner">DINNER</Link>
            </li>
            <li className="nav-item">
                <Link to="/snack">SNACK</Link>
            </li>
        </ul>
    </div>
);

export default Nav;
