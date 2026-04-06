# Presentation Script

**Duration: ~30 minutes** (IWSP: 5 min | Capstone: 20 min | Demo: 5 min)

---

## PART 1 — IWSP OVERVIEW (~5 minutes)

---

### Slide 1: Title

Good morning/afternoon everyone. My name is Abdullah Waafi Bin Adam, and today I'll be presenting my capstone project. I've been working as a Full-Stack Software Engineer at Factorem from July 2025 to April 2026, supervised by Dr. Michael Gastner on the academic side and Harry Nguyen as my industry supervisor.

My presentation has three parts: first, a brief IWSP overview, then the capstone project itself, and finally a live demo.

---

### Slide 2: Part 1 — IWSP Overview (Section Break)

Let's start with a quick overview of my IWSP experience at Factorem.

---

### Slide 3: About Factorem

Factorem is a B2B manufacturing platform that connects buyers to vetted suppliers across Asia. Their main product is the platform at app.factorem.co, which handles order management, quoting, and supplier matching. They also have a marketing site built on Webflow CMS. It's a small, fast-paced startup team with continuous deployment, so I was shipping real features from early on.

---

### Slide 4: How We Work

In terms of workflow, we use Trello boards for task tracking and sprint planning. We have daily standups where everyone shares what they did yesterday, what they're doing today, and any blockers. Weekly product meetings sync the dev team with the R&D team. Monthly Gantt chart items are set by the product owner, Hardik, who is one of the co-founders. We follow a continuous deployment cycle, so features go live regularly.

---

### Slide 5: Key Contributions (1/2)

Now let me highlight some of my key contributions. The first was a High-Intent User Detection system. I identified users who uploaded parts to the platform but abandoned the process midway. The system auto-alerts the sales team via Slack, which improved follow-up on warm leads and boosted conversion.

The second was a RAG-based AI Email Agent built on n8n. It retrieves order data and learns from feedback to respond to customer queries. This enables 24/7 customer support and significantly reduced manual effort for the team.

---

### Slide 6: Key Contributions (2/2)

I also built FabCredits, a prepaid checkout credit system that enables upfront revenue collection and gives returning customers a smoother payment experience.

And then there's the Statsig Analytics Tool — a reusable analytics integration that we deployed across multiple features. It helped the team track usage and make data-driven product decisions. This one is especially relevant because it became a core part of my capstone project.

---

### Slide 7: Other Notable Work

Beyond those major features, I also worked on part upload improvements, UX enhancements for the upload experience, HTS code integration, TDE tolerance display for customers, and alpha item labeling to flag new items for admin review. These were smaller but still contributed to the platform's overall quality.

---

### Slide 8: IWSP Summary

To summarize the IWSP, I worked across the full stack — React, Node.js with Express, SQL, and AWS S3. I delivered production features under real business pressure and gained hands-on experience with agile workflows, stakeholder communication, and rapid iteration.

And as I mentioned, one feature I built — the Statsig analytics tool — became a core part of my capstone project, which brings us to Part 2.

---

## PART 2 — CAPSTONE PROJECT (~20 minutes)

---

### Slide 9: Part 2 — Capstone Project (Section Break)

My capstone project is titled "Universal Embeddable Product Widgets with Usage Tracking for CMS Integration."

---

### Slide 10: Problem Statement

So what problem was I trying to solve? There were four key issues.

First, limited immediacy of value — visitors could read about Factorem's capabilities on the marketing site, but they couldn't actually try them.

Second, weak manufacturing proof — completed parts, which are the best proof of manufacturing quality, were hidden behind a login wall.

Third, limited visitor behavior visibility — there were no analytics on the marketing sites, so decisions about what to build or promote were based on assumptions.

And fourth, content maintenance difficulty — static screenshots go stale quickly, and manually updating them doesn't scale.

In short, there was a gap between what Factorem can do internally and what visitors actually experience externally.

---

### Slide 11: Project Objectives

Based on these problems, I defined four objectives: create interactive public demos of the platform's capabilities, curate and publish completed parts as public proof of quality, instrument analytics to track visitor interaction and behavior, and deliver a reusable, embeddable architecture for CMS integration.

---

### Slide 12: Scope — 3 Workstreams

The project was organized into three workstreams. The first is Interactive Manufacturing Experiences, which includes the TDE widget for technical drawing extraction, the DFM widget for design-for-manufacturing feedback, and a CAD Conversion widget.

The second workstream is a Public Showcase Experience — the Parts Gallery, a curated showcase of completed parts.

The third is Analytics and Operational Support, covering Statsig event tracking and admin management tools.

I should note that formal usability research, full error-path automation, and similarity search were explicitly out of scope.

---

### Slide 13: Requirements

