'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe,
    Palette,
    Smartphone,
    Monitor
} from 'lucide-react';

const skills = [
    { name: 'Desktop Apps', icon: <Monitor className="w-8 h-8" /> },
    { name: 'Web Experiences', icon: <Globe className="w-8 h-8" /> },
    { name: 'Mobile Apps', icon: <Smartphone className="w-8 h-8" /> },
    { name: 'UI/UX Design', icon: <Palette className="w-8 h-8" /> },
];


const technologies = [
    'Java', 'MySQL', 'Python', 'JavaScript', 'HTML5', 'CSS3',
    'React', 'MongoDB', 'IntelliJ', 'Figma', 'GitHub', 'Linux'
];

export function Skills() {
    return (
        <section id="skills" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
            {/* Decorative vertical lines */}
            <div className="absolute inset-0 flex justify-around opacity-5 pointer-events-none">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-[1px] h-full bg-white" />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/* Left: Skills Grid */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-accent uppercase tracking-[0.3em] text-[10px] md:text-sm mb-4 block">Capabilities</span>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase mb-2">
                                Core <br /> Expertise
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="p-8 bg-zinc-900/50 border border-zinc-800 hover:border-accent transition-all duration-300"
                                >
                                    <div className="mb-6 text-accent">{skill.icon}</div>
                                    <h3 className="text-xl font-display font-medium uppercase tracking-tight">{skill.name}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Technologies Ticker/Grid */}
                    <div className="flex flex-col justify-center space-y-8 md:space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase md:text-right leading-none">
                                Stack & <br /> Tools
                            </h2>
                        </motion.div>

                        <div className="flex flex-wrap md:justify-end gap-2 md:gap-3 max-w-lg md:ml-auto">
                            {technologies.map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="px-4 md:px-6 py-2 md:py-3 bg-white text-black text-[10px] md:text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors cursor-default"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
