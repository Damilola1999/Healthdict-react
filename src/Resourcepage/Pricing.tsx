import { useState } from "react";
import "./Pricing.css";

type Plan = {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
  notIncluded: string;
  valid: string;
  best: string;
};

const plans: Plan[] = [
  {
    name: "Basic",
    price: "₦60,000",
    features: [
      "3 sessions (45 mins each)",
      "Personalized meal plan",
      "Basic nutrition guide (PDF)",
      "Email support (1 week)",
    ],
    notIncluded: "Follow-up sessions, food diary review, home visits.",
    valid: "3 months",
    best: "Beginners or those with simple goals.",
  },
  {
    name: "Standard",
    price: "₦100,000",
    popular: true,
    features: [
      "6 sessions (45 mins each)",
      "Personalized meal plan",
      "Detailed nutrition guide (PDF)",
      "WhatsApp support (2 weeks)",
      "Progress tracking & check-ins",
    ],
    notIncluded: "Home visits, additional reports.",
    valid: "4 months",
    best: "Individuals with consistent goals and commitment.",
  },
  {
    name: "Premium",
    price: "₦150,000",
    features: [
      "10 sessions (45 mins each)",
      "Personalized meal plan",
      "Full nutrition guide (PDF + print)",
      "WhatsApp support (1 month)",
      "Progress tracking & check-ins",
      "1 follow-up session (free)",
    ],
    notIncluded: "Home visits, extra reports beyond 1.",
    valid: "6 months",
    best: "Serious goals (weight management, medical conditions, etc.).",
  },
  {
    name: "Family",
    price: "₦200,000",
    features: [
      "12 sessions (45 mins each)",
      "Customized meal plans for 2–4",
      "Full nutrition guide (PDF + print)",
      "WhatsApp support (1 month)",
      "Progress tracking & check-ins",
      "2 follow-up sessions (free)",
    ],
    notIncluded: "Home visits, extra reports beyond 2.",
    valid: "6 months",
    best: "Families or couples wanting healthier lifestyles.",
  },
];

const addons: [string, string][] = [
  ["Extra session (per session)", "₦10,000"],
  ["Priority booking (within 24 hrs)", "₦5,000"],
  ["Home visit (within Lagos)", "₦15,000"],
  ["Additional report (detailed plan)", "₦7,500"],
  ["Food diary review (per review)", "₦5,000"],
];

const comparison: { feature: string; v: (boolean | string)[] }[] = [
  { feature: "Number of sessions", v: ["3", "6", "10", "12"] },
  { feature: "Personalized meal plan", v: [true, true, true, true] },
  { feature: "Nutrition guide (PDF)", v: [true, true, true, true] },
  { feature: "WhatsApp/email support", v: [false, true, true, true] },
  { feature: "Progress tracking", v: [false, true, true, true] },
  { feature: "Follow-up session(s)", v: [false, false, true, true] },
  { feature: "Home visits", v: [false, false, false, true] },
  { feature: "Family plan (2–4 people)", v: [false, false, false, true] },
];

const discounts = [
  "Student discount: 10% off (with student ID).",
  "Referral discount: 10% off for you and your friend.",
  "Bundle deal: 10% off when you book 3+ sessions.",
  "Seasonal offers: During special campaigns (e.g. New Year, Back to School).",
  "Valid until: December 31, 2026 (for seasonal offers).",
];

const faqs: [string, string][] = [
  [
    "Do I need to book in advance?",
    "Yes, we recommend booking at least 48 hours ahead so we can secure your preferred time.",
  ],
  [
    "Can I upgrade my package later?",
    "Absolutely. You can upgrade anytime and only pay the difference, minus sessions already used.",
  ],
  [
    "What if I miss a session?",
    "Reschedule at least 24 hours in advance with no fee. Late cancellations and no-shows may incur a 50% fee.",
  ],
  [
    "Is my information confidential?",
    "Yes. Your data is protected under our Privacy Policy and the NDPA 2023.",
  ],
];

const Check = () => (
  <svg className="pr-check" viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#2f8a57" />
    <path d="m5.5 10.5 3 3 6-6.5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Leaf = ({ size = 56 }: { size?: number }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true">
    <path d="M24 44V22" stroke="#2f7d4f" strokeWidth="3" strokeLinecap="round" />
    <path d="M24 26C10 26 6 16 6 6c12 0 18 6 18 20z" fill="#4caf6e" />
    <path d="M24 30c0-12 6-18 18-18 0 10-4 18-18 18z" fill="#2f7d4f" />
  </svg>
);

const Badge = ({ children }: { children: string }) => (
  <span className="pr-icon">{children}</span>
);

