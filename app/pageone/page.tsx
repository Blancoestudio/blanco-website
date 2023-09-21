import Link from 'next/link'
// import styles from './page.module.css'
import React from 'react'

const page = () => {
  return (
    <main>
      <h1>PAGE ONE</h1>
      <div>
        <Link href={'/'} className="btn btn-primary">Home</Link>
        -
        <Link href={'/pagetwo'} className="btn btn-primary">Página 2</Link>
      </div>
    </main>
  )
}

export default page