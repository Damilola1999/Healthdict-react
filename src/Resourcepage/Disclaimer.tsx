import { useEffect, type ReactNode } from "react";
import "./Disclaimer.css";

const stroke = {
  fill: "none",
  stroke: "#fff",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<string, ReactNode> = {
  shield: (
    <>
      <path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3z" {...stroke} />
      <path d="M12 15.5s-3.5-2.2-3.5-4.7a2 2 0 0 1 3.5-1.3 2 2 0 0 1 3.5 1.3c0 2.5-3.5 4.7-3.5 4.7z" {...stroke} />
    </>
  ),
  book: (
    <>
      <path d="M12 6c-1.5-1.5-4-2-8-2v14c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2V4c-4 0-6.5.5-8 2z" {...stroke} />
      <path d="M12 6v14" {...stroke} />
    </>
  ),
  doctor: (
    <>
      <circle cx="12" cy="7" r="3.5" {...stroke} />
      <path d="M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" {...stroke} />
      <path d="M12 16v4M10 18h4" {...stroke} />
    </>
  ),
  pregnant: (
    <>
      <circle cx="11" cy="4.5" r="2" {...stroke} />
      <path d="M10 8c-1.5 1-2 3-1.5 5 .5 2 2 3 2 3v5M11 8c3 .5 4.5 3 3.5 5.5s-3 2.5-3 4.5" {...stroke} />
    </>
  ),
  handshake: (
    <>
      <path d="m2 11 4-4 4 1 3-1 5 4 4-2M6 7l-4 4 6 7 3-2 2 2 3-2 4-4M10 8l4 3" {...stroke} />
    </>
  ),
  file: (
    <>
      <path d="M6 3h8l4 4v14H6V3z" {...stroke} />
      <path d="M14 3v4h4M9 12h6M9 16h6" {...stroke} />
    </>
  ),
  warning: (
    <>
      <path d="M12 3 2 20h20L12 3z" {...stroke} />
      <path d="M12 10v4.5M12 17.2v.3" {...stroke} />
    </>
  ),
};

const items: { icon: keyof typeof icons; text: string }[] = [
  {
    icon: "book",
    text: "The information on this site is for general education only. It does not diagnose, treat, cure or prevent any condition, and it is not written for your individual health needs.",
  },
  {
    icon: "doctor",
    text: "It cannot replace an examination, advice or treatment from a doctor, registered dietitian or other licensed health professional. Nutrition needs differ with age, health, medicines and stage of life, and only a professional who knows your history can advise you safely.",
  },
  {
    icon: "pregnant",
    text: "Please speak to a qualified professional before changing your diet if you are pregnant, breastfeeding or planning a pregnancy; have diabetes or a heart, kidney, liver or digestive condition; have a food allergy or intolerance; take prescription medicine or supplements; have a history of disordered eating; or are choosing food for a child or an older adult.",
  },
  {
    icon: "handshake",
    text: "Using this site, or contacting us, does not create a doctor-patient or dietitian-client relationship.",
  },
  {
    icon: "file",
    text: "We aim to keep our content accurate, but nutrition science changes, and we cannot promise that everything here is complete or up to date. Never ignore or delay professional advice because of something you have read on this site. You use this information at your own risk, and we are not liable for decisions made based on it.",
  },
  {
    icon: "warning",
    text: "In an emergency, get help immediately. Severe allergic reactions, chest pain, difficulty breathing or fainting need urgent care. In Nigeria, call 112 or go to the nearest hospital.",
  },
];

const Icon = ({ name, size = 28 }: { name: keyof typeof icons; size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    {icons[name]}
  </svg>
);

const Leaves = () => (
  <svg viewBox="0 0 60 70" width="60" height="70" aria-hidden="true">
    <path d="M30 68V30" stroke="#6fa383" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 40C14 40 8 28 10 10c16 2 22 12 20 30z" fill="#a9cdb4" />
    <path d="M30 48c0-14 8-22 22-22 0 14-8 22-22 22z" fill="#8dbb9e" />
  </svg>
);

interface Props {
  onAccept: () => void;
  onClose?: () => void;
}

export default function Disclaimer({ onAccept, onClose }: Props) {
  useEffect(() => {
    const close = onClose ?? onAccept;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onAccept, onClose]);

  return (
    <div className="dc-overlay" onClick={onClose}>
      <div
        className="dc-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dc-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="dc-close" onClick={onClose ?? onAccept} aria-label="Close">
          ×
        </button>

        <header className="dc-header">
          <span className="dc-badge dc-badge-lg">
            <Icon name="shield" size={40} />
          </span>
          <div>
            <h1 id="dc-title">Professional Disclaimer</h1>
            <p>Online nutrition information does not replace medical care.</p>
          </div>
        </header>

        <ul className="dc-list">
          {items.map((it) => (
            <li key={it.icon}>
              <span className="dc-badge">
                <Icon name={it.icon} />
              </span>
              <p>{it.text}</p>
            </li>
          ))}
        </ul>

        <section className="dc-short">
          <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
            <path d="M24 44V24" stroke="#6fa383" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M24 28C12 28 8 20 8 8c12 0 18 8 16 20z" fill="#a9cdb4" />
            <path d="M24 32c0-10 6-16 16-16 0 10-6 16-16 16z" fill="#7fb293" />
          </svg>
          <div>
            <h2>Short Version</h2>
            <p>
              The nutrition information on this site is for general education only and does not
              replace advice, diagnosis or treatment from a qualified doctor or dietitian. Always
              consult a health professional before making changes to your diet, especially if you
              have a medical condition, take medication, are pregnant, or have an allergy.
            </p>
          </div>
        </section>

        <footer className="dc-footer">
          <button className="dc-btn" onClick={onAccept}>
            I Understand <span aria-hidden="true">→</span>
          </button>
        </footer>

        <span className="dc-leaves dc-leaves-left">
          <Leaves />
        </span>
        <span className="dc-leaves dc-leaves-right">
          <Leaves />
        </span>
      </div>
    </div>
  );
}