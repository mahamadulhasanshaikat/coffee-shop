"use client";
import Link from 'next/link';
import { Coffee, MapPin, Phone, Mail } from 'lucide-react';

const SocialIcon = ({ d }: { d: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#1C1613] text-[#FAF7F2] pt-20 pb-10 px-6 md:px-12 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-14 border-b border-white/10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-full bg-[#C28550] text-[#1C1613] flex items-center justify-center">
              <Coffee className="w-4 h-4" />
            </span>
            <span className="font-serif text-xl font-semibold tracking-tight">
              CoffeeShop<span className="text-[#C28550]">.</span>
            </span>
          </Link>
          <p className="text-sm text-[#FAF7F2]/65 leading-relaxed max-w-xs">
            Small-batch roasted coffee crafted with care for slow mornings and elevated moods.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif font-semibold text-base mb-4 text-[#C28550]">Navigation</h4>
          <ul className="space-y-2.5 text-sm text-[#FAF7F2]/75">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="#menu" className="hover:text-white transition-colors">Menu</Link></li>
            <li><Link href="#about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif font-semibold text-base mb-4 text-[#C28550]">Visit Us</h4>
          <ul className="space-y-3 text-sm text-[#FAF7F2]/75">
            <li className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-[#C28550]" /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-[#C28550]" /> hello@coffeeshop.com</li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C28550] mt-0.5 shrink-0" />
              <span>123 Coffee Street,<br />New York, NY 10001</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-serif font-semibold text-base mb-4 text-[#C28550]">Follow</h4>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C28550] hover:text-[#1C1613] transition-colors"
            >
              <SocialIcon d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C28550] hover:text-[#1C1613] transition-colors"
            >
              <SocialIcon d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/50">
        <p>© 2026 CoffeeShop. All rights reserved.</p>
        <p>Crafted for Coffee Lovers</p>
      </div>
    </footer>
  );
}