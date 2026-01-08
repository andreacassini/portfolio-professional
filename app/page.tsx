'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="container">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-sm font-medium text-[var(--text-secondary)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-success)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-success)]"></span>
                </span>
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              Ciao, sono <span className="gradient-text">Andrea Cassini</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-[var(--text-secondary)] mb-4 max-w-3xl leading-relaxed"
            >
              Full Stack Developer specializzato in <span className="text-[var(--text-primary)] font-semibold">React</span>, <span className="text-[var(--text-primary)] font-semibold">Laravel</span> e design system moderni.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-[var(--text-tertiary)] mb-12 max-w-2xl"
            >
              Trasformo idee in esperienze digitali eleganti e performanti.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/projects" className="btn btn-primary btn-large">
                Vedi i miei progetti
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link href="/contact" className="btn btn-secondary btn-large">
                Contattami
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-6 mt-12"
            >
              <a
                href="https://github.com/andreacassini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/andrea-cassini-a316161ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:andrea@example.com"
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">
              Progetti <span className="gradient-text">selezionati</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Una selezione dei miei progetti più recenti
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <FeaturedProject
              title="BoolBnb"
              description="Piattaforma di prenotazione appartamenti con sistema di pagamento integrato, gestione recensioni e dashboard amministratore."
              tags={['Laravel', 'Vue.js', 'MySQL', 'Stripe']}
              delay={0.2}
              github="https://github.com/CraciaDenisStefan/BoolBnb"
            />
            <FeaturedProject
              title="BoolPetCare"
              description="Sistema gestionale per cliniche veterinarie con booking appuntamenti, cartelle cliniche digitali e gestione pazienti."
              tags={['Laravel', 'PHP', 'MySQL', 'Bootstrap']}
              delay={0.3}
              github="https://github.com/niccoloruberti/BoolPetCare"
            />
            <FeaturedProject
              title="Spotify Web Clone"
              description="Interfaccia ispirata a Spotify, responsive e ottimizzata."
              tags={['HTML', 'CSS', 'JavaScript']}
              delay={0.4}
              github="https://github.com/andreacassini/html-css-spotifyweb"
              demo="https://andreacassini.github.io/html-css-spotifyweb/"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/projects" className="btn btn-secondary">
              Vedi tutti i progetti
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function FeaturedProject({ title, description, tags, delay, github, demo }: { title: string; description: string; tags: string[]; delay: number; github?: string; demo?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:border-[var(--accent-primary)] transition-all duration-300"
    >
      <h3 className="text-2xl font-semibold mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
        {title}
      </h3>
      <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-[var(--bg-tertiary)] text-sm text-[var(--text-secondary)] border border-[var(--border-primary)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {(github || demo) && (
        <div className="mt-6 flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-small"
            >
              {demo ? 'GitHub →' : 'View Code →'}
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-small"
            >
              Live Demo →
            </a>
          )}
        </div>
      )}

      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-6 h-6 text-[var(--accent-primary)]" />
      </div>
    </motion.div>
  );
}
