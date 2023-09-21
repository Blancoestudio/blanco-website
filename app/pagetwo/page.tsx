import Link from 'next/link'
// import styles from './page.module.css'
import React from 'react'

const page = () => {
  return (
    <main>
      <h1>PAGE TWO</h1>
      <div>
        <Link href={'/'} className="btn btn-primary">Home</Link>
        -
        <Link href={'/pageone'} className="btn btn-primary">Página 1</Link>
      </div>
    </main>
  )
}

export default page