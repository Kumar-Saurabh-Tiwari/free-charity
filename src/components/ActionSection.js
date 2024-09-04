import React from "react";
import "../styles/ActionSection.css";

const ActionSection = () => {
    return (
        <div className="action-section">
            <div className="action-content">
                <div className="action-text">
                    <div>
                        <h4 className="action-subtitle">Act Now for a Better World</h4>
                        <h1 className="action-title">
                            Solutions to Help People in Need and Save the Planet
                        </h1>
                    </div>
                    <button className="donate-button">Donate Now ❤</button>
                </div>
            </div>
            <div className="stats-section">
                <div className="stat-item">
                    <h2 className="stat-value">20M</h2>
                    <p className="stat-label">Number of Supporters</p>
                </div>
                <div className="stat-item">
                    <h2 className="stat-value">15K+</h2>
                    <p className="stat-label">Volunteers Worldwide</p>
                </div>
                <div className="stat-item">
                    <h2 className="stat-value">68K+</h2>
                    <p className="stat-label">We've Helped Raise</p>
                </div>
                <div className="stat-item">
                    <h2 className="stat-value">10M+</h2>
                    <p className="stat-label">Projects Funded</p>
                </div>
            </div>
        </div>
    );
};

export default ActionSection;
