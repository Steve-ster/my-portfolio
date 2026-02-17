'use client'

import { useState, useEffect } from 'react'
import StatWindow from '@/components/StatWindow'
import PlayerInfo from '@/components/PlayerInfo'
import StatItem from '@/components/StatItem'
import SkillBar from '@/components/SkillBar'

export default function Home() {
  const playerData = {
    name: "Steven Mclardy",
    title: "Full stack developer delivering modern web solutions for small businesses",
    class: "Information Technology",
    level: 19
  }

  const stats = [
    { label: "Experience", value: "1.2 Years" },
    { label: "Major Projects Completed", value: "2" },
    { label: "On time delivery?", value: "Guaranteed" },
    { label: "Team Size", value: "1 Member" },
    { label: "Technologies learned", value: "9" },
    { label: "Businesses helped", value: "None yet" }
  ]

  const skills = [
    { name: "Python", level: 15 },
    { name: "JavaScript", level: 15 },
    { name: "React", level: 12 },
    { name: "JSON", level: 10 },
    { name: "Supabase", level: 10 },
    { name: "HTML5 + CSS", level: 5 },
  ]

  const certifications = [
    { 
      name: "Software Development", 
      issuer: "Certiport",
      date: "2026",
      imageUrl: "/certificates/Software Development.pdf"
    },
    { 
      name: "HTML5 Application Development", 
      issuer: "Certiport",
      date: "2025",
      imageUrl: "/certificates/HTML5 Application Development.pdf"
    },
    { 
      name: "Python", 
      issuer: "Certiport",
      date: "2025",
      imageUrl: "/certificates/Python.pdf"
    },
    { 
      name: "JavaScript", 
      issuer: "Certiport",
      date: "2025",
      imageUrl: "/certificates/JavaScript.pdf"
    },
    { 
      name: "HTML and CSS", 
      issuer: "Certiport",
      date: "2025",
      imageUrl: "/certificates/HTML and CSS.pdf"
    },
    { 
      name: "Computational Thinking", 
      issuer: "Certiport",
      date: "2026",
      imageUrl: "/certificates/Computational Thinking.pdf"
    },
  ]

  return (
    <div className="main-container">
      {/* Main Stats Window */}
      <StatWindow title="⚡ Dev.Portfolio" delay={0}>
        <PlayerInfo 
          name={playerData.name}
          title={playerData.title}
          playerClass={playerData.class}
          level={playerData.level}
        />
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px' 
        }}>
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              label={stat.label}
              value={stat.value}
              delay={index * 0.1}
            />
          ))}
        </div>
      </StatWindow>

      {/* Skills Window */}
      <StatWindow title="🎯 Core Skills" delay={200}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              delay={700 + (index * 100)}
            />
          ))}
        </div>
      </StatWindow>

      {/* Certifications Window */}
      <StatWindow title="📜 Certifications & Qualifications" delay={400}>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '15px' 
        }}>
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '20px',
                background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.4) 100%)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderLeft: '3px solid var(--primary-blue)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'block',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 68, 102, 0.4) 0%, rgba(0, 26, 51, 0.6) 100%)'
                e.currentTarget.style.borderColor = 'var(--primary-blue)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)'
                e.currentTarget.style.transform = 'translateX(5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.4) 100%)'
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                gap: '15px'
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'Orbitron',
                    color: 'var(--primary-blue)',
                    fontSize: '1.1rem',
                    marginBottom: '5px',
                    fontWeight: 700
                  }}>
                    {cert.name}
                  </h3>
                  <p style={{
                    color: '#b3d9ff',
                    fontSize: '0.9rem',
                    marginBottom: '3px'
                  }}>
                    {cert.issuer}
                  </p>
                  <p style={{
                    color: '#6c9cc1',
                    fontSize: '0.85rem',
                    fontFamily: 'Rajdhani'
                  }}>
                    {cert.date}
                  </p>
                </div>
                <div style={{
                  color: 'var(--primary-blue)',
                  fontSize: '1.5rem',
                  marginTop: '5px'
                }}>
                  🔗
                </div>
              </div>
            </a>
          ))}
        </div>
      </StatWindow>
    </div>
  )
}
