import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Teams from "../pages/Teams";
import Match from "../pages/Match";
import Matches from "../pages/Matches";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<Home />} />

      {/* Teams List Route */}
      <Route path="/teams" element={<Teams />} />

      {/* Dynamic Route for Team Details */}
      <Route path="/match/:id" element={<Match />} />

      <Route path="matches" element={<Matches />} />

      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default AppRoutes;
