// Contact.js
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
    setSuccess(null);
  };

  const validateEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      await axios.post('/api/contact', formData);
      setSuccess('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setShowModal(true);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSuccess(null); // Clear success message when modal is closed
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      {error && <div className="error-message fade-in">{error}</div>}
      {success && <div className="success-message fade-in">{success}</div>}
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={formData.name}
          required
          aria-label="Your Name"
        />
        
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
          required
          aria-label="Your Email"
        />
        
        <label htmlFor="message">Your Message</label>
        <textarea
          name="message"
          id="message"
          onChange={handleChange}
          value={formData.message}
          required
          aria-label="Your Message"
        />
        
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {showModal && (
        <div className="modal fade-in">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>Your message has been sent!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
