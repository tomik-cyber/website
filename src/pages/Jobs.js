import React, { useState } from 'react';
import '../styles/Jobs.css';

const initialJobs = [
    { title: "Website Development", description: "Looking for a React developer to build a landing page." },
    { title: "Logo Design", description: "Need a professional logo for a startup." },
    { title: "SEO Optimization", description: "Improve search ranking for an e-commerce site." }
];

const Jobs = () => {
    const [jobs, setJobs] = useState(initialJobs);
    const [newJob, setNewJob] = useState({ title: "", description: "" });
    const [search, setSearch] = useState("");

    const addJob = () => {
        if (newJob.title.trim() !== "" && newJob.description.trim() !== "") {
            setJobs([...jobs, newJob]);
            setNewJob({ title: "", description: "" });
        }
    };

    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="jobs-container">
            <h1>Available Jobs</h1>

            {/* Фильтр по названию */}
            <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="filter-input"
            />

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
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, index) => (
                        <div key={index} className="job-card">
                            <h3>{job.title}</h3>
                            <p>{job.description}</p>
                            <button>Apply</button>
                        </div>
                    ))
                ) : (
                    <p>No jobs found.</p>
                )}
            </div>
        </div>
    );
};

export default Jobs;
