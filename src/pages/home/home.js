import React from 'react';
import Nav from "../../components/nav/nav";
import './home.css'
import hatAndNameLogo from "../../img/hatAndNameLogo.png"
import ExploreSection from "../../components/ExploreSection/ExploreSection";
import Footer from "../../components/footer/footer";

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

            <div className="mission-vision-section">
                <div className="mission">
                    <h1 className="sectionHeader">
                        OUR MISSION
                    </h1>
                    <p>
                        Our mission is to empower busy home cooks by providing easy-to-make, wholesome recipes designed
                        for meal prep success. We strive to simplify cooking with clear, approachable instructions and
                        practical tips, ensuring that everyone can enjoy nutritious and delicious meals, save time, and
                        reduce food waste—even on the busiest days.
                    </p>
                </div>

                <div className="vision">
                    <h1 className="sectionHeader">
                        OUR VISION
                    </h1>
                    <p>
                        We envision a community where the joy of cooking meets the art of efficient meal preparation.
                        Our goal is to inspire people worldwide to embrace simple, healthy recipes that transform daily
                        cooking into a stress-free and sustainable practice, fostering a healthier lifestyle and a closer
                        connection to the food we share.
                    </p>
                </div>
            </div>

            <Footer/>

        </div>
    );
};

export default Home;