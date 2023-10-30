import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from './DPELogoALT1080.png';


function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo" onClick={closeMobileMenu}>
                        <img src={logo} alt="Dnipro Electrics Logo" className="logo-img" />
                    </NavLink>

                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/quotes"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Quotes
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/gallery"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Gallery
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;