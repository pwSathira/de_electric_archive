import React from "react";
import "./Pages.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    function handleButtonClick() {
        navigate('/quotes');
    }

    return (
        <div className="MainContainerALT">
            <div className="Hero-Image">
                <div className="Hero-Text">
                    <div className="TextContainer">
                        <h1 className="Heading3">Dnipro Electric Inc.</h1>
                        <h1 className="Heading4">Powering your future</h1>
                        <button className="qButton" onClick={handleButtonClick}>Get Quoted</button>
                    </div>
                </div>
            </div>
            <div className="HomeContainer">
                <div className="col residential">
                    <h2 className="MSContainer">Residential Services</h2>
                    <p>From elegant lighting solutions to energy-efficient setups, our residential services cater to the unique needs of every home. Whether it's new installations, upgrades, or emergency repairs, our team ensures safety and satisfaction at every step.</p>
                    <button className="qButton">Learn More</button>
                </div>
                <div className="col commercial">
                    <h2 className="MSContainer">Commercial Services</h2>
                    <p>Our commercial electrical solutions power businesses of all scales. From small retail spaces to sprawling office complexes, we ensure timely services, minimizing downtime and maximizing productivity. Partner with us for a bright business future.</p>
                    <button className="qButton">Learn More</button>
                </div>
            </div>
        </div>
    );
};
