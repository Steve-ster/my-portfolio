'use client'

import StatWindow from '@/components/StatWindow'

export default function About() {
  return (
    <div className="main-container">
      <StatWindow title="📖 About Me" delay={0}>
        <div style={{ lineHeight: '1.8' }}>
          <h2 style={{ 
            fontFamily: 'Orbitron', 
            color: 'var(--primary-blue)', 
            marginBottom: '20px',
            fontSize: '1.5rem'
          }}>
            The Journey Begins
          </h2>
          <p style={{ marginBottom: '20px', color: '#b3d9ff' }}>
            I'm a passionate Full Stack Developer who started coding at age 15. 
            What began as curiosity quickly evolved into an obsession with creating 
            elegant solutions to complex problems.
          </p>
          <p style={{ marginBottom: '20px', color: '#b3d9ff' }}>
            Over the years, I've leveled up my skills across the entire technology stack, 
            from crafting pixel-perfect user interfaces to architecting robust backend systems. 
            My quest is to build applications that not only function flawlessly but also 
            provide exceptional user experiences.
          </p>
          <p style={{ color: '#b3d9ff' }}>
            When I'm not coding, you'll find me exploring new technologies, contributing to 
            open source projects, or sharing knowledge through tech talks and mentoring.
          </p>
        </div>
      </StatWindow>

      <StatWindow title="🎓 Background" delay={200}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ 
            padding: '15px', 
            background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.4) 100%)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderLeft: '3px solid var(--primary-blue)'
          }}>
            <h3 style={{ 
              fontFamily: 'Orbitron', 
              color: 'var(--primary-blue)', 
              fontSize: '1.1rem',
              marginBottom: '10px'
            }}>
              Education
            </h3>
            <p style={{ color: '#b3d9ff', marginBottom: '5px' }}>
              <strong>Bachelor's in Computer Science</strong>
            </p>
            <p style={{ color: '#6c9cc1', fontSize: '0.9rem' }}>
              University Name • 2015 - 2019
            </p>
          </div>

          <div style={{ 
            padding: '15px', 
            background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.4) 100%)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderLeft: '3px solid var(--primary-blue)'
          }}>
            <h3 style={{ 
              fontFamily: 'Orbitron', 
              color: 'var(--primary-blue)', 
              fontSize: '1.1rem',
              marginBottom: '10px'
            }}>
              Current Role
            </h3>
            <p style={{ color: '#b3d9ff', marginBottom: '5px' }}>
              <strong>Senior Full Stack Developer</strong>
            </p>
            <p style={{ color: '#6c9cc1', fontSize: '0.9rem' }}>
              Tech Company • 2021 - Present
            </p>
          </div>

          <div style={{ 
            padding: '15px', 
            background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.4) 100%)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderLeft: '3px solid var(--primary-blue)'
          }}>
            <h3 style={{ 
              fontFamily: 'Orbitron', 
              color: 'var(--primary-blue)', 
              fontSize: '1.1rem',
              marginBottom: '10px'
            }}>
              Specializations
            </h3>
            <p style={{ color: '#b3d9ff' }}>
              Web Applications • Cloud Architecture • API Design • UI/UX Development
            </p>
          </div>
        </div>
      </StatWindow>
    </div>
  )
}
