import React from 'react';

const Contact = () => (
  <section className="contact-section" id='contact'>
    <div className="container">
      <h2 className="section-title">GET IN TOUCH</h2>
      <div className="row">
        <div className="col-md-7 mb-4">
          <form>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="col">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send message</button>
          </form>
        </div>
        <div className="col-md-5 contact-info">
          <p><i className="fa-solid fa-location-dot"></i>ADDRESS<br />1001 Mauris Street, Newtown - 100000</p>
          <p><i className="fa-solid fa-phone"></i>CONTACT<br />000-000-0000</p>
          <p><i className="fa-solid fa-envelope"></i>EMAIL<br />info@yourstarter.com</p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
