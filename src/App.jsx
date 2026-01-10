import React from 'react';
import Footer from './components/Footer';
import { Sparkles, ExternalLink, Globe2 } from 'lucide-react';
import navLogo from './Assets/navLogo.jpeg';

function App() {
    return (
        <div className="min-h-screen bg-[#020617] flex flex-col selection:bg-accent-gold selection:text-prime-950">
            {/* Premium Header - Updated to #111827 */}
            <header className="w-full py-5 px-8 flex justify-between items-center animate-fade-in z-50 bg-[#111827]">
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="relative">
                        <img
                            src={navLogo}
                            alt="Al Rayah Global Logo"
                            className="w-11 h-11 rounded-full border border-accent-gold/20 object-cover shadow-lg transition-all duration-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight gold-gradient italic leading-none">Al RAYAH GLOBAL GROUP LTD</span>
                        <span className="text-[10px] text-accent-gold/50 uppercase tracking-[0.2em] font-bold mt-1">Excellence Defined</span>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-grow flex flex-col items-center justify-center px-4 py-20 text-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-gold/5 rounded-full blur-[120px] animate-float" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] animate-float" style={{ animationDelay: '-3s' }} />

                <div className="z-10 max-w-5xl animate-slide-up flex flex-col items-center">

                    {/* Top Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/5 border border-accent-gold/20 text-accent-gold text-[11px] font-bold tracking-[0.3em] uppercase mb-12">
                        <Sparkles size={14} className="animate-pulse" />
                        Elevating Excellence
                    </div>

                    {/* Main Headline Group */}
                    <div className="space-y-6 mb-12">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-prime-100 leading-[0.9] tracking-tighter">
                            Something <br />
                            <span className="gold-gradient text-glow italic">Global</span> is Coming
                        </h1>

                        <p className="text-xl md:text-2xl text-prime-400 max-w-3xl mx-auto font-medium leading-relaxed">
                            Stay tuned for future updates as we prepare to unveil something extraordinary.
                        </p>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;

