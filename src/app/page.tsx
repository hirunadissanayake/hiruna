import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Work } from "@/components/home/Work";
import { Skills } from "@/components/home/Skills";

import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hiruna Dissanayake",
    "alternateName": "Hiruna Sankalpa Dissanayake",
    "description": "Software Engineer & Designer based in Sri Lanka.",
    "url": "https://hiruna.me",
    "jobTitle": "Software Engineer",
    "knowsAbout": [
      "Software Engineering",
      "Web Development",
      "Frontend Development",
      "Java",
      "React",
      "Next.js"
    ],
    "sameAs": [
      "https://github.com/hirunadissanayake",
      // Add LinkedIn here if you have it
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
