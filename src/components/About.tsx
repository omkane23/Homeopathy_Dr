import { FaAward, FaUserMd, FaLeaf, FaCheckCircle } from 'react-icons/fa';
import { GiMedicinePills } from 'react-icons/gi';

const qualifications = [
    'BHMS – Bachelor of Homeopathic Medicine & Surgery',
    'MD Homeopathy – Post Graduate Degree',
    'Member of Indian Institute of Homeopathic Physicians',
    'Certified Classical Homeopath (CCH)',
];

const highlights = [
    { icon: FaUserMd, label: '10+ Years', sub: 'Clinical Experience' },
    { icon: FaAward, label: '5000+', sub: 'Patients Treated' },
    { icon: GiMedicinePills, label: '100%', sub: 'Natural Remedies' },
    { icon: FaLeaf, label: '50+', sub: 'Conditions Treated' },
];

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#e8f5f0] rounded-full -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#e8f5f0] rounded-full translate-y-1/2 -translate-x-1/3 opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative">
                            {/* Main image with decorative frame */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/doctor_photo.png"
                                    alt="Dr. Rahul Sharma"
                                    className="w-full h-[520px] object-cover"
                                />
                                {/* Gradient overlay at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0e7c5a]/60 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#0e7c5a] to-[#16a97a] rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaUserMd className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#0e7c5a]">Dr. Rahul Sharma</div>
                                        <div className="text-sm text-gray-500">BHMS, MD Homeopathy</div>
                                        <div className="flex items-center gap-1 mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="w-3 h-3 text-yellow-400">★</div>
                                            ))}
                                            <span className="text-xs text-gray-500 ml-1">5.0 Rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative border */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-[#0e7c5a]/30 rounded-2xl pointer-events-none" />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-[#16a97a]/30 rounded-2xl pointer-events-none" />
                        </div>

                        {/* Stat pills */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {highlights.map(item => (
                                <div
                                    key={item.label}
                                    className="bg-gradient-to-br from-[#e8f5f0] to-white border border-[#c5e5d8] rounded-2xl p-4 flex items-center gap-3 stat-item"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#0e7c5a] to-[#16a97a] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <item.icon className="text-white text-base" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#0e7c5a] text-lg leading-tight">{item.label}</div>
                                        <div className="text-gray-500 text-xs">{item.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div className="order-1 lg:order-2">
                        <span className="inline-block text-[#0e7c5a] font-semibold text-sm tracking-widest uppercase mb-4 bg-[#e8f5f0] px-4 py-1.5 rounded-full">
                            About The Doctor
                        </span>
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a2e25] mb-6 section-heading text-left">
                            Healing With Nature's<br />
                            <span className="gradient-text">Gentle Wisdom</span>
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed mb-6">
                            Dr. Rahul Sharma is a highly experienced and dedicated homeopathy practitioner with over a decade
                            of clinical expertise. With a BHMS from Mumbai University and MD Homeopathy specialization,
                            Dr. Sharma has successfully treated thousands of patients suffering from chronic and acute ailments.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-8">
                            His philosophy is rooted in the principles of classical homeopathy — treating the individual as a whole,
                            identifying the root cause, and prescribing remedies that gently stimulate the body's natural healing
                            intelligence for lasting relief without side effects.
                        </p>

                        {/* Qualifications */}
                        <div className="mb-8">
                            <h3 className="font-semibold text-[#1a2e25] mb-4 text-lg">Qualifications & Certifications</h3>
                            <ul className="space-y-3">
                                {qualifications.map(q => (
                                    <li key={q} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-[#0e7c5a] mt-0.5 flex-shrink-0 text-lg" />
                                        <span className="text-gray-600 text-sm">{q}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mission */}
                        <div className="bg-gradient-to-br from-[#e8f5f0] to-white border border-[#c5e5d8] rounded-2xl p-6">
                            <h3 className="font-semibold text-[#0e7c5a] mb-2 flex items-center gap-2">
                                <FaLeaf /> Mission & Philosophy
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                "My mission is to provide compassionate, evidence-based homeopathic care that empowers patients
                                to achieve optimal health naturally. I believe every person deserves individualized treatment
                                that honors their unique constitution and life story."
                            </p>
                            <div className="mt-3 text-right text-[#0e7c5a] font-semibold text-sm">— Dr. Rahul Sharma</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
