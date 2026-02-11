// app/components/PortfolioCard.jsx
"use client";
import styles from './GlowingBorder.module.css';

export default function PortfolioCard() {
  return (
    <article
      className={styles.card} // Using your custom 3D tilt + spinning border
      style={{ minHeight: 'auto', padding: '1.5rem' }} // Overriding height for a smaller card
      aria-label="Portfolio card"
    >
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-start gap-4">
          {/* Decorative icon - using your brand colors */}
          <div
            className="flex-none w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-teal-400
                       flex items-center justify-center text-white text-2xl font-bold shadow-lg"
            aria-hidden="true"
          >
            ✨
          </div>

          <div className="text-left">
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
              Designing the Web
            </h3>
            <p className="mt-2 text-sm text-blue-100/70">
              Crafting clean, modern experiences with precision and passion.
            </p>
          </div>
        </div>

        {/* Updated footer to look more 'Architectural' */}
        <footer className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-widest text-blue-400 font-bold">
          <span>FullStack • Next.js • Nest.js • Postgres  </span>
          <span className="bg-blue-500/20 px-2 py-1 rounded text-blue-300">Available</span>
        </footer>
      </div>
    </article>
  );
}