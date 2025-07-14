import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import {Toaster} from 'react-hot-toast'
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vishal Kanojiya - React.js / Front-End Developer',
  description: 'Front-End Developer with 2+ years of experience building responsive and high-performance web applications. Specialized in React.js, Next.js, and modern web technologies.',
  keywords: [
    'Vishal Kanojiya',
    'React Developer',
    'Front-End Developer',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Web Developer',
    'Mumbai',
    'Portfolio'
  ],
  authors: [{ name: 'Vishal Kanojiya' }],
  creator: 'Vishal Kanojiya',
  metadataBase: new URL('https://vishal-kanojiya.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vishal-kanojiya.vercel.app',
    title: 'Vishal Kanojiya - React.js / Front-End Developer',
    description: 'Front-End Developer with 2+ years of experience building responsive and high-performance web applications.',
    siteName: 'Vishal Kanojiya Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vishal Kanojiya - React.js / Front-End Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishal Kanojiya - React.js / Front-End Developer',
    description: 'Front-End Developer with 2+ years of experience building responsive and high-performance web applications.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vishal Kanojiya",
              "jobTitle": "Front-End Developer",
              "description": "Front-End Developer with 2+ years of experience building responsive and high-performance web applications",
              "url": "https://vishal-kanojiya.vercel.app",
              "sameAs": [
                "https://github.com/kanojiya9768",
                "https://linkedin.com/in/vishal-kanojiya"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Koparkhairne",
                "addressRegion": "Navi Mumbai",
                "addressCountry": "India"
              },
              "email": "kanojiya9768@gmail.com",
              "telephone": "+91 8097859158"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-left" />
        </ThemeProvider>
      </body>
    </html>
  );
}