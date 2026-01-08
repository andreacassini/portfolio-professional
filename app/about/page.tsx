'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="py-24">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            Chi sono
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Sono un Full Stack Developer focalizzato su React e Laravel. Mi piace progettare esperienze pulite, performanti e ben strutturate.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-4">Competenze</h3>
              <div className="flex flex-wrap gap-2">
                {["React","Next.js","TypeScript","Laravel","PHP","MySQL","Tailwind","GSAP","Git"].map((s)=>(
                  <span key={s} className="px-3 py-1 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-sm text-[var(--text-secondary)]">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
