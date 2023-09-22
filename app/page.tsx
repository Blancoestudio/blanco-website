import { MainBanner } from './components/MainBanner'
import { AboutUs } from './components/AboutUs'
import { OurServices } from './components/OurServices'
import { Marquee } from './components/Marquee'
import { Portfolio } from './components/Portfolio'
import { Mision } from './components/Mision'
import { Partners } from './components/Partners'
import { Contact } from './components/Contact'

export default function Home() {
  return (
    <div>
      <MainBanner/>
      <AboutUs />
      <OurServices />
      <Marquee />
      <Portfolio />
      <Mision />
      <Partners />
      <Contact />
    </div>
  )
}
