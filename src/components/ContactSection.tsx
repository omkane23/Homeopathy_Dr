import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaCheckCircle,
    FaSpinner,
} from 'react-icons/fa';
import type { AppointmentForm } from '../types';

// ⚠️ REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
const EMAILJS_SERVICE_ID = 'service_nzbszuo';      // Example: service_abc123
const EMAILJS_TEMPLATE_ID = 'template_orbqawv';    // Example: template_xyz789
const EMAILJS_PUBLIC_KEY = 'c9gdhxuT8RFI2RglV';      // Example: abcD1234eFgHiJkL

const ContactSection: React.FC = () => {
    const [form, setForm] = useState<AppointmentForm>({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (error) setError('');
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        // Validation
        if (!form.name || !form.phone || !form.email || !form.message) {
            setError('Please fill in all required fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Phone validation (basic)
        const phoneRegex = /^[+]?[\d\s-()]{10,}$/;
        if (!phoneRegex.test(form.phone)) {
            setError('Please enter a valid phone number.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Prepare template parameters for EmailJS
            const templateParams = {
                from_name: form.name,
                from_email: form.email,
                from_phone: form.phone,
                message: form.message,
                to_name: 'Dr. Rahul Sharma',
                reply_to: form.email,
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            if (response.status === 200) {
                setSuccess(true);
                setForm({ name: '', phone: '', email: '', message: '' });
                
                // Auto-hide success message after 10 seconds
                setTimeout(() => {
                    setSuccess(false);
                }, 10000);
            } else {
                setError('Failed to send appointment request. Please try again.');
            }
        } catch (err: any) {
            console.error('EmailJS Error:', err);
            setError(
                err.text || 
                'Failed to send appointment request. Please try again or contact us directly.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-[#0e7c5a] font-semibold text-sm tracking-widest uppercase mb-4 bg-[#e8f5f0] px-4 py-1.5 rounded-full">
                        Get In Touch
                    </span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a2e25] mb-4 section-heading">
                        Book Your Appointment
                    </h2>
                    <p className="text-gray-500 text-base max-w-2xl mx-auto mt-4">
                        Take the first step towards natural healing. Fill in your details and Dr. Sharma will
                        reach out to confirm your appointment.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        {/* Clinic Address */}
                        <div className="bg-gradient-to-br from-[#e8f5f0] to-white border border-[#c5e5d8] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#0e7c5a] to-[#16a97a] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                    <FaMapMarkerAlt className="text-white text-lg" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#1a2e25] mb-1">Clinic Address</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Dr. Rahul's Homoeopathic Clinic<br />
                                        204, Green Park Complex,<br />
                                        Andheri West, Mumbai – 400053<br />
                                        Maharashtra, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-gradient-to-br from-[#e8f5f0] to-white border border-[#c5e5d8] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#0e7c5a] to-[#16a97a] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                    <FaPhone className="text-white text-lg" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#1a2e25] mb-1">Phone</h3>
                                    <a href="tel:+919876543210" className="text-[#0e7c5a] font-medium hover:underline block">
                                        +91 98765 43210
                                    </a>
                                    <a href="tel:+912212345678" className="text-gray-500 text-sm hover:underline block mt-1">
                                        +91 22 1234 5678
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-gradient-to-br from-[#e8f5f0] to-white border border-[#c5e5d8] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#0e7c5a] to-[#16a97a] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                    <FaEnvelope className="text-white text-lg" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#1a2e25] mb-1">Email</h3>
                                    <a href="mailto:drrahul@homeopathyclinic.in" className="text-[#0e7c5a] font-medium text-sm hover:underline break-all">
                                        drrahul@homeopathyclinic.in
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-gradient-to-br from-[#e8f5f0] to-white border border-[#c5e5d8] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#0e7c5a] to-[#16a97a] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                    <FaClock className="text-white text-lg" />
                                </div>
                                <div className="w-full">
                                    <h3 className="font-semibold text-[#1a2e25] mb-2">Consultation Hours</h3>
                                    <table className="text-sm text-gray-500 w-full">
                                        <tbody>
                                            <tr><td className="py-0.5 pr-4 font-medium text-gray-700">Mon – Fri</td><td>9:00 AM – 7:00 PM</td></tr>
                                            <tr><td className="py-0.5 pr-4 font-medium text-gray-700">Saturday</td><td>9:00 AM – 5:00 PM</td></tr>
                                            <tr><td className="py-0.5 pr-4 font-medium text-gray-700">Sunday</td><td>10:00 AM – 1:00 PM</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Appointment Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8">
                            {success ? (
                                <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#0e7c5a] to-[#16a97a] rounded-full flex items-center justify-center mb-6 shadow-xl animate-scale-in">
                                        <FaCheckCircle className="text-white text-4xl" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-[#1a2e25] mb-3">
                                        Appointment Request Sent!
                                    </h3>
                                    <p className="text-gray-500 max-w-sm mb-2">
                                        Thank you! Dr. Rahul Sharma's team will contact you within 24 hours to confirm your appointment.
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        Check your email for confirmation.
                                    </p>
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="mt-8 bg-gradient-to-r from-[#0e7c5a] to-[#16a97a] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        Book Another Appointment
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h3 className="font-display text-2xl font-bold text-[#1a2e25] mb-6">
                                        Send Appointment Request
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                required
                                                className="form-input w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-[#0e7c5a] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+91 XXXXX XXXXX"
                                                required
                                                className="form-input w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-[#0e7c5a] focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            required
                                            className="form-input w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:ring-2 focus:ring-[#0e7c5a] focus:border-transparent outline-none transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                                            Message / Health Concern <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Briefly describe your health concern or reason for appointment..."
                                            rows={5}
                                            required
                                            className="form-input w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm resize-none focus:ring-2 focus:ring-[#0e7c5a] focus:border-transparent outline-none transition-all"
                                        />
                                    </div>

                                    {error && (
                                        <div className="flex items-start gap-3 text-red-600 text-sm bg-red-50 border border-red-200 px-4 py-3 rounded-lg animate-shake">
                                            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>{error}</span>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-gradient-to-r from-[#0e7c5a] to-[#16a97a] text-white py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {loading ? (
                                            <>
                                                <FaSpinner className="animate-spin text-lg" /> 
                                                <span>Sending Request...</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaCheckCircle className="text-lg" />
                                                <span>Book Appointment Now</span>
                                            </>
                                        )}
                                    </button>

                                    <p className="text-xs text-gray-400 text-center">
                                        By submitting, you agree to our privacy policy. We'll never share your data.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes scale-in {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                
                .animate-shake {
                    animation: shake 0.3s ease-in-out;
                }
                
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
                
                .animate-scale-in {
                    animation: scale-in 0.5s ease-out;
                }
            `}</style>
        </section>
    );
};

export default ContactSection;