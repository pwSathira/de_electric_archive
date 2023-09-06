import React from "react";
import "./Pages.css";
import StylizedText from "./StylizedText";
export const About = () => {
    return (
        <div className="MainContainer">
            <h1 className="Heading1">About Our Company</h1>
            <div className="TextContainer">
                <StylizedText
                    text="Dnipro Electrics, a premier electricians business, provides excellent residential, commercial, and industrial electrical services.
                Our skilled team handles installations, repairs, maintenance, and upgrades with precision.
                Committed to customer satisfaction, we ensure safe and efficient electrical systems.
                Dnipro Electrics:
                Lighting your spaces and powering your future."
                    underlineWords={['excellent,', 'today?']}
                    italicWords={['ensure', 'premier']}
                />
            </div>

        </div>
    );
};