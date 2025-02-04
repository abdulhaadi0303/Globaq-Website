import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header"; 
import Home from "./Home"; 
import Footer from "./Footer"; 

import ManagementSystemAudits from "./ManagementSystemAudits";
import Trainings from "./Trainings";
import ISOConsultancy from "./ISOConsultancy";
import AuditAssistance  from "./AuditAssistance";
import LaboratoryQualityManagementSystemServices from "./LaboratoryQualityManagementSystemServices"

import './styles/App.css'

// Layout Function
function Layout() {
  return (
    <div className="layout" style={{ height: "100vh", background: "#555555",padding:"0px", margin:"0px"  }}>
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
        <Route path="ManagementSystemAudits" element={<ManagementSystemAudits />} />
        <Route path="Trainings" element={<Trainings />} />
        <Route path="ISOConsultancy" element={<ISOConsultancy />} />
        <Route path="AuditAssistance" element={<AuditAssistance />} />
        <Route path="LaboratoryQualityManagementSystemServices" element={<LaboratoryQualityManagementSystemServices />} />
    </Route>
    
</Routes>

    </BrowserRouter>
  );
}

export default App;
