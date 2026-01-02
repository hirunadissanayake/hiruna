'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

const socialLinks = [
    { name: 'Gmail', icon: <Mail />, href: 'mailto:hirunasankalpa@gmail.com' },
    { name: 'LinkedIn', icon: <Linkedin />, href: 'https://www.linkedin.com/in/hiruna-dissanayake-616411290/' },
    { name: 'GitHub', icon: <Github />, href: 'https://github.com/hirunadissanayake' },
    { name: 'Instagram', icon: <Instagram />, href: 'https://www.instagram.com/boy_hiruu' },
    { name: 'Facebook', icon: <Facebook />, href: 'https://www.facebook.com/hiruna.dissanayake.33' },
];

export function Contact() {
    return (
        <section id="contact" className="py-32 bg-white text-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] md:text-sm mb-4 block">Get in touch</span>
                            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter uppercase mb-6">
                                Let&apos;s <br /> Connect
                            </h2>
                        </motion.div>

                        <div className="space-y-6">
                            <p className="text-xl text-zinc-600 font-light max-w-md">
                                Interested in working together or just want to say hi?
                                I&apos;m always open to discussing new projects and opportunities.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full hover:bg-zinc-800 transition-colors"
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-50 p-10 md:p-16 border border-zinc-100">
                        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
                            <input type="hidden" name="access_key" value="4a9cd905-853e-4b79-854a-d5e0cf329f1f" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400">First Name</label>
                                    <input type="text" name="firstName" required className="w-full bg-transparent border-b border-zinc-200 py-2 focus:border-black outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400">Last Name</label>
                                    <input type="text" name="lastName" required className="w-full bg-transparent border-b border-zinc-200 py-2 focus:border-black outline-none transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400">Email Address</label>
                                <input type="email" name="email" required className="w-full bg-transparent border-b border-zinc-200 py-2 focus:border-black outline-none transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400">Message</label>
                                <textarea name="message" rows={4} required className="w-full bg-transparent border-b border-zinc-200 py-2 focus:border-black outline-none transition-colors resize-none" />
                            </div>

                            <button type="submit" className="group flex items-center gap-2 text-sm uppercase tracking-widest font-black pt-4 hover:text-zinc-600 transition-colors">
                                Send Message <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
