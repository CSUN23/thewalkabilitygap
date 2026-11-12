import { useEffect, useRef, useState } from 'react'

export default function Footprint({ side, delay }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting) 
    }, { rootMargin: '0px 0px -15% 0px'})

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className={`step ${side} ${visible ? 'show' : ''}`}
      style={{ transitionDelay: `{$delay}s` }}
    >
      <svg viewBox="0 0 20 32" aria-hidden="true">
        <ellipse cx="10" cy="21" rx="6" ry="9" />
        <circle cx="13.5" cy="8.5" r="2.6" />
        <circle cx="9.6" cy="7" r="1.9" />
        <circle cx="6.6" cy="8" r="1.6" />
        <circle cx="4.4" cy="10" r="1.4" />
        <circle cx="3.2" cy="12.8" r="1.2" />
      </svg>
    </span>
  )
}