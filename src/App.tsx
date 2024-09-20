import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navigation component
import Home from "./pages/Home"; // Import your page components
import Teams from "./pages/Teams";
import Match from "./pages/Match";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Common navbar for navigation */}
        <div className="container mx-auto p-4">
          {" "}
          {/* You can use Tailwind for layout */}
          <Routes>
            {/* Define routes for each page */}
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/teams" element={<Teams />} /> {/* Teams page */}
            <Route path="/match/:id" element={<Match />} />{" "}
            {/* Match page with dynamic route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
