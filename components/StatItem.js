'use client'

export default function StatItem({ label, value, delay = 0 }) {
  return (
    <div style={{
      position: 'relative',
      padding: '15px',
      background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.4) 100%)',
      border: '1px solid rgba(0, 212, 255, 0.3)',
      borderLeft: '3px solid var(--primary-blue)',
      transition: 'all 0.3s ease',
      animation: `statAppear 0.6s ease backwards ${delay}s`
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 68, 102, 0.4) 0%, rgba(0, 26, 51, 0.6) 100%)'
      e.currentTarget.style.borderColor = 'var(--primary-blue)'
      e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.2)'
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
        fontFamily: 'Orbitron',
        fontSize: '0.75rem',
        color: '#6c9cc1',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        marginBottom: '3px'
      }}>
        {label}
      </div>
      <div style={{
        fontSize: '1.1rem',
        color: '#fff',
        fontWeight: 600
      }}>
        {value}
      </div>

      <style jsx>{`
        @keyframes statAppear {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
