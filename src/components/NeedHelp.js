import React, { useState } from "react";
import "../styles/NeedHelp.css"; // Create corresponding CSS for styling

const NeedHelp = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="need-help-container">
        <h3 className="need-help-title">Need Help?</h3>
        <h1 className="faq-title">The Answers to All Your Questions</h1>
        <p className="faq-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore.
        </p>
        <div className="accordion">
          <div className="accordion-item">
            <div
              className={`accordion-header ${
                activeIndex === 0 ? "active" : ""
              }`}
              onClick={() => toggleAccordion(0)}
            >
              How much time do I need to volunteer?
            </div>
            <div
              className={`accordion-content ${
                activeIndex === 0 ? "active" : ""
              }`}
            >
              Neque laoreet suspendisse interdum consectetur libero. Lacinia quis
              vel eros donec ac odio tempor. Massa tempor nec feugiat nisl pretium
              fusce id velit. Vestibulum lorem sed risus ultricies tristique
              nulla. Sit amet cursus sit amet dictum sit amet.
            </div>
          </div>
  
          <div className="accordion-item">
            <div
              className={`accordion-header ${
                activeIndex === 1 ? "active" : ""
              }`}
              onClick={() => toggleAccordion(1)}
            >
              How Will My Donation Be Used?
            </div>
            <div
              className={`accordion-content ${
                activeIndex === 1 ? "active" : ""
              }`}
            >
              {/* Content for this accordion item */}
            </div>
          </div>
  
          <div className="accordion-item">
            <div
              className={`accordion-header ${
                activeIndex === 2 ? "active" : ""
              }`}
              onClick={() => toggleAccordion(2)}
            >
              How Can I Apply for a Job with You?
            </div>
            <div
              className={`accordion-content ${
                activeIndex === 2 ? "active" : ""
              }`}
            >
              {/* Content for this accordion item */}
            </div>
          </div>
  
          <div className="accordion-item">
            <div
              className={`accordion-header ${
                activeIndex === 3 ? "active" : ""
              }`}
              onClick={() => toggleAccordion(3)}
            >
              How Can I Participate?
            </div>
            <div
              className={`accordion-content ${
                activeIndex === 3 ? "active" : ""
              }`}
            >
              {/* Content for this accordion item */}
            </div>
          </div>
  
          <div className="accordion-item">
            <div
              className={`accordion-header ${
                activeIndex === 4 ? "active" : ""
              }`}
              onClick={() => toggleAccordion(4)}
            >
              We Help Non-Profits Become More Effective
            </div>
            <div
              className={`accordion-content ${
                activeIndex === 4 ? "active" : ""
              }`}
            >
              {/* Content for this accordion item */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NeedHelp;
