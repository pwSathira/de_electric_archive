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
                <div className="col">
                    {/*<h1 className="Heading1">1</h1>*/}
                    {/*<div className="DPE_CS"></div>*/}
                </div>
                <div className="col">
                    {/*<h1 className="Heading1">2</h1>*/}
                    <img src="  HomeImages/DPE_Commercial.png" alt="Commercial"></img>
                </div>
            </div>
        </div>
    );
};
