'use client';
import Link from 'next/link';
import Head from 'next/head';
import './globals.css';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Steven Mclardy</title>
        <meta name="description" content="Welcome to Stevens personal portfolio" />
      </Head>

      <div className="body">
        <header className="navbar">
          <div className="navbar-image">
            <img src="profile.jpg" alt="Stevens profile" className="navbar-content" /> 
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/skills">Skills</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <div className="profile-container">
            <img src="/profile.jpg" alt="Stevens profile" className="profile-pic" />
          </div>

          <section id="hero">
            <h1 className="main-heading">Hi! I am Steven Mclardy</h1>
            <p>I build modern web applications and I specialize in React and database-driven solutions.</p>
            <p>Feel free to head to my contact page so we can get in touch and work on your next big idea!</p>
          </section>

          <section id="projects">
            <h2>Projects</h2>
            <p>Here are a few things I have built recently. More coming soon!</p>
            
              <div className="project-card">
                <h3>Steves Services</h3>
                <p>A multi-page website for a fictional services company built with HTML, CSS, and JavaScript.</p>
              </div>
            
            <a href="https://steve-ster.github.io/steves-services/" className="project-link" target="_blank" rel="noopener noreferrer"></a>
          </section>
        </main>
      </div>
    </>
  );
}
