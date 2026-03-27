import axiosClient from "./axiosClient";

const blogsApi = {
  getBlogs: (limit = 5) => {
    return axiosClient.get("/api/v1/blogs", {
      params: { _limit: limit },
    });
  },

  getBlogById: (id) => {
    return axiosClient.get(`/api/v1/blog/${id}`);
  },
};

export default blogsApi;
