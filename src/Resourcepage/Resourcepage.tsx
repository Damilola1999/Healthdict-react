import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pricing from "./Pricing";
import PrivacyPolicy from "./PrivacyPolicy";
import Disclaimer from "./Disclaimer";
import Terms from "./Terms";
import "./Resourcepage.css";


const HERO_IMAGE =
  "https://i.pinimg.com/736x/54/e7/a1/54e7a1cb57d2ffa2315cd970d60b0323.jpg";

const NUTRITION_IMAGE =
  "https://i.pinimg.com/736x/bd/2e/05/bd2e055303d10a2f8d9aa408918bca8e.jpg";


type IconName =
  | "shield"
  | "file"
  | "help"
  | "tag"
  | "list"
  | "plus-shield"
  | "calendar"
  | "arrow";


  const Icon = ({ name} : { name: IconName }) => {
    const props = {
        width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    };



  switch (name) {
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "file":
      return (
        <svg {...props}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
          <path d="M14 3v5h5" />
          <path d="M12 11v5m0 0l-2-2m2 2l2-2" />
        </svg>
      );
    case "help":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7" />
          <circle cx="12" cy="17" r=".6" fill="currentColor" />
        </svg>
      );
    case "tag":
      return (
        <svg {...props}>
          <path d="M3 12V4h8l10 10-8 8L3 12z" />
          <circle cx="7.5" cy="8.5" r="1.2" />
        </svg>
      );
    case "list":
      return (
        <svg {...props}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h4" />
        </svg>
      );
    case "plus-shield":
      return (
        <svg {...props}>
          <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...props} width={16} height={16}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
  }
};
  

const Leaf = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M10 54C10 28 28 10 54 8c0 26-16 44-42 46z"
      fill="currentColor"
      opacity=".35"
    />
    <path
      d="M12 52C26 38 38 26 52 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);


type ModalName = "pricing" | "privacy" | "disclaimer" | "terms";

interface ResourceCard {
    title: string;
    description: string;
    linkText: string;
    to: string;
    icon: IconName;
    modal?: ModalName;
}


const cards: ResourceCard[] = [
  {
    title: "Privacy Policy",
    description:
      "Especially important if you collect names, phone numbers, health information or payment details.",
    linkText: "View Privacy Policy",
    to: "/privacy-policy",
    modal: "privacy",
    icon: "shield",
  },
  {
    title: "Resources",
    description: "Downloadable meal guides, food lists, nutrition checklists, etc.",
    linkText: "View Resources",
    to: "/downloads",
    icon: "file",
  },
  {
    title: "FAQ",
    description:
      "Answer common questions about consultations, pricing, appointments, etc.",
    linkText: "View FAQ",
    to: "/faq",
    icon: "help",
  },
  {
    title: "Pricing/Packages",
    description: "Consultation fees and what each package includes.",
    linkText: "View Pricing & Packages",
    to: "/pricing",
    modal: "pricing",
    icon: "tag",
  },
  {
    title: "Terms & Conditions",
    description: "Rules governing use of the website/services.",
    linkText: "View Terms & Conditions",
    to: "/terms",
    modal: "terms",
    icon: "list",
  },
  {
    title: "Professional Disclaimer",
    description:
      "Explain that online nutrition information does not replace appropriate medical care.",
    linkText: "View Disclaimer",
    to: "/disclaimer",
    modal: "disclaimer",
    icon: "plus-shield",
  },
];


export default function ResourcesPage() {
  const [modal, setModal] = useState<ModalName | null>(null);
  const closeModal = () => setModal(null);

  useEffect(() => {
    if (!modal) return;

    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modal]);

  return (
    <div className="resources">
      {/* Hero */}
      <section className="res-hero">
        <div className="res-hero__content">
          <span className="res-eyebrow">Resources</span>
          <h1 className="res-hero__title">
            Helpful Resources
            <span>for a Healthier You</span>
          </h1>
          <p className="res-hero__text">
            Explore our collection of meal guides, food lists, nutrition
            checklists and more. These resources are designed to support your
            journey to better health and lasting wellness.
          </p>
          <p className="res-script res-hero__script">
            Good Nutrition
            <br />
            Builds a Better You <span aria-hidden="true">♡</span>
          </p>
        </div>
        <img
          className="res-hero__img"
          src={HERO_IMAGE}
          alt="Healthy grain bowl with chicken, avocado and tomatoes"
        />
      </section>

      {/* Cards */}
      <section className="res-grid" aria-label="Resource links">
        {cards.map((card) => (
          <article className="res-card" key={card.title}>
            <div className="res-card__icon">
              <Icon name={card.icon} />
            </div>
            <h2 className="res-card__title">{card.title}</h2>
            <p className="res-card__text">{card.description}</p>
            {card.modal ? (
              <button
                type="button"
                className="res-card__link res-card__link--btn"
                onClick={() => setModal(card.modal!)}
              >
                {card.linkText}
                <Icon name="arrow" />
              </button>
            ) : (
              <Link className="res-card__link" to={card.to}>
                {card.linkText}
                <Icon name="arrow" />
              </Link>
            )}
            <Leaf className="res-card__leaf" />
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="res-cta">
        <img
          className="res-cta__img"
          src={NUTRITION_IMAGE}
          alt="Smiling nutritionist holding a clipboard"
        />
        <div className="res-cta__content">
          <span className="res-eyebrow res-eyebrow--dark">Your health matters</span>
          <h2 className="res-cta__title">Start Your Wellness Journey Today</h2>
          <p className="res-cta__text">
            Get personalized nutrition support, expert guidance and practical
            resources to help you live a healthier, happier life.
          </p>
          <Link className="res-btn" to="/book-appointment">
            <Icon name="calendar" />
            Book an Appointment
            <Icon name="arrow" />
          </Link>
        </div>
        <p className="res-script res-cta__script">
          Small
          <br />
          Steps Make
          <br />
          Big Changes
          <br />
          <span aria-hidden="true">♡</span>
        </p>
        <Leaf className="res-cta__leaf" />
      </section>

      {/* Modals */}
      {modal === "privacy" && (
        <PrivacyPolicy onClose={closeModal} onAccept={closeModal} />
      )}

      {modal === "disclaimer" && (
        <Disclaimer onAccept={closeModal} onClose={closeModal} />
      )}

      {modal === "terms" && <Terms onAgree={closeModal} onClose={closeModal} />}

      {modal === "pricing" && (
        <div
          className="res-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Nutrition Services and Pricing"
          onClick={closeModal}
        >
          <div className="res-modal__inner" onClick={(e) => e.stopPropagation()}>
            <Pricing onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}

  