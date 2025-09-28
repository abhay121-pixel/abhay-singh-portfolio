import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // In a real application, you would send this to your backend
      // For now, we'll just simulate a successful submission
      console.log('Form submitted:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="contact-info-title">Contact Information</h3>
            
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">📧</div>
                <div className="contact-detail-content">
                  <h4 className="contact-detail-label">Email</h4>
                  <a 
                    href={`mailto:${data.email}`} 
                    className="contact-detail-value contact-link"
                  >
                    {data.email}
                  </a>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-detail-icon">📱</div>
                <div className="contact-detail-content">
                  <h4 className="contact-detail-label">Phone</h4>
                  <a 
                    href={`tel:${data.phone}`} 
                    className="contact-detail-value contact-link"
                  >
                    {data.phone}
                  </a>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-detail-icon">💼</div>
                <div className="contact-detail-content">
                  <h4 className="contact-detail-label">LinkedIn</h4>
                  <a 
                    href={data.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-detail-value contact-link"
                  >
                    {data.linkedin.replace('https://www.linkedin.com/in/', '').replace('/', '')}
                  </a>
                </div>
              </div>
            </div>
            
            <motion.a
              href={data.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-resume-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Download Resume
            </motion.a>
          </motion.div>
          
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="contact-form-title">Send Me a Message</h3>
            
            <form className="contact-form-fields" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="form-textarea"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="form-success-message">
                  ✅ Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-error-message">
                  ❌ Oops! Something went wrong. Please try again.
                </div>
              )}
              
              <motion.button
                type="submit"
                className="contact-form-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;