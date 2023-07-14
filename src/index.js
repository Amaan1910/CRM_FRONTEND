import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from "axios";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers["x-access-token"] = token;
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.clear();
      toast.success(
        "You have been logged out. Login with your credentials to continue!"
      );
      window.location.href = "/";
      window.location.reload();
    }
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToastContainer />
    <App />
  </BrowserRouter>
);
