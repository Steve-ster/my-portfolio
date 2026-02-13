'use client'

import { useState, useEffect } from 'react'

export default function StatWindow({ title, children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`stat-window ${isVisible ? 'visible' : ''}`}>
      <div className="window-header">
        <div className="window-title">{title}</div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  )
}
