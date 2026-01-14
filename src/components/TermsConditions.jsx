import React from 'react';
import { Scale, ShieldCheck, FileWarning, Globe, Mail } from 'lucide-react';
import LegalPageLayout from './LegalPageLayout';

const TermsConditions = () => {
    const sections = [
        {
            id: "status",
            title: "1. Website status declaration (Critical)",
            content: (
                <>
                    <p>These Terms & Conditions (“Terms”) govern your access to and use of www.alrayahglobal.com (the “Website”).</p>
                    <p className="font-bold text-accent-gold tracking-tight italic mt-4">This website is currently operating in a pre-launch “Coming Soon” mode.</p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            "No products or services are offered via this Website",
                            "No contracts are concluded through this Website",
                            "No regulated activities are conducted here"
                        ].map((text, i) => (
                            <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center text-center">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-prime-400">{text}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-prime-500 italic font-medium leading-relaxed">
                        Use of this Website is strictly limited to informational and navigational purposes. Any operational, commercial, or regulated services will be made available only upon official launch.
                    </p>
                </>
            )
        },
        {
            id: "corporate",
            title: "2. Corporate information",
            content: (
                <div className="bg-prime-900/50 p-6 rounded-2xl border border-prime-800 space-y-4">
                    <div>
                        <p className="text-prime-100 font-bold text-lg mb-1 uppercase tracking-tight">AL RAYAH GLOBAL GROUP LTD</p>
                        <p className="text-[10px] text-accent-gold font-bold tracking-widest uppercase">Registered in England & Wales | Company No: 16846341</p>
                    </div>
                    <div className="pt-4 border-t border-white/5">
                        <p className="text-[10px] text-prime-500 font-bold uppercase tracking-widest mb-1">Registered Office</p>
                        <p className="text-sm leading-relaxed text-prime-300 italic">
                            11–12 Old Bond Street, Mayfair<br />
                            London, W1S 4PN, United Kingdom
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "acceptance",
            title: "3. Acceptance of terms",
            content: (
                <p>By accessing or using this Website, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree to these Terms, you must immediately refrain from using the Website.</p>
            )
        },
        {
            id: "reliance",
            title: "4. No reliance & informational purpose",
            content: (
                <div className="space-y-4">
                    <p>The content provided on this Website is for general informational purposes only. Nothing on this Website constitutes an offer, solicitation, professional advice, or a recommendation regarding any financial or commercial activity.</p>
                    <p className="text-sm text-prime-400 border-l-2 border-accent-gold/30 pl-4 py-1">Future services offered via affiliated brands or separate platforms shall be governed by their own specific legal documentation independently of these Terms.</p>
                </div>
            )
        },
        {
            id: "ip",
            title: "5. Intellectual property rights",
            content: (
                <>
                    <p>All content, text, design elements, branding, logos, symbols, and materials displayed on this Website are the exclusive intellectual property of <span className="text-prime-100 font-bold uppercase tracking-tight">AL RAYAH GLOBAL GROUP LTD</span> or its licensors.</p>
                    <p className="mt-4 font-bold text-accent-gold italic text-sm border border-accent-gold/10 p-4 rounded-xl inline-block bg-accent-gold/5">
                        UNAUTHORISED USE, REPRODUCTION, OR DISTRIBUTION IS STRICTLY PROHIBITED WITHOUT PRIOR WRITTEN CONSENT.
                    </p>
                </>
            )
        },
        {
            id: "liability",
            title: "6. Liability & indemnification",
            content: (
                <div className="space-y-4 text-sm">
                    <p>To the fullest extent permitted by law, AL RAYAH GLOBAL GROUP LTD, its directors, and employees shall not be liable for any direct, indirect, incidental, or consequential loss arising from the use of, or inability to use, this Website.</p>
                    <p>Users agree to indemnify and hold harmless AL RAYAH GLOBAL GROUP LTD from any claims resulting from their breach of these Terms or their use of the Website content.</p>
                </div>
            )
        },
        {
            id: "usage",
            title: "7. Prohibited usage",
            content: (
                <p>You agree not to use the Website for any unlawful purpose, to transmit any damaging code, or to interfere with the integrity and security of the Website’s infrastructure.</p>
            )
        },
        {
            id: "amendments",
            title: "8. Amendments & variations",
            content: (
                <p>We reserve the right to amend these Terms at any time without prior notice. Continued use of the Website following any changes constitutes your acceptance of the updated Terms.</p>
            )
        },
        {
            id: "law",
            title: "9. Governing law & jurisdiction",
            content: (
                <p>These Terms shall be governed by and construed in accordance with the laws of <span className="text-prime-100 font-bold uppercase underline decoration-accent-gold underline-offset-4">England & Wales</span>. The courts of England & Wales shall have exclusive jurisdiction over any disputes arising under these Terms.</p>
            )
        },
        {
            id: "contact",
            title: "10. Contact information",
            content: (
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <Mail className="text-accent-gold mb-3" size={20} />
                        <p className="text-[10px] text-prime-500 font-bold uppercase tracking-widest mb-1">Legal Inquiries</p>
                        <p className="text-prime-100 font-bold">legal@alrayahglobal.com</p>
                    </div>
                    <div className="flex-1 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <Globe className="text-accent-gold mb-3" size={20} />
                        <p className="text-[10px] text-prime-500 font-bold uppercase tracking-widest mb-1">Corporate Website</p>
                        <p className="text-prime-100 font-bold">www.alrayahglobal.com</p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <LegalPageLayout
            title="Terms & Conditions"
            lastUpdated="January 2026"
            sections={sections}
            icon={Scale}
        />
    );
};

export default TermsConditions;
