import React from "react";
import { Routes, Route } from "react-router-dom";
import CorporateInfo from "./pages/CorporateInfo";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Access from "./pages/Access";
import Recruitment from "./pages/Recruitment";
import Consulting from "./pages/Consulting";
import Development from "./pages/Development";
import CorporateExplain from "./pages/CorporateExplain";
import CorporateHistory from "./pages/CorporateHistory";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/corporate-info" element={<CorporateInfo />} />
      <Route path="/corporate-info/overview" element={<CorporateExplain />} />
      <Route path="/corporate-info/history" element={<CorporateHistory />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/consulting" element={<Consulting />} />
      <Route path="services/development" element={<Development />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/access" element={<Access />} />
      <Route path="/recruitment" element={<Recruitment />} />
    </Routes>
  );
}

export default AppRoutes;
