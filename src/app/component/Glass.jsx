// app/components/PortfolioCard.jsx
"use client";

export default function PortfolioCard() {
  return (
    <article
      className="max-w-sm mx-auto bg-[#233052] backdrop-blur-md
                 border border-white/10 rounded-2xl p-6 shadow-xl transform transition hover:-translate-y-2
                 hover:shadow-2xl"
      aria-label="Portfolio card"
    >
      <div className="flex items-start gap-4">
        {/* Decorative icon / logo */}
        <div
          className="flex-none w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500
                     flex items-center justify-center text-white text-2xl font-bold shadow-md"
          aria-hidden="true"
        >
          ✨
        </div>

        <div className="min-w-0">
          <h3 className="text-lg md:text-xl font-semibold text-blue-200 leading-tight">
            ✨ Designing the Web, One Pixel at a Time
          </h3>

          <p className="mt-2 text-sm md:text-base text-blue-200/90">
            Crafting clean, modern, and beautiful user experiences with precision and passion.
          </p>
        </div>
      </div>

      {/* footer meta */}
      <footer className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-blue-200">
        <span> FullStack • Next.js • Nest.js </span>
        <span>Available for freelance</span>
      </footer>
    </article>
  );
}
