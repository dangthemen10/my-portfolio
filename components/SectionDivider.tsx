'use client';

import { useTheme } from '@/context/theme-context';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export default function SectionDivider() {
  const { theme } = useTheme();
  return (
    <motion.img
      src={
        theme === 'light'
          ? 'https://www.svgrepo.com/show/522650/scroll-down.svg'
          : 'https://framer-motion-portfolio-next.vercel.app/assets/scroll.png'
      }
      alt="scroll"
      variants={textVariants}
      animate="scrollButton"
      width={48}
      height={48}
      className="my-24 h-16 w-16 hidden sm:block dark:bg-opacity-20"
    />
  );
}
