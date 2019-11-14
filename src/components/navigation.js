import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
                            <a className="anchor" href="#about">Sobre mi</a>
                        </li>
                        <li>
                            <a className="anchor" href="#classes">Clases</a>
                        </li>
                        <li>
                            <a className="anchor" href="#contact">Contactar</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation