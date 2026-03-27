import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";
import blogsApi from "../../Api/blogsApi";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await blogsApi.getBlogById(id);
        // console.log("API response:", res[0]);
        setBlog(res[0]);
        setLoading(false);
        // console.log(res)
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
  }, [id]);

   if (loading) {
    return (
 <>
      <Navbar />

      <section className="blog-details">
        <div className="container">
          <h1>Loading...</h1>
        </div>
      </section>

      <Footer title="2025" />
    </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="blog-details">
        <div className="container">
          <h1>{blog.title}</h1>
          {/* <img src={blog.image} alt={blog.title} /> */}
          <p dangerouslySetInnerHTML={{ __html: blog.description }} />
        </div>
      </section>

      <Footer title="2025" />
    </>
  );
};

export default BlogDetails;
