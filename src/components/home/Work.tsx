'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: 'INTERNBAY PORTAL',
        role: 'Full Stack Developer',
        description: 'A dedicated campus hiring ecosystem connecting students with top-tier internships. Built with Spring Boot for robust backend performance and a modern web interface.',
        tech: ['Spring Boot', 'MySQL', 'Bootstrap', 'Java'],
        github: 'https://github.com/hirunadissanayake/InternBay-job-portal',
        image: '/icons/icons8-github-50.png',
        color: 'bg-zinc-900',
        number: '01'
    },
    {
        title: 'CIC VETCARE POS',
        role: 'Lead Architect',
        description: 'Enterprise-grade POS solution for veterinary care management. Features multi-layered architecture for high scalability and secure data handling.',
        tech: ['JavaFX', 'JDBC', 'MySQL', 'Layered Architecture'],
        github: 'https://github.com/hirunadissanayake/CICVetCare-Layerd',
        image: '/icons/icons8-github-50.png',
        color: 'bg-zinc-900',
        number: '02'
    },
    {
        title: 'SERENITY HEALTH',
        role: 'Web Developer',
        description: 'A comprehensive digital platform for mental health therapy centers, focusing on user experience and accessible healthcare management.',
        tech: ['HTML', 'CSS', 'JS', 'PHP/MySQL'],
        github: 'https://github.com/hirunadissanayake/Serenity-Mental-Health-Therapy-Center',
        image: '/icons/icons8-github-50.png',
        color: 'bg-zinc-900',
        number: '03'
    },
    {
        title: 'TIC-TAC-TOE AI',
        role: 'AI Researcher',
        description: 'Advanced implementation of the Minimax algorithm in a gaming context. Features an unbeatable AI engine with optimized tree traversal.',
        tech: ['Java', 'Algorithms', 'AI', 'JavaFX'],
        github: 'https://github.com/hirunadissanayake/tic-tac-toe',
        image: '/icons/icons8-github-50.png',
        color: 'bg-zinc-900',
        number: '04'
    },
];

export function Work() {
    return (
        <section id="work" className="py-32 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block font-black">Archive /// 2024-2025</span>
                        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase leading-[0.8]">
                            Selected <br /> <span className="text-outline text-transparent">Artifacts</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="max-w-xs"
                    >
                        <p className="text-zinc-500 text-sm uppercase tracking-widest leading-relaxed">
                            A curated selection of software engineering projects,
                            focusing on architectural integrity and performance.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-40">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
                                <div className="md:col-span-7 overflow-hidden">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                        className={`relative aspect-[16/10] ${project.color} overflow-hidden shadow-2xl`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent z-10" />
                                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                            <span className="text-white/5 text-[8vw] font-display font-black uppercase rotate-12 scale-110 select-none whitespace-nowrap">
                                                {project.title.split(' ')[0]}
                                            </span>
                                        </div>
                                        {/* Floating Tech Badges */}
                                        <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
                                            {project.tech.slice(0, 3).map(t => (
                                                <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-tighter font-bold">{t}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="md:col-span-5 space-y-6 md:space-y-8">
                                    <div className="space-y-2">
                                        <span className="text-accent text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-black">{project.role}</span>
                                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tighter uppercase group-hover:tracking-normal transition-all duration-700">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-zinc-400 text-base md:text-lg lg:text-xl font-light leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center gap-8 pt-4">
                                        <a
                                            href={project.github}
                                            className="group/btn flex items-center gap-3 text-xs uppercase tracking-widest font-black text-white hover:text-accent transition-colors"
                                        >
                                            View Source
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-40 pt-20 border-t border-zinc-900 text-center"
                >
                    <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs mb-8 font-black">Want to see more?</p>
                    <a
                        href="https://github.com/hirunadissanayake"
                        className="inline-flex items-center gap-4 text-4xl md:text-6xl font-display font-black uppercase tracking-tighter hover:text-accent transition-all duration-300"
                    >
                        Explore GitHub <Github size={40} className="md:size-16" />
                    </a>
                </motion.div>
            </div>

            <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
        .group:hover .text-outline {
          -webkit-text-stroke: 1px rgba(255,100,100,0.5); /* Subtle accent glow */
        }
      `}</style>
        </section>
    );
}
