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

  verification: {
    google: "C4Rd0wWrj50wb5u9oHgFCx-yQA8VA9qyfoeSZ_nJ27U",
  },

  title: {
    default:
      "Ayokunle Shittu | Full-Stack Developer (Next.js, Node.js) | Data Analyst & Dashboard Builder",
    template: "%s | Ayostack",
  },

  description:
    "Ayokunle Shittu is a Full-Stack Developer and Data Analyst in Nigeria building scalable web applications, real-time systems, and data-driven dashboards using Next.js, Node.js, and PostgreSQL.",

  keywords: [
    "Ayokunle Shittu",
    "Ayostack",
    "Full Stack Developer Nigeria",
    "Next.js Developer",
    "Node.js Developer",
    "PostgreSQL Developer",
    "Backend Developer",
    "Data Analyst",
    "SQL Developer",
    "Dashboard Developer",
    "Business Intelligence",
    "Data Visualization",
  ],

  authors: [{ name: "Ayokunle Shittu" }],
  creator: "Ayokunle Shittu",

  openGraph: {
    title:
      "Ayokunle Shittu | Full-Stack Developer & Data Analyst",
    description:
      "Building modern web applications, backend systems, and data dashboards with Next.js, Node.js, and PostgreSQL.",
    url: "https://www.ayostack.dev",
    siteName: "Ayostack",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Ayokunle Shittu Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ayokunle Shittu | Full-Stack Developer & Data Analyst",
    description:
      "Full-stack developer building scalable apps, backend systems, and data-driven dashboards.",
    images: ["/preview.png"],
  },

  robots: {
    index: true,
    follow: true,
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

        {/* 🔥 ADVANCED STRUCTURED DATA */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ayokunle Shittu",
              url: "https://www.ayostack.dev",
              image: "https://www.ayostack.dev/preview.png",
              jobTitle:
                "Full-Stack Developer & Data Analyst",
              worksFor: {
                "@type": "Organization",
                name: "SunFi",
              },
              description:
                "Full-stack developer specializing in Next.js, Node.js, PostgreSQL, and data dashboards.",
              sameAs: [
                "https://github.com/Ayostack-web",
                "https://linkedin.com/in/ayokunleshittu",
              ],
              knowsAbout: [
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "SQL",
                "Data Analysis",
                "Dashboard Development",
                "Backend Development",
                "Web Development",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
