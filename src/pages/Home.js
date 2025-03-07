import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to DeepCoders</h1>
            <p>The best place to find top freelancers or start your own freelance journey.</p>
            <div className="home-buttons">
                <Link to="/signup" className="btn">Join as Freelancer</Link>
                <Link to="/login" className="btn">Hire a Freelancer</Link>
            </div>

            <div className="categories">
                <div className="category-card">
                    <h3>Web Development</h3>
                    <p>Find top developers for your project.</p>
                </div>
                <div className="category-card">
                    <h3>Graphic Design</h3>
                    <p>Get creative designs from the best freelancers.</p>
                </div>
                <div className="category-card">
                    <h3>Marketing</h3>
                    <p>Boost your brand with expert marketers.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
