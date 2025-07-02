import React, { useState } from 'react';
import './styles/ContactForm.css';
import contactimg from "../assets/contact.jpg";

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      // Your Google Apps Script Web App URL
      const response = await fetch('https://script.google.com/macros/s/AKfycby8-Pn9OlGjzNkp7l8qOqb5QMxtw46f_55oUtHWVins95nKM10O6InmHWD7-J1MDhIEKA/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // This handles CORS issues with Google Apps Script
      });

      // Since mode: 'no-cors' prevents reading the response,
      // we assume success if no error is thrown
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
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <img
        src={contactimg}
        alt="CONTACT IMAGE"
        className="form-header-image"
      />

      <form className="form-content" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        {submissionStatus === 'success' && (
          <div className="success-message">
            Thank you for your message! We'll get back to you soon.
            Your message has been saved to our records.
          </div>
        )}

        {submissionStatus === 'error' && (
          <div className="error-message">
            Oops! Something went wrong. Please try again.
          </div>
        )}

        <label>
          First Name<span className="required">*</span>
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName}
            required 
            onChange={handleChange} 
          />
        </label>

        <label>
          Last Name<span className="required">*</span>
          <input 
            type="text" 
            name="lastName" 
            value={formData.lastName}
            required 
            onChange={handleChange} 
          />
        </label>

        <label>
          Email<span className="required">*</span>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            required 
            onChange={handleChange} 
          />
        </label>

        <label>
          Country
          <input 
            type="text" 
            name="country" 
            value={formData.country}
            onChange={handleChange} 
          />
        </label>

        <label>
          City
          <input 
            type="text" 
            name="city" 
            value={formData.city}
            onChange={handleChange} 
          />
        </label>

        <label>
          Company Name
          <input 
            type="text" 
            name="company" 
            value={formData.company}
            onChange={handleChange} 
          />
        </label>

        <label>
          Message
          <textarea 
            name="message" 
            rows="4" 
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;