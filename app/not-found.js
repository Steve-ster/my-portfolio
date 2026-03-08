'use client'

import Link from 'next/link'

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className="main-container">
      <div className="stat-window visible">
        <div className="window-header">
          <div className="window-title">❌ 404 - Quest Not Found</div>
        </div>
        <div className="window-content" style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h1 style={{
            fontFamily: 'Orbitron',
            fontSize: '4rem',
            color: 'var(--primary-blue)',
            marginBottom: '20px',
            textShadow: '0 0 20px var(--text-glow)'
          }}>
            404
          </h1>
          <p style={{
            color: '#b3d9ff',
            fontSize: '1.2rem',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="btn-primary">
            🏠 Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}