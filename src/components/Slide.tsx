import type { SlideData } from '../types'

interface SlideProps {
  slide: SlideData
  index: number
  total: number
}

const sectionColors: Record<string, string> = {
  iwsp: '#3b82f6',
  capstone: '#8b5cf6',
  demo: '#10b981',
}

const sectionLabels: Record<string, string> = {
  iwsp: 'IWSP',
  capstone: 'Capstone',
  demo: 'Demo',
}

function renderBullet(
  bullet: string | { text: string; sub?: string[] },
  i: number
) {
  if (typeof bullet === 'string') {
    return (
      <li key={i} className="bullet">
        {bullet}
      </li>
    )
  }
  return (
    <li key={i} className="bullet">
      <strong>{bullet.text}</strong>
      {bullet.sub && bullet.sub.length > 0 && (
        <ul className="sub-bullets">
          {bullet.sub.map((s, j) => (
            <li key={j}>{s}</li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function Slide({ slide, index, total }: SlideProps) {
  const accent = sectionColors[slide.section] || '#3b82f6'

  if (slide.layout === 'title') {
    return (
      <div className="slide slide--title">
        <div className="slide__badge" style={{ background: accent }}>
          {sectionLabels[slide.section]}
        </div>
        <h1 className="slide__title slide__title--big">{slide.title}</h1>
        {slide.subtitle && (
          <p className="slide__subtitle">{slide.subtitle}</p>
        )}
        {slide.bullets && (
          <ul className="slide__meta">
            {slide.bullets.map((b, i) => (
              <li key={i}>{typeof b === 'string' ? b : b.text}</li>
            ))}
          </ul>
        )}
        <div className="slide__counter">
          {index + 1} / {total}
        </div>
      </div>
    )
  }

  if (slide.layout === 'section-break') {
    return (
      <div className="slide slide--section-break" style={{ borderColor: accent }}>
        <div className="slide__badge" style={{ background: accent }}>
          {sectionLabels[slide.section]}
        </div>
        <h1 className="slide__title slide__title--section">{slide.title}</h1>
        {slide.subtitle && (
          <p className="slide__subtitle slide__subtitle--section">
            {slide.subtitle}
          </p>
        )}
        <div className="slide__counter">
          {index + 1} / {total}
        </div>
      </div>
    )
  }

  if (slide.layout === 'two-col') {
    return (
      <div className="slide">
        <div className="slide__badge" style={{ background: accent }}>
          {sectionLabels[slide.section]}
        </div>
        <h1 className="slide__title">{slide.title}</h1>
        {slide.subtitle && (
          <p className="slide__subtitle">{slide.subtitle}</p>
        )}
        <div className="slide__two-col">
          <div className="slide__col">
            {slide.leftCol?.map((item, i) =>
              item === '' ? (
                <div key={i} className="slide__col-spacer" />
              ) : i === 0 || (i > 0 && slide.leftCol?.[i - 1] === '') ? (
                <h3 key={i} className="slide__col-heading">
                  {item}
                </h3>
              ) : (
                <p key={i} className="slide__col-item">
                  {item}
                </p>
              )
            )}
          </div>
          <div className="slide__col">
            {slide.rightCol?.map((item, i) =>
              item === '' ? (
                <div key={i} className="slide__col-spacer" />
              ) : i === 0 || (i > 0 && slide.rightCol?.[i - 1] === '') ? (
                <h3 key={i} className="slide__col-heading">
                  {item}
                </h3>
              ) : (
                <p key={i} className="slide__col-item">
                  {item}
                </p>
              )
            )}
          </div>
        </div>
        {slide.image && (
          <div className="slide__image">
            <img src={slide.image} alt={slide.title} />
          </div>
        )}
        {slide.images && (
          <div className={`slide__images slide__images--${slide.images.length}`}>
            {slide.images.map((src, i) => (
              <img key={i} src={src} alt={`${slide.title} ${i + 1}`} />
            ))}
          </div>
        )}
        {slide.note && <p className="slide__note">{slide.note}</p>}
        <div className="slide__counter">
          {index + 1} / {total}
        </div>
      </div>
    )
  }

  // Default + quote layout
  return (
    <div className="slide">
      <div className="slide__badge" style={{ background: accent }}>
        {sectionLabels[slide.section]}
      </div>
      <h1 className="slide__title">{slide.title}</h1>
      {slide.subtitle && (
        <p className="slide__subtitle">{slide.subtitle}</p>
      )}
      {slide.bullets && (
        <ul className="slide__bullets">
          {slide.bullets.map((b, i) => renderBullet(b, i))}
        </ul>
      )}
      {slide.highlight && (
        <blockquote className="slide__highlight" style={{ borderLeftColor: accent }}>
          {slide.highlight}
        </blockquote>
      )}
      {slide.demoLink && (
        <a
          className="slide__demo-link"
          href={slide.demoLink.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: accent }}
        >
          {slide.demoLink.label}
        </a>
      )}
      {slide.code && (
        <div className="slide__code">
          <div className="slide__code-header">{slide.code.language}</div>
          <pre><code>{slide.code.snippet}</code></pre>
        </div>
      )}
      {slide.image && (
        <div className={`slide__image${!slide.bullets ? ' slide__image--full' : ''}`}>
          <img src={slide.image} alt={slide.title} />
        </div>
      )}
      {slide.images && (
        <div className={`slide__images slide__images--${slide.images.length}`}>
          {slide.images.map((src, i) => (
            <img key={i} src={src} alt={`${slide.title} ${i + 1}`} />
          ))}
        </div>
      )}
      {slide.note && <p className="slide__note">{slide.note}</p>}
      <div className="slide__counter">
        {index + 1} / {total}
      </div>
    </div>
  )
}
