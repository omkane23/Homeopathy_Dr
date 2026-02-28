import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaLeaf } from 'react-icons/fa';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map(l => l.href.replace('#', ''));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'navbar-scrolled py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={e => { e.preventDefault(); handleNavClick('#home'); }}
                    className="flex items-center gap-2 group"
                >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0e7c5a] to-[#16a97a] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        <FaLeaf className="text-white text-lg" />
                    </div>
                    <div>
                        <span className={`font-display font-bold text-lg leading-tight block ${scrolled ? 'text-[#0e7c5a]' : 'text-white'}`}>
                            Dr. Rahul Sharma
                        </span>
                        <span className={`text-xs font-medium ${scrolled ? 'text-[#5a7a6e]' : 'text-green-200'}`}>
                            Homeopathy Specialist
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex items-center gap-8">
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                                className={`nav-link text-sm font-medium ${active === link.href.replace('#', '')
                                        ? `active ${scrolled ? 'text-[#0e7c5a]' : 'text-white'}`
                                        : scrolled ? 'text-gray-700 hover:text-[#0e7c5a]' : 'text-green-100 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href="#contact"
                    onClick={e => { e.preventDefault(); handleNavClick('#contact'); }}
                    className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#0e7c5a] to-[#16a97a] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                    Book Appointment
                </a>

                {/* Mobile Hamburger */}
                <button
                    className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-[#0e7c5a]' : 'text-white'}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mobile-menu lg:hidden bg-white border-t border-gray-100 shadow-xl">
                    <ul className="flex flex-col py-4 px-6 gap-1">
                        {navLinks.map(link => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                                    className="block py-3 px-4 text-gray-700 hover:text-[#0e7c5a] hover:bg-[#e8f5f0] rounded-lg font-medium transition-all"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li className="pt-2">
                            <a
                                href="#contact"
                                onClick={e => { e.preventDefault(); handleNavClick('#contact'); }}
                                className="block text-center bg-gradient-to-r from-[#0e7c5a] to-[#16a97a] text-white py-3 rounded-xl font-semibold"
                            >
                                Book Appointment
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
