const dropdownData = [

  // 1 - Management System Audits
  {
    title: "Management System Audits",
    route: "services/management-system-audits-saudi-arabia/",
    items: [
      {
        label: "Vendor Assessment",
        route: "services/management-system-audits-saudi-arabia/vendor-assessment/",
      },
      {
        label: "Project Quality Assessments",
        route: "services/management-system-audits-saudi-arabia/project-quality-assessments/",
      },
      {
        label: "Project Safety Assessment",
        route: "services/management-system-audits-saudi-arabia/project-safety-assessment/",
      },
    ],
  },
  // 2 - Trainings
  {
    title: "Trainings",
    route: "services/trainings/",
    items: [
      {
        label: "ISO Training Courses",
        route: "services/trainings/iso-training-courses/",
        inlineSubmenu: true,
        subItems: [
          { label: "ISO Lead Auditor Training", route: "services/trainings/iso-lead-auditor-training/" },
          { label: "ISO Internal Auditor Training", route: "services/trainings/iso-internal-auditor-training/" },
          { label: "ISO Awareness Training", route: "services/trainings/iso-awareness-training/" },
          { label: "ISO Implementation Training", route: "services/trainings/iso-implementation-training/" },
        ],
      },
      {
        label: "Other Trainings",
        inlineSubmenu: true,
        subItems: [
          { label: "Six Sigma Training", route: "services/trainings/six-sigma-training/" },
          { label: "Sustainability Training", route: "services/trainings/sustainability-training/" },
          { label: "Risk Assessment Training", route: "services/trainings/risk-assessment-training/" },
          { label: "HACCP Awareness Training", route: "services/trainings/haccp-training/" },
          { label: "Saudi Aramco Awareness Training", route: "services/trainings/saudi-aramco-awareness-training/" },
          { label: "Management System Implementation Training", route: "services/trainings/implementation-training/" },
        ],
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
    title: "Laboratory Management Services (17025)",
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