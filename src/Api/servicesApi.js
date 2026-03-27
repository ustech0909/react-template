import axiosClient from "./axiosClient";

const servicesApi = {
  getServices: (limit = 5) => {
    return axiosClient.get("/api/v1/services", {
      params: { _limit: limit },
    });
  },

  getServicesById: (id) => {
    return axiosClient.get(`/api/v1/services/${id}`);
  },
};

export default servicesApi;
