import { FaArrowRight, FaPhone, FaStar } from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';

const Hero: React.FC = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: 'url(/hero_bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Overlay */}
            <div className="hero-section absolute inset-0" />

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white opacity-10 float-anim"
                        style={{
                            width: `${Math.random() * 80 + 20}px`,
                            height: `${Math.random() * 80 + 20}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="text-white">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <GiMedicines className="text-green-300" />
                        <span>Certified Homeopathy Specialist</span>
                    </div>

                    <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                        Natural Healing
                        <span className="block text-green-300">Through Homeopathy</span>
                    </h1>

                    <p className="text-green-100 text-lg leading-relaxed mb-8 max-w-xl">
                        Experience the gentle power of classical homeopathy treatment from Dr. Rahul Sharma (BHMS, MD).
                        Personalized remedies that treat the root cause — not just the symptoms — for lasting wellness.
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap gap-6 mb-10">
                        {[
                            { value: '10+', label: 'Years Experience' },
                            { value: '5000+', label: 'Patients Treated' },
                            { value: '98%', label: 'Success Rate' },
                        ].map(stat => (
                            <div key={stat.label} className="stat-item text-center">
                                <div className="text-3xl font-display font-bold text-green-300">{stat.value}</div>
                                <div className="text-green-200 text-sm mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => scrollTo('contact')}
                            className="cta-pulse flex items-center gap-3 bg-white text-[#0e7c5a] px-8 py-4 rounded-full font-bold text-base hover:bg-green-50 transition-all duration-200 shadow-2xl"
                        >
                            Book Appointment
                            <FaArrowRight className="text-sm" />
                        </button>
                        <a
                            href="tel:+919876543210"
                            className="flex items-center gap-3 border-2 border-white/60 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                        >
                            <FaPhone className="text-sm" />
                            Call Now
                        </a>
                    </div>
                </div>

                {/* Right — Doctor Card */}
                <div className="hidden lg:flex justify-center items-center">
                    <div className="relative">
                        {/* Card */}
                        <div className="relative bg-white/15 backdrop-blur-lg border border-white/30 rounded-3xl p-2 shadow-2xl float-anim">
                            <img
                                src="/doctor_photo.png"
                                alt="Dr. Rahul Sharma"
                                className="w-80 h-96 object-cover rounded-2xl"
                            />
                            {/* Info badge */}
                            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#0e7c5a] to-[#16a97a] rounded-xl flex items-center justify-center">
                                        <FaStar className="text-white text-sm" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#0e7c5a] text-sm">Dr. Rahul Sharma</div>
                                        <div className="text-gray-500 text-xs">BHMS, MD Homeopathy</div>
                                    </div>
                                </div>
                            </div>
                            {/* Experience badge */}
                            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#0e7c5a] to-[#16a97a] text-white rounded-2xl px-4 py-3 text-center shadow-xl">
                                <div className="font-display font-bold text-2xl">10+</div>
                                <div className="text-xs text-green-200">Years Exp.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
                <span className="text-xs font-medium">Scroll Down</span>
                <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white/60 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
