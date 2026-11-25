"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp } from '@/lib/motion';

export default function Banner() {
  return (
    <section className="w-full py-12 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative rounded-[2.5rem] bg-pine text-alabaster px-8 py-14 md:px-16 md:py-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div className="relative z-10 max-w-xl text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-caramel">
            Morning Ritual
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold mt-3 leading-tight">
            Start Your Day With a Signature Pour.
          </h2>
          <p className="text-alabaster/75 text-sm sm:text-base mt-4">
            Order online for skip-the-line pickup or freshly brewed delivery straight to your desk.
          </p>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex items-center gap-2 bg-alabaster text-pine px-8 py-4 rounded-full text-sm font-semibold hover:bg-caramel hover:text-white transition-all shrink-0 cursor-pointer"
        >
          Order Now
          <ArrowUpRight className="w-4 h-4" />
        </button>

        {/* Subtle ambient glow */}
        <div className="absolute -right-20 -bottom-24 w-80 h-80 rounded-full bg-caramel/20 blur-3xl pointer-events-none" />
      </motion.div>
    </section>
  );
}