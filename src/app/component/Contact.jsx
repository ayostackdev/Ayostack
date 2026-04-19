"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending your message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully.");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("Unable to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Unable to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="w-full text-blue-100 bg-[#071026] px-4 py-14 sm:px-6 sm:py-18">
      <div className="mx-auto w-full max-w-3xl premium-card-soft rounded-3xl p-7 sm:p-10 md:p-12 shadow-[0_28px_80px_rgba(2,8,20,0.62)] border border-white/20">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold premium-gradient-title">Contact Me</h1>
          <p className="mt-3 text-sm sm:text-base text-blue-200/75 max-w-xl mx-auto">
            Share your idea, project, or collaboration request. I will get back to you soon.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
          <label className="flex flex-col gap-3 text-sm text-blue-200/90">
            Full Name
            <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3.5 rounded-xl border border-gray-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          </label>

          <label className="flex flex-col gap-3 text-sm text-blue-200/90">
            Email Address
            <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3.5 rounded-xl border border-gray-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          </label>

          <label className="flex flex-col gap-3 text-sm text-blue-200/90">
            Message
            <textarea
            name="message"
            placeholder="Tell me about your project"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3.5 rounded-xl border border-gray-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none min-h-36"
            required
          />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="premium-button premium-shine mt-1 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/55 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && (
          <p className="mt-5 text-center text-sm sm:text-base text-blue-100/90" aria-live="polite">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
