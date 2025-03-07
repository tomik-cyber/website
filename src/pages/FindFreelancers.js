import React from 'react';
import '../styles/FindFreelancers.css';

const FindFreelancers = () => {
    return (
        <div className="freelancers-container">
            <h1>Find Top Freelancers</h1>
            <div className="freelancers-list">
                <div className="freelancer-card">
                    <img src="https://source.unsplash.com/100x100/?person" alt="Freelancer" />
                    <h3>Narzhan Nurislam</h3>
                    <p>Web Developer</p>
                    <button>View Profile</button>
                </div>
                <div className="freelancer-card">
                    <img src="https://source.unsplash.com/100x100/?business" alt="Freelancer" />
                    <h3>Berikbolova Sayazhan</h3>
                    <p>Graphic Designer</p>
                    <button>View Profile</button>
                </div>
                <div className="freelancer-card">
                    <img src="https://source.unsplash.com/100x100/?technology" alt="Freelancer" />
                    <h3>Aitkazin Anuar</h3>
                    <p>SEO Expert</p>
                    <button>View Profile</button>
                </div>
                <div className="freelancer-card">
                    <img src="https://source.unsplash.com/100x100/?coding" alt="Freelancer" />
                    <h3>Aibossyn Talgat</h3>
                    <p>Mobile App Developer</p>
                    <button>View Profile</button>
                </div>
                <div className="freelancer-card">
                    <img src="https://source.unsplash.com/100x100/?marketing" alt="Freelancer" />
                    <h3>Orynbaeva Tomiris</h3>
                    <p>Digital Marketer</p>
                    <button>View Profile</button>
                </div>
            </div>
        </div>
    );
};

export default FindFreelancers;
