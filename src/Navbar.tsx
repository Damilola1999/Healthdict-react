import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import Logo from "./Logo";

const NAV = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Testimonials", to: "/#testimonials" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    document.querySelector(hash)?.scrollIntoView();
  }, [pathname, hash]);

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />
        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={pathname === item.to ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {open && (
            <>
              <button className="icon-btn" aria-label="Search" onClick={() => setOpen(false)}>
                <Search size={20} />
              </button>
              <Link to="/book-appointment" className="btn btn--solid" onClick={() => setOpen(false)}>
                Book an Appointment
              </Link>
            </>
          )}
        </nav>
        <button className="icon-btn" aria-label="Search">
          <Search size={20} />
        </button>
        <Link to="/book-appointment" className="btn btn--solid header__cta">
          Book an Appointment
        </Link>
        <button
          className="icon-btn header__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
