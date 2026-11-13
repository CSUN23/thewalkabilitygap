import { useEffect, useRef, useState } from 'react'
import './theme.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Trail from './components/Trail'

function App() {
  // const [count, setCount] = useState(0);
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <nav className="topBar">
        <Link to="/" className="brand">The Walkability Gap</Link>

        <div className="navLinks">
          <NavLink to="/data">Data</NavLink>
          <NavLink to="/analysis">Analysis</NavLink>
          <NavLink to="/bibliography">Bibliography</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
