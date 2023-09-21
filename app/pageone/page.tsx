import Link from 'next/link'
import styles from './page.module.css'
import React from 'react'

const page = () => {
  return (
    <main className={styles.main}>
      <h1>PAGE ONE</h1>
      <div>
        <button>
          <Link href={'/'}>Home</Link>
        </button>
        -
        <button>
          <Link href={'/pagetwo'}>Página 2</Link>
        </button>
      </div>
    </main>
  )
}

export default page