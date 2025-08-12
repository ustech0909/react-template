import React from 'react';

const WhatWeDo = () => (
  <section className="container py-5 what-we-do" id='whatwedo'>
    <h2 className="section-title">WHAT WE DO</h2>
    <div className="row mb-4">
      <div className="col-md-6">
        {[1,2,3].map((i) => (
          <div className="d-flex align-items-start mb-3" key={i}>
            <span className="icon"><i className="fa-solid fa-gear"></i></span>
            <div>
              <h6 className="fw-bold mb-1">Congue</h6>
              <p>Mauris pharetra ante mauris porta varius nunc tempor erat non fringilla.</p>
            </div>
          </div>
        ))}
      </div>
      <div className="col-md-6">
        {[1,2,3].map((i) => (
          <div className="d-flex align-items-start mb-3" key={i}>
            <span className="icon"><i className="fa-solid fa-gear"></i></span>
            <div>
              <h6 className="fw-bold mb-1">Congue</h6>
              <p>Mauris pharetra ante mauris porta varius nunc tempor erat non fringilla.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="row">
      {[1,2].map((i) => (
        <div className="col-md-6 mb-3" key={i}>
          <div className="p-4 bg-light rounded">
            <h6 className="fw-bold mb-2">Odio nibh pellentesque ligula</h6>
            <p>Mauris pharetra ante mauris porta varius nunc tempor erat non fringilla.</p>
            <a href="#" className="btn btn-outline-primary">Read More</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WhatWeDo;
