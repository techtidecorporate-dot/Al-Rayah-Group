import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const LegalPageLayout = ({ title, lastUpdated, sections, children, icon: Icon }) => {
    const [activeSection, setActiveSection] = useState("");
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 100;

            const current = sectionElements.find((el, i) => {
                if (!el) return false;
                const nextEl = sectionElements[i + 1];
                if (nextEl) {
                    return scrollPosition >= el.offsetTop && scrollPosition < nextEl.offsetTop;
                }
                return scrollPosition >= el.offsetTop;
            });

            if (current) {
                setActiveSection(current.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] text-prime-100 selection:bg-accent-gold/30 selection:text-white font-sans">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-white/5">
                <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-prime-400 hover:text-accent-gold transition-all group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest">Back to Overview</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent-gold/10 flex items-center justify-center border border-accent-gold/20">
                            {Icon && <Icon size={16} className="text-accent-gold" />}
                        </div>
                        <span className="hidden md:block text-[10px] font-black tracking-[0.3em] uppercase text-accent-gold/60">Official Governance</span>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16">
                {/* Sidebar Navigation - Inspired by Google Policies */}
                <aside className="lg:w-72 flex-shrink-0">
                    <div className="sticky top-24 space-y-8">
                        <div>
                            <h1 className="text-3xl font-black text-prime-100 mb-2 leading-none">{title}</h1>
                            <p className="text-[10px] text-prime-500 font-bold uppercase tracking-widest">Last Updated: {lastUpdated}</p>
                        </div>

                        <nav className="space-y-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`w-full text-left px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all rounded-lg flex items-center justify-between group ${activeSection === section.id
                                        ? 'bg-accent-gold/10 text-accent-gold border-l-2 border-accent-gold'
                                        : 'text-prime-400 hover:text-prime-200 hover:bg-white/5'
                                        }`}
                                >
                                    <span className="truncate">{section.title}</span>
                                    <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${activeSection === section.id ? 'opacity-100' : ''}`} />
                                </button>
                            ))}
                        </nav>

                        <div className="pt-8 border-t border-white/5">
                            <p className="text-[10px] font-bold text-prime-600 uppercase tracking-widest leading-relaxed">
                                Al Rayah Global Group Ltd<br />
                                Registered in England & Wales
                            </p>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-grow max-w-3xl">
                    <div className="prose-legal">
                        {sections.map((section) => (
                            <section
                                key={section.id}
                                id={section.id}
                                className="mb-20 scroll-mt-24 last:mb-0"
                            >
                                <h2 className="text-2xl font-bold text-prime-100 mb-6 flex items-center gap-4 group">
                                    <span className="text-accent-gold/50 font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity">#</span>
                                    {section.title}
                                </h2>
                                <div className="text-prime-300 leading-relaxed text-base space-y-4 font-medium">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Footer Area */}
                    <div className="mt-24 pt-12 border-t border-white/5 text-center lg:text-left">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent-gold/5 border border-accent-gold/10 text-accent-gold text-[10px] font-bold uppercase tracking-[0.2em]">
                            <Icon size={14} />
                            Principled Governance
                        </div>
                        <p className="mt-6 text-prime-500 text-xs italic max-w-xl">
                            AL RAYAH GLOBAL GROUP LTD maintains its digital presence with clarity, proportionality, and principled governance, ensuring compliance with applicable law.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LegalPageLayout;
