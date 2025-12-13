// app/layout.js
import './globals.css';
import Navbar from './Navbar/navbar'; // new client component

export const metadata = {
  title: 'Steven Mclardy',
  description: 'Personal portfolio of Steven Mclardy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="main-content">{children}</main>
        <footer className="footer">
          <p>© 2025 Steven Mclardy. All rights reserved.</p>
          <p>UTC+2</p>
          <p>Johannesburg, South-Africa</p>
        </footer>
      </body>
    </html>
  );
}
