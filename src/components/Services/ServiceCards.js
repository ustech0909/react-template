import React from "react";
import './ServiceCards.css';
import serviceImage from './photo-1506744038136-46273834b3fb.jpg';

const Services = () => {
  return (
    <section className="service-cards-section" id='services'>
      <h2 className="section-title">SERVICES</h2>
      <div className="service-cards-container">



        <div className="service-card">
          <img src={serviceImage} alt="Design service" className="service-card-img" />
          <h3 className="service-card-heading">UI/UX Design</h3>
          <p className="service-card-desc">User-centric interface design with modern visual language. 2-3 line description explains the process and benefits clearly.</p>
        </div>

        <div className="service-card">
          <img src={serviceImage} alt="Development service" className="service-card-img" />
          <h3 className="service-card-heading">Web Development</h3>
          <p className="service-card-desc">Responsive React+Node applications built for performance and scalability. 2-3 lines of value proposition help users understand what to expect.</p>
        </div>

        <div className="service-card">
          <img src={serviceImage} alt="SEO service" className="service-card-img" />
          <h3 className="service-card-heading">SEO Optimization</h3>
          <p className="service-card-desc">On-page and technical SEO strategies to boost discoverability. Short descriptions highlight key outcomes and trust signals.</p>
        </div>

        <div className="service-card">
          <img src={serviceImage} alt="Marketing service" className="service-card-img" />
          <h3 className="service-card-heading">Digital Marketing</h3>
          <p className="service-card-desc">Data-driven campaigns that increase leads and conversions. Keeping copy to 2-3 lines ensures readability on cards.</p>
        </div>

        <div className="service-card">
          <img src={serviceImage} alt="Support service" className="service-card-img" />
          <h3 className="service-card-heading">24/7 Support</h3>
          <p className="service-card-desc">Reliable, around-the-clock support for your product and users. A concise description helps prospects grasp service value quickly.</p>
        </div>

      </div>
    </section>
  );
};

export default Services;







