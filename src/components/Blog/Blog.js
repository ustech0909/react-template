import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const blogs = [
  {
    id: 1,
    title: "Boost product adoption with user-centered design",
    description:
      "Learn practical UI/UX patterns that improve conversion and lower support calls. This static blog excerpt shows the value in a concise format.",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Optimizing React performance for large-scale apps",
    description:
      "A 2-3 line guide on memoization, code splitting, and lazy loading that keeps apps snappy. Perfect for mid-size teams shipping faster.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "SEO essentials for modern single-page applications",
    description:
      "Steps for pre-rendering, metadata strategies, and performance metrics to raise search visibility. Use this static post template for quick reference.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
];

const Blogs = () => {

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <h2 className="section-title">BLOG</h2>

        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4" key={blog.id}>
              <div className="blog-card">
                <img src={blog.image} alt={blog.title} />
                <h6>{blog.title}</h6>
                <p>{blog.description}</p>

                <Link
                  to={`/blog/${blog.id}`}
                  className="btn btn-outline-light btn-sm"
                >
                  Read more
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
