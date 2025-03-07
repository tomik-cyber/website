import React, { useState } from 'react';
import '../styles/Jobs.css';

const Jobs = () => {
    const [jobs, setJobs] = useState([
        { title: "Website Development", description: "Looking for a React developer to build a landing page." },
        { title: "Logo Design", description: "Need a professional logo for a startup." },
        { title: "SEO Optimization", description: "Improve search ranking for an e-commerce site." }
    ]);
    
    const [newJob, setNewJob] = useState({ title: "", description: "" });

    const addJob = () => {
        if (newJob.title.trim() !== "" && newJob.description.trim() !== "") {
            setJobs([...jobs, newJob]);
            setNewJob({ title: "", description: "" });
        }
    };

    return (
        <div className="jobs-container">
            <h1>Available Jobs</h1>
            
            {/* Форма для добавления нового заказа */}
            <div className="job-form">
                <input
                    type="text"
                    placeholder="Job Title"
                    value={newJob.title}
                    onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                />
                <textarea
                    placeholder="Job Description"
                    value={newJob.description}
                    onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                />
                <button onClick={addJob}>Post Job</button>
            </div>

            {/* Список заказов */}
            <div className="jobs-list">
                {jobs.map((job, index) => (
                    <div key={index} className="job-card">
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                        <button>Apply</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobs;

