import {
    FaSpa, FaAllergies, FaBrain, FaBaby, FaHeartbeat, FaTint
} from 'react-icons/fa';
import { GiMedicines, GiChemicalDrop } from 'react-icons/gi';
import { MdOutlineHealthAndSafety } from 'react-icons/md';

const services = [
    {
        Icon: FaSpa,
        title: 'Skin Disorders',
        description:
            'Effective homeopathic treatment for eczema, psoriasis, acne, urticaria, vitiligo, and other chronic skin conditions — addressing the root cause.',
        color: 'from-emerald-500 to-teal-600',
        bg: 'bg-emerald-50',
    },
    {
        Icon: FaTint,
        title: 'Hair Loss Treatment',
        description:
            'Personalized remedies for alopecia, androgenic hair loss, dandruff, and premature greying using classical constitutional homeopathy.',
        color: 'from-green-500 to-emerald-600',
        bg: 'bg-green-50',
    },
    {
        Icon: FaAllergies,
        title: 'Allergy Treatment',
        description:
            'Long-term relief from dust, pollen, food, and seasonal allergies without antihistamines — through desensitization via homeopathic medicine.',
        color: 'from-teal-500 to-cyan-600',
        bg: 'bg-teal-50',
    },
    {
        Icon: FaBrain,
        title: 'Migraine & Headache',
        description:
            'Targeted homeopathic remedies for migraine, tension headaches, and cluster headaches — reducing frequency, intensity, and duration.',
        color: 'from-cyan-500 to-blue-500',
        bg: 'bg-cyan-50',
    },
    {
        Icon: FaBaby,
        title: 'Child Healthcare',
        description:
            'Gentle and safe homeopathic care for children — from teething troubles and recurrent infections to ADHD, bedwetting, and developmental delays.',
        color: 'from-lime-500 to-green-600',
        bg: 'bg-lime-50',
    },
    {
        Icon: FaHeartbeat,
        title: 'Chronic Disease Management',
        description:
            'Holistic management of diabetes, hypertension, thyroid, arthritis, IBS, and other lifestyle diseases through individualized homeopathic protocols.',
        color: 'from-green-600 to-teal-500',
        bg: 'bg-green-50',
    },
    {
        Icon: MdOutlineHealthAndSafety,
        title: 'Women\'s Health',
        description:
            'Comprehensive care for PCOD/PCOS, menstrual irregularities, menopause symptoms, leucorrhoea, and hormonal imbalances — naturally.',
        color: 'from-teal-400 to-emerald-500',
        bg: 'bg-teal-50',
    },
    {
        Icon: GiMedicines,
        title: 'Digestive Disorders',
        description:
            'Effective treatment for IBS, gastritis, acidity, constipation, piles, and liver disorders using constitutional and acute homeopathic prescriptions.',
        color: 'from-emerald-400 to-green-600',
        bg: 'bg-emerald-50',
    },
    {
        Icon: GiChemicalDrop,
        title: 'Joint & Bone Health',
        description:
            'Safe, non-steroidal treatment for rheumatoid arthritis, osteoarthritis, gout, cervical spondylitis, and back pain with lasting relief.',
        color: 'from-green-400 to-teal-600',
        bg: 'bg-green-50',
    },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 bg-gradient-to-b from-[#f0faf5] to-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-[#0e7c5a] font-semibold text-sm tracking-widest uppercase mb-4 bg-[#e8f5f0] px-4 py-1.5 rounded-full">
                        Our Specializations
                    </span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a2e25] mb-4 section-heading">
                        Treatments & Services
                    </h2>
                    <p className="text-gray-500 text-base max-w-2xl mx-auto mt-4">
                        We offer comprehensive homeopathic treatments for a wide range of acute and chronic conditions,
                        each tailored to your unique constitution and health history.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className={`service-card group bg-white rounded-3xl p-8 shadow-md hover:cursor-pointer border border-gray-100`}
                        >
                            {/* Icon */}
                            <div
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                                <service.Icon className="text-white text-2xl" />
                            </div>

                            {/* Title */}
                            <h3 className="font-display font-bold text-xl text-[#1a2e25] mb-3 group-hover:text-[#0e7c5a] transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>

                            {/* Learn more */}
                            <div className="mt-5 text-[#0e7c5a] text-sm font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                Learn More →
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
