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
            <p>Here you can view some of my projects, learn more about me </p>
            <p>or even contact me for collaborations.</p>
          </section>

          <section id="projects">
            <h2>Projects</h2>
            <p>Here are a few things I have built recently. More coming soon!</p>
          </section>
        </main>
      </div>
    </>
  );
}