I gathered requirements through stakeholder interviews with Hardik for commercial direction and Isaac for technical feasibility.

On the functional side, I identified seven requirements: widget rendering with customization, file upload to cloud storage, extraction and conversion processing, gallery curation and publication, event tracking, an admin management interface, and responsive cross-device support.

On the non-functional side, there are six: sub-3-second widget load time, cross-browser compatibility, secure data handling, CMS-agnostic embedding, maintainable and documented code, and graceful error handling.

---

### Slide 14: Literature Review

For the literature review, I investigated two main embedding approaches — iframe-based and script-based embedding. Iframes offer strong isolation, sandboxing, and simple integration, while script-based embedding provides tighter integration but introduces a greater security surface.

I also looked at security considerations like postMessage origin validation, X-Frame-Options, CSP headers, and sandbox attributes.

In practice, iframe embedding is still the dominant approach — used by Shopify, HubSpot, Calendly, and YouTube.

My decision was to use iframes for the widgets, where isolation is important, and page-native rendering for the gallery, which needs dynamic height.

---

### Slide 15: Solution Architecture — Overview

Here's the high-level architecture. The main platform at app.factorem.co exposes public routes. The widgets are embedded via iframe in both the Webflow marketing site and the Nexus site. The Parts Gallery is consumed natively by Webflow through a JSON manifest and S3 image assets. And Statsig tracks all interactions across both delivery methods.

The key insight here is that we're exposing existing capabilities without rebuilding them — we reuse what the platform already does.

---

### Slide 16: Widget Architecture

Diving into the widget architecture — there's a WidgetRouter component that uses URL parameters to select the widget type and customization options. The routes are /widget/tde, /widget/dfm, and /widget/convert.

For the embedding flow, the CMS page simply embeds an iframe pointing to the widget URL. The widget renders inside the iframe with the full React app context, and the parent page and widget communicate via postMessage where needed.

---

### Slide 17: Parts Gallery Architecture

The Parts Gallery has a publication pipeline. There's an admin interface where you can refresh, search, add, remove, blacklist, and batch-publish parts. The backend generates a curated JSON manifest and uploads images to S3. The Webflow component then fetches that JSON and renders the gallery natively.

Why page-native instead of iframe? Because the gallery needs dynamic height based on content, and page-native rendering gives better SEO and scroll behavior within the marketing page.

---

### Slide 18: Statsig Analytics Architecture

For analytics, there are two tracking contexts. Widget tracking happens inside the iframe, where Statsig is initialized per widget session. Gallery tracking happens on the Webflow page itself, where Statsig is loaded via a script tag.

The implementation uses a withStatsigProvider higher-order component to wrap widget components, a useStatsigHook for custom event logging, and QA account exclusion to keep the data clean.

Key events tracked include file uploads, extraction triggers, conversion completions, gallery page views, navigation clicks, and device and geographic context.

---

### Slide 19: Implementation — TDE Widget

Now let me walk through each deliverable. The TDE widget lets users upload a PDF technical drawing. It then runs automated extraction to pull out dimensions, tolerances, material specs, surface finish, and technology recommendations. Results are displayed inline within the widget.

---

### Slide 20: Implementation — DFM Widget

The DFM widget lets users upload a CAD file and select a manufacturing technology — CNC Machining, 3D Printing, or Sheet Metal. It provides visual DFM feedback by highlighting problem areas on 2D images of the part.

---

### Slide 21: Implementation — CAD Conversion Widget

The CAD Conversion widget has a dual-tab interface. The first tab handles CAD-to-STL conversion, supporting STEP, STP, IGES, and IGS formats. The second tab handles SLDPRT-to-STEP conversion for SolidWorks native files.

This was deployed on Factorem's knowledge hub as interactive blog content. One interesting finding — and I'll come back to this later — is that the SLDPRT-to-STEP tab dominated usage despite not being the default tab.

---

### Slide 22: Implementation — Parts Gallery

The Parts Gallery is a public showcase of real completed-part images taken from Factorem's operational workflow. It supports category browsing with progressive loading. On the admin side, there's a full management interface for refreshing, searching, adding, removing, blacklisting, batch publishing, and replacing images. The curated JSON and S3 assets are consumed by a Webflow component.

---

### Slide 23: Testing & Validation

For testing, I wrote 50 automated end-to-end tests using Cypress — 14 for TDE, 18 for DFM, and 18 for conversion — all passing, with a run time of about 2 minutes and 27 seconds against the live staging deployment.

I also wrote unit tests for key utility modules including tdeUtils, dfmUtils, s3Utils, loginApi, and objectUtils.

On the static analysis side, I configured ESLint with React, JSX, and accessibility rules, along with import cycle detection.