export default function Pricing({ onClose }: { onClose?: () => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pr-page">
      <div className="pr-card">
        <header className="pr-header">
          <Leaf />
          <div className="pr-header-text">
            <h1>Nutrition Services &amp; Pricing</h1>
            <p className="pr-tagline">Personalized nutrition plans for a healthier, happier you.</p>
            <p className="pr-intro">
              Our nutrition services are designed for individuals who want to improve their health,
              manage weight, or build better eating habits. All prices are in Nigerian Naira (₦) and
              include VAT.
            </p>
          </div>
          <div className="pr-script">
            Better
            <br />
            Food
            <br />
            Brighter
            <br />
            You ♡
          </div>
          {onClose && (
            <button className="pr-x" onClick={onClose} aria-label="Close">
              ×
            </button>
          )}
        </header>

        <div className="pr-top">
          <section className="pr-panel">
            <h2 className="pr-title">
              <Badge>👤</Badge> Consultation Fees
            </h2>
            <div className="pr-fees">
              <div className="pr-fee">
                <h4>Initial Consultation</h4>
                <strong>₦15,000</strong>
                <small>60 minutes • Video / Phone / In-person</small>
                <em>First consultation is discounted (₦12,000) or credited toward a package.</em>
              </div>
              <div className="pr-fee">
                <h4>Follow-up Session</h4>
                <strong>₦10,000</strong>
                <small>45 minutes • Video / Phone / In-person</small>
              </div>
              <div className="pr-fee">
                <h4>Rescheduling / Cancellation</h4>
                <p>
                  Reschedule up to 24 hours in advance (no fee). Cancellations within 24 hours or
                  no-shows may incur a 50% fee of the session cost.
                </p>
              </div>
            </div>
          </section>

          <section className="pr-panel">
            <h2 className="pr-title">
              <Badge>+</Badge> Add-ons &amp; Extras
            </h2>
            <ul className="pr-addons">
              {addons.map(([label, price]) => (
                <li key={label}>
                  <span>{label}</span>
                  <i />
                  <b>{price}</b>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="pr-packages">
          <h2 className="pr-title">
            <Badge>★</Badge> Our Packages
          </h2>
          <p className="pr-sub">Choose the plan that fits your goals and lifestyle.</p>
          <div className="pr-plans">
            {plans.map((p) => (
              <article key={p.name} className={`pr-plan ${p.popular ? "popular" : ""}`}>
                {p.popular && <span className="pr-popular">Most Popular</span>}
                <h3>{p.name} Plan</h3>
                <div className="pr-price">{p.price}</div>
                <small>One-time payment</small>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check /> {f}
                    </li>
                  ))}
                </ul>
                <div className="pr-plan-foot">
                  <p>
                    <span>Not included:</span> {p.notIncluded}
                  </p>
                  <p>
                    <span>Valid for:</span> {p.valid}
                  </p>
                  <p>
                    <span>Best for:</span> {p.best}
                  </p>
                </div>
                <button className={`pr-btn ${p.popular ? "solid" : ""}`}>Book {p.name} Plan</button>
              </article>
            ))}
          </div>
        </section>

        <div className="pr-mid">
          <section className="pr-panel">
            <h2 className="pr-title">
              <Badge>▦</Badge> Package Comparison
            </h2>
            <table className="pr-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Basic</th>
                  <th className="hl">
                    <span className="pr-popular small">Most Popular</span>
                    Standard
                  </th>
                  <th>Premium</th>
                  <th>Family</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((r) => (
                  <tr key={r.feature}>
                    <td>{r.feature}</td>
                    {r.v.map((c, i) => (
                      <td key={i} className={i === 1 ? "hl" : ""}>
                        {c === true ? <Check /> : c === false ? <span className="dash">–</span> : c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <div className="pr-stack">
            <section className="pr-panel">
              <h2 className="pr-title">
                <Badge>▭</Badge> Payment Details
              </h2>
              <ul className="pr-bullets">
                <li>
                  <b>Accepted methods:</b> Card (Visa, Mastercard), Bank transfer, Mobile money (e.g.
                  USSD, bank app).
                </li>
                <li>
                  <b>Payment terms:</b> Full payment upfront, or 50% deposit (within 24 hours) and
                  balance before your first session.
                </li>
                <li>
                  <b>Invoices:</b> You'll receive an electronic receipt and invoice via email after
                  payment.
                </li>
              </ul>
            </section>
            <section className="pr-panel">
              <h2 className="pr-title">
                <Badge>✓</Badge> Refund &amp; Cancellation Policy
              </h2>
              <ul className="pr-bullets">
                <li>
                  <b>Refund window:</b> 7 days (for unused sessions, minus any admin fees).
                </li>
                <li>
                  <b>Non-refundable:</b> Consultation fee, any completed sessions, and digital
                  materials.
                </li>
                <li>
                  <b>Reschedule notice:</b> At least 24 hours in advance.
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className="pr-bottom">
          <section className="pr-panel">
            <h2 className="pr-title">
              <Badge>%</Badge> Discounts &amp; Offers
            </h2>
            <ul className="pr-bullets tight">
              {discounts.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </section>

          <section className="pr-panel">
            <h2 className="pr-title">
              <Badge>?</Badge> Frequently Asked Questions
            </h2>
            <div className="pr-faq">
              {faqs.map(([q, a], i) => (
                <div key={q} className="pr-faq-item">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                    <span>{q}</span>
                    <span className={`chev ${openFaq === i ? "open" : ""}`}>⌄</span>
                  </button>
                  {openFaq === i && <p>{a}</p>}
                </div>
              ))}
            </div>
          </section>

          <section className="pr-panel pr-cta">
            <h2 className="pr-title">
              <Badge>▣</Badge> Ready to Get Started?
            </h2>
            <p>Take the first step towards a healthier you.</p>
            <button className="pr-btn solid">Book Consultation →</button>
            <button className="pr-btn">✉ Not sure? Contact us</button>
          </section>
        </div>

        <footer className="pr-footer">
          <div className="pr-brand">
            <Leaf size={34} />
            <div>
              <strong>Healthy Life</strong>
              <small>Nutrition &amp; Wellness</small>
            </div>
          </div>
          <nav>
            <a href="#terms">Terms &amp; Conditions</a>
            <span>|</span>
            <a href="#privacy">Privacy Policy</a>
          </nav>
          <small>Prices are subject to change. Last updated: October 1, 2026</small>
        </footer>
      </div>
    </div>
  );
}