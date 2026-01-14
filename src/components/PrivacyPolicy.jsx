import React from 'react';
import { Shield, Lock, Eye, Server, UserCheck, Mail } from 'lucide-react';
import LegalPageLayout from './LegalPageLayout';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    const sections = [
        {
            id: "intro",
            title: "1. Introduction",
            content: (
                <div className="space-y-4">
                    <p>AL RAYAH GLOBAL GROUP LTD (“we”, “us”, “our”) is committed to safeguarding personal information with discipline, responsibility, and principled stewardship.</p>
                    <p>This Privacy Policy explains how limited personal data may be collected and processed through the website www.alrayahglobal.com (the “Website”) during its pre-launch “Coming Soon” phase.</p>
                    <p className="italic text-accent-gold/80 bg-accent-gold/5 p-4 rounded-xl border border-accent-gold/10 leading-relaxed font-medium">
                        At this stage, the Website serves informational and navigational purposes only and does not provide operational services, client onboarding, or transactional functionality.
                    </p>
                </div>
            )
        },
        {
            id: "controller",
            title: "2. Data controller identification",
            content: (
                <div className="bg-prime-900/50 p-6 rounded-2xl border border-prime-800 space-y-6">
                    <div>
                        <p className="text-[10px] text-accent-gold font-black uppercase tracking-[0.2em] mb-2">Legal Entity</p>
                        <p className="text-xl font-bold text-prime-100 uppercase tracking-tight italic">AL RAYAH GLOBAL GROUP LTD</p>
                        <p className="text-[10px] text-prime-500 font-bold tracking-widest uppercase mt-1">Company No: 16846341 (England & Wales)</p>
                    </div>
                    <div className="pt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-[10px] text-prime-500 font-bold uppercase tracking-widest mb-1">Registered Office</p>
                            <p className="text-sm leading-relaxed text-prime-300">
                                11–12 Old Bond Street, Mayfair<br />
                                London, W1S 4PN, United Kingdom
                            </p>
                        </div>
                        <div>
                            <p className="text-[10px] text-prime-500 font-bold uppercase tracking-widest mb-1">Privacy Department</p>
                            <a href="mailto:privacy@alrayahglobal.com" className="text-accent-gold font-bold hover:underline transition-all">privacy@alrayahglobal.com</a>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "scope",
            title: "3. Scope & categories of data collection",
            content: (
                <div className="space-y-4">
                    <p>During the current “Coming Soon” phase, we collect only minimal and proportionate data necessary for the technical operation of the Website:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-prime-300">
                        <li><span className="text-prime-100 font-bold">Technical identifiers</span> (e.g. IP address, browser type, device metadata)</li>
                        <li><span className="text-prime-100 font-bold">Navigational data</span> (e.g. page visits, referral sources, timestamps)</li>
                        <li><span className="text-prime-100 font-bold">Communication data</span> (Information voluntarily provided via official email channels)</li>
                    </ul>
                    <div className="mt-8 p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                        <p className="text-[10px] text-red-400 font-black uppercase tracking-[0.2em] mb-3">Critical Exclusion</p>
                        <p className="text-sm leading-relaxed text-prime-400">We do not knowingly collect, process, or store client onboarding data, financial/payment information, or any "Special Categories" of personal data at this stage.</p>
                    </div>
                </div>
            )
        },
        {
            id: "legal-basis",
            title: "4. Legal basis for processing",
            content: (
                <div className="space-y-4">
                    <p>Personal data is processed in strict accordance with the UK GDPR and the Data Protection Act 2018 under the following lawful bases:</p>
                    <ul className="space-y-3">
                        <li className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                            <UserCheck className="text-accent-gold flex-shrink-0" size={18} />
                            <div>
                                <p className="text-prime-100 font-bold text-sm">Legitimate Interests</p>
                                <p className="text-xs text-prime-400 mt-1">To operate, secure, and maintain the integrity of our digital infrastructure.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                            <Shield className="text-accent-gold flex-shrink-0" size={18} />
                            <div>
                                <p className="text-prime-100 font-bold text-sm">Consent</p>
                                <p className="text-xs text-prime-400 mt-1">Where you voluntarily initiate contact or accept non-essential technical settings.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "purpose",
            title: "5. Purpose of processing",
            content: (
                <div className="space-y-4">
                    <p>We process data solely to maintain and secure the Website, respond to legitimate corporate inquiries, and prepare for future operational deployment.</p>
                    <p className="font-bold text-accent-gold italic p-4 border border-accent-gold/10 rounded-xl bg-accent-gold/5 text-sm uppercase tracking-wider text-center">
                        WE DO NOT SELL, RENT, OR TRADE PERSONAL INFORMATION TO ANY THIRD PARTIES.
                    </p>
                </div>
            )
        },
        {
            id: "sharing",
            title: "6. Data sharing & international transfers",
            content: (
                <div className="space-y-4 text-sm leading-relaxed">
                    <p>Personal data is not shared with external parties except for essential technical service providers (e.g. hosting) operating under proper confidentiality agreements, or where required by legal obligation.</p>
                    <p>Any international transfers are conducted with appropriate safeguards to ensure a level of protection equivalent to that provided within the United Kingdom.</p>
                </div>
            )
        },
        {
            id: "retention",
            title: "7. Data retention policy",
            content: (
                <p>We retain technical and communication data only for as long as necessary to fulfil the limited purposes outlined in this Policy, or to comply with statutory legal retention requirements.</p>
            )
        },
        {
            id: "rights",
            title: "8. Your data protection rights",
            content: (
                <div className="space-y-4">
                    <p>Under applicable laws, you possess the following rights regarding your personal information:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {["Right to Access", "Right to Rectification", "Right to Erasure", "Right to Object"].map((right, i) => (
                            <div key={i} className="px-4 py-2 rounded-lg bg-prime-900 border border-prime-800 text-xs font-bold text-prime-200 uppercase tracking-widest">
                                {right}
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-sm">Formal requests may be submitted to: <span className="text-accent-gold font-bold underline decoration-accent-gold/30 underline-offset-4">privacy@alrayahglobal.com</span></p>
                </div>
            )
        },
        {
            id: "children",
            title: "9. Children's privacy",
            content: (
                <p>The Website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware of any such data collection, we will take immediate steps to delete it.</p>
            )
        },
        {
            id: "authority",
            title: "10. Regulatory authority",
            content: (
                <p>If you are located in the UK, you have the right to lodge a complaint with the <span className="text-prime-100 font-bold underline decoration-accent-gold/30">Information Commissioner’s Office (ICO)</span> regarding our processing of your personal data. We would, however, appreciate the opportunity to address your concerns directly before you approach the ICO.</p>
            )
        },
        {
            id: "cookies",
            title: "11. Cookies & tracking",
            content: (
                <div className="space-y-4">
                    <p>The Website uses strictly necessary cookies for security and functionality. For detailed information, please refer to our <Link to="/cookie-policy" className="text-accent-gold hover:underline font-bold">Cookie Policy</Link>.</p>
                </div>
            )
        },
        {
            id: "conclusion",
            title: "12. Concluding statement",
            content: (
                <p className="text-prime-200 italic font-medium border-l-2 border-accent-gold/30 pl-6 py-2">
                    "We uphold the principles of data discipline, proportionality, and honourable stewardship of personal information."
                </p>
            )
        }
    ];

    return (
        <LegalPageLayout
            title="Privacy Policy"
            lastUpdated="January 2026"
            sections={sections}
            icon={Shield}
        />
    );
};

export default PrivacyPolicy;
