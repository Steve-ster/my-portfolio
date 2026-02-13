import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Player Stats - Portfolio',
  description: 'Solo Leveling themed developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="grid-overlay"></div>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
