import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hiruna.vercel.app'),
  title: {
    default: "Hiruna Dissanayake | Software Engineer & Designer",
    template: "%s | Hiruna Dissanayake"
  },
  description: "Personal portfolio of Hiruna Sankalpa Dissanayake, a software engineering undergraduate showcasing innovative projects and technical expertise in web development and software architecture.",
  keywords: ["Hiruna Dissanayake", "Hiruna", "Software Engineer", "Frontend Developer", "Portfolio", "Java Developer", "Full Stack Developer", "Next.js", "React"],
  authors: [{ name: "Hiruna Dissanayake" }],
  creator: "Hiruna Dissanayake",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hiruna.vercel.app",
    title: "Hiruna Dissanayake | Software Engineer & Designer",
    description: "Creative Software Engineer focusing on high-performance web experiences and elegant software solutions.",
    siteName: "Hiruna Dissanayake Portfolio",
    images: [{
      url: "/icon.png",
      width: 512,
      height: 512,
      alt: "Hiruna Dissanayake"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiruna Dissanayake | Software Engineer & Designer",
    description: "Creative Software Engineer focusing on high-performance web experiences.",
    images: ["/icon.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}

