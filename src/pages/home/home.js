import React from 'react';
import Nav from "../../components/nav/nav";
import './home.css'
import hatAndNameLogo from "../../img/hatAndNameLogo.png"
import ExploreSection from "../../components/ExploreSection/ExploreSection";

const Home = () => {
    return (
        <div className="home">
            <img className="HatNameLogo" src={hatAndNameLogo} alt="hat and chefcito logo"/>
            <p className="slogan">Cooking Made Simple & Fun! Discover easy, delicious recipes for every <br/>
                meal of the day, designed with your
                busy life in mind.
            </p>

            <h1 className="sectionHeader">
                EXPLORE OUR DELICIOUS RECIPES
            </h1>

            <div className="features">
                <ExploreSection/>
            </div>

            <hr/>

        </div>
    );
};

export default Home;