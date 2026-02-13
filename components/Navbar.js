'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home', icon: '⚡' },
    { href: '/about', label: 'About', icon: '📖' },
    { href: '/projects', label: 'Projects', icon: '🚀' },
    { href: '/contact', label: 'Contact', icon: '📬' }
  ]

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'linear-gradient(135deg, rgba(0, 26, 51, 0.98) 0%, rgba(10, 14, 26, 0.98) 100%)',
      borderBottom: '2px solid var(--primary-blue)',
      boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/" style={{
          fontFamily: 'Orbitron',
          fontSize: '1.2rem',
          fontWeight: 900,
          color: 'var(--primary-blue)',
          textDecoration: 'none',
          textShadow: '0 0 10px var(--text-glow)',
          letterSpacing: '2px'
        }}>
          PLAYER_STATS
        </Link>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'center'
        }} className="desktop-menu">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: pathname === link.href ? 'var(--primary-blue)' : '#b3d9ff',
                textDecoration: 'none',
                fontFamily: 'Rajdhani',
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: '1px',
                transition: 'all 0.3s ease',
                textShadow: pathname === link.href ? '0 0 10px var(--primary-blue)' : 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--primary-blue)'
                e.target.style.textShadow = '0 0 10px var(--primary-blue)'
              }}
              onMouseLeave={(e) => {
                if (pathname !== link.href) {
                  e.target.style.color = '#b3d9ff'
                  e.target.style.textShadow = 'none'
                }
              }}
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: '2px solid var(--primary-blue)',
            color: 'var(--primary-blue)',
            padding: '8px 12px',
            cursor: 'pointer',
            fontFamily: 'Orbitron',
            fontSize: '1rem'
          }}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu" style={{
          display: 'none',
          padding: '20px',
          background: 'rgba(0, 26, 51, 0.98)',
          borderTop: '1px solid rgba(0, 212, 255, 0.3)'
        }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                color: pathname === link.href ? 'var(--primary-blue)' : '#b3d9ff',
                textDecoration: 'none',
                fontFamily: 'Rajdhani',
                fontWeight: 600,
                fontSize: '1.1rem',
                padding: '10px 0',
                borderBottom: '1px solid rgba(0, 212, 255, 0.1)'
              }}
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  )
}
