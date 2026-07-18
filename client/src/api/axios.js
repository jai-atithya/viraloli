import axios from "axios";  

//  <--- AXIOS INSTANCE ---> 
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
  timeout: 15000,
});

// <--- REFRESH QUEUE ---> */
let refreshInProgress = false;
let requestQueue = [];

const processQueue = (error) => {
  requestQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error);
    else resolve();
  });
  requestQueue = [];
};

// <--- RESPONSE INTERCEPTOR ---> 
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (!error.response) {
      return Promise.reject(error);
    }

    // Prevent infinite refresh loop
    if (originalRequest.url.includes("/auth/login") || originalRequest.url.includes("/auth/refresh-token")) {
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      // If refresh already running, queue request
      if (refreshInProgress) {
        return new Promise((resolve, reject) => {
          requestQueue.push({ resolve, reject });
        }).then(() => api(originalRequest));
      }

      refreshInProgress = true;

      try {
        await api.post("/auth/refresh-token");
        processQueue();
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError);
        window.location.replace("/auth");
        return Promise.reject(refreshError);
      } finally {
        refreshInProgress = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;