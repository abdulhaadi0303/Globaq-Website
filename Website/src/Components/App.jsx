import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header"; 
import Home from "./Home"; 
import Footer from "./Footer"; 
import AboutUs from "./AboutUs.jsx"; 


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
function Layout() {
  return (
    <div className="layout" style={{ height: "100vh", background:"#e4e4e7",padding:"0px", margin:"0px"  }}>
      <Header /> {/* Header now contains the navigation links */}
      <div className="body">
        <Outlet /> {/* This renders the changing content based on routes */}
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
<Routes>
    <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />

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
