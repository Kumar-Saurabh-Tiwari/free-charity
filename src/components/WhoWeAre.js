import React from 'react';
import '../styles/WhoWeAre.css'; // Importing the CSS file for styling
import DonateChildrens from '../assets/donate-childrens.svg';
import DonateChildrens2 from '../assets/donate-childrens2.svg';
import DonateChildLogo from '../assets/donate-child-logo.svg';
const WhoWeAre = () => {
    return (
        <div className="who-we-are-container">
            <div className="image-section">
                <div className="main-image">
                    <img src={DonateChildrens} alt="Childrenn" />
                </div>
                <div className="overlay-image">
                    <img src={DonateChildrens2} alt="Mother and child" />
                </div>
                <div className="icon">
                    <img src={DonateChildLogo} alt="Mother and child" />
                </div>
            </div>
            <div className="text-section">
                <strong className="subtitle">Who we are</strong>
                <h1 className="title">We’re Non-Profit Charity & NGO Organization</h1>
                <p className="description">
                    Join us and make your life more valuable and useful, be a part of us and contribute to the nation and state and the simplest for the environment and yourself.
                </p>
                <ul className="benefits-list">
                    <li>
                        <span className="check-icon">&#x2714;</span> Support people in extreme need
                    </li>
                    <li>
                        <span className="check-icon">&#x2714;</span> Largest global crowdfunding community
                    </li>
                    <li>
                        <span className="check-icon">&#x2714;</span> Make the world a better place
                    </li>
                    <li>
                        <span className="check-icon">&#x2714;</span> Share your love for community
                    </li>
                </ul>
                <button className="about-us-button">About Us</button>
            </div>
        </div>
    );
};

export default WhoWeAre;
