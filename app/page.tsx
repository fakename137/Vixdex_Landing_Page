'use client';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import UseCases from '@/components/use-cases';
import Roadmap from '@/components/roadmap';
import Awards from '@/components/awards';
import Ecosystem from '@/components/ecosystem';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import WhatIs from '@/components/what-is';
import ScrollSections from '@/components/scroll-sections';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <About />
      <WhatIs />
      <ScrollSections />
      <UseCases />
      <Roadmap />
      <Awards />
      <Ecosystem />
      <Faq />

      <Footer />
    </main>
  );
}
