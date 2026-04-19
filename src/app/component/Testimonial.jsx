"use client";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Working with Ayostack was an outstanding experience. His attention to detail is exceptional.",
    name: "Oluwatobiloba A.",
    role: "Frontend Mentor",
  },
  {
    quote: "He is consistent, fast-learning, and highly creative. I strongly recommend him for web projects.",
    name: "Alayo S.",
    role: "Tech Lead, Abrandrise",
  },
  {
    quote: "Ayostack brings energy and UI precision to every collaboration. Truly impressive work.",
    name: "Marvellous A.",
    role: "UI/UX Designer, MG Design",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center text-blue-200 py-8 px-5 bg-[#071026] rounded-2xl">
      <h2 className="text-2xl mb-10 font-bold premium-gradient-title">Testimonials</h2>
      <div className="max-w-[700px] mx-auto animate-fadeIn premium-card-soft rounded-3xl p-8">
        <p className="italic text-2xl text-blue-50 leading-relaxed">
          “{testimonials[current].quote}”
        </p>
        <h4 className="mt-6 text-lg font-bold text-blue-100">{testimonials[current].name}</h4>
        <p className="text-sm text-blue-300/80 mt-1">{testimonials[current].role}</p>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-pressed={index === current}
              className={`h-2.5 w-7 rounded-full cursor-pointer transition-all duration-300 ${
                index === current ? "bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.9)]" : "bg-slate-500/70 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
