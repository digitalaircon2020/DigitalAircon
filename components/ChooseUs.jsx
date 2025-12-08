// "use client";
// import React from "react";
// import {
//     CheckCircle,
//     Clock,
//     Wrench,
//     ShieldCheck,
//     Users,
//     IndianRupee,
// } from "lucide-react";

// const features = [
//     {
//         icon: <Wrench className="w-7 h-7" />,
//         title: "Expert Technicians",
//         text: "Highly trained professionals with years of hands-on experience in ACs and home appliances across all major brands.",
//     },
//     {
//         icon: <Clock className="w-7 h-7" />,
//         title: "Fast Doorstep Service",
//         text: "Same-day inspection and quick turnaround with punctual doorstep service across Navi Mumbai.",
//     },
//     {
//         icon: <ShieldCheck className="w-7 h-7" />,
//         title: "Genuine Parts & PCB Repair",
//         text: "We use genuine spare parts and provide in-house PCB repair to ensure long-lasting appliance performance.",
//     },
//     {
//         icon: <IndianRupee className="w-7 h-7" />,
//         title: "Transparent Pricing",
//         text: "No hidden charges. Clear estimates and fair pricing before starting any repair or installation work.",
//     },
//     {
//         icon: <Users className="w-7 h-7" />,
//         title: "500+ Happy Customers",
//         text: "Trusted by hundreds of residential and commercial customers for reliable service and support.",
//     },
//     {
//         icon: <CheckCircle className="w-7 h-7" />,
//         title: "All-in-One Service",
//         text: "Sales, repair, installation, maintenance, and buy/sell of new & used appliances — everything under one roof.",
//     },
// ];

// export default function WhyChooseUs() {
//     return (
//         <section className="w-full bg-linear-to-br from-[#eef4ff] via-[#d9e8ff] to-[#bbd4ff] py-16 px-4 sm:px-6">
//             <div className="max-w-7xl mx-auto">

//                 {/* Heading */}
//                 <div className="text-center max-w-3xl mx-auto mb-12">
//                     <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e40af]">
//                         Why Choose Apple Aircon?
//                     </h2>
//                     <p className="mt-4 text-gray-700 text-lg">
//                         Trusted appliance repair & AC service experts in Navi Mumbai delivering quality,
//                         transparency, and long-term peace of mind.
//                     </p>
//                 </div>

//                 {/* Features Grid */}
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {features.map((item, index) => (
//                         <div
//                             key={index}
//                             className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
//                         >
//                             <div className="flex items-center gap-4 mb-4">
//                                 <div className="h-12 w-12 rounded-xl bg-[#1e40af] text-white flex items-center justify-center">
//                                     {item.icon}
//                                 </div>
//                                 <h3 className="text-lg font-bold text-[#0f172a]">
//                                     {item.title}
//                                 </h3>
//                             </div>

//                             <p className="text-gray-600 leading-relaxed">
//                                 {item.text}
//                             </p>
//                         </div>
//                     ))}
//                 </div>

//                 {/* CTA */}
//                 <div className="mt-14 text-center">
//                     <button
//                         onClick={() => {
//                             const form = document.getElementById("serviceForm");
//                             if (form) form.scrollIntoView({ behavior: "smooth" });
//                         }}
//                         className="px-8 py-4 rounded-full bg-[#1e40af] text-white font-semibold shadow-xl transition transform hover:-translate-y-1 hover:bg-[#1e3a8a]"
//                     >
//                         Book Free Inspection
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import React from "react";
import {
    Shield,
    Clock,
    Users,
    Award,
    DollarSign,
    Wrench,
    CheckCircle
} from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Certified & Trained Technicians",
            description: "Our technicians are factory-trained and certified for all major AC and appliance brands, ensuring expert service every time.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Clock className="h-8 w-8" />,
            title: "Same-Day Service",
            description: "Quick response times with same-day service available for emergency repairs across Navi Mumbai.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <Wrench className="h-8 w-8" />,
            title: "Genuine Spare Parts",
            description: "We use only genuine and high-quality spare parts with warranty for all repairs and replacements.",
            color: "from-orange-500 to-amber-500"
        },
        {
            icon: <DollarSign className="h-8 w-8" />,
            title: "Transparent Pricing",
            description: "No hidden charges. Get upfront pricing with detailed breakdown before we start any work.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "10,000+ Happy Customers",
            description: "Trusted by residential and commercial clients across Navi Mumbai for reliable appliance services.",
            color: "from-red-500 to-rose-500"
        },
        {
            icon: <Wrench className="h-8 w-8" />,
            title: "Comprehensive Services",
            description: "From AC repair to appliance servicing, PCB repair, and sales – we handle all your needs under one roof.",
            color: "from-indigo-500 to-blue-500"
        }
    ];

    const stats = [
        { number: "12+", label: "Years Experience" },
        { number: "2K+", label: "Happy Customers" },
        { number: "98%", label: "Satisfaction Rate" },
        { number: "45 min", label: "Average Response" }
    ];

    return (
        <section className="w-full bg-linear-to-br from-[#eef4ff] via-[#d9e8ff] to-[#bbd4ff]py-16 md:py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e40af] mb-4">
                        Why Choose Apple Aircon?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We are Navi Mumbai's most trusted partner for AC and appliance services,
                        delivering excellence with every service call.
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 md:mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 text-center shadow-lg transform hover:-translate-y-2 transition duration-300"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                        >
                            {/* Icon with Gradient Background */}
                            <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 text-white`}>
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional Benefits */}
                <div className="mt-16 bg-gradient-to-br from-[#1e40af] to-[#3b82f6] rounded-3xl p-8 md:p-12 text-white">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                Our Commitment to Excellence
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "90-day service warranty on all repairs",
                                    "Free service estimate before starting work",
                                    "Emergency service available 7 days a week",
                                    "Clean and tidy service with zero mess",
                                    "Regular maintenance reminders",
                                    "Competitive pricing with value for money"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-300" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="text-center">
                                <Award className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
                                <h4 className="text-xl font-bold mb-4">Industry Recognition</h4>
                                <p className="text-blue-100">
                                    Awarded "Most Trusted Service Provider" in Navi Mumbai for
                                    consistent quality service and customer satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                        Ready for Professional Service?
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+918879873774"
                            className="px-8 py-3.5 rounded-xl bg-[#1e40af] text-white font-semibold shadow-lg hover:bg-[#1e3a8a] transition transform hover:-translate-y-1 duration-300 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Now for Instant Help
                        </a>

                        <button
                            onClick={() => {
                                const formSection = document.getElementById("serviceForm");
                                if (formSection) {
                                    formSection.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="px-8 py-3.5 rounded-xl bg-white border-2 border-[#1e40af] text-[#1e40af] font-semibold hover:bg-[#1e40af] hover:text-white shadow-lg transition transform hover:-translate-y-1 duration-300"
                        >
                            Book Free Service Inspection
                        </button>
                    </div>

                    {/* <p className="mt-6 text-gray-500 text-sm">
                        ⚡ Same-day service available • 🛡️ 90-day warranty • 💰 Best price guaranteed
                    </p> */}
                </div>

            </div>
        </section>
    );
}