import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HomePage4 from '../HomePage4/HomePage4';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import PricingPage from '../PricingPage/PricingPage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import PortfolioSinglePage from '../PortfolioSinglePage/PortfolioSinglePage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import ServicePage from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import SccmSolutions from '../SolutionPage/Sccm-solutions';
import CyberSecuritySolutions from '../SolutionPage/Cyber-security-solutions';
import AI_ML_Solutions from '../SolutionPage/AI-ML-solutions';
import ApplicationSolutions from '../SolutionPage/Application-solutions';
import DigitalSolutions from '../SolutionPage/Digital-solutions';

import BlogDetails from '../BlogDetails/BlogDetails';
import ContactPage from '../ContactPage/ContactPage';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="dubai" element={<HomePage4 />} />
          <Route path="home_software_company" element={<HomePage2 />} />
          <Route path="home_business_consulting" element={<HomePage3 />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio_details/:slug" element={<PortfolioSinglePage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="solutions/sccm-solutions" element={<SccmSolutions />} />
          <Route path="solutions/cyber-security-solutions" element={<CyberSecuritySolutions />} />
          <Route path="solutions/ai-ml-solutions" element={<AI_ML_Solutions />} />
          <Route path="solutions/application-solutions" element={<ApplicationSolutions />} />
          <Route path="solutions/digital-solutions" element={<DigitalSolutions />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />
          <Route path="solution-details/:slug" element={<BlogDetails />} />
          <Route path="contact" element={<ContactPage />} />  
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
