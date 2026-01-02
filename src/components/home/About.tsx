'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function About() {
    return (
        <section id="about" className="py-32 relative overflow-hidden bg-white text-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden group shadow-xl"
                        >
                            <Image
                                src="/pictures/hero_new.jpg"
                                alt="About Hiruna"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter mb-6 uppercase">
                                The <br /> Visionary
                            </h2>
                            <div className="w-20 h-2 bg-black mb-8" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-lg md:text-xl font-light text-zinc-700 leading-relaxed"
                        >
                            <p>
                                I am <span className="font-bold text-black">Hiruna Sankalpa Dissanayake</span>,
                                a 23-year-old software engineering student with a relentless drive for architectural beauty in code.
                            </p>
                            <p>
                                Based in Sri Lanka, I specialize in Java full-stack development and modern web ecosystems.
                                I believe that software should be more than functional—it should be an experience that resonates.
                            </p>
                            <p>
                                Whether it&apos;s a complex JavaFX desktop suite or a high-performance React application,
                                my goal is always the same: efficiency, scalability, and absolute precision.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="pt-6"
                        >
                            <a
                                href="/cv/Hiruna_Dissanayake_CV.pdf"
                                className="inline-block px-8 py-4 bg-black text-white text-sm uppercase tracking-widest font-bold hover:bg-zinc-800 transition-colors"
                            >
                                Download Credentials
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
