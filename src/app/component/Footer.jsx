"use client";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // New X (Twitter) logo

export default function Footer() {
  const socials = [
    {
      href: "https://x.com/ayle_2",
      label: "X",
      icon: <FaXTwitter />,
    },
    {
      href: "https://github.com/Ayostack-web",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://www.facebook.com/profile.php?id=100006560209278",
      label: "Facebook",
      icon: <FaFacebookF />,
    },
    {
      href: "https://www.instagram.com/ayokunle_shittu/",
      label: "Instagram",
      icon: <FaInstagram />,
    },
    {
      href: "https://www.linkedin.com/in/ayokunle-shittu-560a9a162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
      icon: <FaLinkedinIn />,
    },
  ];

  return (
    <footer className="w-full border-t border-blue-200/15 bg-[#0a1530] text-blue-100">
      <div className="mx-auto max-w-[1100px] px-4 py-10 md:px-8 md:py-12">
        <p className="text-[11px] uppercase tracking-[0.2em] text-blue-300/75">Let us build something exceptional</p>
        <h2 className="mt-2 text-2xl font-bold premium-gradient-title md:text-3xl">Connect With Me</h2>
        <p className="mt-3 max-w-xl text-blue-100/75">
          Open to collaboration, product roles, and high-impact engineering opportunities.
        </p>

        <div className="mt-7 flex flex-wrap gap-3 text-lg md:gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="group inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-[#0b1733]/70 px-4 py-2 text-blue-100 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/45 hover:bg-[#11234b]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-200 transition-colors group-hover:text-sky-300">
                {social.icon}
              </span>
              <span className="text-sm font-semibold tracking-wide">{social.label}</span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm text-blue-200/85">© {new Date().getFullYear()} Ayostack. Crafted with precision.</p>
      </div>
    </footer>
  );
}





