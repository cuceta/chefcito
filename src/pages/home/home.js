import React from 'react';
import Nav from "../nav/nav";
import './home.css'
import hatAndNameLogo from "../../img/hatAndNameLogo.png"

const Home = () => {
    return (
        <div className="home">
            <Nav></Nav>
            <img src={hatAndNameLogo} alt="hat and chefcito logo"/>
        </div>
    );
};

export default Home;