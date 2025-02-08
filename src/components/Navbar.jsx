import React from 'react';
import "../styles.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand h1" href="/">Mi Portafolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link custom-nav-link" href="#sobremi">Sobre mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link custom-nav-link" href="#proyectos">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link custom-nav-link" href="#experiencia">Experiencia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link custom-nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;