"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeUp, luxuryEase } from '@/lib/motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Do you offer home delivery?',
    answer: 'Yes, we deliver freshly brewed coffee and pastries within a 5-mile radius in under 25 minutes.',
  },
  {
    question: 'What are your opening hours?',
    answer: 'We are open daily from 7:00 AM to 9:00 PM, including weekends and most holidays.',
  },
  {
    question: 'Do you have plant-based milk options?',
    answer: 'We offer barista-grade oat, almond, and soy milk alternatives for every espresso drink at no extra charge.',
  },
  {
    question: 'Can I reserve a table for a group?',
    answer: 'Yes, you can reserve our lounge table for up to 8 guests by calling us or booking directly through our contact page.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Accordion */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-7"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C28550]">
            Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#1C1613] mt-2 mb-10">
            Frequently Asked
          </h2>

          <div className="divide-y divide-[#1C1613]/10 border-y border-[#1C1613]/10">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.question} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="font-serif text-lg font-medium text-[#1C1613] group-hover:text-[#C28550] transition-colors">
                      {item.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#EFE8DD] flex items-center justify-center text-[#1C1613] shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: luxuryEase }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 pr-10 text-sm text-[#5C473D] leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="lg:col-span-5"
        >
          <div className="h-[460px] w-full rounded-[2rem] overflow-hidden border border-[#1C1613]/10 shadow-xl shadow-[#1C1613]/5">
            <img
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop"
              alt="Latte Art Craft"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}