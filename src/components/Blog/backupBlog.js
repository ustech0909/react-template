import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import blogsApi from "../../Api/blogsApi";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await blogsApi.getBlogs(5);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <h2 className="section-title">BLOG</h2>

        <div className="row">
          {blogs.map((blog, index) => (
            <div className="col-md-4" key={blog.id || index}>
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
