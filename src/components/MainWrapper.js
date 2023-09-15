import React from 'react'
import Lsb from './Global-content/Lsb'
import Herosec from './Main-Components/Herosec'
import About from './Main-Components/About'
import Skills from './Main-Components/Skills'
import Portfolio from './Main-Components/Portfolio'

import Contact from './Main-Components/Contact'

export default function Main() {
  return (
    <main className="drake-main">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Lsb /> {/* this component will used by mobile devices */}
          <Herosec />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </main>
  )
}
