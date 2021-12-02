import React from 'react'
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container-md">
                    <Link className="navbar-brand" to="/">SELECTO CLOTHES</Link>
                    <div className="d-flex justify-content-center">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Incio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/remeras">Remeras</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pantalones">Pantalones</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar