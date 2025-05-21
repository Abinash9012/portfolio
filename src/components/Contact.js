import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error: Could not send message.');
    }
  };

  return (
    <motion.section
      className="section contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="cta-button">Send Message</button>
      </form>
      {status && <p className="status-message">{status}</p>}
      <div className="social-links">
        <a href="https://github.com/abinashsarangi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/abinashsarangi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/abinashsarangi" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </motion.section>
  );
}

export default Contact;