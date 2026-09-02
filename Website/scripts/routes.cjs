/**
 * Single source of truth for every indexable route on the site.
 * Used by both the prerender script and the sitemap generator so they
 * never drift apart. Paths match your CURRENT App.jsx exactly — no
 * slug changes here (that's a separate Week 2 task).
 *
 * Titles and descriptions live in each page component's <SEO> tag,
 * not here — this file only tracks which routes exist and how they
 * should appear in the sitemap.
 */
module.exports = [
  { path: '/', priority: 1.0 },
  { path: '/AboutUs', priority: 0.8 },
  { path: '/ContactUs', priority: 0.8 },
  { path: '/Partner', priority: 0.6 },

  { path: '/services/ms-audits', priority: 0.9 },
  { path: '/services/trainings', priority: 0.9 },
  { path: '/services/audit-assistance', priority: 0.9 },
  { path: '/services/laboratory-management', priority: 0.9 },
  { path: '/services/iso-consultancy', priority: 0.9 },
  { path: '/services/ccc-consultancy', priority: 0.7 },
  { path: '/services/ai-solutions', priority: 0.7 },
  { path: '/services/erp-solutions', priority: 0.7 },
  { path: '/services/it-solutions', priority: 0.7 },
  { path: '/services/sustainability-esg', priority: 0.7 },
  { path: '/services/circular-economy', priority: 0.7 },
  { path: '/services/csr-solutions', priority: 0.7 },

  { path: '/MangementSystemAudits/ScheduleQQualityAssessment', priority: 0.7 },
  { path: '/MangementSystemAudits/ScheduleDSafetyAssessment', priority: 0.7 },
  { path: '/MangementSystemAudits/VendorAssessment', priority: 0.7 },
  { path: '/MangementSystemAudits/ManagementSystemCertificationAudits', priority: 0.7 },

  { path: '/Trainings/ISOTrainings/ISOImplementationTraining', priority: 0.7 },
  { path: '/Trainings/ISOTrainings/ISOAwarenessTraining', priority: 0.7 },
  { path: '/Trainings/ISOTrainings/InternalAuditTraining', priority: 0.7 },
  { path: '/Trainings/OtherTrainings', priority: 0.6 },

  { path: '/ISOConsultancy', priority: 0.8 },

  { path: '/AuditAssistance/ISOThirdPartyAudits', priority: 0.7 },
  { path: '/AuditAssistance/ISOInternalAudits', priority: 0.7 },

  { path: '/LaboratoryQualityManagementSystemServices/Consultancy', priority: 0.7 },
  { path: '/LaboratoryQualityManagementSystemServices/Training', priority: 0.7 },
  { path: '/LaboratoryQualityManagementSystemServices/ImplementationSupport', priority: 0.7 },
  { path: '/LaboratoryQualityManagementSystemServices/3rdPartyInternalAudit', priority: 0.7 },
  { path: '/LaboratoryQualityManagementSystemServices/SupportforInternalAudit', priority: 0.7 },
  { path: '/LaboratoryQualityManagementSystemServices/SupportforAccreditationProcess', priority: 0.7 },

  // Utility/thank-you page — keep out of the sitemap and tell Google not to index it.
  { path: '/ThanksPage', priority: 0.1, noindex: true },
];