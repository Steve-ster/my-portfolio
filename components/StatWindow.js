'use client'

import { useState, useEffect } from 'react'

/**
 * Reusable stat window component with animated entrance
 * @param {Object} props - Component props
 * @param {string} props.title - Window title displayed in header
 * @param {React.ReactNode} props.children - Content to display inside window
 * @param {number} [props.delay=0] - Animation delay in milliseconds
 * @returns {JSX.Element} Animated stat window container
 */
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
