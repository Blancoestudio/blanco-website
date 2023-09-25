import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cardiomas',
}

export default function Layout({children,}: {children: React.ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}
