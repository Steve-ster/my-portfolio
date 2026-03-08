import './globals.css'
import Navbar from '@/components/Navbar'
import Script from 'next/script'

export const metadata = {
  title: {
    default: 'Steven Mclardy - Full Stack Developer',
    template: '%s | Steven Mclardy'
  },
  description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies. Available for remote work.',
  keywords: ['Full stack Developer', 'React Developer', 'Next.js', 'Web Development', 'South Africa'],
  authors: [{ name: 'Steven Mclardy' }],
  creator: 'Steven Mclardy',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://my-portfolio-rosy-kappa-89.vercel.app',
    title: 'Steven Mclardy - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies',
    siteName: 'Steven Mclardy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steven Mclardy - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    creator: '@SMclardy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Steven Mclardy",
              "jobTitle": "Full Stack Developer",
              "url": "https://my-portfolio-rosy-kappa-89.vercel.app/",
              "sameAs": [
                "https://github.com/Steve-ster",
                "https://linkedin.com/in/steven-mclardy2910",
                "https://twitter.com/SMclardy"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Johannesburg",
                "addressRegion": "Gauteng",
                "addressCountry": "ZA"
              },
              "knowsAbout": [
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Web Development"
              ]
            })
          }}
        />
      </head>
      <body>
        <div className="grid-overlay"></div>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
