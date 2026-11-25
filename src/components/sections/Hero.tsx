"use client";
import { motion } from 'framer-motion';
import { Play, ArrowUpRight, Star } from 'lucide-react';
import { fadeUp, staggerParent, luxuryEase } from '@/lib/motion';

export default function Hero() {
  return (
    <section className="relative w-full pt-12 pb-20 md:pt-20 md:pb-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Editorial Copy */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="show"
          className="lg:col-span-6 flex flex-col items-start gap-6"
        >
          <motion.div
            variants={fadeUp(0)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DD] border border-[#1C1613]/10 text-xs font-semibold uppercase tracking-widest text-[#5C473D]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C28550]" />
            Small-Batch Roastery
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-serif font-semibold text-[#1C1613] leading-[1.05] tracking-tight"
          >
            Good Coffee,<br />
            <span className="italic font-normal text-[#C28550]">Elevated</span> Mood.
          </motion.h1>

          <motion.p
            variants={fadeUp(0.2)}
            className="text-[#5C473D] text-base sm:text-lg max-w-md leading-relaxed"
          >
            Single-origin beans roasted in micro-lots and poured with precision. Discover your daily ritual at CoffeeShop.
          </motion.p>

          <motion.div
            variants={fadeUp(0.3)}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-[#1C1613] text-[#FAF7F2] px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#182C22] transition-all shadow-lg shadow-[#1C1613]/15 cursor-pointer"
            >
              Explore Menu
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-3 px-5 py-3.5 rounded-full text-sm font-medium text-[#1C1613] hover:bg-[#EFE8DD] transition-colors cursor-pointer"
            >
              <span className="w-8 h-8 rounded-full bg-white border border-[#1C1613]/10 flex items-center justify-center shadow-sm">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </span>
              Watch Craft
            </button>
          </motion.div>
        </motion.div>

        {/* Right Editorial Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: luxuryEase }}
          className="lg:col-span-6 relative"
        >
          <div className="relative h-[440px] sm:h-[520px] w-full rounded-[2rem] overflow-hidden border border-[#1C1613]/10 shadow-2xl shadow-[#1C1613]/10">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop"
              alt="Artisan Espresso Pour"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613]/50 via-transparent to-transparent" />
          </div>

          {/* Floating Glass Rating Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: luxuryEase }}
            className="absolute -bottom-6 left-6 sm:left-8 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl border border-[#1C1613]/10 shadow-xl flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-full bg-[#182C22] text-[#FAF7F2] flex items-center justify-center font-serif font-bold text-lg">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-[#C28550]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs font-medium text-[#5C473D] mt-0.5">
                Trusted by 2,400+ regulars
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}