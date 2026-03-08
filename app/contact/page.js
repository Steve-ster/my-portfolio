'use client'

import { useState } from 'react'
import StatWindow from '@/components/StatWindow'
import { supabase } from '@/lib/supabase'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })

    try {
      const { error } = await supabase
        .from('messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ])

      if (error) throw error

      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contacts = [
    { icon: "📧", label: "Email", value: "mclardysteven2910@gmail.com", },
    { icon: "💼", label: "LinkedIn", value: "https://www.linkedin.com/in/steven-mclardy2910/", href: "https://www.linkedin.com/in/steven-mclardy2910/" },
    { icon: "🐙", label: "GitHub", value: "https://github.com/Steve-ster", href: "https://github.com/Steve-ster" },
    { icon: "🐦", label: "Twitter", value: "https://x.com/SMclardy", href: "https://x.com/SMclardy" },
    { icon: "📍", label: "Location", value: "Based in Johannesburg, South Africa (GMT+2)" },
    { icon: "🌍", label: "Internationality", value: "Available for remote work worldwide" }
  ]

  return (
    <div className="main-container">
      <StatWindow title="📬 Contact" delay={0}>
        <form onSubmit={handleSubmit}>
          <div className="mb-20">
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

          <div className="mb-20">
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

          <div className="mb-20">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary"
            disabled={status.type === 'loading'}
          >
            {status.type === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status.message && (
            <div className={status.type === 'success' ? 'success-message' : 'error-message'}>
              {status.message}
            </div>
          )}
        </form>
      </StatWindow>

      <StatWindow title="🔗 Connect With Me" delay={200}>
        <div style={{ display: 'grid', gap: '15px' }}>
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '15px',
                background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.4) 100%)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderLeft: '3px solid var(--primary-blue)',
                textDecoration: 'none',
                color: '#b3d9ff',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 68, 102, 0.4) 0%, rgba(0, 26, 51, 0.6) 100%)'
                e.currentTarget.style.transform = 'translateX(5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.4) 100%)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{contact.icon}</span>
              <div>
                <div style={{ 
                  fontFamily: 'Orbitron', 
                  color: 'var(--primary-blue)',
                  fontSize: '0.9rem',
                  marginBottom: '3px'
                }}>
                  {contact.label}
                </div>
                <div style={{ fontSize: '0.9rem' }}>{contact.value}</div>
              </div>
            </a>
          ))}
        </div>
      </StatWindow>
    </div>
  )
}
