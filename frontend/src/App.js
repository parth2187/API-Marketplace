import React from "react";
import Navbar from "./components/Navbar/Navbar";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LoginPage from "./pages/Login/LoginPage";
import MarketPlace from "./pages/Marketplace/MarketPlace";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
