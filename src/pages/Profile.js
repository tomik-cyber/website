import React from 'react';
import '../styles/Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <img src="https://source.unsplash.com/150x150/?person" alt="User" />
                <h2>Orynbaeva Tomiris</h2>
                <p>Digital Marketer</p>
                <p>"Helping brands grow with digital strategies."</p>
                <button>Edit Profile</button>
            </div>
        </div>
    );
};

export default Profile;
