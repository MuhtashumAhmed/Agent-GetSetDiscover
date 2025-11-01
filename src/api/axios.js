import axios from "axios";

const axiosInstance = axios.create({

    baseURL: "https://backend.getsetdiscover.com/", // my  backend URL
    withCredentials: true, // for sending cookies 
    headers: {
        "Content-Type": "application/json",
    },
});

//  Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expire → localStorage/Redux se clear karo
            localStorage.removeItem("token");
            sessionStorage.removeItem("token"); 

           
            window.location.href = "/"; // force redirect login
        }
        return Promise.reject(error);
    }
);


export default axiosInstance;