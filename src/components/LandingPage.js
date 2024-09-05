import React from 'react';
import '../styles/LandingPage.css';
import DonatyIcon from '../assets/donaty-logo.svg';
import MailIcon from '../assets/mail-icon.svg';
import PhoneIcon from '../assets/phone-call.png';
import HeartIcon from '../assets/heart-icon.svg';
import TwitterIcon from '../assets/twitter-icon.svg';
import InstagramIcon from '../assets/instagram-icon.svg';
import FacebookIcon from '../assets/facebook-icon.svg';
import YoutubeIcon from '../assets/youtube-icon.svg';
import ActivitiesIcon from '../assets/activities-icon.svg';
import DropDownIcon from '../assets/drop-icon.svg';
import DonateIcon from '../assets/donate-heart.svg';
import GPayIcon from '../assets/g-pay.svg';
import ApplePayIcon from '../assets/apple-pay.svg';
import useMobileView from '../hooks/useMobileView';
const LandingPage = () => {
  const isMobileView = useMobileView();
  return (
    <div>
      {isMobileView ? (
        <div className="landing-page">
          <header className="header">
            <div className="header-top">
              <div className="header-contact">
                <span><img src={PhoneIcon} alt="Phone Icon" /> +1-206-156 2849</span>
                <span><img src={MailIcon} alt="Mail Icon"  /> info@donaty.com</span>
              </div>
              <nav className="nav">
                <a href="#"><img src={TwitterIcon} alt="Twitter Icon" /></a>
                <a href="#"><img src={InstagramIcon} alt="Instagram Icon" /></a>
                <a href="#"><img src={FacebookIcon} alt="Facebook Icon" /></a>
                <a href="#"><img src={YoutubeIcon} alt="Youtube Icon" /></a>
              </nav>
            </div>
          </header>

          <header className="header2">
            <div className="header-top2">
            </div>
            <div className="header-bottom">
              <a href="#" className="logo"><img src={DonatyIcon} alt="Donaty Icon" width="24.44" height="32" /> <p className='logo-text'>Donaty</p> </a>
              <button className="donate-button"><span className='button-text'>Donate Now</span> <img src={HeartIcon} alt="Heart Icon" width="12" height="10" /></button>
            </div>

            <div className="header-bottom2">
                <nav className="main-nav">
                  <div className="dropdown">
                    <a href="#" className="dropdown-toggle">Who we are <span className="dropdown-icon"> <img src={DropDownIcon} alt="Heart Icon" width="15" height="12" /></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Our Mission</a></li>
                      <li><a href="#">Team</a></li>
                    </ul>
                  </div>
                  <a href="#">Our Campaign</a>
                  <a href="#">News</a>
                  <a href="#">Contact Us</a>
                </nav>
              
              </div>
          </header>

          <div className='primary-section'>

            <section className="main-section">
              <strong>TRUSTED CHARITY COMPANY</strong>
              <h1>
                Let’s Help And Make People Smile By <span>Giving</span> Of Yours
              </h1>
              <p>
                No matter how small the donation you give will mean a lot to them, let’s donate now to help fellow humans in need.
              </p>
              <div className='main-buttons'>
                <button className="get-started-button">Get Started</button>

                <button className="activity-button"><img src={ActivitiesIcon} alt="Heart Icon" width="55" /></button>
              </div>
            </section>

              <section className="campaign-section">
                <div className="design-border"></div>
                <div className="campaign-card">
                  <div className="campaign-tag">Education</div>
                  <div className='donate-heart'><img src={DonateIcon} alt="Heart Icon" width="70" height="70" /></div>
                  <h2>Help Children Get out of Poverty & have a Future</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                  </p>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '29%' }}></div>
                  </div>
                  <div className="campaign-stats">
                    <span>$105,480 Raised</span>
                    <span>$20,000 Goal</span>
                  </div>
                  <div className="payment-buttons">
                    <button className="apple-pay-button"><img src={ApplePayIcon} alt="Phone Icon"/></button>
                    <button className="google-pay-button"><img src={GPayIcon} alt="Phone Icon" /></button>
                  </div>
                </div>
              </section>
          </div>
        </div>
      ) : (
        <div className="landing-page">
          <header className="header">
            <div className="header-top">
              <div className="header-contact">
                <span><img src={PhoneIcon} alt="Phone Icon" width="15" height="12" /> +1-206-156 2849</span>
                <span><img src={MailIcon} alt="Mail Icon" width="15" height="12" /> info@donaty.com</span>
              </div>
              <nav className="nav">
                <a href="#"><img src={TwitterIcon} alt="Twitter Icon" /></a>
                <a href="#"><img src={InstagramIcon} alt="Instagram Icon" /></a>
                <a href="#"><img src={FacebookIcon} alt="Facebook Icon" /></a>
                <a href="#"><img src={YoutubeIcon} alt="Youtube Icon" /></a>
              </nav>
            </div>
          </header>

          <header className="header2">
            <div className="header-top2">
            </div>
            <div className="header-bottom">
              <a href="#" className="logo"><img src={DonatyIcon} alt="Donaty Icon" width="44.44" height="62" /> <p className='logo-text'>Donaty</p> </a>
              <div className="header-bottom2">
                <nav className="main-nav">
                  <div className="dropdown">
                    <a href="#" className="dropdown-toggle">Who we are <span className="dropdown-icon"> <img src={DropDownIcon} alt="Heart Icon" width="15" height="12" /></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Our Mission</a></li>
                      <li><a href="#">Team</a></li>
                    </ul>
                  </div>
                  <a href="#">Our Campaign</a>
                  <a href="#">News</a>
                  <a href="#">Contact Us</a>
                </nav>
                <button className="donate-button"><span className='button-text'>Donate Now</span> <img src={HeartIcon} alt="Heart Icon" width="15" height="12" /></button>
              </div>
            </div>
          </header>

          <div className='primary-section'>

            <section className="main-section">
              <strong>TRUSTED CHARITY COMPANY</strong>
              <h1>
                Let’s Help And Make People Smile By <span>Giving</span> Of Yours
              </h1>
              <p>
                No matter how small the donation you give will mean a lot to them, let’s donate now to help fellow humans in need.
              </p>
              <div className='main-buttons'>
                <button className="get-started-button">Get Started</button>

                <button className="activity-button"><img src={ActivitiesIcon} alt="Heart Icon" width="70" /></button>
              </div>
            </section>

            <div className="campaign-section-main">
              <section className="campaign-section">
                <div className="design-border"></div>
                <div className="campaign-card">
                  <div className='donate-heart'><img src={DonateIcon} alt="Heart Icon" width="90" height="90" /></div>
                  <div className="campaign-tag">Education</div>
                  <h2>Help Children Get out of Poverty & have a Future</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                  </p>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '29%' }}></div>
                  </div>
                  <div className="campaign-stats">
                    <span>$105,480 Raised</span>
                    <span>$20,000 Goal</span>
                  </div>
                  <div className="payment-buttons">
                    <button className="apple-pay-button"><img src={ApplePayIcon} alt="Phone Icon" width="140" /></button>
                    <button className="google-pay-button"><img src={GPayIcon} alt="Phone Icon" width="140" /></button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default LandingPage;
