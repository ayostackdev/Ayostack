import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update this section to change your favicon and site info
export const metadata: Metadata = {
  title: "Ayostack | Full-Stack Developer", 
  description: "Portfolio of Ayostack - Specialized in NestJS, Supabase, and GraphQL",
  icons: {
    icon: "/favicon.png", // This looks for 'public/favicon.png'
    apple: "/public/file_0000000034ac622f83b2c662380ff859~3.png", // Optional: for mobile home screens
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
        <Analytics/>
      </body>
    </html>
  );
}