"use client";
import { motion } from 'framer-motion';
import { Plus, ArrowUpRight } from 'lucide-react';
import { fadeUp, staggerParent } from '@/lib/motion';

interface MenuItem {
  id: number;
  name: string;
  tag: string;
  price: string;
  image: string;
}

const menuItems: MenuItem[] = [
  { id: 1, name: 'Velvet Cappuccino', tag: 'Signature', price: '$4.99', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop' },
  { id: 2, name: 'Iced Caramel Latte', tag: 'Cold Brew', price: '$5.49', image: 'https://images.unsplash.com/photo-1517701550927-30cfcb64db10?q=80&w=600&auto=format&fit=crop' },
  { id: 3, name: 'Double Espresso', tag: 'Classic', price: '$3.99', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'Belgian Mocha', tag: 'Sweet', price: '$5.79', image: 'https://images.unsplash.com/photo-1578314675249-a694871b2021?q=80&w=600&auto=format&fit=crop' },
];

export default function SpecialMenu() {
  return (
    <section id="menu" className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C28550]">
            Curated Selection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#1C1613] mt-2">
            Our Signature Menu
          </h2>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#182C22] hover:text-[#C28550] transition-colors w-max cursor-pointer"
        >
          View Full Menu <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {menuItems.map((item, idx) => (
          <motion.div
            key={item.id}
            variants={fadeUp(idx * 0.08)}
            className="group bg-white rounded-3xl p-3.5 border border-[#1C1613]/10 hover:shadow-xl hover:shadow-[#1C1613]/5 transition-all duration-300"
          >
            <div className="relative h-56 w-full rounded-2xl overflow-hidden bg-[#EFE8DD]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#1C1613]">
                {item.tag}
              </span>
            </div>

            <div className="pt-4 px-1.5 pb-1 flex items-center justify-between">
              <div>
                <h3 className="font-serif font-semibold text-[#1C1613] text-lg">{item.name}</h3>
                <p className="text-sm font-semibold text-[#C28550] mt-0.5">{item.price}</p>
              </div>
              <button
                type="button"
                aria-label={`Add ${item.name}`}
                className="w-9 h-9 rounded-full bg-[#EFE8DD] text-[#1C1613] flex items-center justify-center group-hover:bg-[#182C22] group-hover:text-white transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}