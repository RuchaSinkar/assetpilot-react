import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <header className="site-header">
            <div className="container">
                <div className="logo">AssetPilot</div>
                <button className="hamburger" id="hamburger">&#9776;</button>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/report">Report</Link>
                    <a href="#">About</a> {/* This can be a Link too if you create an About page */}
                    <button className="signbtn" onClick={() => navigate('/signin')}>
                        <p>Sign in</p>
                    </button>
                </nav>
            </div>
        </header>
    );
}
export default Navbar;