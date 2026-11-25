import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import SpecialMenu from '@/components/sections/SpecialMenu';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Banner from '@/components/sections/Banner';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-alabaster text-espresso font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <SpecialMenu />
      <Testimonials />
      <FAQ />
      <Banner />
      <Footer />
    </main>
  );
}