
import type { Metadata } from 'next'

import { siteOrigin } from '@/lib/contants';

import { MenuBar } from '../components/MenuBar';
import { Footer } from '../components/Footer';
import { karla, nunito } from '@/assets/fonts';

import '../assets/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Blanco',
  description: 'Estudio de tecnología e innovación.',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   creator: "@blanco",
  //   description: "Blanco",
  //   images: [{ width: 1200, height: 630, url: `${siteOrigin}/og.jpg` }],
  //   site: "@basementstudio",
  //   title: "Blanco",
  // },
  // openGraph: {
  //   description: "Blanco",
  //   images: [{ width: 1200, height: 630, url: `${siteOrigin}/og.jpg` }],
  //   locale: "en-US",
  //   siteName: "Blanco",
  //   title: "Blanco",
  //   type: "website",
  //   url: siteOrigin,
  // },
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
