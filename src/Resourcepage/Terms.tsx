import { useEffect, type ReactNode } from "react";
import "./Terms.css";

/* Replace these placeholders with your real details */
const WEBSITE = "[Website Name]";
const BUSINESS = "[Business Name]";
const CURRENCY = "[currency]";
const REFUND_POLICY = "[state your policy]";
const COURTS = "[Lagos State, Nigeria]";
const EMAIL = "[email address]";
const PHONE = "[phone number]";

const s = {
  fill: "none",
  stroke: "#1f5a3a",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<string, ReactNode> = {
  file: (
    <>
      <path d="M6 3h8l4 4v14H6V3z" {...s} />
      <path d="M14 3v4h4M9 12h6M9 16h6" {...s} />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" {...s} />
      <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" {...s} />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" {...s} />
      <path d="M8 11V8a4 4 0 0 1 8 0v3M12 15v2" {...s} />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3z" {...s} />
      <path d="M12 8v5M12 16v.3" {...s} />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" {...s} />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" {...s} />
    </>
  ),
  heart: (
    <path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z" {...s} />
  ),
  card: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" {...s} />
      <path d="M3 10h18M7 15h4" {...s} />
    </>
  ),
  copyright: (
    <>
      <circle cx="12" cy="12" r="9" {...s} />
      <path d="M14.5 9.5a3.5 3.5 0 1 0 0 5" {...s} />
    </>
  ),
  chat: (
    <path d="M4 5h16v11H9l-5 4V5z" {...s} />
  ),
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" {...s} />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" {...s} />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M7 20h10M5 7h14" {...s} />
      <path d="m5 7-3 7a3 3 0 0 0 6 0L5 7zM19 7l-3 7a3 3 0 0 0 6 0l-3-7z" {...s} />
    </>
  ),
  refresh: (
    <>
      <path d="M20 12a8 8 0 0 1-14 5M4 12a8 8 0 0 1 14-5" {...s} />
      <path d="M18 3v4h-4M6 21v-4h4" {...s} />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" {...s} />
      <path d="m3 7 9 6 9-6" {...s} />
    </>
  ),
  ban: (
    <>
      <circle cx="12" cy="12" r="9" {...s} />
      <path d="m6 6 12 12" {...s} />
    </>
  ),
};

const terms: { icon: keyof typeof icons; title: string; body: string }[] = [
  {
    icon: "file",
    title: "About these terms",
    body: `These terms set the rules for using ${WEBSITE} and any services we provide through it. "We", "us" and "our" mean ${BUSINESS}. "You" means anyone who visits or uses the website.`,
  },
  {
    icon: "user",
    title: "Who may use the website",
    body: "You must be at least 18 years old, or have the permission of a parent or guardian, to use our services. You agree to give accurate information whenever we ask for it.",
  },
  {
    icon: "lock",
    title: "Your account",
    body: "If you create an account, you are responsible for keeping your password confidential and for everything that happens under your account. Tell us immediately if you think someone has used your account without your permission. We may suspend or close accounts that break these terms.",
  },
  {
    icon: "shield",
    title: "Acceptable use",
    body: "You agree not to use the website to break any law, to post false, abusive, hateful or harmful content, to harass other users, to upload viruses or harmful code, to try to gain unauthorised access to our systems, or to copy, scrape or resell our content without our written permission.",
  },
  {
    icon: "gear",
    title: "Our services",
    body: "We work to keep the website available and accurate, but we do not promise that it will always be uninterrupted or free of errors. We may change, pause or stop any part of the website or services at any time, with or without notice.",
  },
  {
    icon: "heart",
    title: "Health and nutrition information",
    body: "Information on this website is for general education only. It does not replace advice, diagnosis or treatment from a qualified doctor or dietitian. Please read our Professional Disclaimer for full details.",
  },
  {
    icon: "card",
    title: "Payments, orders and refunds",
    body: `Prices are shown in ${CURRENCY} and may change without notice. You agree to pay the full amount for anything you order. Our refund and cancellation rules are: ${REFUND_POLICY}.`,
  },
  {
    icon: "copyright",
    title: "Intellectual property",
    body: "All text, images, logos, designs and other content on this website belong to us or our licensors and are protected by law. You may view and share our content for personal, non-commercial use, but you may not copy, change or sell it without our written permission.",
  },
  {
    icon: "chat",
    title: "Content you submit",
    body: "If you post comments, reviews or other content, you remain the owner of it, but you give us a free, non-exclusive right to display and use it on the website. You promise that it is yours to share and that it does not break anyone else's rights. We may remove any content we consider inappropriate.",
  },
  {
    icon: "lock",
    title: "Privacy",
    body: "We collect and use your personal information as described in our Privacy Policy. By using the website, you agree to that use.",
  },
  {
    icon: "link",
    title: "Third-party links",
    body: "The website may link to other websites. We do not control them and are not responsible for their content, accuracy or privacy practices. Visiting them is at your own risk.",
  },
  {
    icon: "scale",
    title: "Limitation of liability",
    body: "To the fullest extent the law allows, we are not liable for any loss or damage that comes from using, or being unable to use, the website or services, including decisions you make based on its content. Nothing in these terms limits any right or liability that cannot be limited by law.",
  },
  {
    icon: "shield",
    title: "Indemnity",
    body: "You agree to protect us from any claim, loss or cost that arises from your breach of these terms or your misuse of the website.",
  },
  {
    icon: "ban",
    title: "Termination",
    body: "We may suspend or end your access at any time if you break these terms. You may stop using the website at any time. Sections that by their nature should continue, such as intellectual property and limitation of liability, will stay in effect after termination.",
  },
  {
    icon: "refresh",
    title: "Changes to these terms",
    body: "We may update these terms from time to time. The date at the top shows when they were last changed. Continuing to use the website after changes are posted means you accept the new terms.",
  },
  {
    icon: "scale",
    title: "Governing law",
    body: `These terms are governed by the laws of the Federal Republic of Nigeria. Any dispute will be handled by the courts of ${COURTS}.`,
  },
  {
    icon: "mail",
    title: "Contact us",
    body: `If you have questions about these terms, contact us at ${EMAIL} or ${PHONE}.`,
  },
];

