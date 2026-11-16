import { useEffect, type ReactNode } from "react";
import "./PrivacyPolicy.css";

interface Section {
  title: string;
  body: ReactNode;
}

const left: Section[] = [
  {
    title: "Introduction and Effective Date",
    body: (
      <p>
        This Privacy Policy explains how we collect, use, disclose and protect
        your personal information. It applies to all users of our website,
        mobile app and services.
        <br />
        <strong>Effective date:</strong> October 1, 2026.
      </p>
    ),
  },
  {
    title: "Who We Are / Contact Details",
    body: (
      <>
        <p>
          We are Healthy Life Nutrition &amp; Wellness, a nutrition and wellness
          practice. If you have any questions or concerns about this policy, you
          can contact us at:
        </p>
        <ul>
          <li>
            <strong>Email:</strong> hello@healthylife.com
          </li>
          <li>
            <strong>Phone:</strong> +234 801 234 5678
          </li>
          <li>
            <strong>Address:</strong> 12 Wellness Street, Lagos, Nigeria
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Information We Collect",
    body: (
      <ul>
        <li>
          <strong>User-provided:</strong> name, email, phone, address, goals,
          etc.
        </li>
        <li>
          <strong>Payment details:</strong> processed securely via Paystack,
          Flutterwave or Stripe (we do not store your card details).
        </li>
        <li>
          <strong>Health information:</strong> only if you give explicit consent
          (e.g., medical history, dietary needs).
        </li>
        <li>
          <strong>Automatic data:</strong> device info, IP addresses, cookies,
          usage data.
        </li>
        <li>
          <strong>Third parties:</strong> payments, analytics, marketing
          partners (with safeguards).
        </li>
      </ul>
    ),
  },
  {
    title: "Why We Collect It",
    body: (
      <p>
        To provide and improve our services, process payments, communicate with
        you, personalize your experience, and meet legal and regulatory
        requirements.
      </p>
    ),
  },
  {
    title: "Legal Basis",
    body: (
      <p>
        We rely on your consent, contract, legal obligation and legitimate
        interest to process your data. Where applicable, we comply with the
        Nigeria Data Protection Act (NDPA 2023) and the GDPR for users outside
        Nigeria.
      </p>
    ),
  },
  {
    title: "Who We Share Data With",
    body: (
      <p>
        We may share your data with trusted service providers (e.g., payment
        processors, cloud providers, analytics tools), health professionals
        (with consent), and legal authorities when required by law.
      </p>
    ),
  },
  {
    title: "Cookies and Tracking",
    body: (
      <p>
        We use cookies and similar technologies to improve your experience,
        analyze usage and personalize content. You can manage your cookie
        preferences in your browser settings.
      </p>
    ),
  },
];

const right: Section[] = [
  {
    title: "Data Retention",
    body: (
      <p>
        We keep your information only for as long as necessary to provide our
        services, meet legal obligations, resolve disputes and support our
        legitimate journey.
      </p>
    ),
  },
  {
    title: "Data Security",
    body: (
      <p>
        We use industry-standard security measures, including encryption and
        secure servers, to protect your data.
        <br />
        While we take reasonable steps to safeguard your information, no system
        is 100% secure.
      </p>
    ),
  },
  {
    title: "User Rights",
    body: (
      <p>
        You have the right to access, correct, update, delete or restrict your
        personal data. You can also withdraw consent (where applicable) and
        object to certain processing. To exercise your rights, contact us at the
        details above.
      </p>
    ),
  },
  {
    title: "International Transfers",
    body: (
      <p>
        If your data is transferred outside Nigeria, we ensure appropriate
        safeguards are in place, such as standard contractual clauses or other
        legal mechanisms, to protect your information.
      </p>
    ),
  },
  {
    title: "Children's Privacy",
    body: (
      <p>
        Our services are not directed to children under 18. We do not knowingly
        collect personal information from children. If you believe we have
        unintentionally collected such information, please contact us and we
        will delete it.
      </p>
    ),
  },
  {
    title: "Changes to the Policy",
    body: (
      <p>
        We may update this policy from time to time. Any changes will be posted
        on this page with a new effective date.
      </p>
    ),
  },
  {
    title: "Complaints and Nigeria Data Protection Commission",
    body: (
      <p>
        If you have a complaint about how we handle your data, please contact us
        first. You also have the right to file a complaint with the Nigeria Data
        Protection Commission (NDPC) at www.ndpc.gov.ng.
      </p>
    ),
  },
];

const LeafIcon = () => (
  <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
    <path
      d="M24 44V22"
      stroke="#2f7d4f"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path d="M24 26C10 26 6 16 6 6c12 0 18 6 18 20z" fill="#4caf6e" />
    <path d="M24 30c0-12 6-18 18-18 0 10-4 18-18 18z" fill="#2f7d4f" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path
      d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3z"
      fill="#1f4d3a"
    />
    <path
      d="m8.5 12 2.5 2.5 4.5-5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface Props {
  onClose: () => void;
  onAccept: () => void;
}

export default function PrivacyPolicy({ onClose, onAccept }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const renderColumn = (items: Section[], offset: number) => (
    <div className="pp-column">
      {items.map((s, i) => (
        <section className="pp-section" key={s.title}>
          <span className="pp-number">{offset + i + 1}</span>
          <div>
            <h3>{s.title}</h3>
            <div className="pp-body">{s.body}</div>
          </div>
        </section>
      ))}
    </div>
  );

  return (
    <div className="pp-overlay" onClick={onClose}>
      <div
        className="pp-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pp-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="pp-header">
          <LeafIcon />
          <div>
            <h2 id="pp-title">Privacy Policy</h2>
            <p>Last updated: October 1, 2026</p>
          </div>
          <button className="pp-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>

        <div className="pp-content">
          <div className="pp-summary">
            <ShieldIcon />
            <div>
              <h4>A quick summary</h4>
              <p>
                We value your privacy and are committed to protecting your
                personal information. This policy explains what data we collect,
                how we use it, who we share it with, and the choices you have.
                We only collect what we need to provide our services and keep it
                secure.
              </p>
            </div>
          </div>

          <div className="pp-grid">
            {renderColumn(left, 0)}
            {renderColumn(right, left.length)}
          </div>
        </div>

        <footer className="pp-footer">
          <button className="pp-btn pp-btn-outline" onClick={onClose}>
            Close
          </button>
          <button className="pp-btn pp-btn-primary" onClick={onAccept}>
            I Understand
          </button>
        </footer>
      </div>
    </div>
  );
}