'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CaseStudyLayout, { type CaseStudyNavSection } from '@/components/case-study/CaseStudyLayout'
import { BodyText, ImgPlaceholder, PullQuote, SectionEyebrow, SectionHeading } from '@/components/case-study/CaseStudyUI'
import { ACCENT, BODY, BORDER, HEADLINE, MUTED, MUTED_LABEL, SM, SURFACE, TEXT } from '@/components/case-study/theme'

const NAV_SECTIONS: CaseStudyNavSection[] = [
  { id: 'overview', number: '01', title: 'Overview' },
  { id: 'role', number: '02', title: 'My Role' },
  { id: 'outcomes', number: '03', title: 'Outcomes' },
  { id: 'discovery', number: '04', title: 'Discovery' },
  { id: 'research', number: '05', title: 'Research' },
  { id: 'design', number: '06', title: 'Design' },
  { id: 'validation', number: '07', title: 'Validation' },
  { id: 'reflection', number: '08', title: 'Reflection' },
]

export default function MedpayCaseStudy() {
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
          val: 78,
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
          val: 45,
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
      eyebrow="PRODUCT DESIGN · HEALTHTECH / LOCAL COMMERCE"
      title="Bringing Bangalore's Neighborhood Pharmacies Online"
      subtitle="Designed a two-sided mobile experience so local pharmacy stores could sell medicines online without losing their customers to Tata 1mg, PharmEasy, and Netmeds — or losing them to a confusing app."
      meta={[
        { label: 'Role', value: 'Product Design (Solo)' },
        { label: 'Scope', value: 'Customer App & Pharmacy Partner App' },
      ]}
      sections={NAV_SECTIONS}
      nextHref="/case-study/cancer-care"
      nextLabel="View Next Case Study"
    >
      {/* ── Section 01: Overview ── */}
      <section id="overview" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="01" title="Overview" />
        <SectionHeading>The neighborhood pharmacy, left out of its own industry&rsquo;s future.</SectionHeading>
        <BodyText>
          Tata 1mg, PharmEasy, and Netmeds have made ordering medicine online completely normal in Indian cities. But every order placed on those platforms is fulfilled from a warehouse — not from the pharmacy down the street that a family has trusted for fifteen years. As online medicine delivery grew, local pharmacy owners in Bangalore were watching walk-in customers quietly migrate to apps that had no room for them at all.
        </BodyText>
        <BodyText>
          Medpay set out to fix that: a mobile ordering experience built around the local pharmacy instead of around a warehouse, so neighborhood stores could offer the same convenience — delivery, reordering, prescription upload — without disappearing into a marketplace that competes with them for the same customers.
        </BodyText>
        <BodyText>
          The constraint that shaped every decision on this project wasn&rsquo;t technical, it was human: the people using this app — both shop owners and their customers — were not the same digitally fluent audience that 1mg or PharmEasy were designed for. The app had to be legible to someone using a smartphone for shopping for the first time.
        </BodyText>
      </section>

      {/* ── Section 02: My Role ── */}
      <section id="role" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="02" title="My Role" />
        <SectionHeading>Designing both sides of the same transaction.</SectionHeading>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {[
            {
              title: 'Product Designer (Solo)',
              body: 'Embedded in a small founding team, I owned both the customer-facing ordering app and the pharmacy partner app — from early field research through to final, developer-ready screens.',
            },
            {
              title: 'Acting Researcher',
              body: 'With no research budget in a pre-seed startup, I visited pharmacies across three Bangalore neighborhoods myself, sat with shop owners during their shift, and interviewed customers picking up medicine at the counter.',
            },
          ].map((role) => (
            <div
              key={role.title}
              style={{ padding: '28px', border: `1px solid ${BORDER}`, borderRadius: '10px', background: SURFACE }}
            >
              <p style={{ fontFamily: BODY, fontSize: '15px', fontWeight: 600, color: TEXT, margin: '0 0 10px 0', lineHeight: 1.4 }}>
                {role.title}
              </p>
              <p style={{ fontFamily: BODY, fontSize: '14px', color: MUTED, margin: 0, lineHeight: 1.65 }}>
                {role.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 03: Outcomes ── */}
      <section id="outcomes" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="03" title="Outcomes" />
        <SectionHeading>The redesign, by the numbers.</SectionHeading>
        <BodyText style={{ marginBottom: '40px' }}>
          Here&rsquo;s the short version — how we got here is the rest of this page.
        </BodyText>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: `1px solid ${BORDER}`, borderRadius: '10px', overflow: 'hidden' }}>
          {[
            { value: '6 → 3', label: 'Steps to complete a medicine reorder' },
            { value: '78%', label: 'Increase in first-order completion' },
            { value: '45%', label: 'Increase in repeat orders within 30 days' },
          ].map((metric, i) => (
            <div key={metric.label} style={{ padding: '40px 28px', borderRight: i < 2 ? `1px solid ${BORDER}` : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: HEADLINE, fontWeight: 700, fontSize: 'clamp(40px, 5.4vw, 64px)', lineHeight: 0.9, color: TEXT, marginBottom: '14px', letterSpacing: '-0.02em' }}>
                {metric.value}
              </div>
              <p style={{ fontFamily: SM, fontSize: '10px', color: MUTED_LABEL, letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0, lineHeight: 1.5 }}>
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 04: Discovery ── */}
      <section id="discovery" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="04" title="Discovery" />
        <SectionHeading>Four problems, and none of them were about the medicine</SectionHeading>
        <BodyText style={{ marginBottom: '40px' }}>
          I spent the first two weeks at pharmacy counters and kitchen tables, not in Figma. The real blockers had almost nothing to do with the product catalog.
        </BodyText>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {[
            {
              title: 'The big platforms don’t need the local store',
              body: 'Tata 1mg, PharmEasy, and Netmeds fulfill from regional warehouses. A pharmacy on the corner has no way onto the platform that’s taking its customers.',
            },
            {
              title: 'Customers didn’t trust an app with their medicine',
              body: 'Multiple customers told us they worried about counterfeit stock or wrong dosages from an app they’d never heard of. They trusted their pharmacist by name, not a brand.',
            },
            {
              title: 'The audience was not smartphone-native',
              body: 'A meaningful share of customers — often the ones managing a parent’s prescriptions — were using a shopping app for the first time in their life.',
            },
            {
              title: 'Shop owners had no time or patience for onboarding',
              body: 'Pharmacists are on their feet serving customers all day. Any tool that needed training, a manual, or a support call was a tool they would abandon.',
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

      {/* ── Section 05: Research ── */}
      <section id="research" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="05" title="Research" />
        <SectionHeading>Before I opened Figma</SectionHeading>

        {/* Phase 1 */}
        <div style={{ marginBottom: '64px' }}>
          <p style={{ fontFamily: SM, fontSize: '11px', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Phase 1: Field Visits
          </p>
          <BodyText>
            I sat inside three pharmacies across HSR Layout, Jayanagar, and Indiranagar over a week, watching how customers actually asked for medicine — mostly by describing symptoms or holding up an empty strip, rarely by brand name. That single observation reshaped how search needed to work.
          </BodyText>
          <div style={{ marginTop: '32px' }}>
            <ImgPlaceholder label="Field Visit Notes" />
          </div>
        </div>

        {/* Phase 2 */}
        <div style={{ marginBottom: '64px' }}>
          <p style={{ fontFamily: SM, fontSize: '11px', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Phase 2: Empathy Mapping
          </p>
          <BodyText style={{ marginBottom: '32px' }}>
            With no researcher on the team, I mapped the customer&rsquo;s journey myself, stage by stage, to separate a technical problem (get an order placed) from an emotional one (feel safe buying medicine from an app for the first time).
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
                  { stage: 'Opening the app, first time', thinks: '"Is this a real pharmacy or just an app?"', feels: 'Cautious', says: '"I\'ll just call the shop instead"', does: 'Closes the app, goes back to WhatsApp/phone call', alt: false },
                  { stage: 'Uploading a prescription', thinks: '"Am I doing this right?"', feels: 'Unsure, exposed', says: '"What if they can\'t read the doctor\'s handwriting?"', does: 'Takes 3-4 blurry photos, gives up if no confirmation appears', alt: true },
                  { stage: 'Waiting for delivery', thinks: '"Did my order even go through?"', feels: 'Anxious, especially for urgent medicine', says: '"I would\'ve just walked to the shop by now"', does: 'Calls the pharmacy directly to confirm', alt: false },
                  { stage: 'Reordering next month', thinks: '"I don\'t want to type all that again"', feels: 'Impatient', says: '"Just give me what I got last time"', does: 'Re-does the full search and upload flow from scratch', alt: true },
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
            "Customers weren&rsquo;t hesitating because ordering medicine online was hard. They were hesitating because nothing on screen told them a real pharmacist was on the other end."
          </PullQuote>
        </div>

        {/* Phase 3 */}
        <div>
          <p style={{ fontFamily: SM, fontSize: '11px', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Phase 3: Competitive Analysis
          </p>
          <BodyText style={{ marginBottom: '32px' }}>
            Benchmarked Medpay against the three national platforms customers already knew, plus the default alternative every customer already had: walking to the counter.
          </BodyText>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: BODY, fontSize: '14px', lineHeight: 1.55 }}>
              <thead>
                <tr style={{ background: 'rgba(245,244,247,0.06)' }}>
                  {['Platform', 'Fulfilled By', 'Avg. Delivery Time', 'Built For Local Pharmacies', 'Designed For Low Digital Literacy'].map((h) => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', border: `1px solid ${BORDER}`, fontWeight: 600, color: TEXT, whiteSpace: 'nowrap' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { platform: 'Medpay (Us)', by: 'Your neighborhood pharmacy', time: '30–45 min', local: 'Yes — core model', literacy: 'Yes', highlight: true },
                  { platform: 'Tata 1mg', by: 'Regional warehouse', time: '1–2 days', local: 'No', literacy: 'Partial', highlight: false },
                  { platform: 'PharmEasy', by: 'Regional warehouse', time: '1–2 days', local: 'No', literacy: 'Partial', highlight: false },
                  { platform: 'Netmeds', by: 'Regional warehouse', time: '1–3 days', local: 'No', literacy: 'Partial', highlight: false },
                  { platform: 'Walking to the counter', by: 'The pharmacy itself', time: 'Immediate', local: 'Yes (only option)', literacy: 'Yes (already familiar)', highlight: false },
                ].map((row, i) => (
                  <tr key={row.platform} style={{ background: row.highlight ? 'rgba(95,230,160,0.08)' : i % 2 === 1 ? 'rgba(245,244,247,0.03)' : 'transparent' }}>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, fontWeight: row.highlight ? 600 : 400, color: TEXT, whiteSpace: 'nowrap' }}>{row.platform}</td>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, color: MUTED }}>{row.by}</td>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, color: MUTED }}>{row.time}</td>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, color: MUTED }}>{row.local}</td>
                    <td style={{ padding: '12px 16px', border: `1px solid ${BORDER}`, color: MUTED }}>{row.literacy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '20px', padding: '14px 18px', background: 'rgba(245,180,60,0.1)', borderRadius: '8px', border: '1px solid rgba(245,180,60,0.3)' }}>
            <p style={{ fontFamily: BODY, fontSize: '14px', color: '#e8c078', margin: 0, lineHeight: 1.6 }}>
              <strong>Key gap:</strong> None of the national platforms had a channel for the pharmacist the customer already trusted. They either bypassed the local store entirely, or reached it too slowly to beat a five-minute walk.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 06: Design ── */}
      <section id="design" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="06" title="Design" />
        <SectionHeading>Designing for the least confident user in the room</SectionHeading>
        <BodyText style={{ marginBottom: '32px' }}>
          Every feature request got the same test: would this make sense to someone using a shopping app for the first time, standing in for a parent who can&rsquo;t use a smartphone at all? If not, it got simplified or cut from launch.
        </BodyText>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
          {[
            {
              label: 'Must have at launch',
              bg: 'rgba(95,230,160,0.12)',
              color: '#8fe8bb',
              pills: ['Search by symptom or photo', 'Camera prescription upload', 'Order status in plain language', 'Cash on delivery', 'One-tap reorder', 'Call pharmacy directly'],
            },
            {
              label: 'Better added post-launch',
              bg: 'rgba(245,180,60,0.12)',
              color: '#e8c078',
              pills: ['Saved family member profiles', 'Medicine reminders', 'In-app chat with pharmacist', 'Multiple delivery addresses'],
            },
            {
              label: 'Cut entirely',
              bg: 'rgba(245,244,247,0.06)',
              color: '#9a9dab',
              pills: ['Loyalty points program', 'In-app health blog', 'Symptom checker AI', 'Social sharing'],
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

        <p style={{ fontFamily: SM, fontSize: '11px', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Getting prescription upload right
        </p>
        <BodyText style={{ marginBottom: '32px' }}>
          This was the single highest-anxiety moment in the whole app. I prototyped three approaches before picking one.
        </BodyText>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '56px' }}>
          {[
            { title: 'Manual medicine entry', body: 'Type each medicine name from the prescription. Precise, but slow and error-prone for handwriting-heavy prescriptions.', selected: false },
            { title: 'Guided photo capture + pharmacist review', body: 'A 3-step camera flow with a visible "pharmacist is reviewing" status. Slower to confirm, but built trust at the exact moment people needed it. Winner.', selected: true },
            { title: 'Fully automated OCR reading', body: 'Attempted to auto-read prescriptions. Misread doctor handwriting often enough that it created more anxiety than it removed.', selected: false },
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

        <ImgPlaceholder label="Prescription Upload Flow" />

        <div style={{ marginTop: '64px' }}>
          <p style={{ fontFamily: SM, fontSize: '11px', color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            What actually shipped
          </p>
          <BodyText style={{ marginBottom: '40px' }}>
            Three surfaces carried the weight of the whole product: how customers found medicine, how they reordered it, and how pharmacy owners kept up without any training.
          </BodyText>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {[
              {
                title: 'Ordering Flow',
                before: ['Search required exact medicine names', 'No way to describe a symptom instead', 'Checkout buried the "pharmacy" identity'],
                after: ['Search by symptom, photo, or name', 'Pharmacy name and photo shown from the first screen', 'Cash on delivery set as a visible, equal option'],
                imgLabel: 'Ordering Flow Redesign',
              },
              {
                title: 'Prescription Upload',
                before: ['No visible confirmation after upload', 'Users unsure if a real person reviewed it', 'No path to fix a rejected upload'],
                after: ['Live "pharmacist is reviewing" status', 'Clear approve/clarify states with plain-language reasons', 'One-tap re-upload if something was unclear'],
                imgLabel: 'Prescription Flow Redesign',
              },
              {
                title: 'Pharmacy Partner App',
                before: ['No dedicated seller tool — orders came by phone call', 'No order history or inventory view', 'Any change meant training the shop staff'],
                after: ['Order queue as large, tap-to-accept cards', 'Familiar visual language, mirrored from the customer app', 'Zero onboarding call needed for 9 in 10 pharmacies'],
                imgLabel: 'Pharmacy Partner App',
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
        </div>
      </section>

      {/* ── Section 07: Validation ── */}
      <section id="validation" style={{ marginBottom: '120px' }}>
        <SectionEyebrow number="07" title="Validation" />
        <SectionHeading>Sure, it looks simple. But did local pharmacies actually use it?</SectionHeading>
        <BodyText style={{ marginBottom: '48px' }}>
          Yes — and the strongest signal wasn&rsquo;t a usability score, it was that pharmacy owners kept using it after the pilot ended without being asked to.
        </BodyText>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: `1px solid ${BORDER}`, borderRadius: '10px', overflow: 'hidden', marginBottom: '48px' }}>
          {[
            { value: '6 to 3', label: 'Steps to complete a medicine reorder', ref: null, isText: true },
            { value: '0%', label: 'Increase in first-order completion', ref: metric2Ref, isText: false },
            { value: '0%', label: 'Increase in repeat orders within 30 days', ref: metric3Ref, isText: false },
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
          Across the pilot, 34 pharmacies in Bangalore came onboard, and 9 in 10 of them started taking orders without a single onboarding call — the clearest proof that "simple enough for a first-time smartphone shopper" also meant "simple enough for a shop owner mid-shift." Customers kept coming back not because the app was clever, but because the pharmacist on the other end was the same one they already trusted at the counter.
        </BodyText>
      </section>

      {/* ── Section 08: Reflection ── */}
      <section id="reflection" style={{ marginBottom: '80px' }}>
        <SectionEyebrow number="08" title="Reflection" />
        <SectionHeading>What this project taught me</SectionHeading>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {[
            { label: 'What worked', body: 'Designing from the pharmacy counter outward instead of from a Figma template inward. Watching real transactions surfaced constraints — like how people describe symptoms instead of medicine names — that no amount of desk research would have caught.' },
            { label: 'What was hard', body: 'Holding two very different literacy levels — tech-comfortable shop owners and first-time smartphone customers — inside one simple, consistent visual language without the app feeling condescending to either.' },
            { label: 'What I would do differently', body: 'Pilot with five pharmacies before thirty-four. We learned real onboarding friction only after we were already supporting more shops than we could personally visit.' },
            { label: 'The constraint I would keep', body: 'Designing for the least confident user in the room, every time. It forced genuinely simple decisions instead of "simple enough for a designer to feel clever about," and that discipline is the reason the app worked without training.' },
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
