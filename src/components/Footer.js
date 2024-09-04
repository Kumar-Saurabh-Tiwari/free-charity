import React from 'react';
import '../styles/Footer.css';
import locationIcon from '../assets/footer-location.svg';
import DonatyIcon from '../assets/donaty-logo.svg';
import MailIcon from '../assets/footer-mail.svg';
import PhoneIcon from '../assets/footer-call.svg';
import TwitterIcon from '../assets/footer-twitter.svg';
import InstagramIcon from '../assets/footer-insta.svg';
import FacebookIcon from '../assets/footer-facebook.svg';
import YoutubeIcon from '../assets/footer-youtube.svg';



const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <div className="footer-logo-container">
            <img src={DonatyIcon} alt="Donaty Logo" className="footer-logo" />
            <span className="footer-logo-text">Donaty</span>
          </div>
          <p>
            Whatever it is that you care about, there will be a charity working on it. Charities help in lots of different ways.
          </p>
          <div className="footer-socials">
            <img src={TwitterIcon} alt="Twitter" />
            <img src={InstagramIcon} alt="Instagram" />
            <img src={FacebookIcon} alt="Facebook" />
            <img src={YoutubeIcon} alt="YouTube" />
          </div>
        </div>

        <div className="footer-section menu">
          <h4>Menu</h4>
          <ul>
            <li>Donations</li>
            <li>Features</li>
            <li>Categories</li>
            <li>Volunteer</li>
            <li>About us</li>
          </ul>
        </div>

        <div className="footer-section about-us">
          <h4>About us</h4>
          <ul>
            <li>How it works?</li>
            <li>Contact us</li>
            <li>FAQ</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h4>Contacts Info</h4>
          <ul>
            <li>
              <img src={PhoneIcon} alt="Phone" />
              <div>
                <strong>Call Us</strong>
                <p>+1-206-156 2849</p>
              </div>
            </li>
            <li>
              <img src={MailIcon} alt="Email" />
              <div>
                <strong>Mail Us</strong>
                <p>info@donaty.com</p>
              </div>
            </li>
            <li>
              <img src={locationIcon} alt="Location" />
              <div>
                <strong>Visit Us</strong>
                <p>Your Address here</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        Donaty © 2023 Ideapeel Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
