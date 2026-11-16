import { useState, type ChangeEvent, type FormEvent, type ReactNode, type SVGProps } from 'react'
import './contact.css'

const HERO_IMAGE = 'https://i.pinimg.com/1200x/84/b1/3b/84b13bc41234eb3eca0f0e85b54f089d.jpg'

const BUSINESS = {
    name: 'Healthdict by Hannah',
  phone: '+234 807 123 4567',
  phoneHref: 'tel:+2348071234567',
  whatsappHref: 'https://wa.me/2348071234567',
  email: 'hello@nourishbyhannah.com',
  addressLine1: '12 Wellness Street, Lekki Phase 1,',
  addressLine2: 'Lagos, Nigeria',
  lat: 6.4474,
  lng: 3.4723,
} as const


const SERVICES = [
  'Nutrition consultation',
  'Weight management',
  'Meal planning',
  'Diabetes & heart health',
  'Pregnancy & family nutrition',
  'Corporate wellness',
] as const

const DIRECTIONAL_URL = `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.lat},${BUSINESS.lng}`

const MAP_EMBED_URL = (() => {
    const d = 0.012
    const bbox = [BUSINESS.lng - d, BUSINESS.lat - d, BUSINESS.lng + d, BUSINESS.lat + d].join('%2C')
    return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${BUSINESS.lat}%2C${BUSINESS.lng}`
}) ()

type IconProps = SVGProps<SVGSVGElement>

function Base({ children, ...props }: IconProps & {children: ReactNode}) {
    return (
          <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
    )
}


const PhoneIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </Base>
)
 
const WhatsAppIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
    <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.4-1.9-1-.9.7a3.4 3.4 0 0 1-1.7-1.7l.7-.9-1-1.9z" />
  </Base>
)
 
const MailIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Base>
)
 
const PinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Base>
)


const SendIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </Base>
)
 
const LeafIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </Base>
)


function Hero() {
    const [imageFailed, setImageFailed] = useState(false)

    return(
        <header className="hero">
             <LeafIcon className="leaf leaf--hero-a" />
      <LeafIcon className="leaf leaf--hero-b" />

      
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">
            <span>Get in touch</span>
            <i className="eyebrow__line" aria-hidden="true" />
          </p>
          <h1 className="hero__title">
            Contact
            <span>Nourish by Hannah</span>
          </h1>
          <p className="hero__lead">
            We'd love to hear from you! Whether you have a question, need guidance, or want to book
            a consultation, our team is here to help you on your nutrition journey.
          </p>
          <p className="script">
            Your health journey
            <br />
            matters to us
          </p>
        </div>
 
        <div className="hero__media">
          {!imageFailed && (
            <img
              src={HERO_IMAGE}
              alt="Hannah, a dietitian in a white coat, holding a clipboard beside fresh vegetables"
              onError={() => setImageFailed(true)}
            />
          )}
          <p className="script script--badge" aria-hidden="true">
            Healthy
            <br />
            Food,
            <br />
            Happy
            <br />
            Life
          </p>
        </div>
      </div>
        </header>
    )
}

 
/* ---------- Contact info ---------- */
const infoItems: { label: string; icon: ReactNode; lines: ReactNode[] }[] = [
  {
    label: 'Phone',
    icon: <PhoneIcon />,
    lines: [
      <a key="p" href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>,
      <span key="h" className="muted">Mon – Fri, 8:00 AM – 6:00 PM</span>,
    ],
  },
  {
    label: 'WhatsApp',
    icon: <WhatsAppIcon />,
    lines: [
      <a key="w" href={BUSINESS.whatsappHref} target="_blank" rel="noreferrer">{BUSINESS.phone}</a>,
      <span key="c" className="muted">Chat with us directly</span>,
    ],
  },
  {
    label: 'Email',
    icon: <MailIcon />,
    lines: [
      <a key="e" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>,
      <span key="r" className="muted">We'll respond within 24 hours</span>,
    ],
  },
  {
    label: 'Our Location',
    icon: <PinIcon />,
    lines: [
      <span key="a">{BUSINESS.addressLine1}</span>,
      <span key="b">{BUSINESS.addressLine2}</span>,
      <span key="v" className="muted">Visit us for in-person consultations</span>,
    ],
  },
]
 
function ContactInfo() {
  return (
    <div className="info">
      <p className="eyebrow eyebrow--small">
        <span>Contact information</span>
        <i className="eyebrow__line" aria-hidden="true" />
      </p>
      <h2 className="section-title" id="contact-info-title">
        Get in Touch
        <i className="section-title__line" aria-hidden="true" />
      </h2>
      <p className="info__intro">
        You can reach us through any of the channels below. We're always happy to help!
      </p>
 
      <ul className="info__list">
        {infoItems.map((item) => (
          <li key={item.label} className="info__item">
            <span className="info__icon">{item.icon}</span>
            <div>
              <h3>{item.label}</h3>
              {item.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ---------- Contact form ---------- */
type Fields = {
  fullName: string
  email: string
  phone: string
  service: string
  message: string
}
 
type Errors = Partial<Record<keyof Fields, string>>
type Status = 'idle' | 'sending' | 'sent' | 'error'
 
const EMPTY: Fields = { fullName: '', email: '', phone: '', service: '', message: '' }
 
function validate(v: Fields): Errors {
  const e: Errors = {}
  if (!v.fullName.trim()) e.fullName = 'Enter your full name.'
  if (!v.email.trim()) e.email = 'Enter your email address.'
  else if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email, like name@example.com.'
  if (!v.phone.trim()) e.phone = 'Enter your phone number.'
  else if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter at least 10 digits.'
  if (!v.service) e.service = 'Select a service.'
  if (!v.message.trim()) e.message = 'Tell us how we can help.'
  return e
}

function ContactForm() {
    const [values, setValues] = useState<Fields>(EMPTY)
    const [errors, setErrors] = useState<Errors>({})
    const [status,setStatus] = useState<Status>('idle')

    const onChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target
        setValues((prev) => ({...prev, [name]: value }))
        if (errors[name as keyof Fields]) setErrors((prev) => ({...prev,[name]: undefined}))
            if (status === 'sent' || status === 'error') setStatus('idle')
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const found = validate(values)
        setErrors(found)
        if(Object.keys(found).length > 0) return
        setStatus('sending')
        try {
            await new Promise((resolve) => setTimeout(resolve, 900))
            setValues(EMPTY)
            setStatus('sent')
        } catch {
            setStatus('error')
        }
    }

    const field = (name: keyof Fields) => ({
    id: name,
    name,
    value: values[name],
    onChange,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })
 
  const error = (name: keyof Fields) =>
    errors[name] ? (
      <span className="field__error" id={`${name}-error`}>
        {errors[name]}
      </span>
    ) : null
 
  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <p className="eyebrow eyebrow--small">
        <span>Send us a message</span>
      </p>
      <h2 className="form__title">Contact Form</h2>
      <p className="form__intro">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>
 
      <div className="form__grid">
        <div className="field">
          <label htmlFor="fullName">Full Name *</label>
          <input {...field('fullName')} type="text" autoComplete="name" />
          {error('fullName')}
        </div>
 
        <div className="field">
          <label htmlFor="email">Email Address *</label>
          <input {...field('email')} type="email" autoComplete="email" />
          {error('email')}
        </div>
 
        <div className="field">
          <label htmlFor="phone">Phone Number *</label>
          <input {...field('phone')} type="tel" autoComplete="tel" />
          {error('phone')}
        </div>
 
        <div className="field">
          <label htmlFor="service">Service of Interest *</label>
          <select {...field('service')}>
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {error('service')}
        </div>
 
        <div className="field field--full">
          <label htmlFor="message">Your Message *</label>
          <textarea {...field('message')} rows={5} placeholder="How can we help you?" />
          {error('message')}
        </div>
      </div>
 
      <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
        <SendIcon />
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
 
<p className="form__status" role="status" aria-live="polite">
        {status === 'sent' && 'Message sent. We’ll reply within 24 hours.'}
        {status === 'error' && 'Message not sent. Check your connection and try again.'}
      </p>
    </form>
)
}

/* ---------- Location ---------- */
function LocationSection() {
  return (
    <section className="location" aria-labelledby="visit-title">
      <LeafIcon className="leaf leaf--loc-a" />
      <LeafIcon className="leaf leaf--loc-b" />
 
      <div className="location__inner">
        <div className="map">
          <iframe
            title={`Map showing ${BUSINESS.name} in Lekki Phase 1, Lagos`}
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
 
        <div className="location__copy">
          <p className="eyebrow eyebrow--small">
            <LeafIcon className="eyebrow__icon" />
            <span>Visit us</span>
          </p>
          <h2 id="visit-title" className="location__title">
            We're Located in
            <br />
            Lekki, Lagos
          </h2>
          <p>
            Come and see us for a personalized consultation. We're here to support your health and
            wellness goals.
          </p>
          <a className="btn btn--outline" href={DIRECTIONAL_URL} target="_blank" rel="noreferrer">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <div className="page">
      <Hero />

      <section className="contact" aria-labelledby="contact-info-title">
        <div className="contact__inner">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <LocationSection />
    </div>
  )
}