For responsive validation, I tested across Chrome, Firefox, Safari, and Edge, on devices including iPhone XR, Galaxy Z Fold 5, and iPad Air, as well as in the Webflow staging environment.

---

### Slide 24: Security Considerations

For security, admin routes for gallery management are protected behind authentication gates. Only approved items reach the public through controlled publication. The widgets use iframe sandboxing and origin validation. No sensitive data is exposed in public-facing widgets, and QA accounts are excluded from Statsig to maintain data integrity.

---

### Slide 25: Real-World Results & Evaluation

Now for the results. With the CAD Conversion widget, the SLDPRT-to-STEP tab dominated usage despite not being the default — this revealed genuine user demand that was only visible because of the analytics instrumentation.

The Parts Gallery received 388 page views between January and March 2026. Geographically, 207 views came from the US and 153 from Singapore, showing strong international reach. The device split was about 4-to-1 desktop versus mobile. For navigation, 69% used direct clicks versus 31% using dropdown navigation.

In terms of business impact, the gallery launch in January 2026 coincided with a spike in "Get Quote Now" clicks. This demonstrates that showing capability is more effective than just describing it.

---

### Slide 26: Challenges & Trade-offs

There were some challenges. The first public placements of widgets didn't produce immediate uplift, but analytics replaced assumptions with evidence — we could now make data-driven decisions.

Nexus Technologies changed their direction before we could do deep validation on the widgets deployed there. But the widgets remained valuable as reusable assets that survive context shifts.

There was also the question of feature completeness versus demonstration — how much to expose publicly without cannibalizing the Partner Pro product.

And different experiences needed different delivery methods, which is why we used iframes for widgets but page-native rendering for the gallery.

---

### Slide 27: Knowledge & Learning

In terms of knowledge applied from my degree, I drew on frontend development, full-stack architecture, OOP, and security principles.

New skills I acquired include embed development with iframe APIs and postMessage, CMS integration with Webflow custom code, analytics instrumentation with Statsig, and working with MERN plus SQL in a production environment.

If I had to summarize my main takeaway, it's this: "Technical value is not only created by building new features, but also by exposing existing capabilities in the right way for the right audience."

---

### Slide 28: Future Work

Looking ahead, there are several directions this work could go. Similarity-based part exploration would let users find parts similar to ones in the gallery. The widgets could be reused for Partner Pro supplier demos. Gated public demos could collect leads before granting full access. There's also the potential for an auto-ballooning public demo, expanded analytics funnels, homepage placement of the Parts Gallery, and broader CMS compatibility testing beyond Webflow.

---

### Slide 29: Conclusion

To conclude the capstone section: I delivered three interactive widgets, the Parts Gallery, and a full analytics package. This work bridged the gap between Factorem's internal capability and the external visitor experience. Real data proves the value — it revealed demand patterns, geographic reach, and engagement metrics. And the reusable architecture means future extensions can be built without starting from scratch.

The key message is: exposure matters as much as capability. The best features are worthless if visitors can't experience them.

---

## PART 3 — LIVE DEMO (~5 minutes)

---

### Slide 30: Part 3 — Live Demo (Section Break)

Now let me show you everything in action.

---

### Slide 31: Live Demo Links

*[Open TDE Widget demo in browser]*

Let me start with the TDE widget. I'll upload a sample technical drawing PDF... as you can see, it extracts the dimensions, tolerances, material specs, and recommendations automatically.

*[Switch to DFM Widget]*

Next, the DFM widget. I'll upload a CAD file and select CNC Machining as the technology... here you can see it highlighting areas that might cause manufacturing issues.

*[Switch to CAD Conversion]*

For the CAD Conversion widget, I'll show the SLDPRT-to-STEP conversion since that's the one users gravitated toward...

*[Switch to Parts Gallery]*

And finally, the Parts Gallery on factorem.co. You can browse by category and see real completed parts. All of this is managed through the admin interface I showed earlier.

---

### Slide 32: Thank You

That wraps up my presentation. Thank you for your time.

I'm happy to take any questions.

---

## Tips for Delivery

- **Pacing**: Aim for roughly 1 minute per slide on average. Spend less time on section breaks and more on Problem Statement, Results, and Architecture slides.
- **Transitions**: The script uses natural transitions between sections. The IWSP-to-Capstone bridge through Statsig is important — don't rush it.
- **Demo prep**: Have all demo tabs pre-loaded before the presentation starts. Have sample files ready to upload (a PDF drawing, a CAD file, an SLDPRT file).
- **If demo fails**: Have screenshots or a recorded video as backup. Mention what would happen and move on.
- **Numbers**: Memorize the key stats — 388 page views, 50 Cypress tests, sub-3s load time, 4:1 desktop-to-mobile ratio.
