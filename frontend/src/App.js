import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@/App.css";
import { LandingPage } from "@/pages/LandingPage";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { CrypTagsPage } from "@/pages/CrypTagsPage";
import { CrypTrackPage } from "@/pages/CrypTrackPage";
import { CrypTrustPage } from "@/pages/CrypTrustPage";
import { XolariaTreasuryPage } from "@/pages/XolariaTreasuryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/CrypTags" element={<CrypTagsPage />} />
        <Route path="/CrypTrack" element={<CrypTrackPage />} />
        <Route path="/CrypTrust" element={<CrypTrustPage />} />
        <Route path="/Xolaria-On-Chain-Treasury-Reserve" element={<XolariaTreasuryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
