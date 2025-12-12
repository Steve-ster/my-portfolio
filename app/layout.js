// app/layout.js
import './globals.css';
import Link from 'next/link';
import { AuthProvider } from '@/lib/auth-context';

export const metadata = {
  title: 'Steven Mclardy',
  description: 'Personal portfolio of Steven Mclardy',
};

export default function RootLayout({ children }) {
  const googleMapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <html lang="en">
      <head>
        {googleMapsKey && (
          <script
            async
            src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}`}
          ></script>
        )}
      </head>
      <body>
        <AuthProvider>
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
                <li><Link href="/admin">Admin</Link></li>
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
        </AuthProvider>
      </body>
    </html>
  );
}