const Leaf = ({ w = 70 }: { w?: number }) => (
  <svg viewBox="0 0 70 80" width={w} aria-hidden="true">
    <path d="M35 78V36" stroke="#9cc3a9" strokeWidth="2" strokeLinecap="round" />
    <path d="M35 46C16 46 10 32 12 10c18 2 26 14 23 36z" fill="#c6dccb" />
    <path d="M35 56c0-16 9-26 25-26 0 16-9 26-25 26z" fill="#b3d0bb" />
  </svg>
);

const Logo = () => (
  <div className="tc-logo">
    <svg viewBox="0 0 48 48" width="52" height="52" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#2f8a4f" />
      <path d="M24 38V22" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 26c-9 0-12-6-12-13 8 0 12 5 12 13z" fill="#fff" />
      <path d="M24 30c0-8 4-12 12-12 0 8-4 12-12 12z" fill="#cfe8d6" />
    </svg>
    <div>
      <span className="tc-script">Nourish</span>
      <span className="tc-by">by Hannah</span>
      <span className="tc-tag">Better Food • Healthier You</span>
    </div>
  </div>
);

interface Props {
  onAgree: () => void;
  onClose?: () => void;
}

export default function Terms({ onAgree, onClose }: Props) {
  useEffect(() => {
    const close = onClose ?? onAgree;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onAgree, onClose]);

  return (
    <div className="tc-overlay" onClick={onClose}>
      <div
        className="tc-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tc-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="tc-close" onClick={onClose ?? onAgree} aria-label="Close">
          ×
        </button>
        <span className="tc-leaf tc-leaf-tl"><Leaf w={90} /></span>

        <header className="tc-header">
          <Logo />
          <h1 id="tc-title">Terms and Conditions</h1>
          <hr />
          <p>
            By using this website, you agree to our Terms and Conditions. Please read them before
            you continue.
          </p>
        </header>

        <div className="tc-box">
          <ol className="tc-list" tabIndex={0}>
            {terms.map((t, i) => (
              <li key={t.title}>
                <span className="tc-icon">
                  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                    {icons[t.icon]}
                  </svg>
                </span>
                <div>
                  <h2>
                    {i + 1}. {t.title}
                  </h2>
                  <p>{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <footer className="tc-footer">
          <hr />
          <button className="tc-btn" onClick={onAgree}>
            I Agree <span aria-hidden="true">→</span>
          </button>
        </footer>

        <span className="tc-leaf tc-leaf-bl"><Leaf /></span>
        <span className="tc-leaf tc-leaf-br"><Leaf /></span>
      </div>
    </div>
  );
}