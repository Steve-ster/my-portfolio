'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-image">
        <Link href="/" className="home-link">
          <div className="home-logo">
            <img src="profile.jpg" alt="Steven's profile" className="navbar-content" />
            <span className="home-text">Home</span>
          </div>
        </Link>
      </div>

      <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
