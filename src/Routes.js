import React from "react";
import { Routes, Route } from "react-router-dom";
import CorporateInfo from "./Component/pages/CorporateInfo";
import Services from "./Component/pages/Services";
import Contact from "./Component/pages/Contact";
import Access from "./Component/pages/Access";
import Recruitment from "./Component/pages/Recruitment";
import Consulting from "./Component/pages/Consulting";
import Development from "./Component/pages/Development";
import CorporateExplain from "./Component/pages/CorporateExplain";
import CorporateHistory from "./Component/pages/CorporateHistory";

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
