'use client'

export default function Loading() {
  return (
    <div className="main-container">
      <div className="stat-window visible">
        <div className="window-header">
          <div className="window-title">⏳ Loading</div>
        </div>
        <div className="window-content" style={{ 
          textAlign: 'center', 
          padding: '60px 20px' 
        }}>
          <div style={{
            color: 'var(--primary-blue)',
            fontFamily: 'Orbitron',
            fontSize: '1.2rem',
            marginBottom: '20px',
            animation: 'pulse 2s ease-in-out infinite'
          }}>
            Loading...
          </div>
          <div style={{
            width: '60px',
            height: '60px',
            margin: '0 auto',
            border: '3px solid rgba(0, 212, 255, 0.3)',
            borderTop: '3px solid var(--primary-blue)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `}</style>
        </div>
      </div>
    </div>
  )
}