'use client'
import Image from 'next/image'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import StatWindow from '@/components/StatWindow'
import Link from 'next/link'

export default function ProjectDetail() {
  const params = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProject() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id])

  const fetchProject = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', params.id)
        .single()

      if (error) throw error
      
      if (!data) {
        setError('Project not found')
        return
      }

      setProject(data)
    } catch (error) {
      console.error('Error fetching project:', error)
      setError('Failed to load project')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="main-container">
        <StatWindow title="⏳ Loading" delay={0}>
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            color: 'var(--primary-blue)',
            fontFamily: 'Orbitron',
            fontSize: '1.2rem'
          }}>
            Loading project details...
          </div>
        </StatWindow>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="main-container">
        <StatWindow title="❌ Error" delay={0}>
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <p style={{ 
              color: '#ff4444', 
              fontSize: '1.2rem',
              marginBottom: '20px'
            }}>
              {error || 'Project not found'}
            </p>
            <Link href="/projects" className="btn-primary">
              ← Back to Projects
            </Link>
          </div>
        </StatWindow>
      </div>
    )
  }

  return (
    <div className="main-container">
      {/* Back Button */}
      <div style={{ marginBottom: '20px' }}>
        <Link 
          href="/projects" 
          style={{
            color: 'var(--primary-blue)',
            textDecoration: 'none',
            fontFamily: 'Orbitron',
            fontSize: '0.9rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.textShadow = '0 0 10px var(--primary-blue)'
            e.target.style.transform = 'translateX(-5px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.textShadow = 'none'
            e.target.style.transform = 'translateX(0)'
          }}
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <StatWindow title={`🚀 ${project.title}`} delay={0}>
        {project.image_url && (
          <div style={{
            width: '100%',
            height: '400px',
            marginBottom: '30px',
            overflow: 'hidden',
            border: '2px solid var(--primary-blue)',
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
          }}>
            <Image
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

        <div style={{ marginBottom: '20px' }}>
          <span style={{
            display: 'inline-block',
            padding: '6px 15px',
            background: 'rgba(0, 212, 255, 0.1)',
            border: '1px solid var(--primary-blue)',
            color: 'var(--primary-blue)',
            fontFamily: 'Orbitron',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            {project.category}
          </span>
        </div>

        <p style={{
          color: '#b3d9ff',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          marginBottom: '30px'
        }}>
          {project.description}
        </p>

        {/* Technologies */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontFamily: 'Orbitron',
            color: 'var(--primary-blue)',
            fontSize: '1.2rem',
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Technologies Used
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            {Array.isArray(project.technologies) && project.technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  padding: '8px 16px',
                  background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.3) 0%, rgba(0, 26, 51, 0.5) 100%)',
                  border: '1px solid rgba(0, 212, 255, 0.4)',
                  color: '#b3d9ff',
                  fontSize: '0.9rem',
                  fontFamily: 'Rajdhani',
                  fontWeight: 600
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              🐙 View Code
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              🚀 Live Demo
            </a>
          )}
        </div>
      </StatWindow>

      {/* Project Details */}
      <StatWindow title="📋 Project Details" delay={200}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.4) 100%)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderLeft: '3px solid var(--primary-blue)'
          }}>
            <div style={{
              fontFamily: 'Orbitron',
              fontSize: '0.75rem',
              color: '#6c9cc1',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '8px'
            }}>
              Category
            </div>
            <div style={{
              fontSize: '1.1rem',
              color: '#fff',
              fontWeight: 600
            }}>
              {project.category}
            </div>
          </div>

          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.4) 100%)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderLeft: '3px solid var(--primary-blue)'
          }}>
            <div style={{
              fontFamily: 'Orbitron',
              fontSize: '0.75rem',
              color: '#6c9cc1',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '8px'
            }}>
              Technologies
            </div>
            <div style={{
              fontSize: '1.1rem',
              color: '#fff',
              fontWeight: 600
            }}>
              {Array.isArray(project.technologies) ? project.technologies.length : 0} Tools
            </div>
          </div>

          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.4) 100%)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderLeft: '3px solid var(--primary-blue)'
          }}>
            <div style={{
              fontFamily: 'Orbitron',
              fontSize: '0.75rem',
              color: '#6c9cc1',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '8px'
            }}>
              Status
            </div>
            <div style={{
              fontSize: '1.1rem',
              color: '#00ff88',
              fontWeight: 600
            }}>
              {project.live_url ? 'Live' : 'In Development'}
            </div>
          </div>
        </div>
      </StatWindow>
    </div>
  )
}