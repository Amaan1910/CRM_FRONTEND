import React from "react";
import Auth from "./pages/Auth";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Route, Routes } from "react-router-dom";
import Engineer from "./pages/Engineer";
import Customer from "./pages/Customer";
import Admin from "./pages/admin";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/engineer" element={<Engineer />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
