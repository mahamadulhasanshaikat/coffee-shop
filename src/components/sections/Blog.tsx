"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Clock, X } from 'lucide-react';
import { fadeUp, staggerParent, luxuryEase } from '@/lib/motion';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of the Slow Pour-Over',
    category: 'Brewing Guide',
    date: 'Nov 14, 2026',
    readTime: '4 min read',
    excerpt: 'Why water temperature, bloom time, and grind size transform a single-origin roast.',
    content:
      'A great pour-over is all about patience and precision. Start with freshly ground beans at a medium-fine setting, rinse your paper filter with hot water, and allow a 45-second bloom to release trapped CO2. Pour in slow, concentric circles to extract balanced sweetness without bitterness.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Inside Our Ethiopian Micro-Lots',
    category: 'Origins',
    date: 'Nov 08, 2026',
    readTime: '5 min read',
    excerpt: 'Tracing jasmine and bergamot notes back to high-altitude family farms in Yirgacheffe.',
    content:
      'Grown above 2,000 meters in rich volcanic soil, our Ethiopian Yirgacheffe micro-lots are hand-picked at peak ripeness and washed in mountain spring water. Roasting them light preserves their delicate floral aroma, bright citrus acidity, and tea-like finish.',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Dialing In Your Morning Espresso',
    category: 'Barista Craft',
    date: 'Oct 29, 2026',
    readTime: '3 min read',
    excerpt: 'Three simple adjustments to pull syrupy, tiger-striped shots at home every time.',
    content:
      'Consistency starts with a digital scale. Aim for a 1:2 brew ratio—18 grams of finely ground coffee yielding 36 grams of liquid espresso in 27 to 30 seconds. If it runs too fast and tastes sour, grind finer; if it drips slowly and tastes bitter, coarsen your grind slightly.',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Blog() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C28550]">
            The Coffee Journal
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#1C1613] mt-2">
            Stories & Brewing Notes
          </h2>
        </div>
        <p className="text-sm text-[#5C473D] max-w-sm leading-relaxed">
          Guides, origin stories, and quiet reflections from our roasters and baristas.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-7"
      >
        {blogPosts.map((post, idx) => (
          <motion.article
            key={post.id}
            variants={fadeUp(idx * 0.1)}
            onClick={() => setActivePost(post)}
            className="group bg-white rounded-3xl overflow-hidden border border-[#1C1613]/10 hover:shadow-xl hover:shadow-[#1C1613]/5 transition-all duration-300 flex flex-col cursor-pointer"
          >
            <div className="relative h-56 w-full overflow-hidden bg-[#EFE8DD]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-[#FAF7F2]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-semibold text-[#1C1613]">
                {post.category}
              </span>
            </div>

            <div className="p-6 flex flex-col flex-1 justify-between gap-5">
              <div>
                <div className="flex items-center gap-3 text-xs text-[#5C473D] mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#C28550]" />
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#1C1613] group-hover:text-[#C28550] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-[#5C473D] mt-2.5 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#182C22] group-hover:text-[#C28550] transition-colors">
                Read Article
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePost(null)}
            className="fixed inset-0 z-50 bg-[#1C1613]/80 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.3, ease: luxuryEase }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-3xl overflow-hidden bg-[#FAF7F2] border border-[#1C1613]/10 shadow-2xl"
            >
              <button
                type="button"
                aria-label="Close article"
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#1C1613]/75 text-[#FAF7F2] flex items-center justify-center hover:bg-[#C28550] hover:text-[#1C1613] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-7 sm:p-8">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#C28550]">
                  <span>{activePost.category}</span>
                  <span>•</span>
                  <span className="text-[#5C473D]">{activePost.date}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1613] mt-2">
                  {activePost.title}
                </h3>
                <p className="text-[#5C473D] text-sm sm:text-base leading-relaxed mt-4">
                  {activePost.content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}