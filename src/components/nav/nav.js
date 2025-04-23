import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import hatLogo from '../../img/hatLogo.png';

const Nav = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 900;
            setIsMobile(mobile);
            if (!mobile) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const desktopNav = (
        <ul className="nav-list">
            <li className="nav-item"><Link to="/breakfast">BREAKFAST</Link></li>
            <li className="nav-item"><Link to="/lunch">LUNCH</Link></li>
            <li className="nav-item logo">
                <Link to="/"><img src={hatLogo} alt="Logo" className="site-logo" /></Link>
            </li>
            <li className="nav-item"><Link to="/dinner">DINNER</Link></li>
            <li className="nav-item"><Link to="/snack">SNACK</Link></li>
        </ul>
    );

    const mobileNavBar = (
        <div className="mobile-nav-bar">
            <Link to="/">
                <img src={hatLogo} alt="Logo" className="site-logo" />
            </Link>
            <button
                className="hamburger-button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
            >
                {[0,1,2].map(i => <span key={i} />)}
            </button>
        </div>
    );

    const mobileMenu = (
        <div className="mobile-menu-overlay">
            <button
                className="close-button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
            >
                ×
            </button>
            <ul className="mobile-menu-list">
                {[
                    { to: '/breakfast', label: 'BREAKFAST' },
                    { to: '/lunch',     label: 'LUNCH'     },
                    { to: '/',          label: <img src={hatLogo} alt="Logo" className="site-logo" /> },
                    { to: '/dinner',    label: 'DINNER'    },
                    { to: '/snack',     label: 'SNACK'     },
                ].map(({ to, label }) => (
                    <li key={to}>
                        <Link to={to} onClick={() => setMenuOpen(false)}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="nav">
            {isMobile
                ? <>
                    {mobileNavBar}
                    {menuOpen && mobileMenu}
                </>
                : desktopNav
            }
        </div>
    );
};

export default Nav;
