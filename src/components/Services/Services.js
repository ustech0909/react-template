import React, { useEffect, useState } from "react";
import servicesApi from "../../Api/servicesApi";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await servicesApi.getServices(5);
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

    return (
  <section className="container py-5" id='services'>
    <h2 className="section-title services-title">SERVICES</h2>
    <div className="services-row-improved">


          {services.map((service) => (
            <div className="icon-box" key={service.id}>
              <h5>{service.title}</h5>
              <p>Mauris pharetra ante mauris porta varius nunc tempor erat non fringilla.</p>
            </div>
          ))}
    </div>
    </section>
  );
};

export default Services;
