'use client';
import { useState } from 'react';
import Head from 'next/head';
import './contact.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Contact error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Steven</title>
        <meta name="description" content="Get in touch with Steven Mclardy" />
      </Head>

      <main className="main-content">
        <section id="contact">
          <h2>Contact Me</h2>
          <p>Feel free to reach out! I will get back to you as soon as possible.</p>

          <div className="contact-grid">
            <div className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form">
                {status === 'success' && (
                  <div className="success-message">
                    Message sent successfully! I will contact you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="error-message">
                    Failed to send message. Please try again.
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    rows="6"
                  ></textarea>
                </div>

                <button type="submit" disabled={loading} className="submit-btn">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <div className="contact-info">
                <h3>Direct Contact</h3>
                <p><strong>Email:</strong> mclardysteven2910@gmail.com</p>
                <p><strong>Location:</strong> Johannesburg, South Africa</p>
                <p><strong>Time Zone:</strong> GMT+2</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
