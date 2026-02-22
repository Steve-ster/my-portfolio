'use client'

import StatWindow from '@/components/StatWindow'

export default function About() {
  return (
    <div className="main-container">
      <StatWindow title="📖 About me" delay={0}>
        <div style={{ lineHeight: '1.8' }}>
          <h2 style={{ 
            fontFamily: 'Orbitron', 
            color: 'var(--primary-blue)', 
            marginBottom: '20px',
            fontSize: '1.5rem'
          }}>
            The Journey Begins
          </h2>
          <p style={{ marginBottom: '20px', color: '#b3d9ff',  }}>
            <strong>
              Do you own a small business that you just can't seem to grow? Well I'm glad to tell you that you are in the right
              place! My goal is to help small businesses grow and reach their target audience. I build engaging websites that convince
              visitors to buy/use your product. Visit my <a href="/contact">contact page</a> to get in touch with me.
            </strong>
          </p>
          <p style={{ marginBottom: '20px', color: '#b3d9ff' }}>
            Hi! My name is Steven and I'm a passionate Software Developer who ran his first "Hello world" at the age of 16. 
            Back then I was simply messing around with this new thing called "coding". Fast forward a few years and here I am,
            designing my own Website all about myself and my accomplishments to share with the world.
            What began as curiosity quickly evolved into an obsession with creating 
            elegant solutions to complex problems.
          </p>
          <p style={{ marginBottom: '20px', color: '#b3d9ff' }}>
            Over the years, I've leveled up my skills in multiple languages such as Python, JavaScript and web development technologies.
            As well as the RSJN (React, Supabase, JavaScript, Node.js) stack as I like to call it, also used for this exact website.
            My goal is to build applications that not only function flawlessly but also 
            provide exceptional user experiences to help connect consumers to businesses.
          </p>
          <p style={{ color: '#b3d9ff' }}>
            When I'm not coding, you'll find me exploring new technologies, watching endless tutorials
            , or simply gaming/working out.
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
              <strong>Software Development</strong>
            </p>
            <p style={{ color: '#6c9cc1', fontSize: '0.9rem' }}>
              UniCollege • Jan 2025 - Jan 2026
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
              <strong>Junior Software Developer</strong>
            </p>
            <p style={{ color: '#6c9cc1', fontSize: '0.9rem' }}>
              Exploring options • Present
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
              Web Applications • Static web pages • UI/UX Development
            </p>
          </div>
        </div>
      </StatWindow>
    </div>
  )
}
