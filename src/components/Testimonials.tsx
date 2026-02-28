import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Priya Verma',
        condition: 'Chronic Psoriasis',
        review:
            "After 5 years of struggling with psoriasis and trying every conventional treatment, I found Dr. Sharma. Within 3 months of homeopathic treatment, my skin is 80% clearer. I'm truly amazed at the results!",
        rating: 5,
        avatar: 'PV',
        location: 'Mumbai',
    },
    {
        name: 'Arjun Mehta',
        condition: 'Migraine (10 Years)',
        review:
            "I used to get debilitating migraines 3-4 times a week. Dr. Sharma's homeopathic treatment has reduced them to once a month or less. The change in my quality of life is incredible.",
        rating: 5,
        avatar: 'AM',
        location: 'Pune',
    },
    {
        name: 'Shweta Nair',
        condition: 'PCOS & Hormonal Issues',
        review:
            "Dr. Rahul is an exceptional doctor who truly listens. His treatment for my PCOS has been life-changing — my cycles are now regular and I feel so much more energetic and balanced.",
        rating: 5,
        avatar: 'SN',
        location: 'Delhi',
    },
    {
        name: 'Ravi Shankar',
        condition: 'Childhood Allergies',
        review:
            "My son used to have severe dust allergies and would fall sick every month. After 6 months of Dr. Sharma's homeopathic treatment, his immunity is much stronger and the allergies are almost gone!",
        rating: 5,
        avatar: 'RS',
        location: 'Bengaluru',
    },
];

const avatarColors = [
    'from-emerald-500 to-teal-600',
    'from-green-500 to-emerald-500',
    'from-teal-500 to-cyan-500',
    'from-lime-500 to-green-600',
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-[#f0faf5]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-[#0e7c5a] font-semibold text-sm tracking-widest uppercase mb-4 bg-[#e8f5f0] px-4 py-1.5 rounded-full">
                        Patient Stories
                    </span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a2e25] mb-4 section-heading">
                        What Our Patients Say
                    </h2>
                    <p className="text-gray-500 text-base max-w-2xl mx-auto mt-4">
                        Real stories from real patients who found natural relief through homeopathic treatment.
                    </p>
                </div>

                {/* Rating summary */}
                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {[
                        { num: '5000+', label: 'Happy Patients' },
                        { num: '4.9/5', label: 'Average Rating' },
                        { num: '98%', label: 'Recommend us' },
                        { num: '10+', label: 'Years Trusted' },
                    ].map(item => (
                        <div key={item.label} className="text-center stat-item">
                            <div className="font-display text-3xl font-bold gradient-text">{item.num}</div>
                            <div className="text-gray-500 text-sm mt-1">{item.label}</div>
                        </div>
                    ))}
                </div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            className="testimonial-card bg-white border border-gray-100 rounded-3xl p-6 shadow-md flex flex-col"
                        >
                            {/* Quote icon */}
                            <FaQuoteLeft className="text-[#0e7c5a]/20 text-4xl mb-4" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, j) => (
                                    <FaStar key={j} className="text-yellow-400 text-sm" />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="text-gray-600 text-sm leading-relaxed flex-grow italic mb-6">
                                "{t.review}"
                            </p>

                            {/* Condition tag */}
                            <div className="mb-4">
                                <span className="bg-[#e8f5f0] text-[#0e7c5a] text-xs font-semibold px-3 py-1 rounded-full">
                                    {t.condition}
                                </span>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                <div
                                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                                >
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-[#1a2e25] text-sm">{t.name}</div>
                                    <div className="text-gray-400 text-xs">{t.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
