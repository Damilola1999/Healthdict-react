import { useState } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import {
  ArrowRight, CalendarCheck, CalendarDays, HeartHandshake, Leaf, Mail,
  MessageSquare, Phone, Salad, ShieldCheck, UserRound,
} from "lucide-react";
import Calendar from "./Calendar";
import { appointmentsApi, type AppointmentPayload } from "./services/api";
import "./BookAppointment.css";

const HERO_IMAGE = "https://i.pinimg.com/1200x/3c/d1/0b/3cd10b261edab32b4b21f18be6ac2bac.jpg";
 
const CONSULTATION_TYPES = [
  "Weight Management",
  "Medical Nutrition Therapy",
  "Healthy Meal Planning",
  "Nutrition Education",
];
 
const TIMES = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

const STEPS: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <UserRound />,
    title: "Personalized Consultation",
    text: "We'll discuss your health goals, lifestyle, medical history and preferences to create the right plan for you.",
  },
  {
    icon: <Salad />,
    title: "Practical Nutrition Plan",
    text: "Get a realistic, easy-to-follow plan with meal ideas, portion guidance and lifestyle tips.",
  },
  {
    icon: <HeartHandshake />,
    title: "Ongoing Support",
    text: "Stay on track with regular check-ins, progress monitoring and continuous encouragement.",
  },
];
 
interface FormState {
  name: string;
  email: string;
  phone: string;
  type: string;
  notes: string;
}
 
const EMPTY: FormState = { name: "", email: "", phone: "", type: "", notes: "" };


export default function BookAppointment() {
    const [form, setForm] = useState<FormState>(EMPTY);
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<string | null>(null);
    const [error, setError] = useState("");
    const [done, setDone] = useState(false);

    const update = (key: keyof FormState) => (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => setForm((f) => ({ ...f, [key]: e.target.value }));

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.type) {
            setError("Please fill in all the required fields.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (!date || !time) {
            setError("Please choose a date and time.");
            return;
        }

        setError("");
        try {
            const payload: AppointmentPayload = {
                name: form.name,
                email: form.email,
                phone: form.phone,
                type: form.type,
                notes: form.notes,
                date: date.toISOString().split("T")[0], // YYYY-MM-DD
                time,
            };
            await appointmentsApi.create(payload);
            setForm(EMPTY);
            setDate(null);
            setTime(null);
            setDone(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to book appointment. Please try again.");
        }
    }

    const dateLabel = date ? date.toLocaleDateString("en-US", {weekday: "short", day: "numeric",
        month: "long", year: "numeric"
    }) : "";

    return (
           <div className="booking">
      <Leaf className="deco deco--tl" size={110} />
      <Leaf className="deco deco--tr" size={100} />
 
      {/* Heading */}
      <header className="booking__head">
        <p className="kicker"><span /> Book an Appointment <span /></p>
        <h1>Book an Appointment</h1>
        <p>Let's create a nutrition plan that works for you.</p>
      </header>
 
      <div className="booking__grid">
        {/* Left visual card */}
        <aside className="visual">
          {HERO_IMAGE ? (
            <img src={HERO_IMAGE} alt="Healthy grain bowl" className="visual__img" />
          ) : (
            <div className="visual__img ph" role="img" aria-label="Healthy grain bowl" />
          )}
          <p className="script visual__script">
            Good<br />Nutrition<br />Builds a<br />Healthier<br />You
          </p>
          <div className="visual__card">
            <span className="visual__icon"><Leaf size={22} /></span>
            <h2>Your health matters</h2>
            <p>
              Proper nutrition is the foundation for a healthier, happier you. Book your
              consultation today and take the first step towards achieving your wellness goals.
            </p>
          </div>
        </aside>
 
        {/* Right form card */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__title">
            <CalendarDays size={28} />
            <div>
              <h2>Schedule Your Consultation</h2>
              <p>Fill in the form below and choose a convenient date and time.</p>
            </div>
          </div>
 
          <div className="row">
            <label className="field">
              <span>Full Name *</span>
              <div className="control">
                <UserRound size={15} />
                <input
                  required
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={update("name")}
                />
              </div>
            </label>
            <label className="field">
              <span>Email Address *</span>
              <div className="control">
                <Mail size={15} />
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update("email")}
                />
              </div>
            </label>
          </div>
 
          <div className="row">
            <label className="field">
              <span>Phone Number *</span>
              <div className="control">
                <Phone size={15} />
                <input
                  required
                  type="tel"
                  placeholder="+234 801 234 5678"
                  value={form.phone}
                  onChange={update("phone")}
                />
              </div>
            </label>
            <label className="field">
              <span>Consultation Type *</span>
              <div className="control">
                <select required value={form.type} onChange={update("type")}>
                  <option value="" disabled>Select consultation type</option>
                  {CONSULTATION_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
            </label>
          </div>
 
          <div className="row row--top">
            <div className="field">
              <span>Select Date *</span>
              <div className="control">
                <CalendarDays size={15} />
                <input readOnly placeholder="Choose a date below" value={dateLabel} aria-label="Selected date" />
              </div>
              <Calendar value={date} onChange={setDate} />
            </div>
 
            <div className="field">
              <span>Select Time *</span>
              <div className="times" role="group" aria-label="Available times">
                {TIMES.map((t) => (
                  <button
                    type="button"
                    key={t}
                    className={`time ${time === t ? "is-selected" : ""}`}
                    aria-pressed={time === t}
                    onClick={() => setTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
 
          <label className="field">
            <span>What would you like help with? (Optional)</span>
            <div className="control control--area">
              <MessageSquare size={15} />
              <textarea
                rows={3}
                placeholder="Tell us a little about your goals, challenges or any specific concerns..."
                value={form.notes}
                onChange={update("notes")}
              />
            </div>
          </label>
 
          {error && <p className="msg msg--error" role="alert">{error}</p>}
          {done && (
            <p className="msg msg--ok" role="status">
              Thank you! Your appointment request for {dateLabel} at {time} has been received.
            </p>
          )}
 
          <button type="submit" className="confirm">
            <CalendarCheck size={18} /> Confirm Appointment <ArrowRight size={18} />
          </button>
          <p className="form__note">
            <ShieldCheck size={13} /> You'll receive a confirmation by email or WhatsApp.
          </p>
        </form>
      </div>
 
      {/* What to expect */}
      <section className="expect">
        <p className="kicker"><span /> What to Expect <span /></p>
        <h2>Your Journey to Better Nutrition</h2>
        <p className="expect__sub">A simple, supportive process designed around your unique needs.</p>
        <div className="expect__grid">
          {STEPS.map((s) => (
            <article key={s.title} className="step">
              <span className="step__icon">{s.icon}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <Leaf className="step__leaf" size={40} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}