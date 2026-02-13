'use client'

export default function Achievement({ icon, name, value, delay = 0 }) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '15px',
      background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.15) 0%, rgba(0, 26, 51, 0.3) 100%)',
      border: '1px solid rgba(0, 212, 255, 0.3)',
      transition: 'all 0.3s ease',
      animation: `achievementAppear 0.8s ease backwards ${delay}s`
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 68, 102, 0.3) 0%, rgba(0, 26, 51, 0.5) 100%)'
      e.currentTarget.style.borderColor = 'var(--primary-blue)'
      e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)'
      e.currentTarget.style.transform = 'translateY(-5px)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 68, 102, 0.15) 0%, rgba(0, 26, 51, 0.3) 100%)'
      e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)'
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.transform = 'translateY(0)'
    }}
    >
      <div style={{
        fontSize: '2rem',
        marginBottom: '8px',
        filter: 'drop-shadow(0 0 5px var(--primary-blue))'
      }}>
        {icon}
      </div>
      <div style={{
        fontSize: '0.85rem',
        color: '#b3d9ff',
        fontWeight: 600
      }}>
        {name}
      </div>
      <div style={{
        fontFamily: 'Orbitron',
        fontSize: '1.2rem',
        color: 'var(--primary-blue)',
        fontWeight: 700,
        marginTop: '5px'
      }}>
        {value}
      </div>

      <style jsx>{`
        @keyframes achievementAppear {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}
