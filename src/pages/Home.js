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
        </div>
    );
};

export default Home;
