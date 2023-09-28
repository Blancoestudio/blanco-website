
import type { Metadata } from 'next'

import { siteOrigin } from '@/lib/contants';

import { MenuBar } from '../components/MenuBar';
import { Footer } from '../components/Footer';
import { karla, nunito } from '@/assets/fonts';

import '../assets/styles/globals.scss'
import { basePath } from '@/next.config';

export const metadata: Metadata = {
  title: {
    default: 'Blanco',
    template: 'Blanco | %s',
  },
  description: 'Estudio de tecnología e innovación.',
  keywords: ['Tecnología', 'Innovación', 'Diseño', 'Agencia'],
  metadataBase: new URL(`${siteOrigin}`),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: 'Blanco',
    description: 'Estudio de tecnología e innovación.',
    siteName: "Blanco",
    url: siteOrigin,
    locale: "en-US",
    type: "website",
    images: [
      { 
        width: 1200, 
        height: 630, 
        url: `${siteOrigin}${basePath}/blanco.png` }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blanco",
    description: 'Estudio de tecnología e innovación.',
    creator: "@blanco",
    images: [
      { 
        width: 1200, 
        height: 630, 
        url: `${siteOrigin}${basePath}/blanco.png` 
      }
    ],
  },
}

// export const metadata: Metadata = {
//   viewport: {
//     height: "device-height",
//     initialScale: 1,
//     width: "device-width",
//   },
//   manifest: "/manifest.webmanifest",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={`${ karla.variable } ${ nunito.variable }`}>
        <MenuBar/>
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
