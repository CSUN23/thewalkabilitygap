import { useEffect, useRef, useState } from 'react'

const STEP = 48      
const MARGIN = 50 
const SWAY = 25      

function smoothCurve(pts) {
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] || p2
    const c1x = p1.x + (p2.x - p0.x) / 6
    const c1y = p1.y + (p2.y - p0.y) / 6
    const c2x = p2.x - (p3.x - p1.x) / 6
    const c2y = p2.y - (p3.y - p1.y) / 6
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`
  }
  return d
}

export default function WalkingPath({ children }) {
  const pageRef = useRef(null)
  const [feet, setFeet] = useState([])
  const [reach, setReach] = useState(0)

  useEffect(() => {
    const page = pageRef.current

    function build() {
      const pageBox = page.getBoundingClientRect()
      const width = pageBox.width
      const boxes = [...page.querySelectorAll('.histCont')].map((el) => {
        const r = el.getBoundingClientRect()
        return {
          top: r.top - pageBox.top,
          bottom: r.bottom - pageBox.top,
          left: r.left - pageBox.left,
          right: r.right - pageBox.left,
        }
      })
      if (boxes.length === 0) return

      const pts = []
      boxes.forEach((b, i) => {
        const onLeft = i % 2 === 0
        const x = onLeft ? Math.max(25, b.left - MARGIN) : Math.min(width - 25, b.right + MARGIN)
        const sway = onLeft ? -SWAY : SWAY
        if (i === 0) pts.push({ x, y: 0 })
        pts.push({ x, y: b.top })
        pts.push({ x: x + sway, y: (b.top + b.bottom) / 2 })
        pts.push({ x, y: b.bottom })
      })

      const NS = 'http://www.w3.org/2000/svg'
      const svg = document.createElementNS(NS, 'svg')
      const path = document.createElementNS(NS, 'path')
      path.setAttribute('d', smoothCurve(pts))
      svg.appendChild(path)
      svg.style.position = 'absolute'
      svg.style.visibility = 'hidden'
      document.body.appendChild(svg)

      const total = path.getTotalLength()
      const list = []
      for (let len = 0, i = 0; len <= total; len += STEP, i++) {
        const p = path.getPointAtLength(len)
        const ahead = path.getPointAtLength(Math.min(total, len + 1))
        const behind = path.getPointAtLength(Math.max(0, len - 1))
        const dx = ahead.x - behind.x
        const dy = ahead.y - behind.y
        const size = Math.hypot(dx, dy) || 1
        const isLeft = i % 2 === 0
        const shift = isLeft ? 10 : -10  
        list.push({
          x: p.x + shift * (dy / size),
          y: p.y + shift * (-dx / size),
          angle: Math.atan2(dy, dx) * 180 / Math.PI + 90,   
          flip: !isLeft,                                 
        })
      }
      svg.remove()
      setFeet(list)
    }

    build()
    const observer = new ResizeObserver(build) 
    observer.observe(page)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function onScroll() {
      const top = pageRef.current.getBoundingClientRect().top
      setReach(window.innerHeight * 0.8 - top)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="walkPage" ref={pageRef}>
      <div className="footLayer" aria-hidden="true">
        {feet.map((f, i) => (
          <span
            key={i}
            className={`foot ${f.y < reach ? 'show' : ''}`}
            style={{
              left: f.x,
              top: f.y,
              transform: `translate(-50%, -50%) rotate(${f.angle}deg) ${f.flip ? 'scaleX(-1)' : ''}`,
            }}
          >
            <svg viewBox="0 0 20 32">
              <ellipse cx="10" cy="21" rx="6" ry="9" />
              <circle cx="13.5" cy="8.5" r="2.6" />
              <circle cx="9.6" cy="7" r="1.9" />
              <circle cx="6.6" cy="8" r="1.6" />
              <circle cx="4.4" cy="10" r="1.4" />
              <circle cx="3.2" cy="12.8" r="1.2" />
            </svg>
          </span>
        ))}
      </div>
      {children}
    </div>
  )
}