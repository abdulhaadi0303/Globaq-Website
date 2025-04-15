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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setSubmissionStatus('success');
    
    // Reset form after submission (optional)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      city: '',
      company: '',
      message: '',
    });
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;