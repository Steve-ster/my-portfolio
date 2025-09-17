'use client';
import Link from 'next/link';
import './globals.css';

export default function HomePage() {
  return (
    
    
    <div className="body">
      
      <header className="navbar">
        
        <nav>
          <ul className="nav-links">
            <li><Link href="#hero">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#skills">Skills</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

    
      <main className="main-content">
        <div className="profile-container">
          <img src="/profile.jpg" alt="Steven's profile" className="profile-pic" />
        </div>
        <section id="hero">
          <h1>Welcome to My Website</h1>
          <p>Hi, I'm Steven, and this is my personal space on the web.</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>I’m a passionate developer with a love for clean design and creative problem-solving.</p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <h3>Some of the Languages I specialise in :</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS</li>
            <li>UI/UX Design</li>
            <li>Python</li>
            <li>HTML</li>
            <li>Django</li>
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p>Here are a few things I’ve built recently. More coming soon!</p>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>Feel free to reach out via email or connect with me on social media.</p>
          <ul>
            <li>Instagram: @stevie_2910</li>
            <li>Email: mclardysteven2910@gmail.com</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2025 Steven Mclardy. All rights reserved.</p>
        <p>GMT+2 Time Zone</p>
        <p>Johannesburg</p>
      </footer>
    </div>
  );
}
