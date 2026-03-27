import React, { useEffect, useState } from "react";
import servicesApi from "../../Api/servicesApi";
import './ServiceCards.css';

// utility function to decode HTML entities
// const decodeHtml = (html) => {
//   const txt = document.createElement("textarea");
//   txt.innerHTML = html;
//   return txt.value;
// };

// const Services = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const data = await servicesApi.getServices(5);
//         setServices(data);
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       }
//     };

//     fetchServices();
//   }, []);

//     return (

<section className="service-cards-section" id='services'>
  <h2 className="section-title">SERVICES</h2>
  <div className="service-cards-container">


    {services.map((service) => (
      <div className="service-card" key={service.id}>
        <img src={service.image} alt={service.title} className="service-card-img" />
        <h3 className="service-card-heading">{decodeHtml(service.title)}</h3>
        <p className="service-card-desc" dangerouslySetInnerHTML={{ __html: service.description }}></p>
      </div>
    ))}
  </div>
</section>
//   );
// };

export default Services;







