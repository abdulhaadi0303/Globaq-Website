import React, { useState } from 'react';

import contactimg from '../assets/contact.jpg'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    city: '',
    company: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Basic validation for required fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      // Add submission date to form data
      const submissionData = {
        ...formData,
        submissionDate: new Date().toISOString(),
        submissionTimestamp: new Date().toLocaleString(),
      };

      // Your Google Apps Script Web App URL
      const response = await fetch('https://script.google.com/macros/s/AKfycby8-Pn9OlGjzNkp7l8qOqb5QMxtw46f_55oUtHWVins95nKM10O6InmHWD7-J1MDhIEKA/exec', {
        method: 'POST',
        body: JSON.stringify(submissionData),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // This handles CORS issues with Google Apps Script
      });

      console.log('Form submitted successfully to Google Sheets');
      setSubmissionStatus('success');
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        city: '',
        company: '',
        message: '',
        submissionData: '',
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block p-6 bg-white rounded-full shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Image */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src={contactimg}
              alt="Contact Us"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden animate-fade-in-up">
          <div className="p-8">
            {/* Status Messages */}
            {submissionStatus === 'success' && (
              <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-800 rounded-xl shadow-lg animate-slide-down">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Message Sent Successfully!</h3>
                    <p className="text-sm opacity-90">Thank you for your message! We'll get back to you soon. Your message has been saved to our records.</p>
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
                    <p className="text-sm opacity-90">Oops! Something went wrong. Please try again.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {/* Name Fields Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    required
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    required
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Location Fields Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                    placeholder="Enter your country"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                    placeholder="Enter your city"
                  />
                </div>
              </div>

              {/* Company Field */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white/60 backdrop-blur-sm resize-none"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:via-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:hover:scale-100 disabled:hover:shadow-none flex items-center gap-3 text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in-up">
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+966 53 076 7286</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">info@globaqksa.com</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
            <p className="text-gray-600">Al-Khobar, Saudi Arabia</p>
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

export default ContactForm;