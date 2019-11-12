import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import icon from "../assets/images/logo-nav.png";
import "../pages/index.js";
import "../assets/css/main.css";

class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <a id="logo" href="#home"> <img src={icon} alt="Logo"></img></a>
                <nav>
                    <ul>
                        <li>
                            <a href="#about">Sobre mi</a>
                        </li>
                        <li>
                            <a href="#classes">Clases</a>
                        </li>
                        <li>
                            <a href="#contact">Contactar</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation