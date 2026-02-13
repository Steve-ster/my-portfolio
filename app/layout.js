import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Steven Mclardy',
  description: 'Stevens portfolio',
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
