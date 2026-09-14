'use client'

import CaseStudyLayout, { type CaseStudyNavSection } from '@/components/case-study/CaseStudyLayout'
import { BodyText, ImgPlaceholder, PullQuote, SectionEyebrow, SectionHeading } from '@/components/case-study/CaseStudyUI'
import { ACCENT, BODY, BORDER, HEADLINE, MUTED, MUTED_LABEL, SM, SURFACE, TEXT } from '@/components/case-study/theme'

const NAV_SECTIONS: CaseStudyNavSection[] = [
  { id: 'context', number: '01', title: 'Context' },
  { id: 'problem', number: '02', title: 'Problem' },
  { id: 'process', number: '03', title: 'Process' },
  { id: 'solutions', number: '04', title: 'Solutions' },
  { id: 'impact', number: '05', title: 'Impact' },
  { id: 'reflection', number: '06', title: 'Reflection' },
]

const FEATURES = [
  { name: 'Signup & Onboarding', body: 'Simple, fast, and value-driven — designed to get agencies into the product without friction.' },
  { name: 'Folio Builder', body: 'Generates portfolios automatically from a team’s assets and conversation history — even from Zoom calls or emails.' },
  { name: 'Client Vault', body: 'Secure storage for client files, kept separate and organized per client.' },
  { name: 'Client Communication', body: 'Centralizes conversations that were previously scattered across email and messaging tools.' },
  { name: 'Asset Management', body: 'One home for the project assets teams were juggling across Drive folders and templates before.' },
]

export default function BuildingFolioCaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow="PRODUCT DESIGN · MVP"
      title="Bringing an AI Portfolio Builder's Vision to Life, Screen by Screen"
      subtitle="A scalable MVP that lets agencies and startups manage clients, build portfolios, and deliver assets effortlessly — with AI-driven speed, even from Zoom calls or emails."
      meta={[
        { label: 'Role', value: 'Product Design' },
        { label: 'Scope', value: 'MVP Design & Feature Exploration' },
      ]}
      sections={NAV_SECTIONS}
      nextHref="/case-study/day-one"
      nextLabel="View Next Case Study"
    >
      {/* ── Section 01: Context ── */}
      <section id="context" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="01" title="Context" />
        <SectionHeading>A vision already defined — mine to bring to life</SectionHeading>
        <BodyText>
          Folio&rsquo;s vision was clear: to create an all-in-one tool for startups, agencies, and small companies to manage clients, build portfolios, and deliver assets effortlessly — all with AI-driven speed.
        </BodyText>
        <BodyText>
          My mission was not to figure out what to build — it was to bring that vision to life, screen by screen, interaction by interaction.
        </BodyText>
      </section>

      {/* ── Section 02: Problem ── */}
      <section id="problem" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="02" title="Problem" />
        <SectionHeading>Client work, scattered across a dozen tools</SectionHeading>
        <BodyText>
          Startups and agencies constantly juggle client demands, project assets, and portfolio creation — usually across scattered tools like email, Google Drive, and messy templates. Folio needed to centralize communication, build portfolios with AI, and give teams back the time lost to switching between all of it.
        </BodyText>
      </section>

      {/* ── Section 03: Process ── */}
      <section id="process" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="03" title="Process" />
        <SectionHeading>Research first, then modular flows</SectionHeading>

        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontFamily: SM, fontSize: '11px', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Research & Direction
          </p>
          <BodyText>
            Ran fresh competitive research for every major module rather than relying on one broad pass, and presented multiple design approaches for each feature to support fast, collaborative decision-making with the CEO and CTO.
          </BodyText>
        </div>

        <div>
          <p style={{ fontFamily: SM, fontSize: '11px', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Modular Flows & Design System
          </p>
          <BodyText style={{ marginBottom: '32px' }}>
            Streamlined complex feature ideas into modular, user-friendly flows, and built a custom design system to support consistency without locking down creativity. Throughout, the priority was clarity over visual gimmicks — structure, typography, and UX logic over decoration.
          </BodyText>
          <ImgPlaceholder label="Design System & Flow Exploration" />
        </div>
      </section>

      {/* ── Section 04: Solutions ── */}
      <section id="solutions" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="04" title="Solutions" />
        <SectionHeading>What I designed</SectionHeading>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' }}>
          {FEATURES.map((f) => (
            <div key={f.name} style={{ padding: '28px', border: `1px solid ${BORDER}`, borderRadius: '10px', background: SURFACE }}>
              <p style={{ fontFamily: BODY, fontSize: '15px', fontWeight: 600, color: TEXT, margin: '0 0 10px 0', lineHeight: 1.4 }}>
                {f.name}
              </p>
              <p style={{ fontFamily: BODY, fontSize: '14px', color: MUTED, margin: 0, lineHeight: 1.65 }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>

        <ImgPlaceholder label="Folio Builder Flow" />
      </section>

      {/* ── Section 05: Impact ── */}
      <section id="impact" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="05" title="Impact" />
        <SectionHeading>Reception from the people who commissioned it</SectionHeading>
        <BodyText>
          As an MVP, Folio&rsquo;s impact so far is qualitative rather than metric-driven — usage data and adoption numbers weren&rsquo;t part of this engagement.
        </BodyText>
        <PullQuote>
          "The CEO and CTO personally praised the design direction and usability."
        </PullQuote>
      </section>

      {/* ── Section 06: Reflection ── */}
      <section id="reflection" style={{ marginBottom: '80px' }}>
        <SectionEyebrow number="06" title="Reflection" />
        <SectionHeading>What this project taught me</SectionHeading>
        <PullQuote>
          "Folio taught me that great products are built not by rushing features but by respecting the craft at every level."
        </PullQuote>
      </section>
    </CaseStudyLayout>
  )
}
