import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CredentialsPreview = () => {
  return (
    <section id="credentials" className="pt-36 relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.24em] text-gray-500">
              Profile Snapshot
            </span>
            <h2 className="mt-4 text-4xl font-display font-bold text-white md:text-6xl">
              Credentials
            </h2>
            <p className="mt-4 text-lg font-light leading-relaxed text-gray-400">
              Explore my full profile for education, certifications, and career highlights without adding extra clutter to the home page.
            </p>
          </div>

          <Link
            to="/profile"
            className="group inline-flex items-center gap-3 self-start rounded-full border border-white/15 px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            View Full Profile
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </Motion.div>
      </div>
    </section>
  );
};

export default CredentialsPreview;