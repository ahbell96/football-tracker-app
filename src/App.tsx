import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./router/Routes";
import MainLayout from "./layouts/MainLayout";

const App: React.FC = () => {
  return (
    <div className="bg-primary-muted">
      <Router>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </Router>
    </div>
  );
};

export default App;
