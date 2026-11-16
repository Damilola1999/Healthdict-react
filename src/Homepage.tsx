import type { ReactNode } from "react";
import {
  Apple,
  ArrowRight,
  ArrowUp,
  CalendarDays,
  Heart,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Salad,
  Scale,
  Send,
  ShieldCheck,
  Stethoscope,
  User,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./HomePage.css";

/* Set these to your own image paths (e.g. "/images/sarah.jpg") when ready.
   An empty string falls back to a green placeholder. */
const IMG = {
  hero: "https://i.pinimg.com/736x/ed/3b/3e/ed3b3ef62f956e5ab0790ab53e71351b.jpg",
  hannah: "https://i.pinimg.com/1200x/b8/fb/a6/b8fba69987e875b0b2027bdaa0335a4a.jpg",
  sarah: "",
  david: "",
  esther: "",
};

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return src ? (
    <img src={src} alt={alt} className={className} />
  ) : (
    <div className={`ph ${className}`} role="img" aria-label={alt} />
  );
}

/* ---------- Data ---------- */

const SERVICES: { icon: ReactNode; title: string; text: string }[] = [
  { icon: <Scale />, title: "Weight Management", text: "Reach and maintain a healthy weight with sustainable nutrition strategies." },
  { icon: <Stethoscope />, title: "Medical Nutrition Therapy", text: "Support for chronic conditions such as diabetes, hypertension, PCOS and more." },
  { icon: <Salad />, title: "Healthy Meal Planning", text: "Simple, flexible meal plans that fit your lifestyle and taste preferences." },
  { icon: <Apple />, title: "Nutrition Education", text: "Build lifelong healthy habits with practical tools and resources." },
];

const PILLARS: { icon: ReactNode; label: string }[] = [
  { icon: <ShieldCheck />, label: "Evidence-based approach" },
  { icon: <User />, label: "Individualized care" },
  { icon: <Leaf />, label: "Sustainable lifestyle changes" },
  { icon: <Heart />, label: "Ongoing support" },
];

const NAV_FOOTER = ["Home", "About", "Services", "Testimonials", "Contact"];

const YEAR = new Date().getFullYear();

const SOCIALS = [
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.68.8.9 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2a3.8 3.8 0 0 1-.9 1.4c-.4.4-.8.68-1.4.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.6.5-1 .9-1.4.4-.4.8-.68 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.07-1.1.05-1.7.24-2.1.4-.5.2-.9.44-1.3.83-.4.4-.63.78-.83 1.3-.16.4-.35 1-.4 2.1C2.6 10 2.6 10.4 2.6 12s0 2 .07 3.2c.05 1.1.24 1.7.4 2.1.2.5.44.9.83 1.3.4.4.78.63 1.3.83.4.16 1 .35 2.1.4 1.2.06 1.6.07 4.7.07s3.5 0 4.7-.07c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.44 1.3-.83.4-.4.63-.78.83-1.3.16-.4.35-1 .4-2.1.06-1.2.07-1.6.07-3.2s0-2-.07-3.2c-.05-1.1-.24-1.7-.4-2.1a3.5 3.5 0 0 0-.83-1.3 3.5 3.5 0 0 0-1.3-.83c-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.4-8.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z",
  },
  {
    label: "YouTube",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12c0 1.6.13 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.27-1.6.4-3.2.4-4.8 0-1.6-.13-3.2-.4-4.8ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z",
  },
  {
    label: "Facebook",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.45 2.9h-2.35v7A10 10 0 0 0 22 12Z",
  },
  {
    label: "TikTok",
    path: "M16.5 2h-3v13.1a2.6 2.6 0 1 1-2.2-2.6v-3a5.6 5.6 0 1 0 5.2 5.6V9.2a7 7 0 0 0 4 1.3V7.5a4.1 4.1 0 0 1-4-4.1V2Z",
  },
];

const HERO_PERKS: { icon: ReactNode; label: string }[] = [
  { icon: <Leaf />, label: "Personalized plans" },
  { icon: <Heart />, label: "Ongoing support" },
  { icon: <Users />, label: "Client focused" },
];

