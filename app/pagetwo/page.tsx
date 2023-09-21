import Link from 'next/link'
import styles from './page.module.css'
import React from 'react'

const page = () => {
  return (
    <main className={styles.main}>
      <h1>PAGE TWO</h1>
      <div>
        <button>
          <Link href={'/'}>Home</Link>
        </button>
        -
        <button>
          <Link href={'/pageone'}>Página 1</Link>
        </button>
      </div>
    </main>
  )
}

export default page