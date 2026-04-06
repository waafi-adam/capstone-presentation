export interface SlideData {
  id: number
  section: 'iwsp' | 'capstone' | 'demo'
  title: string
  subtitle?: string
  bullets?: (string | { text: string; sub?: string[] })[]
  note?: string
  demoLink?: { label: string; url: string }
  highlight?: string
  layout?: 'title' | 'default' | 'section-break' | 'quote' | 'two-col'
  leftCol?: string[]
  rightCol?: string[]
  image?: string
  images?: string[]
  code?: { language: string; snippet: string }
}
