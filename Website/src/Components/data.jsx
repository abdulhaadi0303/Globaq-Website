const dropdownData = [
  // 1- Management System Audits
  {
    title: "Management System Audits",
    items: [

      {
        label: "Vendor Assessment", route: "MangementSystemAudits/VendorAssessment" 
      },
      {
        label: "Schedule Q - Quality Assessment",route: "MangementSystemAudits/ScheduleQQualityAssessment"
      },
      {
        label: "Schedule D - Safety Assessment", route: "MangementSystemAudits/ScheduleDSafetyAssessment"
      },

      {
        label: "Other Audits (Coming Soon)", route: "MangementSystemAudits/ManagementSystemCertificationAudits",
        // subItems: [{ label: "ManagementSystemAudits" , route: "ManagementSystemAudits"}],
      },
    ],
  },
  // 2 - Trainings
  {
    title: "Trainings",
    items: [
      {
        label: "ISO Trainings",
        subItems: [
          {
            label: "ISO Implementation Training", route: "Trainings/ISOTrainings/ISOImplementationTraining",
            subItems: [
              "ISO/IEC 17025:2017",
              "ISO/IEC 17020:2012",
              "ISO 9001:2015",
              "ISO 14001:2015",
              "ISO 45001:2018",
              "ISO 22000:2018",
              "ISO 55001:2014",
              "ISO 31000:2018",
              "ISO 59004:2024",
              "ISO 59010:2024",
              "ISO 59020:2024",
            ].map((item) => ({
              label: item,
              route: "Trainings/ISOTrainings/ISOImplementationTraining"
            })),
          },
          {
            label: "ISO Awareness Training", route: "Trainings/ISOTrainings/ISOAwarenessTraining",
            subItems: [
              "ISO/IEC 17025:2017",
              "ISO/IEC 17020:2012",
              "ISO 9001:2015",
              "ISO 14001:2015",
              "ISO 45001:2018",
              "ISO 22000:2018",
              "ISO 55001:2014",
              "ISO 31000:2018",
              "ISO 59004:2024",
              "ISO 59010:2024",
              "ISO 59020:2024",
            ].map((item) => ({
              label: item,
              route: "Trainings/ISOTrainings/ISOAwarenessTraining"
            })),
          },
          {
            label: "Internal Audit Training", route: "Trainings/ISOTrainings/InternalAuditTraining",
            subItems: [
              "ISO/IEC 17025:2017",
              "ISO/IEC 17020:2012",
              "ISO 9001:2015",
              "ISO 14001:2015",
              "ISO 45001:2018",
              "ISO 22000:2018",
            ].map((item) => ({
              label: item,
              route: "Trainings/ISOTrainings/InternalAuditTraining"
            })),
          },
        ],
      },
      {
        label: "Other Trainings", route: "Trainings/OtherTrainings",
        subItems: [
          "Six Sigma Training",
          "Lean Six Sigma Training",
          "5S Training",
          "Environmental, Social and Governance (ESG) Training",
          "UN Sustainable Development Goals (SDGs) Awareness Training",
          "Circular Economy Awareness Training",
          "Risk Assessment Training",
          "Root Cause Analysis Training",
          "Hazard Analysis & Critical Control Points (HACCP) Awareness Training",
          "Hazard Identification, Risk Assessment and Control (HIRAC) Training",
          "Saudi Aramco Schedule Q Awareness Training",
          "Saudi Aramco Schedule D Awareness Training",
          "Saudi Aramco Construction Safety Manual (CSM) Awareness Training",
          "Saudi Aramco Contractor Safety Administrative Requirements (CSAR) Awareness Training",
          "Saudi Aramco Work Site Safety Manual (WSSM) Awareness Training",
        ].map((item) => ({
          label: item,
          route: "Trainings/OtherTrainings"
        })),
      },
    ],
  },
  // 3- ISO Consultancy
  {
    title: "ISO Consultancy", route: "ISOConsultancy",
    items: [
      "ISO/IEC 17025:2017",
      "ISO/IEC 17020:2012",
      "ISO 9001:2015",
      "ISO 14001:2015",
      "ISO 45001:2018",
      "ISO 22000:2018",
      "ISO 55001:2014",
      "ISO 31000:2018",
      "ISO 59004:2024",
      "ISO 59010:2024",
      "ISO 59020:2024",
    ].map((item) => ({
      label: item,
      route: "ISOConsultancy"
    })),
  },

  // 4 - Lab Quality Management System Services
  {
    title: "Laboratory Management Services (17205)",
    items: [
      { label: "Consultancy" , route: "LaboratoryQualityManagementSystemServices/Consultancy" },
      {
        label: "Training", route: "LaboratoryQualityManagementSystemServices/Training",
        subItems: [
          "ISO/IEC 17025:2017 Awareness training",
          "ISO/IEC 17025:2017 Internal auditor training",
          "Measurement uncertainty training",
          "Proficiency testing training",
          "Risk assessment training",
          "Root cause analysis training",
        ].map((item) => ({
          label: item,
          route: "LaboratoryQualityManagementSystemServices/Training"
        })),
      },
      { label: "Implementation Support" ,route: "LaboratoryQualityManagementSystemServices/ImplementationSupport"},
      { label: "Third Party Internal Audit" ,route: "LaboratoryQualityManagementSystemServices/3rdPartyInternalAudit"},
      { label: "Support for Internal Audit" ,route: "LaboratoryQualityManagementSystemServices/SupportforInternalAudit"},
      { label: "Support for Accreditation Process" ,route: "LaboratoryQualityManagementSystemServices/SupportforAccreditationProcess"},
    ],
  },
  // 5- Audit Assistance
  {
    title: "Audit Assistance",
    items: [
      { label: "ISO Internal Audits", route: "AuditAssistance/ISOInternalAudits"},
      { label: "ISO Third party audit", route: "AuditAssistance/ISOThirdPartyAudits" },
    ],
  },
];

export default dropdownData;