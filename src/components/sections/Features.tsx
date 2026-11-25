"use client";
import { motion } from 'framer-motion';
import { Coffee, Award, Clock, Sparkles, type LucideIcon } from 'lucide-react';
import { fadeUp, staggerParent } from '@/lib/motion';

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const items: FeatureItem[] = [
  { icon: Award, title: 'Single Origin', desc: 'Ethically sourced high-altitude beans.' },
  { icon: Coffee, title: 'Roasted Daily', desc: 'Micro-batch roasted for peak aroma.' },
  { icon: Clock, title: 'Express Delivery', desc: 'Hot to your doorstep in under 25 min.' },
  { icon: Sparkles, title: 'Barista Crafted', desc: 'Precision-dialed espresso every pour.' },
];

export default function Features() {
  return (
    <section className="w-full border-y border-[#1C1613]/10 bg-[#EFE8DD]/45">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title} variants={fadeUp(idx * 0.08)} className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white border border-[#1C1613]/10 flex items-center justify-center text-[#182C22] shrink-0 shadow-xs">
                <Icon className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-[#1C1613] text-base">{item.title}</h3>
                <p className="text-xs text-[#5C473D] mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}