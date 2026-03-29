import { useCallback, useEffect, useState } from 'react'
import Slide from './components/Slide'
import slides from './slides'
import './App.css'

export default function App() {
  const [current, setCurrent] = useState(0)

  const go = useCallback(
    (dir: 1 | -1) => {
      setCurrent((prev) => {
        const next = prev + dir
        if (next < 0) return 0
        if (next >= slides.length) return slides.length - 1
        return next
      })
    },
    []
  )

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        go(1)
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        go(-1)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [go])

  const slide = slides[current]
  const progress = ((current + 1) / slides.length) * 100

  return (
    <div className="deck">
      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Slide */}
      <div className="slide-container">
        <Slide slide={slide} index={current} total={slides.length} />
      </div>

      {/* Navigation */}
      <div className="nav">
        <button
          className="nav__btn"
          onClick={() => go(-1)}
          disabled={current === 0}
          aria-label="Previous slide"
        >
          &#8592;
        </button>

        <div className="nav__dots">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`nav__dot ${i === current ? 'nav__dot--active' : ''}`}
              style={{
                background:
                  i === current
                    ? s.section === 'iwsp'
                      ? '#3b82f6'
                      : s.section === 'capstone'
                      ? '#8b5cf6'
                      : '#10b981'
                    : undefined,
              }}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="nav__btn"
          onClick={() => go(1)}
          disabled={current === slides.length - 1}
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>
    </div>
  )
}
