'use client'

export default function SkillBar({ name, description, delay = 0 }) {
  // const [width, setWidth] = useState(0)

  // useEffect(() => {
  //   const timer = setTimeout(() => setWidth(description), delay)
  //   return () => clearTimeout(timer)
  // }, [description, delay])

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
          {description}
        </span>
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
