import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const payload = {
    data: {
      type: "node--get_in_touch",
      attributes: {
        title: "Get in touch from React",
        field_name: form.name,
        field_email: form.email,
        body: {
          value: form.message
        }
      }
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('http://the-drupal-10.local:8083/jsonapi/node/get_in_touch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/vnd.api+json', 'Accept': 'application/vnd.api+json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        setSuccess('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setSuccess('Failed to send message. Please try again.');
      }
    } catch (err) {
      setSuccess('Failed to send message. Please try again.');
    }
    setLoading(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">GET IN TOUCH</h2>
        <div className="row">
          <div className="col-md-7 mb-4">
            <form onSubmit={handleSubmit} noValidate>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div style={{ color: 'red', fontSize: '0.95em' }}>{errors.name}</div>}
                </div>
                <div className="col">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div style={{ color: 'red', fontSize: '0.95em' }}>{errors.email}</div>}
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <div style={{ color: 'red', fontSize: '0.95em' }}>{errors.message}</div>}
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Sending...' : 'Send message'}
              </button>
              {success && <div style={{ marginTop: '16px', color: success.includes('successfully') ? 'green' : 'red' }}>{success}</div>}
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
};

export default Contact;
