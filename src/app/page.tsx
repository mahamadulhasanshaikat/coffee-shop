import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import SpecialMenu from '@/components/sections/SpecialMenu';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Banner from '@/components/sections/Banner';
import Footer from '@/components/layout/Footer';
import Gallery from '@/components/sections/Gallery';
import Blog from '@/components/sections/Blog';

export default function Home() {
  return (
    <main className="min-h-screen bg-alabaster text-espresso font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <SpecialMenu />
      <About />
      <Gallery />
      <Blog />
      <Testimonials />
      <FAQ />
      <Banner />
      <Footer />
    </main>
  );
}