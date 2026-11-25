"use client";
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeUp, staggerParent } from '@/lib/motion';

interface Review {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Regular Customer',
    text: 'The Velvet Cappuccino is unmatched. Calm atmosphere, attentive baristas, and consistently rich espresso every single morning.',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'David Johnson',
    role: 'Creative Director',
    text: 'My go-to spot for client meetings and quiet work sessions. Their single-origin pour-over has completely ruined chain coffee for me.',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    name: 'Emily Carter',
    role: 'Coffee Enthusiast',
    text: 'Fast delivery and the coffee still arrives piping hot with perfect crema. Truly a signature experience from start to finish.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#EFE8DD]/50 border-y border-[#1C1613]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C28550]">
            Guest Notes
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#1C1613] mt-2">
            What Our Regulars Say
          </h2>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              variants={fadeUp(idx * 0.1)}
              className="bg-white rounded-3xl p-8 border border-[#1C1613]/10 flex flex-col justify-between gap-6 shadow-xs"
            >
              <div>
                <div className="flex items-center gap-1 text-[#C28550] mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-[#5C473D] text-sm leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#1C1613]/10">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-serif font-semibold text-[#1C1613] text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-[#5C473D]">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}