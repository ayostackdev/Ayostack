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
    <>
      <footer className="bg-[#17223a] text-blue-200 text-center py-12 px-4">
        <div className="max-w-[760px] mx-auto premium-card-soft rounded-3xl p-8 md:p-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-blue-300/75 mb-2">Let us build something exceptional</p>
          <h1 className="text-2xl md:text-3xl font-bold premium-gradient-title">Connect With Me</h1>
          <p className="mt-3 text-blue-100/75 max-w-xl mx-auto">
            Open to collaboration, product roles, and high-impact engineering opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4 text-lg">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200/20 bg-[#0b1733]/70 text-blue-100 no-underline select-none transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/45 hover:bg-[#11234b]"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-200 group-hover:text-sky-300 transition-colors">
                  {social.icon}
                </span>
                <span className="text-sm font-semibold tracking-wide">{social.label}</span>
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-blue-200/85">
            © {new Date().getFullYear()} Ayostack. Crafted with precision.
          </p>
        </div>
      </footer>
    </>
  );
}





