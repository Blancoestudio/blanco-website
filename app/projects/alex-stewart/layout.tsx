import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alex Stewart',
}

export default function Layout({children,}: {children: React.ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}
