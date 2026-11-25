"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coffee, ArrowUpRight } from 'lucide-react';

import { luxuryEase } from '@/lib/motion';
import { navLinks } from '..';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: luxuryEase }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-alabaster/85 border-b border-espresso/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-full bg-espresso text-alabaster flex items-center justify-center group-hover:bg-pine transition-colors">
            <Coffee className="w-4 h-4" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-espresso">
            CoffeeShop<span className="text-caramel">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-sm font-medium text-roast hover:text-espresso transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 bg-pine text-alabaster px-5 py-2.5 rounded-full text-sm font-medium hover:bg-espresso transition-all cursor-pointer"
        >
          Order Now
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.header>
  );
}