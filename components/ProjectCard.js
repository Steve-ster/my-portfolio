'use client'

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.4) 100%)',
      border: '1px solid rgba(0, 212, 255, 0.3)',
      borderTop: '3px solid var(--primary-blue)',
      padding: '20px',
      transition: 'all 0.3s ease',
      animation: `projectAppear 0.6s ease backwards ${delay}s`,
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 68, 102, 0.4) 0%, rgba(0, 26, 51, 0.6) 100%)'
      e.currentTarget.style.borderColor = 'var(--primary-blue)'
      e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)'
      e.currentTarget.style.transform = 'translateY(-5px)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.4) 100%)'
      e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)'
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.transform = 'translateY(0)'
    }}
    >
      {project.image_url && (
        <div style={{
          width: '100%',
          height: '180px',
          marginBottom: '15px',
          overflow: 'hidden',
          border: '1px solid rgba(0, 212, 255, 0.3)'
        }}>
          <img 
            src={project.image_url} 
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      )}

      <div style={{
        fontFamily: 'Orbitron',
        fontSize: '0.75rem',
        color: '#6c9cc1',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '8px'
      }}>
        {project.category}
      </div>

      <h3 style={{
        fontFamily: 'Orbitron',
        color: 'var(--primary-blue)',
        fontSize: '1.2rem',
        marginBottom: '10px',
        fontWeight: 700
      }}>
        {project.title}
      </h3>

      <p style={{
        color: '#b3d9ff',
        fontSize: '0.9rem',
        lineHeight: '1.6',
        marginBottom: '15px',
        flex: 1
      }}>
        {project.description}
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '15px'
      }}>
        {Array.isArray(project.technologies) && project.technologies.map((tech, index) => (
          <span
            key={index}
            style={{
              padding: '4px 10px',
              background: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              color: 'var(--primary-blue)',
              fontSize: '0.75rem',
              fontFamily: 'Rajdhani',
              fontWeight: 600
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div style={{
        display: 'flex',
        gap: '10px'
      }}>
        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 15px',
              background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.3) 0%, rgba(0, 26, 51, 0.5) 100%)',
              border: '1px solid var(--primary-blue)',
              color: 'var(--primary-blue)',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontFamily: 'Orbitron',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              flex: 1,
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(0, 136, 204, 0.3) 100%)'
              e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 212, 255, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 68, 102, 0.3) 0%, rgba(0, 26, 51, 0.5) 100%)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            🐙 Code
          </a>
        )}
        {project.live_url && (
          <a
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 15px',
              background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.3) 0%, rgba(0, 26, 51, 0.5) 100%)',
              border: '1px solid var(--primary-blue)',
              color: 'var(--primary-blue)',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontFamily: 'Orbitron',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              flex: 1,
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(0, 136, 204, 0.3) 100%)'
              e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 212, 255, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 68, 102, 0.3) 0%, rgba(0, 26, 51, 0.5) 100%)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            🚀 Live
          </a>
        )}
      </div>

      <style jsx>{`
        @keyframes projectAppear {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
