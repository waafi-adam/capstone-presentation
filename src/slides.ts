import type { SlideData } from './types'

const slides: SlideData[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  //  PART A — IWSP PRESENTATION (5 minutes)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 1,
    section: 'iwsp',
    layout: 'title',
    title: 'Capstone Project Presentation',
    subtitle: 'Abdullah Waafi Bin Adam — 2201228',
    bullets: [
      'Full-Stack Software Engineer at Factorem',
      'July 2025 – April 2026',
      'Supervisors: Michael Gastner (Academic) · Harry Nguyen (Industry)',
    ],
  },
  {
    id: 2,
    section: 'iwsp',
    layout: 'section-break',
    title: 'Part 1 — IWSP Overview',
    subtitle: 'Integrated Work Study Programme at Factorem',
  },
  {
    id: 3,
    section: 'iwsp',
    title: 'About Factorem',
    bullets: [
      'B2B manufacturing platform connecting buyers to vetted suppliers across Asia',
      'Main product: app.factorem.co — order management, quoting, supplier matching',
      'Marketing site: factorem.co — built on Webflow CMS',
      'Small, fast-paced startup team with continuous deployment',
    ],
  },
  {
    id: 4,
    section: 'iwsp',
    title: 'How We Work',
    bullets: [
      {
        text: 'Trello boards for task tracking and sprint planning',
        sub: [],
      },
      {
        text: 'Daily standups — what I did yesterday, doing today, blockers',
        sub: [],
      },
      {
        text: 'Weekly product meetings — dev team syncs with R&D team',
        sub: [],
      },
      {
        text: 'Monthly Gantt chart items set by PO (Hardik, co-founder)',
        sub: [],
      },
      {
        text: 'Continuous deployment cycle — ship features regularly',
        sub: [],
      },
    ],
  },
  {
    id: 5,
    section: 'iwsp',
    title: 'Key Contributions (1/3)',
    bullets: [
      {
        text: 'High-Intent User Detection',
        sub: [
          'Tracks users who uploaded parts but abandoned checkout',
          'Flags company-email users who leave without converting',
          'Shows what specific parts each lead left behind',
          'Auto-alerts sales via region-specific Slack channels + HubSpot',
        ],
      },
      {
        text: 'RAG-based AI Email Agent (n8n)',
        sub: [
          'Handles US customer emails outside SG working hours',
          'Queries platform DB for order context — items, projects, suppliers, pricing',
          'Self-learning: feedback saved as global rules (Google Docs) or local rules (vector DB)',
          'Automates ops workflows — e.g. NCR lookup of supplier, price, delivery, IDs',
        ],
      },
    ],
  },
  {
    id: 6,
    section: 'iwsp',
    title: 'Key Contributions (2/3)',
    bullets: [
      {
        text: 'FabCredits — Prepaid Checkout Credit System',
        sub: [
          'Enables upfront revenue collection for loyal customers',
          'Integrated with Xero for accounting reconciliation',
        ],
      },
      {
        text: 'Statsig — Platform-Wide Analytics',
        sub: [
          'Solved the problem of not being able to track feature success',
          'A/B testing, session recording, user segmentation',
          'Adopted by colleagues to track their own features\' success metrics',
        ],
      },
      {
        text: 'Contact Form Spam Filter',
        sub: [
          'AI agent screens marketing site contact form submissions',
          'Only genuine inquiries forwarded to sales on Slack',
        ],
      },
    ],
  },
  {
    id: 7,
    section: 'iwsp',
    title: 'Key Contributions (3/3)',
    bullets: [
      {
        text: 'Customer Experience & UX',
        sub: [
          'Onboarding flow overhaul — reduced post-upload drop-offs',
          'CAD-missing prompt — increased CAD uploads, fewer manual quotes',
          'Guest localization — geo-based pricing, currency, shipping',
        ],
      },
      {
        text: 'Internal Tooling & Ops',
        sub: [
          'Complex item marker · Image-to-PDF converter · QC/DO customer visibility',
          'Supplier job removal reason tracking',
          'HTS code capture (Phase 1) for US tariff compliance',
        ],
      },
    ],
  },
  {
    id: 8,
    section: 'iwsp',
    title: 'IWSP Summary',
    bullets: [
      'Worked across full stack: React · Node.js/Express · SQL · AWS S3 · n8n · Statsig',
      'Delivered production features under real business pressure',
      'Took on tasks from blocked full-timers · Supervised and onboarded new interns',
      'Offered full-time R&D position post-internship — focusing on AI/ML',
    ],
    highlight:
      'The AI Email Agent demonstrated I could independently learn and apply AI concepts (RAG, vector DBs) in production — leading to the R&D offer.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PART B — CAPSTONE PRESENTATION (20 minutes)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 9,
    section: 'capstone',
    layout: 'section-break',
    title: 'Part 2 — Capstone Project',
    subtitle:
      'Universal Embeddable Product Widgets with Usage Tracking for CMS Integration',
  },
  {
    id: 10,
    section: 'capstone',
    title: 'Problem Statement',
    bullets: [
      {
        text: 'Limited immediacy of value',
        sub: [
          'Visitors read claims about capabilities but couldn\'t try them',
        ],
      },
      {
        text: 'Weak manufacturing proof',
        sub: ['Completed parts (best proof of quality) hidden behind login'],
      },
      {
        text: 'Limited visitor behavior visibility',
        sub: ['No analytics on marketing sites — decisions based on assumptions'],
      },
      {
        text: 'Content maintenance difficulty',
        sub: ['Static screenshots go stale; manual updates don\'t scale'],
      },
    ],
    note: 'Gap between what Factorem can do internally vs. what visitors experience externally',
  },
  // ── Dedicated diagram slide ──
  {
    id: 101,
    section: 'capstone',
    title: 'Problem Context — Before the Capstone',
    image: '/images/problem-context.png',
  },
  {
    id: 11,
    section: 'capstone',
    title: 'Project Objectives',
    bullets: [
      'Create interactive public demos of platform capabilities',
      'Curate and publish completed parts as public proof of quality',
      'Instrument analytics to track visitor interaction and behavior',
      'Deliver reusable, embeddable architecture for CMS integration',
    ],
  },
  {
    id: 12,
    section: 'capstone',
    title: 'Scope — 3 Workstreams',
    bullets: [
      {
        text: 'Workstream 1: Interactive Manufacturing Experiences',
        sub: [
          'TDE Widget (Technical Drawing Extraction)',
          'DFM Widget (Design for Manufacturing)',
          'CAD Conversion Widget',
        ],
      },
      {
        text: 'Workstream 2: Public Showcase Experience',
        sub: ['Parts Gallery — curated showcase of completed parts'],
      },
      {
        text: 'Workstream 3: Analytics & Operational Support',
        sub: ['Statsig event tracking + admin management tools'],
      },
    ],
    note: 'Out of scope: formal usability research, full error-path automation, similarity search',
  },
  {
    id: 13,
    section: 'capstone',
    title: 'Requirements',
    layout: 'two-col',
    leftCol: [
      '7 Functional Requirements (FR1–FR7)',
      'FR1: Widget rendering with customization',
      'FR2: File upload to cloud storage',
      'FR3: Extraction/conversion processing',
      'FR4: Gallery curation and publication',
      'FR5: Event tracking and analytics',
      'FR6: Admin management interface',
      'FR7: Responsive cross-device support',
    ],
    rightCol: [
      '6 Non-Functional Requirements (NFR1–NFR6)',
      'NFR1: Sub-3s widget load time',
      'NFR2: Cross-browser compatibility',
      'NFR3: Secure data handling',
      'NFR4: CMS-agnostic embedding',
      'NFR5: Maintainable, documented code',
      'NFR6: Graceful error handling',
    ],
    note: 'Gathered through stakeholder interviews — Hardik (commercial direction) and Isaac (technical feasibility)',
  },
  {
    id: 14,
    section: 'capstone',
    title: 'Literature Review',
    bullets: [
      {
        text: 'Iframe vs Script-based Embedding',
        sub: [
          'Iframe: strong isolation, sandboxing, simple integration',
          'Script: tighter integration but greater security surface',
        ],
      },
      {
        text: 'Security Considerations',
        sub: [
          'postMessage origin validation',
          'X-Frame-Options / CSP headers',
          'Sandbox attribute restrictions',
        ],
      },
      {
        text: 'Practical Prevalence',
        sub: [
          'Iframe still dominant: Shopify, HubSpot, Calendly, YouTube all use it',
        ],
      },
    ],
    highlight:
      'Decision: iframe for widgets (isolation) · page-native for gallery (dynamic height)',
  },
  // ── Solution Architecture: bullets then full diagram ──
  {
    id: 15,
    section: 'capstone',
    title: 'Solution Architecture — Overview',
    bullets: [
      'Main platform (app.factorem.co) exposes public routes',
      'Widgets embedded via iframe in Webflow and Nexus sites',
      'Parts Gallery consumed natively by Webflow via JSON + S3 assets',
      'Statsig tracks all interactions across both delivery methods',
    ],
    note: 'Key insight: expose existing capabilities without rebuilding them — reuse the platform',
  },
  {
    id: 151,
    section: 'capstone',
    title: 'High-Level Solution Architecture',
    image: '/images/solution-architecture.png',
  },
  // ── Widget Architecture: bullets then full diagram ──
  {
    id: 16,
    section: 'capstone',
    title: 'Widget Architecture',
    bullets: [
      {
        text: 'WidgetRouter Component',
        sub: [
          'URL parameters select widget type and customization options',
          'Routes: /widget/tde · /widget/dfm · /widget/convert',
        ],
      },
      {
        text: 'Iframe Embedding Flow',
        sub: [
          'CMS page embeds <iframe src="app.factorem.co/widget/tde">',
          'Widget renders inside iframe with full React app context',
          'Parent page and widget communicate via postMessage where needed',
        ],
      },
    ],
    code: {
      language: 'html',
      snippet: `<!-- Embedding a widget on any CMS page -->
<iframe
  src="https://app.factorem.co/widget/tde?title=Try+TDE"
  width="100%"
  height="700"
  frameborder="0"
  allow="clipboard-write"
></iframe>`,
    },
  },
  {
    id: 161,
    section: 'capstone',
    title: 'Widget Architecture — Diagram',
    subtitle: 'Routing, Embedding & Backend Interaction',
    image: '/images/widget-architecture.png',
  },
  // ── Gallery Architecture: bullets then full diagram ──
  {
    id: 17,
    section: 'capstone',
    title: 'Parts Gallery Architecture',
    bullets: [
      {
        text: 'Publication Pipeline',
        sub: [
          'Admin interface: refresh, search, add, remove, blacklist, batch publish',
          'Backend generates curated JSON manifest + uploads images to S3',
          'Webflow component fetches JSON and renders gallery natively',
        ],
      },
      {
        text: 'Why page-native (not iframe)?',
        sub: [
          'Gallery needs dynamic height based on content',
          'Better SEO and scroll behavior within the marketing page',
        ],
      },
    ],
  },
  {
    id: 171,
    section: 'capstone',
    title: 'Parts Gallery Architecture — Diagram',
    subtitle: 'FE, BE, Publication Pipeline & Webflow Integration',
    image: '/images/gallery-architecture.png',
  },
  // ── Statsig Architecture: bullets then full diagram ──
  {
    id: 18,
    section: 'capstone',
    title: 'Statsig Analytics Architecture',
    bullets: [
      {
        text: 'Two Tracking Contexts',
        sub: [
          'Widget tracking: inside iframe, Statsig initialized per widget session',
          'Gallery tracking: on Webflow page, Statsig loaded via script tag',
        ],
      },
      {
        text: 'Implementation Pattern',
        sub: [
          'withStatsigProvider HOC wraps widget components',
          'useStatsigHook for custom event logging',
          'QA account exclusion to keep data clean',
        ],
      },
    ],
    code: {
      language: 'jsx',
      snippet: `// Statsig HOC wrapping a widget component
const TdeWidgetWithStats = withStatsigProvider(
  TdeWidget,
  { role: "widget_user", source: "iframe_widget" }
);

// Logging a custom event inside the widget
const { logEvent } = useStatsigHook();
logEvent("tde_widget_extract", fileId, {
  fileName: file.name,
  fileSize: file.size,
});`,
    },
  },
  {
    id: 181,
    section: 'capstone',
    title: 'Analytics Architecture — Diagram',
    subtitle: 'Event Tracking Across Both Surfaces',
    image: '/images/statsig-architecture.png',
  },
  // ── Implementation slides with screenshots ──
  {
    id: 19,
    section: 'capstone',
    title: 'Implementation — TDE Widget',
    subtitle: 'Technical Drawing Extraction',
    bullets: [
      'Upload a PDF technical drawing',
      'Automated extraction of: dimensions, tolerances, material specs, surface finish, tech recommendations',
      'Results displayed inline within the widget',
    ],
    demoLink: {
      label: '🔗 Live Demo — TDE Widget',
      url: 'https://nexus.factorem.co/demo/technical-drawing',
    },
    note: 'Events: tde_widget_file_upload · tde_widget_extract',
    image: '/images/tde-widget.png',
  },
  {
    id: 20,
    section: 'capstone',
    title: 'Implementation — DFM Widget',
    subtitle: 'Design for Manufacturing',
    bullets: [
      'Upload a CAD file and select manufacturing technology',
      'Technologies: CNC Machining · 3D Printing · Sheet Metal',
      'Visual DFM feedback — highlights problem areas on 2D images',
    ],
    demoLink: {
      label: '🔗 Live Demo — DFM Widget',
      url: 'https://nexus.factorem.co/demo/3d-design-file',
    },
    note: 'Events: dfm_widget_file_upload · dfm_widget_extract',
    image: '/images/dfm-widget.png',
  },
  {
    id: 21,
    section: 'capstone',
    title: 'Implementation — CAD Conversion Widget',
    bullets: [
      {
        text: 'Dual-tab interface',
        sub: [
          'Tab 1: CAD-to-STL (supports STEP, STP, IGES, IGS)',
          'Tab 2: SLDPRT-to-STEP (SolidWorks native format)',
        ],
      },
      'Deployed on factorem.co knowledge hub as interactive blog content',
      'Event: conversion_widget_file_upload with value distinguishing flow type',
    ],
    note: 'SLDPRT-to-STEP dominated usage despite not being the default tab — a key insight',
    image: '/images/cad-conversion.png',
  },
  // ── Parts Gallery: split into public + admin ──
  {
    id: 22,
    section: 'capstone',
    title: 'Implementation — Parts Gallery',
    subtitle: 'Public Showcase',
    bullets: [
      'Public showcase of real completed-part images from operational workflow',
      'Category browsing with progressive loading',
      'Curated JSON + S3 image assets consumed by Webflow component',
    ],
    demoLink: {
      label: '🔗 Live — Parts Gallery on factorem.co',
      url: 'https://factorem.co/capabilities',
    },
    image: '/images/parts-gallery.png',
  },
  {
    id: 221,
    section: 'capstone',
    title: 'Parts Gallery — Admin Management',
    subtitle: 'Curation & Publication Interface',
    bullets: [
      'Refresh, search, add, remove, blacklist, batch publish, image replacement',
      'Admin-only routes behind authentication gates',
      'Publication controls ensure only approved items reach the public',
    ],
    image: '/images/gallery-admin.png',
  },
  // ── Testing ──
  {
    id: 23,
    section: 'capstone',
    title: 'Testing & Validation',
    layout: 'two-col',
    leftCol: [
      'Automated E2E (Cypress)',
      '50 tests — all passing',
      'TDE: 14 · DFM: 18 · Conversion: 18',
      'Run time: ~2 min 27 sec',
      'Tested against live staging deployment',
      '',
      'Unit Tests',
      'tdeUtils · dfmUtils · s3Utils',
      'loginApi · objectUtils',
    ],
    rightCol: [
      'Static Analysis (ESLint)',
      'React/JSX rules · accessibility (jsx-a11y)',
      'No-unused-vars · no-shadow · eqeqeq',
      'Import cycle detection',
      '',
      'Responsive Validation',
      'Chrome · Firefox · Safari · Edge',
      'iPhone XR · Galaxy Z Fold 5 · iPad Air',
      'Webflow staging environment tested',
    ],
    image: '/images/cypress-summary.png',
  },
  // ── Security ──
  {
    id: 24,
    section: 'capstone',
    title: 'Security Considerations',
    bullets: [
      'Authentication gates on admin routes (gallery management)',
      'Controlled publication — only approved items reach the public',
      'Iframe sandboxing and origin validation for widget embedding',
      'No sensitive data exposed in public-facing widgets',
      'Statsig QA account exclusion to maintain data integrity',
    ],
  },
  // ── Results: split into text + charts ──
  {
    id: 25,
    section: 'capstone',
    title: 'Real-World Results & Evaluation',
    bullets: [
      {
        text: 'CAD Conversion Widget',
        sub: [
          'SLDPRT-to-STEP dominated usage despite not being the default tab',
          'Revealed genuine user demand — an insight only possible through analytics',
        ],
      },
      {
        text: 'Parts Gallery — 388 page views (Jan–Mar 2026)',
        sub: [
          'Geographic: US (207) · Singapore (153) — strong international reach',
          'Device split: Desktop 314 vs Mobile 72 — 4:1 ratio',
          'Navigation: 84 direct clicks (69%) vs 38 dropdown clicks (31%)',
        ],
      },
      {
        text: 'Business Impact',
        sub: [
          'Gallery launch (Jan 2026) coincided with spike in "Get Quote Now" clicks',
          'Demonstrates capability rather than just describing it',
        ],
      },
    ],
  },
  {
    id: 251,
    section: 'capstone',
    title: 'Analytics Evidence',
    subtitle: 'Data from Statsig — Jan to Mar 2026',
    images: ['/images/conversion-events.png', '/images/nav-donut.png'],
    note: 'Left: SLDPRT-to-STEP dominated conversion events · Right: 69% direct nav clicks vs 31% dropdown',
  },
  {
    id: 252,
    section: 'capstone',
    title: 'Gallery Impact & Reach',
    subtitle: 'Page views, quote clicks & geographic distribution',
    images: ['/images/quote-clicks.png', '/images/geo-distribution.png'],
    note: 'Left: "Get Quote Now" spike coincides with gallery launch · Right: US (207) and SG (153) lead traffic',
  },
  // ── Challenges ──
  {
    id: 26,
    section: 'capstone',
    title: 'Challenges & Trade-offs',
    bullets: [
      {
        text: 'Limited uplift from first public placements',
        sub: ['Analytics replaced assumptions with evidence'],
      },
      {
        text: 'Nexus Technologies changed direction before deep validation',
        sub: ['Widgets remained valuable — reusable assets survive context shifts'],
      },
      {
        text: 'Feature completeness vs. demonstration limitation',
        sub: ['How much to expose without cannibalizing Partner Pro?'],
      },
      {
        text: 'Different experiences needed different delivery methods',
        sub: ['Iframe for widgets (isolation) vs. page-native for gallery (height)'],
      },
    ],
  },
  // ── Knowledge & Learning ──
  {
    id: 27,
    section: 'capstone',
    layout: 'quote',
    title: 'Knowledge & Learning',
    bullets: [
      {
        text: 'Degree Knowledge Applied',
        sub: [
          'Frontend development · Full-stack architecture · OOP · Security principles',
        ],
      },
      {
        text: 'New Skills Acquired',
        sub: [
          'Embed development (iframe APIs, postMessage)',
          'CMS integration (Webflow custom code)',
          'Analytics instrumentation (Statsig)',
          'MERN + SQL adaptation in production environment',
        ],
      },
    ],
    highlight:
      '"Technical value is not only created by building new features, but also by exposing existing capabilities in the right way for the right audience."',
  },
  {
    id: 28,
    section: 'capstone',
    title: 'Future Work',
    bullets: [
      'Similarity-based part exploration (find similar parts from gallery)',
      'Partner Pro supplier demos — reuse widgets for supplier-facing showcases',
      'Gated public demos — collect leads before granting full access',
      'Auto-ballooning public demo',
      'Expanded analytics funnels and conversion tracking',
      'Homepage placement of Parts Gallery',
      'Broader CMS compatibility testing beyond Webflow',
    ],
  },
  {
    id: 29,
    section: 'capstone',
    title: 'Conclusion',
    bullets: [
      'Delivered 3 interactive widgets + Parts Gallery + analytics package',
      'Bridged the gap between internal capability and external visitor experience',
      'Real data proves value: revealed demand patterns, geographic reach, engagement metrics',
      'Reusable architecture enables future extensions without rebuilding',
    ],
    highlight:
      'Exposure matters as much as capability — the best features are worthless if visitors can\'t experience them.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PART C — LIVE DEMO (5 minutes)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 30,
    section: 'demo',
    layout: 'section-break',
    title: 'Part 3 — Live Demo',
    subtitle: 'Interactive demonstration of all deliverables',
  },
  {
    id: 31,
    section: 'demo',
    title: 'Live Demo Links',
    bullets: [
      'TDE Widget — upload a PDF technical drawing, see extraction results',
      'DFM Widget — upload a CAD file, select technology, see DFM feedback',
      'CAD Conversion — convert SLDPRT to STEP format',
      'Parts Gallery — browse categories of completed parts',
    ],
    demoLink: {
      label: '🔗 Open TDE Widget Demo',
      url: 'https://nexus.factorem.co/demo/technical-drawing',
    },
  },
  {
    id: 32,
    section: 'demo',
    title: 'Thank You',
    layout: 'title',
    subtitle: 'Abdullah Waafi Bin Adam — 2201228',
    bullets: [
      'Questions?',
    ],
  },
]

export default slides
