import React, { useState } from 'react';

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
      // Here you would integrate with your backend/Google Sheets
      console.log('Partner form submitted:', formData);
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
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Become a Partner</h1>
        <p className="text-gray-600">Join our global network of partners and expand your business opportunities</p>
      </div>

      {submissionStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          Thank you for your partner application! We'll review your submission and get back to you soon.
        </div>
      )}

      {submissionStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          Something went wrong. Please try again.
        </div>
      )}

      <div className="space-y-6">
        {/* Basic Information Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Basic Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Organization <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Country</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="cityName"
                value={formData.cityName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Website Address <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                placeholder="https://"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Company Information Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Company Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Years in Business/Operation <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="yearsInBusiness"
                value={formData.yearsInBusiness}
                onChange={handleChange}
                min="0"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Form of Ownership <span className="text-red-500">*</span>
              </label>
              <select
                name="formOfOwnership"
                value={formData.formOfOwnership}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Ownership Type</option>
                {ownershipTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {(formData.formOfOwnership.includes('Subsidiary') || formData.formOfOwnership === 'Other') && (
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Specification / Other
                </label>
                <input
                  type="text"
                  name="ownershipSpecification"
                  value={formData.ownershipSpecification}
                  onChange={handleChange}
                  placeholder={formData.formOfOwnership.includes('Subsidiary') ? 'Name of parent company' : 'Please specify'}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How many sites/branches you have
              </label>
              <input
                type="number"
                name="numberOfSites"
                value={formData.numberOfSites}
                onChange={handleChange}
                min="0"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of people employed at your organization
              </label>
              <input
                type="number"
                name="numberOfEmployees"
                value={formData.numberOfEmployees}
                onChange={handleChange}
                min="0"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name of your company's president or Owner
              </label>
              <input
                type="text"
                name="presidentName"
                value={formData.presidentName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Partnership Interest Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Partnership Interest</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Why is your organization interested in offering/selling our products in your country?
              </label>
              <textarea
                name="interestReason"
                value={formData.interestReason}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Types of services your organization is seeking to distribute/market in your country
              </label>
              <div className="space-y-2">
                {serviceTypes.map(service => (
                  <label key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      name="servicesTypes"
                      value={service}
                      checked={formData.servicesTypes.includes(service)}
                      onChange={handleChange}
                      className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Please indicate in which market of your country you seek to distribute/sell our products
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {targetMarketOptions.map(market => (
                  <label key={market} className="flex items-center">
                    <input
                      type="checkbox"
                      name="targetMarkets"
                      value={market}
                      checked={formData.targetMarkets.includes(market)}
                      onChange={handleChange}
                      className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">{market}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Training & Capabilities Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Training & Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Availability of classroom or conference room for training
              </label>
              <select
                name="classroomAvailable"
                value={formData.classroomAvailable}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Availability of trainers/instructors
              </label>
              <select
                name="trainersAvailable"
                value={formData.trainersAvailable}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {formData.classroomAvailable === 'No' && (
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  If no, indicate future plans
                </label>
                <textarea
                  name="futureClassroomPlans"
                  value={formData.futureClassroomPlans}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Does your company measure customer satisfaction?
              </label>
              <select
                name="customerSatisfactionMeasured"
                value={formData.customerSatisfactionMeasured}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Are you familiar with the state of quality (practices, methodologies, etc.) in your country?
              </label>
              <select
                name="qualityFamiliarity"
                value={formData.qualityFamiliarity}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                If you have available trainers/instructors, attach CV/certificates
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload valid files (JPG, PDF, DOC) with size less than 2MB
              </p>
              {selectedFiles.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-medium">Selected files:</p>
                  <ul className="text-sm text-gray-600">
                    {selectedFiles.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Business Analysis Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Business Analysis</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Describe your organization's sales and marketing capabilities
              </label>
              <textarea
                name="salesMarketingCapabilities"
                value={formData.salesMarketingCapabilities}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Why do you anticipate that there would be a demand for our products in your country?
              </label>
              <textarea
                name="demandAnticipation"
                value={formData.demandAnticipation}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Estimate the total market potential for each of the products you are seeking to distribute/sell in your country
              </label>
              <textarea
                name="marketPotential"
                value={formData.marketPotential}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                List the top three reasons why we should choose you as an affiliate
              </label>
              <textarea
                name="topThreeReasons"
                value={formData.topThreeReasons}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Competition Analysis Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Competition Analysis</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Describe and provide information on your organization's local competition
              </label>
              <textarea
                name="localCompetition"
                value={formData.localCompetition}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Describe and indicate the competitors you would encounter by offering our products in your country
              </label>
              <textarea
                name="competitorEncounters"
                value={formData.competitorEncounters}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Provide Top 3 Competitor analysis (if available)
              </label>
              <textarea
                name="competitorAnalysis"
                value={formData.competitorAnalysis}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BecomePartnerForm;