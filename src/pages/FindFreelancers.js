import React, { useState } from 'react';
import '../styles/FindFreelancers.css';

const freelancersData = [
    { name: "Narzhan Nurislam", profession: "Web Developer" },
    { name: "Berikbolova Sayazhan", profession: "Graphic Designer" },
    { name: "Aitkazin Anuar", profession: "SEO Expert" },
    { name: "Aibossyn Talgat", profession: "Mobile App Developer" },
    { name: "Orynbaeva Tomiris", profession: "Digital Marketer" }
];

const FindFreelancers = () => {
    const [filter, setFilter] = useState("");
    const filteredFreelancers = freelancersData.filter(freelancer =>
        freelancer.profession.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="freelancers-container">
            <h1>Find Top Freelancers</h1>
            
            {/* Фильтр по профессии */}
            <input
                type="text"
                placeholder="Search by profession..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="filter-input"
            />

            <div className="freelancers-list">
                {filteredFreelancers.map((freelancer, index) => (
                    <div key={index} className="freelancer-card">
                        <img src={`https://source.unsplash.com/100x100/?person,${freelancer.name}`} alt="Freelancer" />
                        <h3>{freelancer.name}</h3>
                        <p>{freelancer.profession}</p>
                        <button>View Profile</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FindFreelancers;
