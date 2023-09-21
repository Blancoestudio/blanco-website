// import Image from 'next/image'
// import styles from './page.module.css'
import Link from 'next/link'
import { MainBanner } from './components/MainBanner'
import { AboutUs } from './components/AboutUs'
import { Services } from './components/Services'
import { Marquee } from './components/Marquee'
import { Portfolio } from './components/Portfolio'
import { Partners } from './components/Partners'
import { Mision } from './components/Mision'
import { Contact } from './components/Contact'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <MainBanner/>
      <AboutUs />
      <Services />
      <Marquee />
      <Portfolio />
      <Mision />
      <Partners />
      <Contact />
      <div>
          <Link href={'/pageone'} className="btn btn-primary">Página 1</Link>
        -
          <Link href={'/pagetwo'} className="btn btn-primary">Página 2</Link>
      </div>
    </div>
  )
}
