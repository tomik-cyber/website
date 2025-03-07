import React from 'react';
import '../styles/Jobs.css';

const Jobs = () => {
    return (
        <div className="jobs-container">
            <h1>Available Jobs</h1>
            <div className="jobs-list">
                <div className="job-card">
                    <h3>Website Development</h3>
                    <p>Looking for a React developer to build a landing page.</p>
                    <button>Apply</button>
                </div>
                <div className="job-card">
                    <h3>Logo Design</h3>
                    <p>Need a professional logo for a startup.</p>
                    <button>Apply</button>
                </div>
                <div className="job-card">
                    <h3>SEO Optimization</h3>
                    <p>Improve search ranking for an e-commerce site.</p>
                    <button>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
