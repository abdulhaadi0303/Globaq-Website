const dropdownData = [
  // 1- Management System Audits
  {
    title: "Management System Audits",
    items: [
      {
        label: "Second Party Audits",
        subItems: [
          { label: "Vendor Assessment", onClick: () => handleNavigation("Vendor Assessment") },
          { label: "Schedule Q - Quality Assessment", onClick: () => handleNavigation("Schedule Q - Quality Assessment") },
          { label: "Schedule D - Safety Assessment", onClick: () => handleNavigation("Schedule D - Safety Assessment") },
        ],
      },
      {
        label: "Management System Certification Audits",
        subItems: [{ label: "Coming Soon" }],
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
            label: "ISO Implementation Training",
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
              onClick: () => handleNavigation(item, "Trainings"),
            })),
          },
          {
            label: "ISO Awareness Training",
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
              onClick: () => handleNavigation(item, "Trainings"),
            })),
          },
          {
            label: "Internal Audit Training",
            subItems: [
              "ISO/IEC 17025:2017",
              "ISO/IEC 17020:2012",
              "ISO 9001:2015",
              "ISO 14001:2015",
              "ISO 45001:2018",
              "ISO 22000:2018",
            ].map((item) => ({
              label: item,
              onClick: () => handleNavigation(item, "Trainings"),
            })),
          },
        ],
      },
      {
        label: "Other Trainings",
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
          onClick: () => handleNavigation(item, "Trainings"),
        })),
      },
    ],
  },
  // 3- ISO Consultancy
  {
    title: "ISO Consultancy",
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
      onClick: () => handleNavigation(item, "Consultancy"),
    })),
  },
  // 4 - Lab Quality Management System Services
  {
    title: "Lab Quality Management System Services",
    items: [
      { label: "Consultancy" },
      {
        label: "Training",
        subItems: [
          "ISO/IEC 17025:2017 Awareness training",
          "ISO/IEC 17025:2017 Internal auditor training",
          "Measurement uncertainty training",
          "Proficiency testing training",
          "Risk assessment training",
          "Root cause analysis training",
        ].map((item) => ({
          label: item,
          onClick: () => handleNavigation(item, "Lab Quality Management System Services"),
        })),
      },
      { label: "Implementation Support" },
      { label: "3rd Party Internal Audit" },
      { label: "Support for Internal Audit" },
      { label: "Support for Accreditation Process" },
    ],
  },
  // 5- Audit Assistance
  {
    title: "Audit Assistance",
    items: [
      { label: "ISO Internal Audits", onClick: () => handleNavigation("ISO Internal Audits", "AuditAssistance") },
      { label: "ISO third party audit", onClick: () => handleNavigation("ISO third party audit", "AuditAssistance") },
    ],
  },
];

export default dropdownData;