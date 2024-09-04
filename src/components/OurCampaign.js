import React from 'react';
import '../styles/OurCampaign.css'; // Import the CSS for styling

// Dummy images (replace these with your actual image imports)
import campaignImage1 from '../assets/campaign1.svg';
import campaignImage2 from '../assets/campaign2.svg';
import campaignImage3 from '../assets/campaign3.svg';

const OurCampaign = () => {
  const campaigns = [
    {
      image: campaignImage1,
      title: 'Fundraising For Children And Refugees From Donbass',
      raised: '$5,200',
      goal: '$10,400',
      progress: 50,
    },
    {
      image: campaignImage2,
      title: 'Food, Water And Medicine For Shelter On The Dnieper',
      raised: '$1,124',
      goal: '$10,400',
      progress: 11,
    },
    {
      image: campaignImage3,
      title: 'Massive Invasion Of Palestine, War In The Gaza Strip',
      raised: '$28,200',
      goal: '$64,000',
      progress: 44,
    },
  ];

  return (
    <div className="our-campaign-container">
      <div className='main-titles'>
      <h3 className="section-subtitle">Our Campaign</h3>
      <h1 className="section-title">Giving Help To Those Who Need It</h1>
      </div>
      <div className="campaign-cards">
        {campaigns.map((campaign, index) => (
          <div key={index} className="campaign-card">
            <img src={campaign.image} alt={campaign.title} className="campaign-image" />
            <h5 className="campaign-title">{campaign.title}</h5>
            <div className="campaign-details">
              <div className="raised-amount">{campaign.raised}</div>
              <div className="goal-amount">{campaign.goal}</div>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${campaign.progress}%` }}
              ></div>
            </div>
            <div className="campaign-buttons">
              <button className="donate-button">Donate now</button>
              <button className="detail-button">See detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCampaign;
