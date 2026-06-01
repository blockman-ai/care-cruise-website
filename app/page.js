"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    notes: "",
  });

  const [status, setStatus] = useState("");

  function updateForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submitRide(e) {
    e.preventDefault();
    setStatus("Sending ride request...");

    const res = await fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Ride request submitted! Care Cruise will contact you soon.");
      setForm({
        name: "",
        phone: "",
        email: "",
        pickup: "",
        destination: "",
        date: "",
        time: "",
        notes: "",
      });
    } else {
      setStatus("Something went wrong. Please call Care Cruise directly.");
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <h1 className="text-xl font-black text-[#0A2342]">Care Cruise LLC</h1>
            <p className="text-xs font-bold text-pink-500">Compassion In Motion</p>
          </div>

          <a href="#book" className="rounded-full bg-pink-500 px-5 py-3 text-sm font-bold text-white">
            Book Ride
          </a>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-[#0A2342] via-[#13315C] to-slate-950 px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 inline-block rounded-full bg-pink-500/20 px-4 py-2 text-sm font-bold text-pink-200">
              Serving Cape May, Cumberland & Atlantic Counties
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Safe, compassionate rides for every medical appointment.
            </h2>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Care Cruise LLC provides professional non-emergency medical transportation
              for doctor visits, dialysis, therapy, hospital discharge, senior rides,
              and companion transportation.
            </p>

            <p className="mt-5 rounded-2xl bg-white/10 p-4 text-sm font-semibold text-white">
              Now serving private-pay rides with a clean, comfortable SUV.
              Wheelchair-accessible transport coming soon.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#book" className="rounded-full bg-pink-500 px-8 py-4 text-center font-bold text-white">
                Request a Ride
              </a>
              <a href="tel:16093811082" className="rounded-full bg-white px-8 py-4 text-center font-bold text-[#0A2342]">
                Call (609) 381-1082
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 text-[#0A2342] shadow-2xl">
            <div className="rounded-[1.5rem] bg-slate-50 p-6">
              <div className="mb-5 text-6xl">🚙</div>
              <h3 className="text-3xl font-black">Comfortable SUV Service</h3>
              <p className="mt-4 text-slate-600">
                A premium transportation experience built for seniors, patients,
                and families who need reliable care-focused rides.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-xl bg-white p-4 font-bold shadow-sm">✓ Doctor Appointments</div>
                <div className="rounded-xl bg-white p-4 font-bold shadow-sm">✓ Dialysis Treatments</div>
                <div className="rounded-xl bg-white p-4 font-bold shadow-sm">✓ Physical Therapy</div>
                <div className="rounded-xl bg-white p-4 font-bold shadow-sm">✓ Hospital Discharge</div>
              </div>

              <div className="mt-6 rounded-2xl bg-pink-50 p-4 text-sm font-bold text-pink-700">
                Wheelchair-accessible van service coming soon as we expand.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20">
        <p className="font-bold text-pink-500">Our Services</p>
        <h2 className="mt-3 text-4xl font-black text-[#0A2342]">
          Reliable transportation with care at every mile.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            "Medical Appointments",
            "Dialysis Transportation",
            "Physical Therapy",
            "Senior Transportation",
            "Hospital Discharge",
            "Companion Transportation",
          ].map((service) => (
            <div key={service} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl">💗</div>
              <h3 className="text-xl font-black text-[#0A2342]">{service}</h3>
              <p className="mt-3 text-slate-600">
                On-time, respectful transportation for riders who need dependable support.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-bold text-pink-500">Service Area</p>
            <h2 className="mt-3 text-4xl font-black text-[#0A2342]">
              Proudly serving South Jersey.
            </h2>
          </div>

          <div className="grid gap-4">
            {[
              "Cape May County",
              "Cumberland County",
              "Atlantic County",
              "Additional areas available upon request",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-5 font-bold text-slate-700 shadow-sm">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20">
        <p className="font-bold text-pink-500">About Us</p>
        <h2 className="mt-3 text-4xl font-black text-[#0A2342]">
          Owned and led by Leticia Grant.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Care Cruise LLC was founded to make medical transportation feel safe,
          dependable, and personal. Our mission is to help every rider arrive with
          dignity, comfort, and peace of mind.
        </p>
      </section>

      <section className="bg-[#0A2342] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-pink-300">Testimonials</p>
          <h2 className="mt-3 text-4xl font-black">Trusted care starts here.</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Professional, kind, and dependable service.",
              "Perfect for seniors who need safe transportation.",
              "Care Cruise makes medical rides feel less stressful.",
            ].map((quote) => (
              <div key={quote} className="rounded-3xl bg-white/10 p-6">
                <p className="text-lg">“{quote}”</p>
                <p className="mt-5 font-bold text-pink-300">Care Cruise Client</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="bg-gradient-to-br from-pink-500 to-[#0A2342] px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="text-white">
            <h2 className="text-4xl font-black">Request a Ride</h2>
            <p className="mt-4 text-lg text-pink-100">
              Submit your trip details and Care Cruise will follow up to confirm availability.
            </p>
            <p className="mt-6 text-lg font-bold">
              Call: (609) 381-1082
            </p>
            <p className="font-bold">
              Email: carecruisebusiness@gmail.com
            </p>
          </div>

          <form onSubmit={submitRide} className="grid gap-4 rounded-3xl bg-white p-6 shadow-2xl">
            <input name="name" value={form.name} onChange={updateForm} required className="rounded-xl border p-3" placeholder="Full Name" />
            <input name="phone" value={form.phone} onChange={updateForm} required className="rounded-xl border p-3" placeholder="Phone Number" />
            <input name="email" value={form.email} onChange={updateForm} className="rounded-xl border p-3" placeholder="Email Address" />
            <input name="pickup" value={form.pickup} onChange={updateForm} required className="rounded-xl border p-3" placeholder="Pickup Address" />
            <input name="destination" value={form.destination} onChange={updateForm} required className="rounded-xl border p-3" placeholder="Destination Address" />
            <input name="date" value={form.date} onChange={updateForm} required className="rounded-xl border p-3" type="date" />
            <input name="time" value={form.time} onChange={updateForm} required className="rounded-xl border p-3" type="time" />
            <textarea name="notes" value={form.notes} onChange={updateForm} className="rounded-xl border p-3" placeholder="Special Notes" rows="4" />

            <button className="rounded-full bg-[#0A2342] px-6 py-4 font-bold text-white">
              Submit Ride Request
            </button>

            {status && (
              <p className="rounded-xl bg-slate-100 p-4 text-center font-bold text-[#0A2342]">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-black">Care Cruise LLC</h3>
            <p className="mt-2 text-pink-300">Compassion In Motion</p>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <p className="mt-2 text-slate-300">(609) 381-1082</p>
            <p className="text-slate-300">carecruisebusiness@gmail.com</p>
          </div>
          <div>
            <p className="font-bold">Service Area</p>
            <p className="mt-2 text-slate-300">Cape May • Cumberland • Atlantic</p>
            <p className="text-slate-300">By Appointment</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
