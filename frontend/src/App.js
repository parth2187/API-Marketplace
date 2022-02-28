import React from "react";
import Navbar from "./components/Navbar/Navbar";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LoginPage from "./pages/Login/LoginPage";
import MarketPlace from "./pages/Marketplace/MarketPlace";
import Bgremover from "./pages/Bgremoverpage/Bgremover";
import Register from "./pages/Register/Register";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MarketPlace />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exacth path="/register" element={<Register />} />
        <Route exact path="/api/bgremover" element={<Bgremover />} />
      </Routes>
    </div>
  );
};

export default App;
