import React, { useState } from 'react';

const GoogleSheets_PartnerForm  = "https://script.google.com/macros/s/AKfycbxj76heGerfAqTeM5VwhR_pi_-0vtMvo9Zw7SxK9-eqnU2x32oRb8INHYYcySw0spvn/exec";
const BecomePartnerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    jobTitle: '',
    country: '',
    cityName: '',
    email: '',
    phoneNumber: '',
    companyWebsite: '',
    yearsInBusiness: '',
    formOfOwnership: '',
    ownershipSpecification: '',
    numberOfSites: '',
    interestReason: '',
    servicesTypes: [],
    classroomAvailable: '',
    futureClassroomPlans: '',
    trainersAvailable: '',
    customerSatisfactionMeasured: '',
    numberOfEmployees: '',
    presidentName: '',
    salesMarketingCapabilities: '',
    demandAnticipation: '',
    targetMarkets: [],
    marketPotential: '',
    topThreeReasons: '',
    localCompetition: '',
    competitorEncounters: '',
    competitorAnalysis: '',
    qualityFamiliarity: ''
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua & Deps', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Rep', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Congo {Democratic Rep}', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland {Republic}', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar, {Burma}', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russian Federation', 'Rwanda', 'St Kitts & Nevis', 'St Lucia', 'Saint Vincent & the Grenadines', 'Samoa', 'San Marino', 'Sao Tome & Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  const ownershipTypes = [
    'Corporation (publicly held)',
    'Privately held company',
    'Subsidiary (please specify name of parent company)',
    'University (please specify if private or public)',
    'Other'
  ];

  const serviceTypes = [
    'Training Courses',
    'Certification Services',
    'Inspection Services'
  ];

  const targetMarketOptions = [
    'Manufacturing',
    'Service',
    'Education',
    'Healthcare',
    'Government',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'servicesTypes') {
        setFormData(prev => ({
          ...prev,
          servicesTypes: checked 
            ? [...prev.servicesTypes, value]
            : prev.servicesTypes.filter(item => item !== value)
        }));
      } else if (name === 'targetMarkets') {
        setFormData(prev => ({
          ...prev,
          targetMarkets: checked 
            ? [...prev.targetMarkets, value]
            : prev.targetMarkets.filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const maxSize = 2 * 1024 * 1024; // 2MB
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    const validFiles = files.filter(file => {
      if (file.size > maxSize) {
        alert(`File "${file.name}" is too large. Maximum size is 2MB.`);
        return false;
      }
      if (!allowedTypes.includes(file.type)) {
        alert(`File "${file.name}" is not a valid type. Please upload JPG, PDF, or DOC files.`);
        return false;
      }
      return true;
    });
    
    setSelectedFiles(validFiles);
  };

  const handleSubmit = async () => {
    // Basic validation
    const requiredFields = ['name', 'organization', 'jobTitle', 'country', 'cityName', 'email', 'phoneNumber', 'companyWebsite', 'yearsInBusiness', 'formOfOwnership'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      // Prepare submission data with uploaded files
const submissionData = {
  ...formData,
  uploadedFiles: selectedFiles.map(file => file.name).join(', ')
};

console.log('Submitting partner application:', submissionData);

// 🎯 REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
            const response = await fetch(GoogleSheets_PartnerForm, {
              method: 'POST',
              body: JSON.stringify(submissionData),
              headers: {
                'Content-Type': 'application/json',
              },
              mode: 'no-cors' // This handles CORS issues with Google Apps Script
            });

            console.log('Partner application submitted successfully to Google Sheets');
     
      console.log('Files:', selectedFiles);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmissionStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        organization: '',
        jobTitle: '',
        country: '',
        cityName: '',
        email: '',
        phoneNumber: '',
        companyWebsite: '',
        yearsInBusiness: '',
        formOfOwnership: '',
        ownershipSpecification: '',
        numberOfSites: '',
        interestReason: '',
        servicesTypes: [],
        classroomAvailable: '',
        futureClassroomPlans: '',
        trainersAvailable: '',
        customerSatisfactionMeasured: '',
        numberOfEmployees: '',
        presidentName: '',
        salesMarketingCapabilities: '',
        demandAnticipation: '',
        targetMarkets: [],
        marketPotential: '',
        topThreeReasons: '',
        localCompetition: '',
        competitorEncounters: '',
        competitorAnalysis: '',
        qualityFamiliarity: ''
      });
      setSelectedFiles([]);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with floating animation */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block p-6 bg-white rounded-full shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Become a Partner
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our global network of partners and expand your business opportunities with cutting-edge solutions
          </p>
        </div>

        {/* Status Messages with animations */}
        {submissionStatus === 'success' && (
          <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-800 rounded-xl shadow-lg animate-slide-down">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Application Submitted Successfully!</h3>
                <p className="text-sm opacity-90">Thank you for your partner application! We'll review your submission and get back to you soon.</p>
              </div>
            </div>
          </div>
        )}

        {submissionStatus === 'error' && (
          <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 text-red-800 rounded-xl shadow-lg animate-slide-down">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Submission Failed</h3>
                <p className="text-sm opacity-90">Something went wrong. Please try again.</p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {/* Basic Information Section */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Basic Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                  placeholder="Enter your organization name"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                  placeholder="Enter your job title"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                >
                  <option value="">Select Country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  City Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="cityName"
                  value={formData.cityName}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                  placeholder="Enter your city name"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Company Website Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  placeholder="https://yourcompany.com"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>

          {/* Company Information Section */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Company Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors duration-200">
                  Years in Business/Operation <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="yearsInBusiness"
                  value={formData.yearsInBusiness}
                  onChange={handleChange}
                  min="0"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 bg-white/60 backdrop-blur-sm"
                  placeholder="Enter years in business"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors duration-200">
                  Form of Ownership <span className="text-red-500">*</span>
                </label>
                <select
                  name="formOfOwnership"
                  value={formData.formOfOwnership}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 bg-white/60 backdrop-blur-sm"
                >
                  <option value="">Select Ownership Type</option>
                  {ownershipTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {(formData.formOfOwnership.includes('Subsidiary') || formData.formOfOwnership === 'Other') && (
                <div className="md:col-span-2 group animate-slide-down">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors duration-200">
                    Specification / Other
                  </label>
                  <input
                    type="text"
                    name="ownershipSpecification"
                    value={formData.ownershipSpecification}
                    onChange={handleChange}
                    placeholder={formData.formOfOwnership.includes('Subsidiary') ? 'Name of parent company' : 'Please specify'}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 bg-white/60 backdrop-blur-sm"
                  />
                </div>
              )}

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors duration-200">
                  How many sites/branches you have
                </label>
                <input
                  type="number"
                  name="numberOfSites"
                  value={formData.numberOfSites}
                  onChange={handleChange}
                  min="0"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 bg-white/60 backdrop-blur-sm"
                  placeholder="Enter number of sites"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors duration-200">
                  Number of people employed at your organization
                </label>
                <input
                  type="number"
                  name="numberOfEmployees"
                  value={formData.numberOfEmployees}
                  onChange={handleChange}
                  min="0"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 bg-white/60 backdrop-blur-sm"
                  placeholder="Enter number of employees"
                />
              </div>

              <div className="md:col-span-2 group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors duration-200">
                  Name of your company's president or Owner
                </label>
                <input
                  type="text"
                  name="presidentName"
                  value={formData.presidentName}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300 bg-white/60 backdrop-blur-sm"
                  placeholder="Enter president/owner name"
                />
              </div>
            </div>
          </div>

          {/* Partnership Interest Section */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Partnership Interest</h2>
            </div>
            
            <div className="space-y-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                  Why is your organization interested in offering/selling our products in your country?
                </label>
                <textarea
                  name="interestReason"
                  value={formData.interestReason}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 hover:border-purple-300 bg-white/60 backdrop-blur-sm resize-none"
                  placeholder="Describe your interest in partnership..."
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                  Types of services your organization is seeking to distribute/market in your country
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {serviceTypes.map(service => (
                    <label key={service} className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:border-purple-300 cursor-pointer transition-all duration-300 transform hover:scale-105 group">
                      <input
                        type="checkbox"
                        name="servicesTypes"
                        value={service}
                        checked={formData.servicesTypes.includes(service)}
                        onChange={handleChange}
                        className="mr-3 h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded transition-all duration-200"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                  Please indicate in which market of your country you seek to distribute/sell our products
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {targetMarketOptions.map(market => (
                    <label key={market} className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:border-purple-300 cursor-pointer transition-all duration-300 transform hover:scale-105 group">
                      <input
                        type="checkbox"
                        name="targetMarkets"
                        value={market}
                        checked={formData.targetMarkets.includes(market)}
                        onChange={handleChange}
                        className="mr-3 h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded transition-all duration-200"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">{market}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Training & Capabilities Section */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Training & Capabilities</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                  Availability of classroom or conference room for training
                </label>
                <select
                  name="classroomAvailable"
                  value={formData.classroomAvailable}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 bg-white/60 backdrop-blur-sm"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                  Availability of trainers/instructors
                </label>
                <select
                  name="trainersAvailable"
                  value={formData.trainersAvailable}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 bg-white/60 backdrop-blur-sm"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {formData.classroomAvailable === 'No' && (
                <div className="md:col-span-2 group animate-slide-down">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                    If no, indicate future plans
                  </label>
                  <textarea
                    name="futureClassroomPlans"
                    value={formData.futureClassroomPlans}
                    onChange={handleChange}
                    rows="3"
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 bg-white/60 backdrop-blur-sm resize-none"
                    placeholder="Describe your future classroom plans..."
                  />
                </div>
              )}

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                  Does your company measure customer satisfaction?
                </label>
                <select
                  name="customerSatisfactionMeasured"
                  value={formData.customerSatisfactionMeasured}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 bg-white/60 backdrop-blur-sm"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                  Are you familiar with the state of quality (practices, methodologies, etc.) in your country?
                </label>
                <select
                  name="qualityFamiliarity"
                  value={formData.qualityFamiliarity}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 bg-white/60 backdrop-blur-sm"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="md:col-span-2 group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                  If you have available trainers/instructors, attach CV/certificates
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg"
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 bg-white/60 backdrop-blur-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Upload valid files (JPG, PDF, DOC) with size less than 2MB
                </p>
                {selectedFiles.length > 0 && (
                  <div className="mt-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100 animate-slide-down">
                    <p className="text-sm font-semibold text-orange-800 mb-2">Selected files:</p>
                    <ul className="space-y-1">
                      {selectedFiles.map((file, index) => (
                        <li key={index} className="text-sm text-orange-700 flex items-center gap-2">
                          <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {file.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Business Analysis Section */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Business Analysis</h2>
            </div>
            
            <div className="space-y-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-cyan-600 transition-colors duration-200">
                  Describe your organization's sales and marketing capabilities
                </label>
                <textarea
                  name="salesMarketingCapabilities"
                  value={formData.salesMarketingCapabilities}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 hover:border-cyan-300 bg-white/60 backdrop-blur-sm resize-none"
                  placeholder="Describe your sales and marketing capabilities..."
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-cyan-600 transition-colors duration-200">
                  Why do you anticipate that there would be a demand for our products in your country?
                </label>
                <textarea
                  name="demandAnticipation"
                  value={formData.demandAnticipation}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 hover:border-cyan-300 bg-white/60 backdrop-blur-sm resize-none"
                  placeholder="Explain your demand anticipation..."
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-cyan-600 transition-colors duration-200">
                  Estimate the total market potential for each of the products you are seeking to distribute/sell in your country
                </label>
                <textarea
                  name="marketPotential"
                  value={formData.marketPotential}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 hover:border-cyan-300 bg-white/60 backdrop-blur-sm resize-none"
                  placeholder="Describe the market potential..."
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-cyan-600 transition-colors duration-200">
                  List the top three reasons why we should choose you as an affiliate
                </label>
                <textarea
                  name="topThreeReasons"
                  value={formData.topThreeReasons}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 hover:border-cyan-300 bg-white/60 backdrop-blur-sm resize-none"
                  placeholder="List your top three reasons..."
                />
              </div>
            </div>
          </div>

          {/* Competition Analysis Section */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Competition Analysis</h2>
            </div>
            
            <div className="space-y-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                  Describe and provide information on your organization's local competition
                </label>
                <textarea
                  name="localCompetition"
                  value={formData.localCompetition}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 hover:border-indigo-300 bg-white/60 backdrop-blur-sm resize-none"
                  placeholder="Describe your local competition..."
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                  Describe and indicate the competitors you would encounter by offering our products in your country
                </label>
                <textarea
                  name="competitorEncounters"
                  value={formData.competitorEncounters}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 hover:border-indigo-300 bg-white/60 backdrop-blur-sm resize-none"
                  placeholder="Describe potential competitors..."
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                  Provide Top 3 Competitor analysis (if available)
                </label>
                <textarea
                  name="competitorAnalysis"
                  value={formData.competitorAnalysis}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 hover:border-indigo-300 bg-white/60 backdrop-blur-sm resize-none"
                  placeholder="Provide competitor analysis..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8 animate-fade-in">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:via-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:hover:scale-100 disabled:hover:shadow-none flex items-center gap-3 text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex items-center gap-3">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Submit</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); max-height: 0; }
          to { opacity: 1; transform: translateY(0); max-height: 200px; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BecomePartnerForm;