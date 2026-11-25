"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { fadeUp, staggerParent, luxuryEase } from '@/lib/motion';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  span: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Morning Pour-Over',
    category: 'Craft',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    title: 'Roasted Micro-Lots',
    category: 'Beans',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=700',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    title: 'Warm Lounge Corner',
    category: 'Atmosphere',
    image: 'https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=700',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 4,
    title: 'Velvet Latte Art',
    category: 'Signature',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=700',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 5,
    title: 'Iced Espresso Tonic',
    category: 'Cold Brew',
    image: 'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=700',
    span: 'md:col-span-1 md:row-span-1',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C28550]">
            Visual Journal
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#1C1613] mt-2">
            Inside the Roastery
          </h2>
        </div>
        <p className="text-sm text-[#5C473D] max-w-sm leading-relaxed">
          A glimpse into our morning pours, sunlit corners, and small-batch roasting craft.
        </p>
      </div>

      {/* Editorial Bento Grid */}
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-5"
      >
        {galleryItems.map((item, idx) => (
          <motion.button
            key={item.id}
            type="button"
            variants={fadeUp(idx * 0.08)}
            onClick={() => setSelected(item)}
            className={`group relative rounded-3xl overflow-hidden border border-[#1C1613]/10 bg-[#EFE8DD] text-left cursor-pointer ${item.span}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613]/75 via-[#1C1613]/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C28550]">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#FAF7F2] mt-0.5">
                  {item.title}
                </h3>
              </div>
              <span className="w-9 h-9 rounded-full bg-[#FAF7F2]/15 backdrop-blur-md text-[#FAF7F2] flex items-center justify-center group-hover:bg-[#C28550] group-hover:text-[#1C1613] transition-colors shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-[#1C1613]/85 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, ease: luxuryEase }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden bg-[#1C1613] border border-white/10 shadow-2xl"
            >
              <button
                type="button"
                aria-label="Close preview"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#1C1613]/70 text-[#FAF7F2] flex items-center justify-center hover:bg-[#C28550] hover:text-[#1C1613] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selected.image}
                alt={selected.title}
                className="w-full max-h-[75vh] object-cover"
              />
              <div className="p-6 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C28550]">
                    {selected.category}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#FAF7F2] mt-1">
                    {selected.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}