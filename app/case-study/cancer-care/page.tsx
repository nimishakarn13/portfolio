'use client'

import CaseStudyLayout, { type CaseStudyNavSection } from '@/components/case-study/CaseStudyLayout'
import { BodyText, ImgPlaceholder, PullQuote, SectionEyebrow, SectionHeading } from '@/components/case-study/CaseStudyUI'
import { ACCENT, BODY, BORDER, HEADLINE, MUTED, MUTED_LABEL, SM, SURFACE, TEXT } from '@/components/case-study/theme'

const NAV_SECTIONS: CaseStudyNavSection[] = [
  { id: 'context', number: '01', title: 'Context' },
  { id: 'challenge', number: '02', title: 'Challenge' },
  { id: 'process', number: '03', title: 'Process' },
  { id: 'solution', number: '04', title: 'Solution' },
  { id: 'reflection', number: '05', title: 'Reflection' },
]

const MODULES = [
  { name: 'Cancer Journey Map', body: 'The centerpiece: a subway-style guide that helps patients navigate their journey with clarity.' },
  { name: 'Appointments', body: 'A clear view of what is scheduled and what is coming up next.' },
  { name: 'Medications', body: 'One place to track what to take and when.' },
  { name: 'Symptoms', body: 'A running record for patients and caregivers to log how things feel day to day.' },
  { name: 'Nutrition', body: 'Guidance folded into the same journey rather than a separate tool.' },
  { name: 'Finances', body: 'Keeping the financial side of treatment in view alongside everything else.' },
]

export default function CancerCareCaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow="UI/UX DESIGN · CONCEPT"
      title="Turning a Fragmented Cancer Care Journey Into One Clear Map"
      subtitle="An early-stage concept for a cancer support platform, centered on a subway-map-style guide that helps patients and caregivers navigate appointments, medications, symptoms, finances, and nutrition in one place."
      meta={[
        { label: 'Role', value: 'UI/UX Design' },
        { label: 'Scope', value: 'Conceptual UX Design & Visual Mapping' },
      ]}
      sections={NAV_SECTIONS}
      nextHref="/case-study/building-folio"
      nextLabel="View Next Case Study"
    >
      {/* ── Section 01: Context ── */}
      <section id="context" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="01" title="Context" />
        <SectionHeading>A daily balancing act, not just a diagnosis</SectionHeading>
        <BodyText>
          Managing cancer isn&rsquo;t just about treatment — it&rsquo;s a daily balancing act of appointments, medications, symptoms, nutrition, and finances. For patients and caregivers, this complexity often leads to cognitive overload, especially during already overwhelming emotional circumstances.
        </BodyText>
        <BodyText>
          When I joined the project, the mission was clear: build a one-stop platform that would untangle this web of problems. This case study covers an early, conceptual stage of that platform — the visual language and navigation model, not a shipped, metrics-validated product.
        </BodyText>
      </section>

      {/* ── Section 02: Challenge ── */}
      <section id="challenge" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="02" title="Challenge" />
        <SectionHeading>Designing a map that guides, not overwhelms</SectionHeading>
        <BodyText>
          The stakes were high, the challenge immense, and the first roadblock appeared almost instantly: a map. The client envisioned a cancer map — a subway-style guide to help patients navigate their journey with clarity.
        </BodyText>
        <div style={{ padding: '14px 18px', background: 'rgba(245,180,60,0.1)', borderRadius: '8px', border: '1px solid rgba(245,180,60,0.3)' }}>
          <p style={{ fontFamily: BODY, fontSize: '14px', color: '#e8c078', margin: 0, lineHeight: 1.6 }}>
            <strong>The tension:</strong> designing the map felt like navigating a maze. We had to balance simplicity and detail, ensuring users could follow the journey without feeling overwhelmed.
          </p>
        </div>
      </section>

      {/* ── Section 03: Process ── */}
      <section id="process" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="03" title="Process" />
        <SectionHeading>Small, tested improvements over one big leap</SectionHeading>
        <BodyText>
          Rather than trying to solve the map in one pass, I focused on small, user-tested improvements — each round narrowing the gap between a static diagram and something that actually reads as a journey. That iteration is what transformed the map into a dynamic guide, not just a static design.
        </BodyText>
        <ImgPlaceholder label="Subway Map Concept Iterations" />
      </section>

      {/* ── Section 04: Solution ── */}
      <section id="solution" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="04" title="Solution" />
        <SectionHeading>One map, five moving parts</SectionHeading>
        <BodyText style={{ marginBottom: '40px' }}>
          Beyond the map itself, the Cancer Care Webapp concept streamlined appointments, symptoms, medications, finances, and nutrition into the same journey — so patients and caregivers stop juggling separate tools for each one.
        </BodyText>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' }}>
          {MODULES.map((m) => (
            <div key={m.name} style={{ padding: '28px', border: `1px solid ${BORDER}`, borderRadius: '10px', background: SURFACE }}>
              <p style={{ fontFamily: BODY, fontSize: '15px', fontWeight: 600, color: TEXT, margin: '0 0 10px 0', lineHeight: 1.4 }}>
                {m.name}
              </p>
              <p style={{ fontFamily: BODY, fontSize: '14px', color: MUTED, margin: 0, lineHeight: 1.65 }}>
                {m.body}
              </p>
            </div>
          ))}
        </div>

        <ImgPlaceholder label="Platform Modules Overview" />
      </section>

      {/* ── Section 05: Reflection ── */}
      <section id="reflection" style={{ marginBottom: '80px' }}>
        <SectionEyebrow number="05" title="Reflection" />
        <SectionHeading>What this project taught me</SectionHeading>
        <PullQuote>
          "This project was as much about personal growth as it was about design."
        </PullQuote>
      </section>
    </CaseStudyLayout>
  )
}
