'use client';

import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  { title: 'BoolBnb', description: 'Airbnb-like con Laravel/Vue.js', tech: ['Laravel','Vue.js','MySQL'], github: 'https://github.com/CraciaDenisStefan/BoolBnb' },
  { title: 'BoolPetCare', description: 'Gestionale cliniche veterinarie', tech: ['Laravel','PHP','MySQL'], github: 'https://github.com/niccoloruberti/BoolPetCare' },
  { title: 'Dashboard Bootstrap', description: 'Dashboard responsive con grafici', tech: ['HTML','CSS','Bootstrap'], github: 'https://github.com/andreacassini/html-css-bootstrap-dashboard', demo: 'https://andreacassini.github.io/html-css-bootstrap-dashboard/' },
  { title: 'Spotify Web Clone', description: 'Clone UI Spotify', tech: ['HTML','CSS','JavaScript'], github: 'https://github.com/andreacassini/html-css-spotifyweb', demo: 'https://andreacassini.github.io/html-css-spotifyweb/' },
  { title: 'Discord Clone', description: 'Replica interfaccia Discord', tech: ['HTML','CSS'], github: 'https://github.com/andreacassini/htmlcss-discord', demo: 'https://andreacassini.github.io/htmlcss-discord/' },
  { title: 'Freelancer Portfolio', description: 'Template portfolio', tech: ['HTML','CSS','Bootstrap'], github: 'https://github.com/andreacassini/html-css-bootstrap-freelancer', demo: 'https://andreacassini.github.io/html-css-bootstrap-freelancer/' },
];

export default function ProjectsPage() {
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
            Progetti
          </motion.h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:border-[var(--accent-primary)] transition"
              >
                <h3 className="text-xl mb-2 group-hover:text-[var(--accent-primary)] transition-colors">{p.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-[var(--bg-tertiary)] text-sm text-[var(--text-secondary)] border border-[var(--border-primary)]">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">
                      {p.demo ? 'GitHub →' : 'View Code →'}
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">Live Demo →</a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
