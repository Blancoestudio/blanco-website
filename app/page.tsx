import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <div>
        <button>
          <Link href={'/pageone'}>Página 1</Link>
        </button>
        -
        <button>
          <Link href={'/pagetwo'}>Página 2</Link>
        </button>
      </div>
    </main>
  )
}
