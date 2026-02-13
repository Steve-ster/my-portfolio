'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import StatWindow from '@/components/StatWindow'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setProjects(data || [])
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = ['all', ...new Set(projects.map(p => p.category))]
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <div className="main-container">
      <StatWindow title="🚀 Quest Log" delay={0}>
        <div style={{ marginBottom: '30px' }}>
          <div style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '20px'
          }}>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className="btn-primary"
                style={{
                  padding: '8px 20px',
                  fontSize: '0.85rem',
                  background: filter === category 
                    ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.3) 0%, rgba(0, 136, 204, 0.4) 100%)'
                    : 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.3) 100%)',
                  borderColor: filter === category ? 'var(--primary-blue)' : 'rgba(0, 212, 255, 0.3)'
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px', 
            color: 'var(--primary-blue)',
            fontFamily: 'Orbitron'
          }}>
            Loading projects...
          </div>
        ) : filteredProjects.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px', 
            color: '#6c9cc1'
          }}>
            No projects found. Start by adding some in the admin panel!
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 0.1} />
            ))}
          </div>
        )}
      </StatWindow>
    </div>
  )
}
