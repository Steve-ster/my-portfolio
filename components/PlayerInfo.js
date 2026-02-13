'use client'

export default function PlayerInfo({ name, title, playerClass, level }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '20px',
      marginBottom: '35px',
      alignItems: 'start'
    }}>
      <div style={{ position: 'relative', width: '120px', height: '120px' }}>
        <div style={{
          width: '100%',
          height: '100%',
          border: '3px solid var(--primary-blue)',
          background: 'linear-gradient(135deg, #001a33 0%, #003355 100%)',
          clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
          boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'avatarFloat 3s ease-in-out infinite',
          overflow: 'hidden'
        }}>
          <img 
            src="/profile.jpg"
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '-10px',
          right: '-10px',
          background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
          border: '2px solid var(--dark-blue)',
          borderRadius: '50%',
          width: '45px',
          height: '45px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Orbitron',
          fontWeight: 900,
          fontSize: '1.1rem',
          boxShadow: '0 0 15px var(--primary-blue)',
          animation: 'levelPulse 2s ease-in-out infinite'
        }}>
          {level}
        </div>
      </div>
      <div style={{ paddingTop: '5px' }}>
        <div style={{
          fontFamily: 'Orbitron',
          fontSize: '2rem',
          fontWeight: 900,
          color: '#fff',
          marginBottom: '5px',
          textShadow: '0 0 10px rgba(0, 212, 255, 0.5)'
        }}>
          {name}
        </div>
        <div style={{
          fontSize: '1.1rem',
          color: 'var(--primary-blue)',
          marginBottom: '15px',
          fontWeight: 600,
          letterSpacing: '1px'
        }}>
          {title}
        </div>
        <div style={{ marginTop: '10px' }}>
          <div style={{
            fontFamily: 'Orbitron',
            fontSize: '0.75rem',
            color: '#6c9cc1',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '3px'
          }}>
            Class
          </div>
          <div style={{
            fontSize: '1.1rem',
            color: '#fff',
            fontWeight: 600
          }}>
            {playerClass}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes avatarFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes levelPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @media (max-width: 768px) {
          div:first-child {
            grid-template-columns: 1fr !important;
            text-align: center;
            justify-items: center;
          }
        }
      `}</style>
    </div>
  )
}
