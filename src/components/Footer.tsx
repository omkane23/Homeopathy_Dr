import {
    FaLeaf,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaWhatsapp,
} from 'react-icons/fa';

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Doctor', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Book Appointment', href: '#contact' },
];

const services = [
    'Skin Disorders',
    'Hair Loss Treatment',
    'Allergy Treatment',
    'Migraine & Headache',
    'Child Healthcare',
    'Chronic Disease',
    'Women\'s Health',
    'Joint & Bone Health',
];

const Footer: React.FC = () => {
    const scrollTo = (href: string) => {
        const id = href.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#0f1e16] text-gray-300">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#0e7c5a] to-[#16a97a] rounded-xl flex items-center justify-center">
                                <FaLeaf className="text-white text-lg" />
                            </div>
                            <div>
                                <span className="font-display font-bold text-white text-lg block leading-tight">Dr. Rahul Sharma</span>
                                <span className="text-green-400 text-xs">BHMS, MD Homeopathy</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Dedicated to providing authentic, effective, and compassionate homeopathic care to patients
                            across all age groups since 2014.
                        </p>
                        {/* Social Media */}
                        <div className="flex gap-3">
                            {[
                                { Icon: FaFacebook, href: '#', color: 'hover:bg-blue-600' },
                                { Icon: FaInstagram, href: '#', color: 'hover:bg-pink-600' },
                                { Icon: FaTwitter, href: '#', color: 'hover:bg-sky-500' },
                                { Icon: FaYoutube, href: '#', color: 'hover:bg-red-600' },
                                { Icon: FaWhatsapp, href: '#', color: 'hover:bg-green-600' },
                            ].map(({ Icon, href, color }) => (
                                <a
                                    key={href + color}
                                    href={href}
                                    className={`w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white ${color} transition-all duration-200`}
                                >
                                    <Icon className="text-sm" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-5 text-base">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map(link => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                                        className="text-gray-400 hover:text-green-400 text-sm flex items-center gap-2 transition-colors"
                                    >
                                        <span className="w-1.5 h-1.5 bg-[#0e7c5a] rounded-full" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-white mb-5 text-base">Our Services</h4>
                        <ul className="space-y-2.5">
                            {services.map(s => (
                                <li key={s}>
                                    <span className="text-gray-400 hover:text-green-400 text-sm flex items-center gap-2 cursor-default transition-colors">
                                        <span className="w-1.5 h-1.5 bg-[#16a97a] rounded-full" />
                                        {s}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-white mb-5 text-base">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-[#0e7c5a] mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm leading-relaxed">
                                    204, Green Park Complex,<br />
                                    Andheri West, Mumbai – 400053
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-[#0e7c5a] flex-shrink-0" />
                                <a href="tel:+919876543210" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-[#0e7c5a] flex-shrink-0" />
                                <a href="mailto:drrahul@homeopathyclinic.in" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                                    drrahul@homeopathyclinic.in
                                </a>
                            </li>
                        </ul>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                        >
                            <FaWhatsapp className="text-base" />
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-sm text-center">
                        © {new Date().getFullYear()} Dr. Rahul Sharma Homoeopathic Clinic. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-500">
                        <span className="hover:text-green-400 cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-green-400 cursor-pointer transition-colors">Terms of Service</span>
                        <span className="hover:text-green-400 cursor-pointer transition-colors">Disclaimer</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
