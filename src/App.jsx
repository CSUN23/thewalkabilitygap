import { useEffect, useRef, useState } from 'react'
import './theme.css'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Trail from './components/Trail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="topBar">
        <a href="/" className="brand">The Walkability Gap</a>

        <div className="navLinks">
          <a href="#data">Data</a>
          <a href="#analysis">Analysis</a>
          <a href="#bibliography">Bibliography</a>
        </div>
      </div>
      
      <header className="bg">
        <div className="bgContent">
          <h1>The Walkability Gap</h1>
          <p>DESCRIPTION</p>
        </div>
      </header>

      <main>
        <div className="walkRow trailOnLeft">
          <Trail direction="down" steps={8} />
          <section className="hist">
            <div className="histCont">
              <h2>Historical Context</h2>
              <p>Hello</p>
            </div>
          </section>
        </div>
        <Trail direction="right" steps={12} />

        <div className="walkRow trailOnRight">
          <section className="hist">
            <div className="histCont">
              <h2>Why we chose this topic</h2>
              <p>because we want to</p>
            </div>
          </section>
          <Trail direction="down" steps={8} />
        </div>

        <Trail direction="left" steps={12} />
      </main>
    </>
  )
}

export default App
