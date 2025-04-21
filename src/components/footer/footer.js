import React from 'react';
import "./footer.css";
import hatAndNameLogo from "../../img/hatAndNameLogoGold.png";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">

            </div>

            <div className="small-logo">
                <Link to="/home" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                    <img src={hatAndNameLogo} alt="hat and chefcito logo"/>
                </Link>
            </div>

            <div className="copyright-info">

            </div>
        </div>
    );
};

export default Footer;