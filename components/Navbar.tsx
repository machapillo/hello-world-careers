"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? '') as string;

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,96%)] rounded-2xl border px-4 py-2 md:px-6 md:py-3 flex items-center justify-between ${
        scrolled ? 'bg-black/60 border-white/15 backdrop-blur-md' : 'bg-black/30 border-white/10 backdrop-blur'
      }`}
    >
      <a href={`${base}/#hero`} className="font-display text-lg md:text-xl text-white">
        OSS Energy
      </a>
      <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
        <a href={`${base}/#mission`} className="hover:text-white">Mission</a>
        <a href={`${base}/#story`} className="hover:text-white">Story</a>
        <a href={`${base}/#cases`} className="hover:text-white">Case Studies</a>
        <a href={`${base}/#values`} className="hover:text-white">Culture</a>
        <a href={`${base}/#jobs`} className="hover:text-white">Jobs</a>
        <a href={`${base}/energy-game`} className="hover:text-white">Energy Game</a>
      </div>
      <a href={`${base}/#jobs`} className="btn glass text-xs md:text-sm">今すぐ応募</a>
    </motion.nav>
  );
};
