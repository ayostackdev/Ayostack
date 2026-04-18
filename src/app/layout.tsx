import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ayostack.dev"),

  verification: {
  google: "C4Rd0wWrj50wb5u9oHgFCx-yQA8VA9qyfoeSZ_nJ27U",
},

  title: {
    default:
      "Ayokunle Shittu | Full-Stack Developer | Data & Web Applications",
    template: "%s | Ayostack",
  },

  description:
    "Ayokunle Shittu is a full-stack developer building scalable web applications, real-time systems, and data-driven dashboards using Next.js, Node.js, and PostgreSQL.",

  keywords: [
    "Ayokunle Shittu",
    "Ayostack",
    "Full Stack Developer Nigeria",
    "Next.js Developer",
    "Node.js Developer",
    "Backend Developer",
    "Dashboard Developer",
  ],

  authors: [{ name: "Ayokunle Shittu" }],
  creator: "Ayokunle Shittu",

  openGraph: {
    title: "Ayokunle Shittu | Full-Stack Developer",
    description:
      "Building modern web applications, real-time platforms, and data dashboards with Next.js and Node.js.",
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
    title: "Ayokunle Shittu | Full-Stack Developer",
    description:
      "Full-stack developer building scalable apps and data-driven dashboards.",
    images: ["./favicon.ico"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "./favicon.ico",
    apple: "./favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />

        {/* 🔥 STRUCTURED DATA (SEO BOOST) */}
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
              jobTitle: "Full-Stack Developer",
              sameAs: [
                "https://github.com/Ayostack-web",
                "https://linkedin.com/in/ayokunleshittu",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}