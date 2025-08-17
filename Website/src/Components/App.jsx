import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header"; 
import Home from "./Home"; 
import Footer from "./Footer"; 
import AboutUs from "./AboutUs.jsx"; 
import WhatsAppButton from "./WhatsAppButton.jsx";
import ContactUs from "./ContactUs.jsx";
import ThanksPage from "./Thanks.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Partner from "./Partner.jsx";
import ServicesPage from "./ServicesPage.jsx";

// src/App.jsx
import "./styles/App.css";

// import ScrollToTop from "react-scroll-to-top";

// Management System Audits Section Related Imports
import ScheduleQQualityAssessment from "./Pages/Management System Audits/ScheduleQQualityAssessment.jsx";
import ScheduleDSafetyAssessment from "./Pages/Management System Audits/ScheduleDSafetyAssessment.jsx";
import VendorAssessment from "./Pages/Management System Audits/VendorAssessment.jsx";
import ManagementSystemCertificationAudits from "./Pages/Management System Audits/ManagementSystemCertificationAudits.jsx";

//Trainings Section Related Imports
import ISOImplementationTraining from "./Pages/Trainings/ISOImplementationTraining.jsx";
import InternalAuditTraining from "./Pages/Trainings/InternalAuditTraining.jsx";
import ISOAwarenessTraining from "./Pages/Trainings/ISOAwarenessTraining.jsx";
import OtherTrainings from "./Pages/Trainings/OtherTrainings.jsx";

//ISO Consultancy Section Related Imports
import ISOConsultancy from "./Pages/ISOConsultancy/ISOConsultancy.jsx";

//Laboratory Quality Management System Services Section Related Imports 
import Consultancy from "./Pages/Laboratory Quality Management System Services/Consultancy.jsx" 
import Training from "./Pages/Laboratory Quality Management System Services/Training.jsx" 
import ImplementationSupport from "./Pages/Laboratory Quality Management System Services/ImplementationSupport.jsx" 
import PartyInternalAudit from "./Pages/Laboratory Quality Management System Services/3rdPartyInternalAudit.jsx" 
import SupportforInternalAudit from "./Pages/Laboratory Quality Management System Services/SupportforInternalAudit.jsx" 
import SupportforAccreditationProcess from "./Pages/Laboratory Quality Management System Services/SupportforAccreditationProcess.jsx" 

// Audit Assistance Section Related Imports
import ISOThirdPartyAudits  from "./Pages/Audit Assistance/ISOThirdPartyAudits";
import ISOInternalAudits  from "./Pages/Audit Assistance/ISOInternalAudits";

import './styles/App.css'

// Layout Function
// function Layout() {
//   return (
//     <div className="layout" style={{ height: "100vh", background:"#e4e4e7",padding:"0px", margin:"0px"  }}>
//       <Header /> {/* Header now contains the navigation links */}
//       <div className="body">
//         <Outlet /> {/* This renders the changing content based on routes */}
//       </div>
//       <Footer />
//       <WhatsAppButton/>
//     </div>
//   );
// }

function Layout() {
  return (
    <div className="layout-container">
      <div className="fixed-header">
        <Header />
      </div>
      <div className="scrollable-content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (

    <BrowserRouter>
    <ScrollToTop />
<Routes>
    <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/Partner" element={<Partner/>} />
        <Route path="/ThanksPage" element={<ThanksPage />} />

        {/* New Services Routes */}
        <Route path="/services/ms-audits" element={<ServicesPage />} />
        <Route path="/services/trainings" element={<ServicesPage />} />
        <Route path="/services/audit-assistance" element={<ServicesPage />} />
        <Route path="/services/laboratory-management" element={<ServicesPage />} />
        <Route path="/services/iso-consultancy" element={<ServicesPage />} />
        <Route path="/services/ccc-consultancy" element={<ServicesPage />} />
        <Route path="/services/ai-solutions" element={<ServicesPage />} />
        <Route path="/services/erp-solutions" element={<ServicesPage />} />
        <Route path="/services/it-solutions" element={<ServicesPage />} />
        <Route path="/services/sustainability-esg" element={<ServicesPage />} />
        <Route path="/services/circular-economy" element={<ServicesPage />} />
        <Route path="/services/csr-solutions" element={<ServicesPage />} />

        {/* Existing Routes */}
        <Route path="MangementSystemAudits/ScheduleQQualityAssessment" element={<ScheduleQQualityAssessment />} />
        <Route path="MangementSystemAudits/ScheduleDSafetyAssessment" element={<ScheduleDSafetyAssessment />} />
        <Route path="MangementSystemAudits/VendorAssessment" element={<VendorAssessment />} />
        <Route path="MangementSystemAudits/ManagementSystemCertificationAudits" element={<ManagementSystemCertificationAudits />} />

        <Route path="Trainings/ISOTrainings/ISOImplementationTraining" element={<ISOImplementationTraining />} />
        <Route path="Trainings/ISOTrainings/ISOAwarenessTraining" element={<ISOAwarenessTraining />} />
        <Route path="Trainings/ISOTrainings/InternalAuditTraining" element={<InternalAuditTraining />} />
        <Route path="Trainings/OtherTrainings" element={<OtherTrainings />} />
        



        <Route path="ISOConsultancy" element={<ISOConsultancy />} />

        <Route path="AuditAssistance/ISOThirdPartyAudits" element={<ISOThirdPartyAudits />} />
        <Route path="AuditAssistance/ISOInternalAudits" element={<ISOInternalAudits />} />

        <Route path="LaboratoryQualityManagementSystemServices/Consultancy" element={<Consultancy />} />
        <Route path="LaboratoryQualityManagementSystemServices/Training" element={<Training />} />
        <Route path="LaboratoryQualityManagementSystemServices/ImplementationSupport" element={<ImplementationSupport />} />
        <Route path="LaboratoryQualityManagementSystemServices/3rdPartyInternalAudit" element={<PartyInternalAudit />} />
        <Route path="LaboratoryQualityManagementSystemServices/SupportforInternalAudit" element={<SupportforInternalAudit />} />
        <Route path="LaboratoryQualityManagementSystemServices/SupportforAccreditationProcess" element={<SupportforAccreditationProcess />} />

    </Route>
    
</Routes>

    </BrowserRouter>
  
  );
}

export default App;