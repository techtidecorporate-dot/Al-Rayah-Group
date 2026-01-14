import React from 'react';
import { Cookie, ShieldCheck, Settings, ExternalLink, Globe, Mail } from 'lucide-react';
import LegalPageLayout from './LegalPageLayout';

const CookiePolicy = () => {
    const sections = [
        {
            id: "intro",
            title: "1. Introduction",
            content: (
                <div className="space-y-4">
                    <p>This Cookie Policy explains how AL RAYAH GLOBAL GROUP LTD (“we”, “us”, “our”) uses cookies and similar technologies on the website www.alrayahglobal.com (the “Website”).</p>
                    <p>The Website is currently operating in a pre-launch “Coming Soon” phase and serves informational and navigational purposes only. No services, onboarding, or transactional activities are conducted via this Website at this stage.</p>
                    <p className="italic text-accent-gold/80 bg-accent-gold/5 p-4 rounded-xl border border-accent-gold/10 leading-relaxed font-medium">
                        We approach digital governance with discipline, restraint, and responsible stewardship.
                    </p>
                </div>
            )
        },
        {
            id: "corporate",
            title: "2. Corporate identification",
            content: (
                <div className="bg-prime-900/50 p-6 rounded-2xl border border-prime-800 space-y-6">
                    <div>
                        <p className="text-[10px] text-accent-gold font-black uppercase tracking-[0.2em] mb-2">Legal Entity</p>
                        <p className="text-xl font-bold text-prime-100 uppercase tracking-tight italic">AL RAYAH GLOBAL GROUP LTD</p>
                        <p className="text-[10px] text-prime-500 font-bold tracking-widest uppercase mt-1">Registered in England & Wales | Company No: 16846341</p>
                    </div>
                    <div className="pt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-[10px] text-prime-500 font-bold uppercase tracking-widest mb-1">Registered Office</p>
                            <p className="text-sm font-medium leading-relaxed text-prime-300 italic">
                                11–12 Old Bond Street, Mayfair<br />
                                London, W1S 4PN, United Kingdom
                            </p>
                        </div>
                        <div>
                            <p className="text-[10px] text-prime-500 font-bold uppercase tracking-widest mb-1">Privacy Department</p>
                            <a href="mailto:privacy@alrayahglobal.com" className="text-accent-gold font-bold hover:underline transition-all flex items-center gap-2">
                                <Mail size={14} /> privacy@alrayahglobal.com
                            </a>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "what-are-cookies",
            title: "3. What are cookies?",
            content: (
                <>
                    <p>Cookies are small text files placed on your device when you visit a website. They support essential technical functions such as security, stability, and basic navigation.</p>
                    <p className="mt-4 font-bold text-prime-200">Common types include:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2 text-prime-300">
                        <li><span className="text-prime-100 font-bold underline decoration-white/10">Session cookies</span> — deleted when you close your browser</li>
                        <li><span className="text-prime-100 font-bold underline decoration-white/10">Persistent cookies</span> — stored until they expire or are deleted</li>
                        <li><span className="text-prime-100 font-bold underline decoration-white/10">First-party cookies</span> — set directly by this Website</li>
                    </ul>
                </>
            )
        },
        {
            id: "cookies-used",
            title: "4. Cookies used (Pre-launch phase)",
            content: (
                <div className="space-y-4">
                    <p>During the current “Coming Soon” phase, this Website uses only strictly necessary cookies.</p>
                    <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                        <div className="flex items-center gap-3 text-accent-gold mb-2">
                            <ShieldCheck size={18} />
                            <h4 className="font-bold text-xs uppercase tracking-widest">Strictly Necessary Cookies</h4>
                        </div>
                        <p className="text-sm leading-relaxed text-prime-300">
                            These cookies are essential for basic website functionality, security, system integrity, load balancing, and error prevention. These cookies cannot be disabled as the Website would not function properly without them.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "non-essential",
            title: "5. No non-essential cookies",
            content: (
                <div className="space-y-4">
                    <p>At present, the Website <span className="text-prime-100 font-bold italic">does not use</span> analytics cookies, advertising or targeting cookies, or any form of profiling or behavioural tracking.</p>
                    <p className="p-4 border-l-2 border-accent-gold/30 bg-accent-gold/5 rounded-r-lg text-sm italic">If non-essential cookies are introduced in the future, this Policy will be updated, and explicit consent will be obtained where required by law.</p>
                </div>
            )
        },
        {
            id: "legal-basis",
            title: "6. Legal basis & compliance",
            content: (
                <div className="space-y-4">
                    <p>Our cookie practices comply with applicable regulations, including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-prime-300">
                        <li>UK GDPR & Data Protection Act 2018</li>
                        <li>Privacy and Electronic Communications Regulations (PECR)</li>
                        <li>EU ePrivacy Directive</li>
                    </ul>
                    <p className="mt-6 text-sm italic text-prime-400">As only strictly necessary cookies are used, explicit consent is not required at this stage.</p>
                </div>
            )
        },
        {
            id: "managing-cookies",
            title: "7. Managing cookies",
            content: (
                <div className="space-y-4">
                    <p>You may manage or restrict cookies through your browser settings. Most browsers allow you to block cookies entirely, delete cookies after each session, or receive alerts when cookies are placed.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {[
                            { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                            { name: "Microsoft Edge", url: "https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" },
                            { name: "Mozilla Firefox", url: "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" },
                            { name: "Apple Safari", url: "https://support.apple.com/en-gb/guide/safari/sfri11471/mac" }
                        ].map((browser, i) => (
                            <a key={i} href={browser.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
                                <span className="text-xs font-bold uppercase tracking-widest text-prime-400 group-hover:text-prime-200">{browser.name}</span>
                                <ExternalLink size={12} className="text-accent-gold" />
                            </a>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "infrastructure",
            title: "8. Infrastructure disclosure",
            content: (
                <div className="space-y-4">
                    <p className="text-sm leading-relaxed text-prime-300">Technical infrastructure and essential cookies may be provided via <span className="text-prime-100 font-bold underline decoration-accent-gold/20">HOSTINGER.COM</span> and <span className="text-prime-100 font-bold underline decoration-accent-gold/20">Google Workspace</span>.</p>
                    <p className="text-[10px] text-prime-500 font-bold uppercase tracking-widest mt-4">These providers operate as data processors under strict confidentiality and security protocols.</p>
                </div>
            )
        },
        {
            id: "conclusion",
            title: "9. Concluding statement",
            content: (
                <p className="text-prime-200 italic font-medium border-l-2 border-accent-gold/30 pl-6 py-2">
                    "We maintain our digital infrastructure with restraint, ensuring technology serves our principles of privacy and discipline."
                </p>
            )
        }
    ];

    return (
        <LegalPageLayout
            title="Cookie Policy"
            lastUpdated="January 2026"
            sections={sections}
            icon={Cookie}
        />
    );
};

export default CookiePolicy;
