"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function useTyping(text: string, speed = 80) {
  const [out, setOut] = useState('');
  useEffect(() => {
    setOut('');
    let i = 0;
    const t = setInterval(() => {
      setOut(text.slice(0, i++));
      if (i > text.length) clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, [text, speed]);
  return out;
}

export const Hero = () => {
  const typed = useTyping('Code the Future.', 80);
  return (
    <section id="hero" className="section relative overflow-hidden">
      <div className="container text-center">
        <motion.h1 className="h1 mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {typed}
        </motion.h1>
        <p className="p max-w-2xl mx-auto">
          その一行が、地球のターニングポイントになる。
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#mission" className="btn">私たちの挑戦を知る</a>
        </div>
      </div>
      <EnergyFlow />
    </section>
  );
};

const EnergyFlow = () => {
  // simple animated gradient beams as placeholder for globe/flow
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 opacity-30" style={{
        background:
          'radial-gradient(600px 200px at 20% 30%, rgba(0,195,137,0.35), transparent),\
           radial-gradient(600px 200px at 80% 70%, rgba(0,113,197,0.35), transparent)'
      }} />
      <motion.div
        className="absolute left-0 right-0 mx-auto top-1/3 h-0.5 bg-gradient-to-r from-brand.green via-white to-brand.blue"
        initial={{ width: 0 }}
        animate={{ width: '80%' }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};
