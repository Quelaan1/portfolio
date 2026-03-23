"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  }

  if (submitted) {
    return (
      <div className="bg-surface-container-low rounded-xl p-12 text-center">
        <div className="text-secondary text-4xl mb-4">✓</div>
        <h3 className="font-[family-name:var(--font-headline)] text-2xl font-bold mb-2">
          Transmission Received
        </h3>
        <p className="text-on-surface-variant">
          I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12 relative">
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10 transform translate-x-1/4 translate-y-1/4" />
      <h3 className="font-[family-name:var(--font-headline)] text-3xl font-bold mb-10">
        Quick Inquiry
      </h3>
      <form onSubmit={handleSubmit} className="space-y-8">
        <input
          type="hidden"
          name="access_key"
          value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs tracking-widest uppercase text-on-surface-variant ml-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/40 text-on-surface placeholder:text-outline/50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs tracking-widest uppercase text-on-surface-variant ml-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/40 text-on-surface placeholder:text-outline/50"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs tracking-widest uppercase text-on-surface-variant ml-1">
            Subject
          </label>
          <select
            name="subject"
            className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/40 text-on-surface"
          >
            <option>System Architecture Consultation</option>
            <option>Product Development Inquiry</option>
            <option>Technical Partnership</option>
            <option>Other / General Reach Out</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs tracking-widest uppercase text-on-surface-variant ml-1">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Describe the scope of your inquiry..."
            className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/40 text-on-surface placeholder:text-outline/50 resize-none"
          />
        </div>
        <button
          type="submit"
          className="technical-gradient text-on-primary w-full py-5 rounded-lg font-bold text-lg tracking-tight hover:shadow-[0_0_30px_rgba(208,188,255,0.2)] transition-all"
        >
          Initiate Transmission
        </button>
      </form>
    </div>
  );
}
