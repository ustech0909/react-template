import React from 'react';

const Testimonial = () => (
  <section className="testimonial-section">
    <div className="container testimonial-content">
      <div className="mb-3">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="CEO" className="rounded-circle" />
      </div>
      <blockquote className="blockquote">
        <p>In porttitor velit eu fringilla suscipit. Donec vitae rhoncus sem. Ut rutrum ligula ut aliquet tempor. Donec rutrum eros eget eros faucibus maximus. Quisque blandit, est vel auctor mollis, ipsum mauris tincidunt eros, eu varius nisi est sit amet urna. Sed et commodo lectus.</p>
      </blockquote>
      <footer className="blockquote-footer">
        Donec Rutrum <span className="fw-bold">CEO</span>
      </footer>
    </div>
  </section>
);

export default Testimonial;
