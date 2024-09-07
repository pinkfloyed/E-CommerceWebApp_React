import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login/Sign Up</Link></li>
                    <li><Link to="/products">Product List</Link></li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="home-container">
                <h1>Welcome to the E-commerce WebApp</h1>
                <p className="intro-text">Explore our vast collection of products and get amazing deals!</p>
                <div className="auth-buttons">
                    <Link to="/login">
                        <button className="home-button">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="home-button">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
