'use client'

import { useState, useEffect } from 'react'

export default function SkillBar({ name, level, delay = 0 }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), delay)
    return () => clearTimeout(timer)
  }, [level, delay])

  return (
    <div style={{
      position: 'relative',
      animation: `skillAppear 0.8s ease backwards ${delay}ms`
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '8px',
        fontSize: '0.95rem',
        color: '#b3d9ff',
        fontWeight: 600
      }}>
        <span>{name}</span>
        <span style={{
          color: 'var(--primary-blue)',
          fontFamily: 'Orbitron',
          fontWeight: 700
        }}>
          Lv. {level}
        </span>
      </div>
      <div style={{
        height: '8px',
        background: 'rgba(0, 68, 102, 0.3)',
        border: '1px solid rgba(0, 212, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          width: `${width}%`,
          background: 'linear-gradient(90deg, var(--secondary-blue) 0%, var(--primary-blue) 100%)',
          boxShadow: '0 0 10px var(--primary-blue)',
          position: 'relative',
          transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
            animation: 'shimmer 2s infinite'
          }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes skillAppear {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}
