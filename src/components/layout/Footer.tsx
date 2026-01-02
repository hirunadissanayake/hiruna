import React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="py-20 bg-black text-zinc-500 border-t border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-display font-bold text-white tracking-widest mb-2 uppercase">Hiruna.</h3>
                        <p className="text-xs uppercase tracking-widest">Architecting the future, line by line.</p>
                    </div>

                    <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
                        <Link href="#about" className="hover:text-white transition-colors">About</Link>
                        <Link href="#work" className="hover:text-white transition-colors">Work</Link>
                        <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
                        <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>

                    <div className="text-[10px] uppercase tracking-widest text-zinc-600">
                        &copy; {new Date().getFullYear()} Hiruna Dissanayake. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
