import { BrowserRouter, Navigate, Routes, Route, Outlet } from "react-router-dom";

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
import Schema from "./Schema";

import "./styles/App.css";

// Management System Audits
import ManagementSystemAudits from "./Pages/ManagementSystemAudits.jsx";

import ProjectQualityAssesment from "./Pages/Management System Audits/ProjectQualityAssesment.jsx";
import ProjectSafetyAssesment from "./Pages/Management System Audits/ProjectSafetyAssesment.jsx";
import VendorAssessment from "./Pages/Management System Audits/VendorAssessment.jsx";


// Trainings
import TrainingsHub from "./Pages/Training/Trainings.jsx";
import ISOTrainingCourses from "./Pages/Training/ISO/ISOTrainingCourses.jsx";
import ISOLeadAuditorTraining from "./Pages/Training/ISO/ISOLeadAuditorTraining.jsx";
import InternalAuditTraining from "./Pages/Training/ISO/InternalAuditTraining.jsx";
import ISOAwarenessTraining from "./Pages/Training/ISO/ISOAwarenessTraining.jsx";
import OtherTrainings from "./Pages/Training/Other/OtherTrainings.jsx";
import SixSigmaTraining from "./Pages/Training/Other/SixSigmaTraining.jsx";
import SustainabilityTraining from "./Pages/Training/Other/SustainabilityTraining.jsx";
import RiskAssessmentTraining from "./Pages/Training/Other/RiskAssessmentTraining.jsx";
import HACCPTraining from "./Pages/Training/Other/HACCPTraining.jsx";
import SaudiAramcoAwarenessTraining from "./Pages/Training/Other/SaudiAramcoAwarenessTraining.jsx";
import ImplementationTraining from "./Pages/Training/Other/ImplementationTraining.jsx";

// ISO Consultancy
import ISOConsultancy from "./Pages/ISOConsultancy/ISOConsultancy.jsx";

// Laboratory Services
import Consultancy from "./Pages/Laboratory Quality Management System Services/Consultancy.jsx";
import Training from "./Pages/Laboratory Quality Management System Services/Training.jsx";
import ImplementationSupport from "./Pages/Laboratory Quality Management System Services/ImplementationSupport.jsx";
import PartyInternalAudit from "./Pages/Laboratory Quality Management System Services/3rdPartyInternalAudit.jsx";
import SupportforInternalAudit from "./Pages/Laboratory Quality Management System Services/SupportforInternalAudit.jsx";
import SupportforAccreditationProcess from "./Pages/Laboratory Quality Management System Services/SupportforAccreditationProcess.jsx";

// Audit Assistance
import ISOThirdPartyAudits from "./Pages/Audit Assistance/ISOThirdPartyAudits";
import ISOInternalAudits from "./Pages/Audit Assistance/ISOInternalAudits";

