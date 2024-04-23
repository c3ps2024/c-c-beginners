// pages/enquiry.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    enquiry: '',
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data); // Handle success or error response
      setSubmitSuccess(true); // Set success message state
      setFormData({ // Clear form fields
        name: '',
        email: '',
        mobile: '',
        enquiry: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      
      <h1>Enquiry Form</h1>
      {submitSuccess && <p style={{ color: 'green' }}>Enquiry submitted successfully!</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label><br /><br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label><br /><br />
        <label>
          Mobile:
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </label><br /><br />
        <label>
          Enquiry:
          <textarea name="enquiry" value={formData.enquiry} onChange={handleChange} required />
        </label><br /><br />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default Enquiry;
