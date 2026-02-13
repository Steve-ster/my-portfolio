'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import StatWindow from '@/components/StatWindow'

export default function AdminLogin() {
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      })

      if (error) throw error

      router.push('/admin')
    } catch (error) {
      setError(error.message || 'Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="main-container">
      <StatWindow title="🔐 Admin Access" delay={0}>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <form onSubmit={handleLogin}>
            <div className="mb-20">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
                autoComplete="email"
              />
            </div>

            <div className="mb-30">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="error-message" style={{ marginBottom: '20px' }}>
                {error}
              </div>
            )}

            <button 
              type="submit" 
              className="btn-primary"
              style={{ width: '100%' }}
              disabled={loading}
            >
              {loading ? 'Authenticating...' : 'Enter Admin Portal'}
            </button>
          </form>
        </div>
      </StatWindow>
    </div>
  )
}