function Layout() {
  return (
    <div className="layout-container">
      <Schema />

      <div className="fixed-header">
        <Header />
      </div>

      <main className="scrollable-content">
        <Outlet />
      </main>

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
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Partner" element={<Partner />} />
          <Route path="/ThanksPage" element={<ThanksPage />} />

          {/* Existing 12 Homepage Service Pages */}
          <Route
            path="/services/ms-audits"
            element={<ServicesPage />}
          />
          <Route
            path="/services/audit-assistance"
            element={<ServicesPage />}
          />
          <Route
            path="/services/laboratory-management-services"
            element={<ServicesPage />}
          />
          <Route
            path="/services/iso-consultancy"
            element={<ServicesPage />}
          />
          <Route
            path="/services/ccc-consultancy"
            element={<ServicesPage />}
          />
          <Route
            path="/services/ai-solutions"
            element={<ServicesPage />}
          />
          <Route
            path="/services/erp-solutions"
            element={<ServicesPage />}
          />
          <Route
            path="/services/it-solutions"
            element={<ServicesPage />}
          />
          <Route
            path="/services/sustainability-esg"
            element={<ServicesPage />}
          />
          <Route
            path="/services/circular-economy"
            element={<ServicesPage />}
          />
          <Route
            path="/services/csr-solutions"
            element={<ServicesPage />}
          />



          {/* New Main Page Linked from the Header Menu */}
          <Route
            path="/services/management-system-audits-saudi-arabia/"
            element={<ManagementSystemAudits />}
          />

          {/* Existing Audit Subpages */}
          <Route
            path="/services/management-system-audits-saudi-arabia/vendor-assessment/"
            element={<VendorAssessment />}
          />
          <Route
            path="/services/management-system-audits-saudi-arabia/project-quality-assessments/"
            element={<ProjectQualityAssesment />}
          />

          <Route
            path="/services/management-system-audits-saudi-arabia/project-safety-assessment/"
            element={<ProjectSafetyAssesment />}
          />

          {/* Training Pages */}
          <Route path="/services/trainings/" element={<TrainingsHub />} />
          <Route path="/trainings/" element={<Navigate to="/services/trainings/" replace />} />
          <Route path="/services/trainings/iso-training-courses/" element={<ISOTrainingCourses />} />
          <Route path="/services/trainings/iso-lead-auditor-training/" element={<ISOLeadAuditorTraining />} />
          <Route path="/services/trainings/iso-internal-auditor-training/" element={<InternalAuditTraining />} />
          <Route path="/services/trainings/iso-awareness-training/" element={<ISOAwarenessTraining />} />
          <Route path="/Trainings/ISOTrainings/ISOAwarenessTraining" element={<Navigate to="/services/trainings/iso-awareness-training/" replace />} />
          <Route path="/Trainings/ISOTrainings/InternalAuditTraining" element={<Navigate to="/services/trainings/iso-internal-auditor-training/" replace />} />
          <Route path="/services/trainings/six-sigma-training/" element={<SixSigmaTraining />} />
          <Route path="/services/trainings/sustainability-training/" element={<SustainabilityTraining />} />
          <Route path="/services/trainings/risk-assessment-training/" element={<RiskAssessmentTraining />} />
          <Route path="/services/trainings/haccp-training/" element={<HACCPTraining />} />
          <Route path="/services/trainings/saudi-aramco-awareness-training/" element={<SaudiAramcoAwarenessTraining />} />
          <Route path="/services/trainings/implementation-training/" element={<ImplementationTraining />} />
          <Route path="/Trainings/ISOTrainings/ISOImplementationTraining" element={<Navigate to="/services/trainings/implementation-training/" replace />} />
          <Route
            path="Trainings/OtherTrainings"
            element={<OtherTrainings />}
          />

          {/* ISO Consultancy */}
          <Route
            path="ISOConsultancy"
            element={<ISOConsultancy />}
          />

          {/* Audit Assistance */}
          <Route
            path="AuditAssistance/ISOThirdPartyAudits"
            element={<ISOThirdPartyAudits />}
          />
          <Route
            path="AuditAssistance/ISOInternalAudits"
            element={<ISOInternalAudits />}
          />

          {/* Laboratory Services */}
          <Route
            path="LaboratoryQualityManagementSystemServices/Consultancy"
            element={<Consultancy />}
          />
          <Route
            path="LaboratoryQualityManagementSystemServices/Training"
            element={<Training />}
          />
          <Route
            path="LaboratoryQualityManagementSystemServices/ImplementationSupport"
            element={<ImplementationSupport />}
          />
          <Route
            path="LaboratoryQualityManagementSystemServices/3rdPartyInternalAudit"
            element={<PartyInternalAudit />}
          />
          <Route
            path="LaboratoryQualityManagementSystemServices/SupportforInternalAudit"
            element={<SupportforInternalAudit />}
          />
          <Route
            path="LaboratoryQualityManagementSystemServices/SupportforAccreditationProcess"
            element={<SupportforAccreditationProcess />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
