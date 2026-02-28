import { FaLeaf, FaShieldAlt, FaUserAlt, FaStar, FaHeart, FaMicroscope } from 'react-icons/fa';
import { GiMedicalPack } from 'react-icons/gi';

const reasons = [
    {
        icon: FaLeaf,
        title: '100% Natural Treatment',
        description: 'All remedies are derived from natural plant, mineral, and animal sources — zero synthetic chemicals.',
    },
    {
        icon: FaShieldAlt,
        title: 'Zero Side Effects',
        description: 'Homeopathic medicines are ultra-diluted, making them safe for infants, pregnant women, and the elderly.',
    },
    {
        icon: FaUserAlt,
        title: 'Personalized Care',
        description: 'Every prescription is customized to your unique constitution, symptoms, lifestyle, and mental state.',
    },
    {
        icon: FaStar,
        title: 'Experienced Specialist',
        description: 'Dr. Rahul Sharma brings 10+ years of clinical experience treating complex and chronic conditions.',
    },
    {
        icon: FaHeart,
        title: 'Holistic Healing',
        description: 'We treat mind, body, and spirit together — not just isolated symptoms — for complete wellbeing.',
    },
    {
        icon: FaMicroscope,
        title: 'Evidence-Based Practice',
        description: 'Our treatments follow classical homeopathic principles backed by clinical research and proven outcomes.',
    },
    {
        icon: GiMedicalPack,
        title: 'Treats Root Cause',
        description: 'We identify and eliminate the deepest cause of your illness rather than suppressing surface symptoms.',
    },
    {
        icon: FaLeaf,
        title: 'Affordable & Accessible',
        description: 'Quality homeopathic care at affordable prices with flexible consultation timings, including online.',
    },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section id="why-us" className="py-24 relative overflow-hidden bg-[#1a2e25]">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#0e7c5a]/20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#16a97a]/15 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-green-300 font-semibold text-sm tracking-widest uppercase mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
                        Our Advantage
                    </span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 section-heading">
                        Why Choose Us?
                    </h2>
                    <p className="text-green-200 text-base max-w-2xl mx-auto mt-4">
                        Thousands of patients trust Dr. Rahul Sharma for genuine, compassionate, and effective homeopathic care.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((item) => (
                        <div
                            key={item.title}
                            className="why-card group bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 cursor-default"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-[#0e7c5a] to-[#16a97a] rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:bg-white/20 transition-all why-icon">
                                <item.icon className="text-white text-xl" />
                            </div>
                            <h3 className="font-semibold text-white text-base mb-2">{item.title}</h3>
                            <p className="text-green-300 text-sm leading-relaxed group-hover:text-white/80">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Banner */}
                <div className="mt-16 bg-gradient-to-r from-[#0e7c5a] to-[#16a97a] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
                            Ready to Begin Your Healing Journey?
                        </h3>
                        <p className="text-green-100 text-base">
                            Book a free 15-minute consultation with Dr. Rahul Sharma today.
                        </p>
                    </div>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex-shrink-0 bg-white text-[#0e7c5a] px-8 py-4 rounded-full font-bold text-base hover:bg-green-50 transition-all shadow-xl hover:-translate-y-0.5"
                    >
                        Book Free Consultation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
