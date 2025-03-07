import React, { useState } from 'react';
import '../styles/FindFreelancers.css';

const freelancersData = [
    { name: "Narzhan Nurislam", profession: "Web Developer", rating: 5 },
    { name: "Berikbolova Sayazhan", profession: "Graphic Designer", rating: 5 },
    { name: "Aitkazin Anuar", profession: "SEO Expert", rating: 5 },
    { name: "Aibossyn Talgat", profession: "Mobile App Developer", rating:  5},
    { name: "Orynbaeva Tomiris", profession: "Digital Marketer", rating: 1 }
];

const FindFreelancers = () => {
    const [freelancers, setFreelancers] = useState(freelancersData);

    const updateRating = (index, newRating) => {
        const updatedFreelancers = [...freelancers];
        updatedFreelancers[index].rating = newRating;
        setFreelancers(updatedFreelancers);
    };

    return (
        <div className="freelancers-container">
            <h1>Find Top Freelancers</h1>

            <div className="freelancers-list">
                {freelancers.map((freelancer, index) => (
                    <div key={index} className="freelancer-card">
                        <img src={`https://source.unsplash.com/100x100/?person,${freelancer.name}`} alt="Freelancer" />
                        <h3>{freelancer.name}</h3>
                        <p>{freelancer.profession}</p>

                        {/* Система рейтинга */}
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={star <= freelancer.rating ? "star filled" : "star"}
                                    onClick={() => updateRating(index, star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>

                        <button>View Profile</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FindFreelancers;
