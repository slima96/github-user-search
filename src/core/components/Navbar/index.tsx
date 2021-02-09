import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {
    return (
        <NavLink to="/" className="nav-link">
            <div className="navbar-container">
                <h1 className="navbar-title">Bootcamp DevSuperior</h1>
            </div>
        </NavLink>
    );
}

export default Navbar;