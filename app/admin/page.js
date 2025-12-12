'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import '../admin.css';

export default function AdminPanel() {
  const router = useRouter();
  const { isAdmin, logout } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    project_url: '',
    github_url: ''
  });

  useEffect(() => {
    if (!isAdmin) {
      router.push('/admin/login');
      return;
    }
    fetchProjects();
  }, [isAdmin, router]);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editingId) {
        // Update existing project
        const response = await fetch(`/api/projects/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Failed to update');
      } else {
        // Create new project
        const response = await fetch('/api/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Failed to create');
      }
      
      // Reset form and refresh
      setFormData({ title: '', description: '', image_url: '', project_url: '', github_url: '' });
      setEditingId(null);
      fetchProjects();
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving project');
    }
  };

  const handleEdit = (project) => {
    setFormData(project);
    setEditingId(project.id);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure?')) return;
    
    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete');
      fetchProjects();
    } catch (error) {
      console.error('Error:', error);
      alert('Error deleting project');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ title: '', description: '', image_url: '', project_url: '', github_url: '' });
  };

  if (loading) return <div className="admin-container"><p>Loading...</p></div>;

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Panel</h1>
        <button className="logout-btn" onClick={() => { logout(); router.push('/'); }}>
          Logout
        </button>
      </div>

      <form onSubmit={handleSubmit} className="admin-form">
        <h2>{editingId ? 'Edit Project' : 'Add New Project'}</h2>
        
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Project URL:</label>
          <input
            type="url"
            name="project_url"
            value={formData.project_url}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>GitHub URL:</label>
          <input
            type="url"
            name="github_url"
            value={formData.github_url}
            onChange={handleChange}
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-primary">
            {editingId ? 'Update' : 'Create'} Project
          </button>
          {editingId && (
            <button type="button" className="btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="projects-list">
        <h2>Projects ({projects.length})</h2>
        {projects.length === 0 ? (
          <p>No projects yet. Create one above!</p>
        ) : (
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-actions">
                  <button className="btn-edit" onClick={() => handleEdit(project)}>Edit</button>
                  <button className="btn-delete" onClick={() => handleDelete(project.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
