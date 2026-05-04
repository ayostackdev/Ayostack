import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Script from "next/script";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ayostack.dev"),

  alternates: {
    canonical: "https://www.ayostack.dev",
  },

  verification: {
    google: "C4Rd0wWrj50wb5u9oHgFCx-yQA8VA9qyfoeSZ_nJ27U",
  },

  title: {
    default:
      "Full-Stack Developer Nigeria | Next.js, Nest.js, PostgreSQL | Ayokunle Shittu",
    template: "%s | Ayostack",
  },

  description:
    "Ayokunle Shittu - Full-Stack Developer & Product Engineer in Nigeria. Expert in building scalable Next.js applications, Nest.js REST APIs, PostgreSQL databases, and real-time systems. Specialized in frontend (React, TypeScript), backend (Node.js, Nest.js), and data-driven solutions.",

  keywords: [
    "Full Stack Developer Nigeria",
    "Next.js Developer Lagos",
    "Nest.js REST API Developer",
    "Node.js Backend Developer",
    "PostgreSQL Database Developer",
    "React TypeScript Developer",
    "Web Application Developer Nigeria",
    "Scalable Web Applications",
    "Real-time Systems Developer",
    "Full Stack JavaScript Developer",
    "Next.js Nest.js Developer",
    "Data-Driven Solutions",
    "REST API Development",
    "TypeScript Backend Development",
    "Web Development Services Nigeria",
    "Product Engineer Africa",
    "SaaS Developer",
    "Prisma ORM Expert",
    "Tailwind CSS Developer",
    "Vercel Deployment Expert",
    "Database Design Developer",
    "Full Stack JavaScript Nigeria",
  ],

  authors: [{ name: "Ayokunle Shittu" }],
  creator: "Ayokunle Shittu",

  openGraph: {
    title: "Full-Stack Developer Nigeria | Ayokunle Shittu | Next.js & Nest.js Expert",
    description:
      "Expert Full-Stack Developer specializing in Next.js, Nest.js, PostgreSQL, and scalable web applications. Building high-performance products for startups and enterprises across Africa.",
    url: "https://www.ayostack.dev",
    siteName: "Ayostack",
    images: [
      {
        url: "https://www.ayostack.dev/preview.png",
        width: 1200,
        height: 630,
        alt: "Ayokunle Shittu - Full-Stack Developer Portfolio - Next.js, Nest.js, PostgreSQL",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Developer Nigeria | Next.js, Nest.js, PostgreSQL",
    description:
      "Ayokunle Shittu - Expert Full-Stack Developer building scalable Next.js apps, Nest.js APIs, and PostgreSQL databases. Available for freelance & full-time roles.",
    images: ["https://www.ayostack.dev/preview.png"],
    creator: "@ayostack",
    site: "@ayostack",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics />

        {/* 🔥 CONSOLIDATED STRUCTURED DATA - Combined Schema */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.ayostack.dev#person",
                  name: "Ayokunle Shittu",
                  url: "https://www.ayostack.dev",
                  image: "https://www.ayostack.dev/preview.png",
                  jobTitle: "Full-Stack Developer & Product Engineer",
                  worksFor: {
                    "@type": "Organization",
                    "@id": "https://www.ayostack.dev#organization",
                  },
                  sameAs: [
                    "https://github.com/Ayostack-web",
                    "https://linkedin.com/in/ayokunleshittu",
                    "https://twitter.com/ayle_2",
                  ],
                  knowsAbout: [
                    "Next.js",
                    "Nest.js",
                    "Node.js",
                    "React.js",
                    "TypeScript",
                    "PostgreSQL",
                    "SQL",
                    "REST API Development",
                    "Web Application Development",
                    "Backend Development",
                    "Full-Stack Development",
                    "Prisma ORM",
                    "Tailwind CSS",
                    "Real-time Systems",
                    "WebSocket",
                    "Docker",
                    "Vercel",
                    "Git & GitHub",
                  ],
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.ayostack.dev#organization",
                  name: "Ayostack",
                  url: "https://www.ayostack.dev",
                  logo: "https://www.ayostack.dev/preview.png",
                  description: "Full-stack web development services specializing in Next.js, Nest.js, and scalable web applications",
                  foundingDate: "2024",
                  founder: {
                    "@type": "Person",
                    "@id": "https://www.ayostack.dev#person",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "Professional Services",
                    url: "https://www.ayostack.dev",
                  },
                  sameAs: [
                    "https://github.com/Ayostack-web",
                    "https://linkedin.com/in/ayokunleshittu",
                    "https://twitter.com/ayle_2",
                  ],
                  areaServed: "NG",
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://www.ayostack.dev",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Projects",
                      item: "https://www.ayostack.dev#projects",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "Skills",
                      item: "https://www.ayostack.dev#skills",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
