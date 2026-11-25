import type { Variants } from 'framer-motion';

export const luxuryEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: luxuryEase },
  },
});

export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};