'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="main-container">
      <div className="stat-window visible">
        <div className="window-header">
          <div className="window-title">⚠️ Error Detected</div>
        </div>
        <div className="window-content" style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2 style={{
            fontFamily: 'Orbitron',
            fontSize: '2rem',
            color: '#ff4444',
            marginBottom: '20px'
          }}>
            Something went wrong!
          </h2>
          <p style={{
            color: '#b3d9ff',
            fontSize: '1.1rem',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>
            An unexpected error occurred. Please try again.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => reset()}
              className="btn-primary"
            >
              🔄 Try Again
            </button>
            <Link href="/" className="btn-primary">
              🏠 Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}