'use client';

import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';
import { calculateYearsSince } from '@/lib/utils';
import { START_YEAR_EXPERIENCE } from '@/lib/constants';

const Intro = (): React.JSX.Element => {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative flex items-center pl-12 pl-12 ml-4">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}>
            <Image
              src="https://media.licdn.com/dms/image/C4E03AQEMKAzi2ibEuQ/profile-displayphoto-shrink_400_400/0/1650113169826?e=1717027200&v=beta&t=GTkR9-JFLVFLNwqMfCLiqT1Md8LSEXpIQlwmJiQylag"
              alt="Phan Dang"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="relative h-34 w-34 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}>
            👋
          </motion.span>
        </div>
        <div className="flex flex-col justify-center">
          <motion.h1
            className="mb-5 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <span className="font-bold">
              Hello, I'm Dang. I'm a Software Engineer with{' '}
              {calculateYearsSince(START_YEAR_EXPERIENCE)} years of experience.
            </span>
          </motion.h1>
        </div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center mt-10 mb-5"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        Apply the knowledge gained from my experience to become a professional
        web developer. I hope to work in a professional programming environment
        where I can develop professional skills and learn new programming skills
        to help me grow and develop my career path.
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center space-x-2 justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 borderBlack active:scale-105 transition"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}>
          Contact me here{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://drive.usercontent.google.com/u/0/uc?id=1BBO-920VjspawkVLkUMPDG_iZF4xnBRh&export=download"
          download>
          Download CV{' '}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="group flex items-center space-x-3 justify-cente">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 text-[1.35rem] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/phdang300797"
            target="_blank">
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/dangthemen10"
            target="_blank">
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
