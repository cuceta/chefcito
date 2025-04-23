import React from 'react';
import "./footer.css";
import hatAndNameLogo from "../../img/hatAndNameLogoGold.png";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer id="page-footer" className="footer">
            <div className="contact">
                <h4>For recipe recommendations:</h4>
                <p>CONTACT US AT chefcito.recommendations@gmail.org</p>
            </div>

            <div className="small-logo">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                    <img src={hatAndNameLogo} alt="hat and chefcito logo"/>
                </Link>
            </div>

            <div className="copyright-info">
                <h4>
                    Copyright &copy; 2025 Chefcito. All rights reserved
                </h4>
            </div>
        </footer>
    );
};

export default Footer;