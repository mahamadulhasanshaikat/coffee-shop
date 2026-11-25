"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp, luxuryEase } from '@/lib/motion';

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="lg:col-span-6 relative"
        >
          <div className="relative h-105 sm:h-120 w-full rounded-4xl overflow-hidden border border-espresso/10 shadow-xl shadow-espresso/5">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
              alt="CoffeeShop Interior"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 right-6 bg-pine text-alabaster px-6 py-4 rounded-2xl shadow-lg">
            <p className="font-serif text-2xl font-semibold text-caramel">12+</p>
            <p className="text-xs tracking-wide text-alabaster/80 mt-0.5">Years of Roasting Craft</p>
          </div>
        </motion.div>

        {/* Right Copy */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-6 flex flex-col items-start gap-5"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-caramel">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-espresso leading-[1.1]">
            More Than Coffee,<br />A Daily Sanctuary.
          </h2>
          <p className="text-roast text-base leading-relaxed max-w-lg">
            Every cup begins at high-altitude family farms. We roast in small batches each morning to preserve delicate floral and cocoa notes, served in a warm space designed for slow mornings and meaningful conversations.
          </p>

          <button
            type="button"
            className="mt-2 inline-flex items-center gap-2 bg-espresso text-alabaster px-7 py-3.5 rounded-full text-sm font-medium hover:bg-pine transition-all cursor-pointer"
          >
            Read Our Story
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}