const TESTIMONIALS = [
  { img: IMG.sarah, name: "Sarah A.", text: "Working with Hannah has been life-changing. I've lost weight, have more energy and finally feel confident in my food choices!" },
  { img: IMG.david, name: "David O.", text: "The meal plans are easy to follow, delicious and actually fit my busy schedule. I highly recommend her!" },
  { img: IMG.esther, name: "Esther M.", text: "Professional, knowledgeable and truly cares about her clients. I'm so grateful for the support!" },
];

/* ---------- Pieces ---------- */

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Personalized Nutrition &nbsp;•&nbsp; Lasting Results</p>
          <h1>
            Healthy Food
            <span>Better Living</span>
          </h1>
          <p className="hero__lead">
            I help you build healthy eating habits, achieve your wellness goals and feel your best
            with personalized nutrition plans, expert guidance and ongoing support.
          </p>

          <Link to="/book-appointment" className="btn btn--solid btn--lg">
            <CalendarDays size={20} /> Book an Appointment <ArrowRight size={16} />
          </Link>

          <ul className="hero__perks">
            {HERO_PERKS.map((p) => (
              <li key={p.label}>
                {p.icon}
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__art">
          <Photo src={IMG.hero} alt="Healthy grain bowl with chicken and avocado" className="hero__photo" />
          <p className="script hero__script">
            Good <br /> Nutrition <br /> Changes <br /> Everything <Heart size={18} />
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow eyebrow--sm">What I Offer</p>
            <h2>Services</h2>
          </div>
          <Link to="/book-appointment" className="btn btn--outline btn--sm">
            Book a Session <ArrowRight size={13} />
          </Link>
        </div>
        <div className="grid grid--4">
          {SERVICES.map((s) => (
            <article key={s.title} className="card service">
              <div className="service__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section id="about" className="why">
      <div className="why__photo">
        <Photo src={IMG.hannah} alt="Hannah, registered dietitian, holding a clipboard" />
        <p className="script why__script">
          Your <br /> Health <br /> Matters <Heart size={16} />
        </p>
      </div>

      <div className="why__body">
        <p className="eyebrow eyebrow--sm">Why Choose Nourish by Hannah</p>
        <h2>
          Expert Care. <span className="green">Real Results.</span>
        </h2>
        <p className="muted">
          With a passion for health and wellness, I provide personalized nutrition support to help you
          feel better, boost your energy and achieve your goals — one healthy choice at a time.
        </p>
        <ul className="pillars">
          {PILLARS.map((p) => (
            <li key={p.label}>
              {p.icon}
              <span>{p.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <aside className="quote-card">
        <Quote size={22} />
        <p>Food is not just fuel, it's medicine.</p>
        <small>- H. Hippocrates</small>
        <Leaf className="quote-card__leaf" size={44} />
      </aside>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow eyebrow--sm">Client Testimonials</p>
            <h2>What Our Clients Say</h2>
          </div>
        </div>
        <div className="grid grid--3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="card testimonial">
              <Photo src={t.img} alt={t.name} className="avatar" />
              <div>
                <div className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <blockquote>“{t.text}”</blockquote>
                <figcaption>— {t.name}</figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__grid">
        <div>
          <Logo light />
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            {NAV_FOOTER.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            {["Meal Guides", "Food Lists", "Nutrition Checklists", "Downloadables"].map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul className="contact">
            <li>
              <Phone size={16} /> +234 807 123 4567
            </li>
            <li>
              <MessageCircle size={16} /> WhatsApp: +234 807 123 4567
            </li>
            <li>
              <Mail size={16} /> hello@nourishbyhannah.com
            </li>
            <li>
              <MapPin size={16} /> Lagos, Nigeria
            </li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href="#" aria-label={s.label}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
          <p className="footer__news">Get healthy tips straight to your inbox</p>
          <form className="subscribe" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" aria-label="Email address" required />
            <button aria-label="Subscribe">
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
      <button
        className="to-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}

function LegalBar() {
  return (
    <div className="legal">
      <div className="container legal__inner">
        <span>
          <a href="#">Privacy Policy</a> | <a href="#">Terms &amp; Conditions</a> |{" "}
          <a href="#">Professional Disclaimer</a>
        </span>
        <span>© {YEAR} Nourish by Hannah. All rights reserved.</span>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />
      <Testimonials />
      <Footer />
      <LegalBar />
    </>
  );
}
