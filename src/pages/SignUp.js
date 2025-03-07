import React from 'react';
import '../styles/SignUp.css';

const SignUp = () => {
    return (
        <div className="signup-container">
            <h2>Create an Account</h2>
            <form>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
