"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    }
  };

  return (
    <section id="contacts" className="w-full flex items-center justify-center text-blue-100 bg-[#071026] px-4 py-3 sm:px-5 sm:py-4">
      <div className="premium-card-soft rounded-3xl p-6 sm:p-7 shadow-lg border border-white/40 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-5 text-center premium-gradient-title">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Tell me about your project"
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-32"
            required
          />
          <button
            type="submit"
            className="premium-button premium-shine bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition-all"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center text-blue-100/90">{status}</p>}
      </div>
    </section>
  );
}
