"use client";

import { useState } from "react";
import Image from "next/image";

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
          <div className="flex items-center gap-3">
            <Image
              src="/images/care-cruise-logo.jpg"
              alt="Care Cruise LLC logo"
              width={72}
              height={72}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-black text-[#0A2342]">Care Cruise LLC</h1>
              <p className="text-sm font-bold text-pink-500">Compassion In Motion</p>
            </div>
          </div>

          <a href="#book" className="rounded-full bg-pink-500 px-6 py-3 text-sm font-bold text-white">
            Book Ride
          </a>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-[#0A2342] via-[#13315C] to-slate-950 px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 inline-block rounded-full bg-pink-500/20 px-4 py-2 text-sm font-bold">
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
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#book" className="rounded-full bg-pink-500 px-8 py-4 text-center font-bold text-white">
                Request a Ride
              </a>
              <a href="tel:16093811082" className="rounded-full bg-white px-8 py-4 text-center font-bold text-[#0A2342]">
                Call (609) 381-1082
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-4 shadow-2xl">
            <Image
              src="/images/leticia-grant.jpg"
              alt="Leticia Grant, owner of Care Cruise LLC"
              width={600}
              height={800}
              className="w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 md:grid-cols-4">
        {["Licensed & Insured", "Professional Service", "South Jersey Coverage", "Compassion In Motion"].map((item) => (
          <div key={item} className="rounded-2xl bg-slate-50 p-5 text-center font-bold shadow-sm">
            ✅ {item}
          </div>
        ))}
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-16">
        <p className="font-bold text-pink-500">Our Services</p>
        <h2 className="mt-3 text-4xl font-black text-[#0A2342]">
          Reliable transportation with care at every mile.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Medical Appointments",
              description:
                "On-time, respectful transportation to doctor's appointments, specialists, medical testing, and routine healthcare visits with dependable door-to-door service.",
            },
            {
              title: "Dialysis Transportation",
              description:
                "Reliable, compassionate transportation for recurring dialysis treatments, ensuring every trip is safe, comfortable, and always on schedule.",
            },
            {
              title: "Physical Therapy",
              description:
                "Comfortable transportation to and from physical therapy appointments, helping you stay committed to your recovery with dependable service.",
            },
            {
              title: "Senior Transportation",
              description:
                "Friendly and dependable transportation that helps seniors maintain their independence while staying connected to appointments, family, shopping, and community activities.",
            },
            {
              title: "Hospital Discharge",
              description:
                "Safe, stress-free transportation home after hospital discharge with the care, patience, and assistance you deserve during recovery.",
            },
            {
              title: "Companion Transportation",
              description:
                "Caring door-to-door transportation with a supportive companion to provide comfort, reassurance, and peace of mind throughout every journey.",
            },
          ].map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl">💗</div>
              <h3 className="text-xl font-black text-[#0A2342]">{service.title}</h3>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-slate-50 px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <Image
            src="/images/leticia-grant.jpg"
            alt="Leticia Grant"
            width={600}
            height={800}
            className="rounded-3xl shadow-xl"
          />

          <div>
            <p className="font-bold text-pink-500">Founder & CEO</p>
            <h2 className="mt-3 text-4xl font-black text-[#0A2342]">
              Meet Leticia Grant
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Care Cruise LLC was founded by Leticia Grant, a compassionate healthcare
              professional whose passion has always been helping others.
            </p>
            <p className="mt-4 text-slate-600">
              With over 16 years of healthcare experience, 5 years as a Special Needs
              Bus Driver, and 5 years as a Commercial Driver&apos;s License (CDL) holder,
              Leticia has dedicated her career to safely transporting and caring for
              individuals with dignity, patience, and respect.
            </p>
            <p className="mt-4 text-slate-600">
              As a devoted mother of three, she understands the importance of treating
              every passenger like family. Her vibrant personality, genuine compassion,
              and commitment to serving others are the heart of Care Cruise.
            </p>
            <p className="mt-4 text-slate-600">
              Currently pursuing her Certified Nursing Assistant (CNA) certification
              while continuing her journey as a business entrepreneur, Leticia remains
              focused on providing dependable transportation that gives families peace
              of mind.
            </p>
            <p className="mt-4 text-slate-600">
              At Care Cruise, every ride is more than transportation—it is Compassion
              In Motion.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <p className="font-bold text-pink-500">Why Choose Us</p>
        <h2 className="mt-3 text-4xl font-black text-[#0A2342]">
          Why Families Choose Care Cruise
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Families choose Care Cruise because every ride is handled with patience,
          respect, and genuine care.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "❤️",
              title: "Family-Owned & Operated",
              description:
                "Care Cruise is built with family values, personal commitment, and pride in serving the community.",
            },
            {
              icon: "🚐",
              title: "Safe & Comfortable Transportation",
              description:
                "Clean, dependable transportation designed to help riders feel secure, relaxed, and cared for.",
            },
            {
              icon: "🩺",
              title: "Healthcare Experience",
              description:
                "Led by Leticia Grant, with over 16 years of healthcare experience and a heart for helping others.",
            },
            {
              icon: "👵",
              title: "Senior-Friendly Service",
              description:
                "Patient, respectful service for seniors who need dependable support getting to appointments and daily needs.",
            },
            {
              icon: "🕒",
              title: "Reliable & On-Time",
              description:
                "We value your time and understand how important it is to arrive safely and on schedule.",
            },
            {
              icon: "🤝",
              title: "Compassionate Door-to-Door Assistance",
              description:
                "Supportive transportation from pickup to destination with comfort, dignity, and peace of mind.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="text-xl font-black text-[#0A2342]">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
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
            <p className="mt-6 text-lg font-bold">Call: (609) 381-1082</p>
            <p className="font-bold">Email: carecruisebusiness@gmail.com</p>
          </div>

          <form onSubmit={submitRide} className="grid gap-4 rounded-3xl bg-white p-6 shadow-2xl">
            <input name="name" value={form.name} onChange={updateForm} required className="rounded-xl border p-3" placeholder="Full Name" />
            <input name="phone" value={form.phone} onChange={updateForm} required className="rounded-xl border p-3" placeholder="Phone Number" />
            <input name="email" value={form.email} onChange={updateForm} className="rounded-xl border p-3" placeholder="Email Address" />
            <input name="pickup" value={form.pickup} onChange={updateForm} required className="rounded-xl border p-3" placeholder="Pickup Address" />
            <input name="destination" value={form.destination} onChange={updateForm} required className="rounded-xl border p-3" placeholder="Destination Address / Apt / Unit" />
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
            <div className="flex items-center gap-3">
              <Image
                src="/images/care-cruise-logo.jpg"
                alt="Care Cruise LLC"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h3 className="text-2xl font-black">Care Cruise LLC</h3>
                <p className="mt-1 text-pink-300">Compassion In Motion</p>
              </div>
            </div>
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
