import React from 'react';
import { motion as Motion } from 'framer-motion';

const LoadingScreen = ({ progress }) => {
  const safeProgress = Math.min(100, Math.max(0, Math.round(progress)));

  return (
    <Motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[120] overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_35%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:3.5rem_3.5rem]" />

      <div className="relative flex min-h-screen flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-16">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.45em] text-white/40 sm:text-xs">
          <span>Opening Portfolio</span>
          <span>{safeProgress}%</span>
        </div>

        <div className="mx-auto flex w-full max-w-5xl flex-col items-start">
          <Motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[18vw] font-bold uppercase leading-none tracking-[-0.08em] text-white sm:text-[10rem] lg:text-[12rem]"
          >
            Vaibhav.
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-xs uppercase tracking-[0.4em] text-white/45 sm:text-sm"
          >
            Creative Developer Portfolio
          </Motion.p>

          <div className="mt-12 w-full max-w-3xl sm:mt-16">
            <div className="mb-3 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.35em] text-white/45 sm:text-xs">
              <span>Loading Experience</span>
              <span>{safeProgress}%</span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 sm:h-3">
              <Motion.div
                className="h-full rounded-full bg-white"
                animate={{ width: `${safeProgress}%` }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-white/30 sm:text-xs">
          <span>Based In India</span>
          <span>Vaibhav Raj</span>
        </div>
      </div>
    </Motion.div>
  );
};

export default LoadingScreen;