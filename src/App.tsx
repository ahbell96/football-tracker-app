import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navigation component
import "./App.css";
import AppRoutes from "./router/Routes";

const App: React.FC = () => {
  return (
    <div className="bg-primary-muted">
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </div>
  );
};

export default App;
