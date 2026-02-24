import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand fw-bold" href="#">
                <i className="fas fa-store me-2"></i>Carrito de Compras
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Ofertas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/props">Props</Link>
                    </li>
                </ul>
                
                {/* Barra de búsqueda */}
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar productos..." aria-label="Search" />
                    <button className="btn btn-outline-light" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    </nav>
    );
}

