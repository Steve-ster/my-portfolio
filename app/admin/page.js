'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import StatWindow from '@/components/StatWindow'

export default function AdminDashboard() {
  const router = useRouter()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    technologies: '',
    github_url: '',
    live_url: '',
    image_url: ''
  })
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    checkAuth()
    fetchProjects()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      router.push('/admin/login')
      return
    }
    
    setLoading(false)
  }

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error) {
      setProjects(data || [])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const projectData = {
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim())
    }

    if (editingId) {
      // Update existing project
      const { error } = await supabase
        .from('projects')
        .update(projectData)
        .eq('id', editingId)

      if (!error) {
        setEditingId(null)
        resetForm()
        fetchProjects()
      }
    } else {
      // Create new project
      const { error } = await supabase
        .from('projects')
        .insert([projectData])

      if (!error) {
        resetForm()
        fetchProjects()
      }
    }
  }

  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      category: project.category,
      technologies: Array.isArray(project.technologies) 
        ? project.technologies.join(', ') 
        : project.technologies,
      github_url: project.github_url || '',
      live_url: project.live_url || '',
      image_url: project.image_url || ''
    })
    setEditingId(project.id)
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id)

      if (!error) {
        fetchProjects()
      }
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: '',
      technologies: '',
      github_url: '',
      live_url: '',
      image_url: ''
    })
    setEditingId(null)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  if (loading) {
    return (
      <div className="main-container">
        <StatWindow title="⏳ Loading" delay={0}>
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
          }}>
            <div style={{
              color: 'var(--primary-blue)',
              fontFamily: 'Orbitron',
              fontSize: '1.2rem',
              marginBottom: '20px'
            }}>
              Authenticating...
            </div>
          </div>
        </StatWindow>
      </div>
    )
  }

  return (
    <div className="main-container">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h1 style={{ 
          fontFamily: 'Orbitron', 
          color: 'var(--primary-blue)',
          fontSize: '1.5rem'
        }}>
          Admin Portal
        </h1>
        <button onClick={handleLogout} className="btn-primary">
          Logout
        </button>
      </div>

      <StatWindow title={editingId ? "✏️ Edit Project" : "➕ Add New Project"} delay={0}>
        <form onSubmit={handleSubmit}>
          <div className="mb-20">
            <label htmlFor="title">Project Title</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="mb-20">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>

          <div className="mb-20">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              placeholder="e.g., web, mobile, design"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
            />
          </div>

          <div className="mb-20">
            <label htmlFor="technologies">Technologies (comma-separated)</label>
            <input
              type="text"
              id="technologies"
              placeholder="React, Node.js, MongoDB"
              value={formData.technologies}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
              required
            />
          </div>

          <div className="mb-20">
            <label htmlFor="github_url">GitHub URL </label>
            <input
              type="url"
              id="github_url"
              value={formData.github_url}
              onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
            />
          </div>

          <div className="mb-20">
            <label htmlFor="live_url">Live URL </label>
            <input
              type="url"
              id="live_url"
              value={formData.live_url}
              onChange={(e) => setFormData({ ...formData, live_url: e.target.value })}
            />
          </div>

          <div className="mb-30">
            <label htmlFor="image_url">Image URL </label>
            <input
              type="url"
              id="image_url"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="submit" className="btn-primary">
              {editingId ? 'Update Project' : 'Add Project'}
            </button>
            {editingId && (
              <button 
                type="button" 
                onClick={resetForm}
                className="btn-primary"
                style={{ background: 'rgba(255, 68, 68, 0.2)', borderColor: '#ff4444' }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </StatWindow>

      <StatWindow title="📋 Manage Projects" delay={200}>
        {projects.length === 0 ? (
          <p style={{ color: '#6c9cc1', textAlign: 'center', padding: '20px' }}>
            No projects yet. Add your first project above!
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {projects.map((project) => (
              <div
                key={project.id}
                style={{
                  padding: '20px',
                  background: 'linear-gradient(135deg, rgba(0, 68, 102, 0.2) 0%, rgba(0, 26, 51, 0.4) 100%)',
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                  borderLeft: '3px solid var(--primary-blue)'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  marginBottom: '10px'
                }}>
                  <div>
                    <h3 style={{ 
                      fontFamily: 'Orbitron', 
                      color: 'var(--primary-blue)',
                      fontSize: '1.1rem',
                      marginBottom: '5px'
                    }}>
                      {project.title}
                    </h3>
                    <p style={{ color: '#6c9cc1', fontSize: '0.85rem' }}>
                      {project.category}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => handleEdit(project)}
                      className="btn-primary"
                      style={{ padding: '6px 15px', fontSize: '0.8rem' }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="btn-primary"
                      style={{ 
                        padding: '6px 15px', 
                        fontSize: '0.8rem',
                        background: 'rgba(255, 68, 68, 0.2)',
                        borderColor: '#ff4444'
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p style={{ color: '#b3d9ff', fontSize: '0.9rem' }}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </StatWindow>
    </div>
  )
}
