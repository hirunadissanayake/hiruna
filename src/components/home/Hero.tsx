'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] md:opacity-[0.03] select-none pointer-events-none">
                <h2 className="text-[25vw] md:text-[20vw] font-display font-black leading-none uppercase">
                    Engineer
                </h2>
            </div>

            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-4"
                    >
                        <span className="text-secondary uppercase tracking-[0.3em] text-sm">
                            Available for Freelance
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] tracking-tighter mb-8"
                    >
                        HIRUNA <br /> DISSANAYAKE
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-2xl text-zinc-400 text-base md:text-lg lg:text-xl font-light mb-12"
                    >
                        <p className="px-4 md:px-0">
                            Crafting high-performance web experiences and elegant software solutions.
                            Bridging the gap between design excellence and technical precision.
                        </p>
                    </motion.div>

                    {/* Large Reveal Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="relative w-full max-w-5xl aspect-[16/9] bg-zinc-900 overflow-hidden group shadow-2xl mt-12"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        <Image
                            src="/pictures/hero_main.jpg"
                            alt="Hiruna Dissanayake"
                            fill
                            className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-[10px] uppercase tracking-[0.4em] mb-2 text-zinc-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
