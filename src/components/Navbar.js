import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Freelance Platform</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/find-freelancers">Find Freelancers</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
