'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

export default function DayOneCaseStudy() {
  const metric2Ref = useRef<HTMLSpanElement>(null)
  const metric3Ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tweens: gsap.core.Tween[] = []

    if (metric2Ref.current) {
      const obj = { val: 0 }
      const el = metric2Ref.current
      tweens.push(
        gsap.to(obj, {
          val: 50,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate() { el.textContent = Math.round(obj.val) + '%' },
        })
      )
    }

    if (metric3Ref.current) {
      const obj = { val: 0 }
      const el = metric3Ref.current
      tweens.push(
        gsap.to(obj, {
          val: 20,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate() { el.textContent = Math.round(obj.val) + '%' },
        })
      )
    }

    return () => {
      tweens.forEach((t) => t.scrollTrigger?.kill())
    }
  }, [])

  return (
    <CaseStudyLayout
      eyebrow="PRODUCT DESIGN · SOLO"
      title="Redesigned Onboarding to Drive 20% More Signups"
      subtitle="Cut a 4-page, 30-field signup flow to 2 steps and raised completion rates by 50% for a B2B talent platform."
      meta={[
        { label: 'Role', value: 'Product Design (Solo)' },
        { label: 'Scope', value: 'UX Overhaul & Platform Redesign' },
      ]}
      sections={NAV_SECTIONS}
      nextHref="/case-study/cancer-care"
      nextLabel="View Next Case Study"
    >
      {/* ── Section 01: Context ── */}
      <section id="context" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="01" title="Context" />
        <SectionHeading>A platform that had launched. Users that had not stayed.</SectionHeading>
        <BodyText>
          Day One connected talent with opportunity. It had shipped. It had users. But those users were dropping off before they had seen the product properly.
        </BodyText>
        <BodyText>
          I joined as the full-time product designer to find where the experience was breaking down and redesign the three surfaces causing the most damage: onboarding, profiles, and the dashboard. Everything had to move within an agile sprint cycle, an existing codebase, and an established design system.
        </BodyText>
      </section>

      {/* ── Section 02: Problem ── */}
      <section id="problem" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="02" title="Problem" />
        <SectionHeading>Four places the experience was losing people</SectionHeading>
        <BodyText style={{ marginBottom: '40px' }}>
          I audited every user journey end-to-end before opening Figma, mapping exactly where effort spiked and momentum died.
        </BodyText>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {[
            {
              title: 'Onboarding asked too much, too soon',
              body: '30+ fields across 4 pages with no progress indicator and no reason to keep going.',
            },
            {
              title: 'The UI gave users nothing to hold onto',
              body: 'No warmth, no forward momentum, no sense the other side was worth reaching.',
            },
            {
              title: 'The dashboard showed everything equally',
              body: 'No hierarchy, no suggested next action. Users landed and did not know where to start.',
            },
            {
              title: 'Profiles were built for data entry, not people',
              body: 'Fields ordered by form logic, not relevance. Dense and transactional, even when fully complete.',
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{ padding: '28px', border: `1px solid ${BORDER}`, borderRadius: '10px', background: SURFACE }}
            >
              <p style={{ fontFamily: BODY, fontSize: '15px', fontWeight: 600, color: TEXT, margin: '0 0 10px 0', lineHeight: 1.4 }}>
                {card.title}
              </p>
              <p style={{ fontFamily: BODY, fontSize: '14px', color: MUTED, margin: 0, lineHeight: 1.65 }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 03: Process ── */}
      <section id="process" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="03" title="Process" />
        <SectionHeading>Before I opened Figma</SectionHeading>

        {/* Phase 1 */}
        <div style={{ marginBottom: '64px' }}>
          <p style={{ fontFamily: SM, fontSize: '11px', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Phase 1: Flow Audit
          </p>
          <BodyText>
            Walked every user journey end-to-end documenting every friction point, every decision spike, every missing piece of feedback.
            The 4-page onboarding asked for 30+ fields before a user had any sense of what they would get on the other side.
          </BodyText>
          <div style={{ marginTop: '32px' }}>
            <ImgPlaceholder label="Flow Audit" />
          </div>
        </div>

        {/* Phase 2 */}
        <div style={{ marginBottom: '64px' }}>
          <p style={{ fontFamily: SM, fontSize: '11px', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Phase 2: Empathy Mapping
          </p>
          <BodyText style={{ marginBottom: '32px' }}>
            I mapped what users were thinking, feeling, saying, and doing at each stage of onboarding to separate two things that were completely conflated in the MVP: what the system needed to collect, and what users needed to feel in order to keep going.
          </BodyText>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: BODY, fontSize: '14px', lineHeight: 1.55 }}>
              <thead>
                <tr style={{ background: 'rgba(245,244,247,0.06)' }}>
                  {['Stage', 'Thinks', 'Feels', 'Says', 'Does'].map((h) => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', border: `1px solid ${BORDER}`, fontWeight: 600, color: TEXT, whiteSpace: 'nowrap' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { stage: 'Landing on signup', thinks: '"Why do they need all this?"', feels: 'Overwhelmed', says: '"This looks like a lot of work"', does: 'Slows down, hesitates', alt: false },
                  { stage: 'Midway through form', thinks: '"How much more is left?"', feels: 'Frustrated, uncertain', says: '"I\'ll come back to this later"', does: 'Drops off or leaves tab open', alt: true },
                  { stage: 'No progress signal', thinks: '"Have I even made progress?"', feels: 'Invisible, ignored', says: 'Nothing, just leaves', does: 'Abandons entirely', alt: false },
                  { stage: 'After completing', thinks: '"Was that worth it?"', feels: 'Relieved but unsure', says: '"Let\'s see if this actually works"', does: 'Logs in once, may not return', alt: true },
                ].map((row) => (
                  <tr key={row.stage} style={{ background: row.alt ? 'rgba(245,244,247,0.03)' : 'transparent' }}>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, fontWeight: 500, color: TEXT, whiteSpace: 'nowrap' }}>{row.stage}</td>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, color: MUTED }}>{row.thinks}</td>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, color: MUTED }}>{row.feels}</td>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, color: MUTED }}>{row.says}</td>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, color: MUTED }}>{row.does}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <PullQuote>
            "Users were not failing because the product was broken. They were failing because the product never made continuing feel worth it."
          </PullQuote>
        </div>

        {/* Phase 3 */}
        <div style={{ marginBottom: '64px' }}>
          <p style={{ fontFamily: SM, fontSize: '11px', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Phase 3: Competitor Analysis
          </p>
          <BodyText style={{ marginBottom: '32px' }}>
            Benchmarked Day One against 5 platforms across dimensions that directly affected onboarding quality and user retention.
          </BodyText>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: BODY, fontSize: '14px', lineHeight: 1.55 }}>
              <thead>
                <tr style={{ background: 'rgba(245,244,247,0.06)' }}>
                  {['Platform', 'Onboarding Steps', 'Progressive Disclosure', 'Progress Indicator', 'Mobile Friendly', 'Time to Value'].map((h) => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', border: `1px solid ${BORDER}`, fontWeight: 600, color: TEXT, whiteSpace: 'nowrap' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { platform: 'Day One (Before)', steps: '4 pages', disclosure: 'No', progress: 'No', mobile: 'Partial', value: 'High', highlight: true },
                  { platform: 'Naukri.com', steps: '3 steps', disclosure: 'Partial', progress: 'Yes', mobile: 'Yes', value: 'Medium', highlight: false },
                  { platform: 'LinkedIn', steps: '2 steps', disclosure: 'Yes', progress: 'Yes', mobile: 'Yes', value: 'Low', highlight: false },
                  { platform: 'Indeed', steps: '1 step', disclosure: 'Yes', progress: 'Minimal', mobile: 'Yes', value: 'Very Low', highlight: false },
                  { platform: 'Jack and Jill AI', steps: '2 steps', disclosure: 'Yes', progress: 'Yes', mobile: 'Yes', value: 'Low', highlight: false },
                  { platform: 'Resume.io', steps: 'Step by step', disclosure: 'Yes', progress: 'Yes', mobile: 'Yes', value: 'Low', highlight: false },
                ].map((row, i) => (
                  <tr key={row.platform} style={{ background: row.highlight ? 'rgba(224,85,111,0.1)' : i % 2 === 1 ? 'rgba(245,244,247,0.03)' : 'transparent' }}>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, fontWeight: row.highlight ? 600 : 400, color: TEXT, whiteSpace: 'nowrap' }}>{row.platform}</td>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, color: MUTED }}>{row.steps}</td>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, color: MUTED }}>{row.disclosure}</td>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, color: MUTED }}>{row.progress}</td>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, color: MUTED }}>{row.mobile}</td>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, color: MUTED }}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '20px', padding: '14px 18px', background: 'rgba(245,180,60,0.1)', borderRadius: '8px', border: '1px solid rgba(245,180,60,0.3)' }}>
            <p style={{ fontFamily: BODY, fontSize: '14px', color: '#e8c078', margin: 0, lineHeight: 1.6 }}>
              <strong>Key gap:</strong> Every comparable platform used progressive disclosure and showed progress. Day One did neither.
            </p>
          </div>
        </div>

        {/* Phase 4 */}
        <div>
          <p style={{ fontFamily: SM, fontSize: '11px', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Phase 4: Question Audit and Iteration
          </p>
          <BodyText style={{ marginBottom: '32px' }}>
            Once I knew what was causing drop-off, I audited every field in the onboarding form asking one question: does this need to be here right now?
          </BodyText>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            {[
              {
                label: 'Must have at signup',
                bg: 'rgba(95,230,160,0.12)',
                color: '#8fe8bb',
                pills: ['Full Name', 'Email Address', 'Password', 'Job Title', 'Industry', 'Location', 'Years of Experience', 'Team Size Preference'],
              },
              {
                label: 'Better collected later',
                bg: 'rgba(245,180,60,0.12)',
                color: '#e8c078',
                pills: ['Profile Photo', 'Professional Bio', 'Skills', 'Work History', 'Education', 'Portfolio URL', 'Certifications', 'Availability'],
              },
              {
                label: 'Nice to have',
                bg: 'rgba(245,244,247,0.06)',
                color: '#9a9dab',
                pills: ['GitHub Profile', 'Personal Website', 'Languages Spoken', 'Awards', 'Publications', 'Social Links'],
              },
            ].map((group) => (
              <div key={group.label}>
                <p style={{ fontFamily: SM, fontSize: '10px', color: group.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                  {group.label}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.pills.map((pill) => (
                    <span key={pill} style={{ padding: '6px 14px', borderRadius: '999px', background: group.bg, color: group.color, fontFamily: BODY, fontSize: '13px', fontWeight: 500 }}>
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }}>
            {[
              { title: 'Single question, multi-step', body: 'One field per screen. Lowest cognitive load per step but felt slow and disconnected.', selected: false },
              { title: 'Multi question, multi-step', body: 'Grouped related fields per step. Felt purposeful. Progress was clear. Winner.', selected: true },
              { title: 'Progressive reveal', body: 'All on one page, fields revealed as previous ones completed. Created anxiety about remaining fields.', selected: false },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  padding: '24px',
                  border: `1px solid ${card.selected ? ACCENT : BORDER}`,
                  borderRadius: '10px',
                  background: card.selected ? 'rgba(95,230,160,0.08)' : SURFACE,
                  position: 'relative',
                }}
              >
                {card.selected && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(95,230,160,0.15)',
                      color: '#8fe8bb',
                      fontFamily: SM,
                      fontSize: '9px',
                      letterSpacing: '0.06em',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Selected approach
                  </span>
                )}
                <p style={{ fontFamily: BODY, fontSize: '14px', fontWeight: 600, color: TEXT, margin: '0 0 8px 0', lineHeight: 1.4, paddingRight: card.selected ? '80px' : '0' }}>
                  {card.title}
                </p>
                <p style={{ fontFamily: BODY, fontSize: '13px', color: MUTED, margin: 0, lineHeight: 1.6 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <ImgPlaceholder label="Iteration Wireframes" />
        </div>
      </section>

      {/* ── Section 04: Solutions ── */}
      <section id="solutions" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="04" title="Solutions" />
        <SectionHeading>What changed and why it worked</SectionHeading>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {[
            {
              title: 'Onboarding',
              before: ['4 pages, 30+ fields', 'No progress signal', 'All-or-nothing completion'],
              after: ['2 steps, 8 fields at signup', 'Progress visible from step one', 'Each field has a stated reason to exist'],
              imgLabel: 'Onboarding Redesign',
            },
            {
              title: 'Dashboard',
              before: ['Equal-weight information', 'No suggested next action', 'Felt like a report'],
              after: ['Modular task-focused layout', 'One primary action always visible', 'Whitespace used as structure'],
              imgLabel: 'Dashboard Redesign',
            },
            {
              title: 'Profiles',
              before: ['Ordered by form sequence', 'Dense, transactional'],
              after: ['Ordered by relevance to talent seekers', 'Clean typography', 'Communicates credibility at a glance'],
              imgLabel: 'Profile Redesign',
            },
          ].map((block) => (
            <div key={block.title} className="solution-block" style={{ display: 'grid', gap: '40px', alignItems: 'start' }}>
              <div>
                <h3 style={{ fontFamily: HEADLINE, fontWeight: 600, fontSize: '28px', color: TEXT, margin: '0 0 24px 0', letterSpacing: '-0.005em' }}>
                  {block.title}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <p style={{ fontFamily: SM, fontSize: '10px', color: MUTED_LABEL, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                      Before
                    </p>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                      {block.before.map((item) => (
                        <li key={item} style={{ fontFamily: BODY, fontSize: '14px', color: MUTED, lineHeight: 1.65, marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#5a5d6e' }}>x</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontFamily: SM, fontSize: '10px', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                      After
                    </p>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                      {block.after.map((item) => (
                        <li key={item} style={{ fontFamily: BODY, fontSize: '14px', color: TEXT, lineHeight: 1.65, marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: ACCENT }}>+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <ImgPlaceholder label={block.imgLabel} aspect="4 / 3" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 05: Impact ── */}
      <section id="impact" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="05" title="Impact" />
        <SectionHeading>50% higher completion. 20% more signups.</SectionHeading>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: `1px solid ${BORDER}`, borderRadius: '10px', overflow: 'hidden', marginBottom: '48px' }}>
          {[
            { value: '4 to 2', label: 'Onboarding pages reduced', ref: null, isText: true },
            { value: '0%', label: 'Increase in completion rate', ref: metric2Ref, isText: false },
            { value: '0%', label: 'Increase in new signups', ref: metric3Ref, isText: false },
          ].map((metric, i) => (
            <div key={metric.label} style={{ padding: '48px 32px', borderRight: i < 2 ? `1px solid ${BORDER}` : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: HEADLINE, fontWeight: 700, fontSize: 'clamp(52px, 7vw, 88px)', lineHeight: 0.9, color: TEXT, marginBottom: '16px', letterSpacing: '-0.02em' }}>
                {metric.isText ? metric.value : <span ref={metric.ref}>{metric.value}</span>}
              </div>
              <p style={{ fontFamily: SM, fontSize: '10px', color: MUTED_LABEL, letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0, lineHeight: 1.5 }}>
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <BodyText>
          The platform shifted from feeling like paperwork to feeling like a product worth using. That shift happened under real production constraints, inside an existing design system, across agile sprint cycles with no UX researcher on the team.
        </BodyText>
      </section>

      {/* ── Section 06: Reflection ── */}
      <section id="reflection" style={{ marginBottom: '80px' }}>
        <SectionEyebrow number="06" title="Reflection" />
        <SectionHeading>What this project taught me</SectionHeading>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {[
            { label: 'What worked', body: 'Restructuring information architecture before touching visuals. Every hour spent on hierarchy saved three on visual rework. The problems were structural, not aesthetic.' },
            { label: 'What was hard', body: 'Advocating for UX decisions without researcher data. I worked from heuristics, direct observation, and established design principles and learned to make that case clearly and repeatedly to stakeholders.' },
            { label: 'What I would do differently', body: 'Set up lightweight usability testing earlier. Even a 5-person session would have provided stronger evidence for the structural decisions that needed the most advocacy.' },
            { label: 'The constraint I would keep', body: 'Working within an existing design system sharpened my thinking. It forced precision in composition and pushed me to solve problems through assembly rather than invention. That discipline carries into every project now.' },
          ].map((block) => (
            <div key={block.label} style={{ padding: '32px', border: `1px solid ${BORDER}`, borderRadius: '10px', background: SURFACE }}>
              <p style={{ fontFamily: BODY, fontSize: '14px', fontWeight: 700, color: TEXT, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {block.label}
              </p>
              <p style={{ fontFamily: BODY, fontSize: '15px', color: MUTED, margin: 0, lineHeight: 1.7 }}>
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .solution-block { grid-template-columns: 1fr; }
        @media (min-width: 768px) {
          .solution-block { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </CaseStudyLayout>
  )
}
