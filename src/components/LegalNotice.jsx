import React from 'react';
import { Landmark, Scale, Shield, Globe, FileText } from 'lucide-react';
import LegalPageLayout from './LegalPageLayout';

const LegalNotice = () => {
    const sections = [
        {
            id: "identification",
            title: "1. Corporate identification",
            content: (
                <div className="bg-prime-900/50 p-6 rounded-2xl border border-prime-800 space-y-6">
                    <div>
                        <p className="text-[10px] text-accent-gold font-black uppercase tracking-[0.2em] mb-2">Legal Entity</p>
                        <p className="text-xl font-bold text-prime-100 uppercase tracking-tight italic">AL RAYAH GLOBAL GROUP LTD</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                        {[
                            { label: "Company No (UK)", value: "16846341" },
                            { label: "Legal Form", value: "Private Company Ltd by Guarantee" },
                            { label: "Jurisdiction", value: "England & Wales (Companies House)" },
                            { label: "Status", value: "Pre-Launch Operational" }
                        ].map((item, i) => (
                            <div key={i}>
                                <p className="text-[10px] text-prime-500 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                                <p className="text-prime-200 font-bold">{item.value}</p>
                            </div>
                        ))}
                    </div>
                    <div className="pt-6 border-t border-white/5">
                        <p className="text-[10px] text-prime-500 font-bold uppercase tracking-widest mb-2">Registered Office Address</p>
                        <p className="text-sm font-medium leading-relaxed italic text-prime-300">
                            11–12 Old Bond Street, Mayfair<br />
                            London, W1S 4PN, United Kingdom
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "status",
            title: "2. Website status declaration (Critical)",
            content: (
                <>
                    <p className="font-bold text-accent-gold tracking-tight italic">This website (www.alrayahglobal.com) is currently operating in a pre-launch “Coming Soon” mode.</p>
                    <div className="mt-6 p-6 rounded-2xl bg-red-500/5 border border-red-500/10 space-y-3">
                        <p className="text-[10px] text-red-400 font-black uppercase tracking-widest mb-2">At this stage:</p>
                        <ul className="space-y-2 text-sm text-prime-400">
                            <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-red-500/50" /> No products or services are offered</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-red-500/50" /> No contracts are concluded</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-red-500/50" /> No client onboarding, payments, or regulated financial activities are conducted via this website</li>
                        </ul>
                    </div>
                    <p className="mt-6 text-sm italic text-prime-500 font-medium">All operational, commercial, or regulated services will be made available only upon official launch and under separately published legal documentation.</p>
                </>
            )
        },
        {
            id: "contact",
            title: "3. Contact information",
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <p className="text-[10px] text-prime-500 font-bold uppercase tracking-widest mb-2">General Inquiries</p>
                        <p className="text-accent-gold font-bold">info@alrayahglobal.com</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <p className="text-[10px] text-prime-500 font-bold uppercase tracking-widest mb-2">Legal & Compliance</p>
                        <p className="text-accent-gold font-bold">legal@alrayahglobal.com</p>
                    </div>
                </div>
            )
        },
        {
            id: "infrastructure",
            title: "4. Hosting & technical infrastructure disclosure",
            content: (
                <div className="space-y-4">
                    <p className="text-sm leading-relaxed text-prime-300">This website is technically hosted via <span className="text-prime-100 font-bold">HOSTINGER.COM</span> infrastructure.</p>
                    <p className="text-sm leading-relaxed text-prime-300">Official corporate email services are provided via <span className="text-prime-100 font-bold">Google Workspace</span>.</p>
                    <p className="text-[10px] text-prime-500 font-bold uppercase tracking-widest mt-4">No hosting or email provider has any authority over corporate, legal, or operational decisions of AL RAYAH GLOBAL GROUP LTD.</p>
                </div>
            )
        },
        {
            id: "representation",
            title: "5. Directors & responsible party",
            content: (
                <div className="p-6 rounded-2xl bg-accent-gold/5 border border-accent-gold/10">
                    <p className="text-[10px] text-accent-gold/60 font-black uppercase tracking-[0.2em] mb-4">Responsible for Content & Corporate Representation</p>
                    <p className="text-2xl font-black text-prime-100 italic tracking-tight mb-1">Konradas Česnulis</p>
                    <p className="text-xs font-bold text-accent-gold uppercase tracking-[0.3em] mb-4">Chief Executive Officer</p>
                    <p className="text-xs text-prime-500 font-medium">Acting on behalf of AL RAYAH GLOBAL GROUP LTD, United Kingdom.</p>
                </div>
            )
        },
        {
            id: "regulatory",
            title: "6. Regulatory & legal framework",
            content: (
                <>
                    <p>AL RAYAH GLOBAL GROUP LTD operates in accordance with applicable laws and standards, including but not limited to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-4 text-prime-300">
                        <li>UK Companies Act 2006</li>
                        <li>UK GDPR & Data Protection Act 2018</li>
                    </ul>
                    <p className="mt-6 text-sm text-prime-500 italic">Any future regulated activities (including financial, payment, or EMI-related services) shall be conducted only after proper authorisation and will be reflected transparently within updated legal documentation.</p>
                </>
            )
        },
        {
            id: "ip",
            title: "7. Intellectual property rights",
            content: (
                <>
                    <p>All content, text, design elements, branding, logos, symbols, and materials displayed on this website are the exclusive intellectual property of: <span className="text-prime-100 font-bold">AL RAYAH GLOBAL GROUP LTD</span>.</p>
                    <p className="mt-4 font-bold text-accent-gold italic text-sm uppercase tracking-wider">Unauthorised use, reproduction, or distribution is strictly prohibited without prior written consent.</p>
                </>
            )
        },
        {
            id: "liability",
            title: "8. Liability disclaimer",
            content: (
                <>
                    <p>All information provided on this website is for general informational purposes only.</p>
                    <p className="mt-4 text-sm leading-relaxed text-prime-400">AL RAYAH GLOBAL GROUP LTD makes no representations or warranties regarding completeness or accuracy at this pre-launch stage and shall not be liable for reliance placed upon preliminary or placeholder information.</p>
                </>
            )
        },
        {
            id: "jurisdiction",
            title: "9. Governing law & jurisdiction",
            content: (
                <p>This Legal Notice and the use of this website shall be governed by and construed in accordance with the laws of <span className="text-prime-100 font-bold uppercase underline decoration-accent-gold underline-offset-4">England & Wales</span>.</p>
            )
        },
        {
            id: "conclusion",
            title: "10. Concluding statement",
            content: (
                <p className="text-prime-200 italic font-medium border-l-2 border-accent-gold/30 pl-6 py-2">
                    "AL RAYAH GLOBAL GROUP LTD is founded upon principles of responsibility, discipline, honour, and lawful conduct."
                </p>
            )
        }
    ];

    return (
        <LegalPageLayout
            title="Legal Notice (Imprint)"
            lastUpdated="January 2026"
            sections={sections}
            icon={Landmark}
        />
    );
};

export default LegalNotice;
