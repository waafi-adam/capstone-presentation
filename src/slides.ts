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
    title: 'Key Contributions (1/2)',
    bullets: [
      {
        text: 'High-Intent User Detection',
        sub: [
          'Identified users who uploaded parts but abandoned mid-process',
          'Auto-alerts sales team via Slack',
          'Improved follow-up on warm leads, boosted conversion',
        ],
      },
      {
        text: 'RAG-based AI Email Agent (n8n)',
        sub: [
          'Retrieves order data and learns from feedback',
          'Enables 24/7 customer support',
          'Reduced manual effort for the team',
        ],
      },
    ],
  },
  {
    id: 6,
    section: 'iwsp',
    title: 'Key Contributions (2/2)',
    bullets: [
      {
        text: 'FabCredits — Prepaid Checkout Credit System',
        sub: [
          'Enables upfront revenue collection',
          'Smoother payment experience for returning customers',
        ],
      },
      {
        text: 'Statsig Analytics Tool',
        sub: [
          'Reusable analytics integration across features',
          'Helped the team track usage and optimize product decisions',
        ],
      },
    ],
  },
  {
    id: 7,
    section: 'iwsp',
    title: 'Other Notable Work',
    bullets: [
      'Part upload improvements on Manage Projects page',
      'UX enhancements for the part upload experience',
      'HTS code integration in part upload flow',
      'TDE tolerance display — showing extracted tolerances to customers',
      'Alpha item/project labeling — flagging new customer items for admin awareness',
    ],
  },
  {
    id: 8,
    section: 'iwsp',
    title: 'IWSP Summary',
    bullets: [
      'Worked across full stack: React · Node.js/Express · SQL · AWS S3',
      'Delivered production features under real business pressure',
      'Gained experience in agile workflows, stakeholder communication, and rapid iteration',
    ],
    highlight:
      'One feature I built — the Statsig analytics tool — became a core part of my capstone project...',
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
  },
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
      {
        text: 'Key Events Tracked',
        sub: [
          'File uploads, extraction triggers, conversion completions',
          'Gallery page views, navigation clicks, device/geo context',
        ],
      },
    ],
  },
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
  },
  {
    id: 22,
    section: 'capstone',
    title: 'Implementation — Parts Gallery',
    bullets: [
      'Public showcase of real completed-part images from operational workflow',
      'Category browsing with progressive loading',
      'Admin management interface: refresh, search, add, remove, blacklist, batch publish, image replacement',
      'Curated JSON + S3 image assets consumed by Webflow component',
    ],
    demoLink: {
      label: '🔗 Live — Parts Gallery on factorem.co',
      url: 'https://factorem.co/capabilities',
    },
  },
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
  },
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
