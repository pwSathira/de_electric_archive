import React from "react";
import "./Pages.css";
import StylizedText from "./StylizedText";
import { FaFacebookF, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const About = () => {
    return (
        <div className="MainContainer">
            <div className="AboutContainer"></div>
            <h1 className="MSContainer">About Our Company</h1>
            <div className="TextContainer">
                <StylizedText
                    text="Dnipro Electrics, a premier electricians business, providing excellent residential
                     and industrial electrical services. Our skilled team handles installations, repairs, maintenance,
                     and upgrades with precision. Committed to customer satisfaction, we ensure safe and efficient electrical systems."
                    underlineWords={['excellent', 'precision.', 'safe', 'efficient']}
                    italicWords={['premier', 'installations,', 'repairs,', 'maintenance,', 'upgrades', 'safe', 'efficient']}
                />
            </div>
            <h1 className="MSContainer">Lighting your spaces and powering your future.</h1>
            <div className="socialMediaRow">
                <a href="https://www.facebook.com/profile.php?id=100081929477039" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="socialIcon" />
                </a>
                <a href="mailto:info@dniproelectrics.com">
                    <FaEnvelope className="socialIcon" />
                </a>
                <a href="tel:6477005198">
                    <FaPhoneAlt className="socialIcon" />
                </a>
            </div>
        </div>
    );
};
