// app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Steven Mclardy',
  description: 'Personal portfolio of Steven Mclardy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="navbar-image">
            <Link href="/" className="home-link">
              <div className="home-logo">
                <img src="profile.jpg" alt="Steven's profile" className="navbar-content" />
                <span className="home-text">Home</span>
              </div>
            </Link> 
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
          {children}
        </main>

        <footer>
          <p>© 2025 Steven Mclardy. All rights reserved.</p>
          <p>GMT+2 Time Zone</p>
          <p>Johannesburg</p>
        </footer>
      </body>
    </html>
  );
}
