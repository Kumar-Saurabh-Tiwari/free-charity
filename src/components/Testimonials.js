import React from "react";
import "../styles/Testimonials.css";
import testimonialImage from "../assets/testimonials.svg"; 

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonial-content">
        <div className="testimonial-image-container">
          <img src={testimonialImage} alt="Testimonial" className="testimonial-image" />
        </div>
        <div className="testimonial-text">
          <h3 className="testimonial-subtitle">Testimonials</h3>
          <h1 className="testimonial-title">
            What People Say about <span className="highlighted-text">Our Organization</span>
          </h1>
          <p className="testimonial-description">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis pellentesque cras interdum ornare feugiat eget feugiat. Nunc, urna vitae pellentesque risus, ut volutpat eget libero vel. Vitae urna pharetra sem consectetur sed mi, nisi id feugiat. At egestas praesent mauris metus risus accumsan. Cras gravida natoque maecenas risus ultricies. Sed tincidunt porttitor viverra nunc neque, enim. Tristique molestie turpis turpis diam.”
          </p>
          <p className="testimonial-author">
            Kay Henderson
            <br />
            <span className="author-info">Businessman – Entrepreneur</span>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Testimonials;
