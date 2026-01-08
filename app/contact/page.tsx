'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="py-24">
        <div className="container max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            Contatti
          </motion.h1>

          <div className="grid gap-6">
            <a href="https://github.com/andreacassini" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/andrea-cassini-a316161ba/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              LinkedIn
            </a>
            <a href="mailto:andrea@example.com" className="btn btn-primary">
              Invia Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
