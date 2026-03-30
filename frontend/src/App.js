import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@/App.css";
import { LandingPage } from "@/pages/LandingPage";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
