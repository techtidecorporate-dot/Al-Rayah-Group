import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full py-12 px-6 border-t border-accent-gold/5 bg-[#111827] relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                {/* Brand Info */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold gold-gradient italic">AL RAYAH GLOBAL GROUP LTD</h3>
                    <p className="text-prime-400 text-sm leading-relaxed">
                        Delivering excellence across borders. A global presence with a local commitment to quality and innovation.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-6 ml-16">
                    <h4 className="text-accent-gold font-bold uppercase tracking-wider text-xs">Contact Us</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-prime-300 hover:text-accent-gold transition-colors">
                            <Phone size={18} className="mt-1 flex-shrink-0" />
                            <div className="text-sm">
                                <p>+44 7848 101848 <span className="text-prime-500 text-xs ml-1">(UK)</span></p>
                                <p>+41 79 726 55 55 <span className="text-prime-500 text-xs ml-1">(CH)</span></p>
                                <p>+1 646 777 1766 <span className="text-prime-500 text-xs ml-1">(USA)</span></p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Address */}
                <div className="space-y-6">
                    <h4 className="text-accent-gold font-bold uppercase tracking-wider text-xs">Global Office</h4>
                    <div className="flex items-start gap-3 text-prime-300 text-sm">
                        <MapPin size={18} className="mt-1 flex-shrink-0" />
                        <p>
                            11-12 Old Bond Street, Mayfair<br />
                            London W1S 4PN<br />
                            United Kingdom
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-accent-gold/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-prime-500">
                <p>© {new Date().getFullYear()} AL RAYAH GLOBAL GROUP LTD. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
