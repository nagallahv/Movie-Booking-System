import React from "react";
import logo from "../assets/logo1.jpeg";
import '../styles/homepage.css'
function Header() {
    return (
        <header className="header">
            <div>
                <img src={logo} className="logo" />
            </div>
            <div className="home">Movie Home</div>
        </header>
    );
}

export default Header;
