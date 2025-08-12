import React from 'react';

const Blog = () => (
  <section className="blog-section" id='blog'>
    <div className="container">
      <h2 className="section-title">BLOG</h2>
      <div className="row">
        {[1,2,3].map((i) => (
          <div className="col-md-4" key={i}>
            <div className="blog-card">
              <img src={i === 1 ? "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" : i === 2 ? "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" : "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"} alt={`Blog ${i}`} />
              <h6>Donec mauris</h6>
              <p>Morbi velit urna, sagittis eu velit ac, fringilla eu erat. Suspendisse potenti.</p>
              <a href="#" className="btn btn-outline-light btn-sm">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
