"use client";

import React from "react";
import {
    BadgeCheck,
    Zap,
    Smile,
    Receipt,
    Wrench,
    Layers,
    CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function WhyChooseUs() {
    const features = [
        {
            icon: <BadgeCheck className="h-8 w-8" />,
            title: "Experienced & Skilled Technicians",
            description: "Our technicians bring years of hands-on experience in AC and appliance servicing across leading brands.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Same-Day Service",
            description: "Quick response times with same-day service available for emergency repairs across Navi Mumbai.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <Wrench className="h-8 w-8" />,
            title: "Technical Expertise",
            description: "Strong technical knowledge to accurately diagnose issues and deliver reliable, long-lasting solutions.",
            color: "from-orange-500 to-amber-500"
        },
        {
            icon: <Receipt className="h-8 w-8" />,
            title: "Transparent Pricing",
            description: "No hidden charges. Get upfront pricing with detailed breakdown before we start any work.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Smile className="h-8 w-8" />,
            title: "2,000+ Happy Customers",
            description: "Trusted by residential and commercial clients across Navi Mumbai for reliable appliance services.",
            color: "from-red-500 to-rose-500"
        },
        {
            icon: <Layers className="h-8 w-8" />,
            title: "Comprehensive Services",
            description: "From AC servicing to appliance care, PCB repair, and sales – all essential services under one roof.",
            color: "from-indigo-500 to-blue-500"
        }

    ];

    const stats = [
        { number: "12+", label: "Years Experience" },
        { number: "2K+", label: "Happy Customers" },
        { number: "98%", label: "Satisfaction Rate" },
        { number: "7 Days", label: "Service Availability" }
    ];
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const containerRef = useRef(null);
    const inView = useInView(containerRef, { once: true, amount: 0.3 });
    const isInView = isMobile ? true : inView;


    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardHover = {
        rest: { scale: 1 },
        hover: {
            scale: 1.03,
            transition: { type: "spring", stiffness: 300 }
        }
    };

    const pulseAnimation = {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
        }
    };

    const statCounter = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({  // Removed TypeScript type annotation
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100
            }
        })
    };

    return (
        <section
            ref={containerRef}
            className="w-full bg-linear-to-br from-[#eef4ff] via-[#d9e8ff] to-[#bbd4ff] py-16 md:py-20 px-4 sm:px-6 md:overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl font-extrabold text-[#1e40af] mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Why Choose Digital Aircon?
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        We are Navi Mumbai's most trusted partner for AC and appliance services,
                        delivering excellence with every service call.
                    </motion.p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 md:mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={statCounter}
                            className="bg-white rounded-2xl p-6 text-center shadow-xl transform hover:-translate-y-2 transition duration-300 active:-translate-y-1 active:shadow-2xl focus-visible:-translate-y-2 focus-visible:shadow-2xl overflow-hidden relative group select-none"
                        >
                            {/* Animated background effect */}
                            <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-full group-hover:translate-x-fulltransition-transform duration-1000" />

                            <motion.div
                                className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-2 relative"
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ type: "spring", delay: index * 0.1 + 0.3 }}
                            >
                                {stat.number}
                            </motion.div>
                            <div className="text-gray-600 font-medium relative">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Features Grid - FIXED SECTION */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="relative"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl active:-translate-y-1 active:shadow-2xl focus-visible:-translate-y-2 focus-visible:shadow-2xl h-full border border-transparent hover:border-blue-200 select-none">
                                {/* INLINE ICON + TITLE */}
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div
                                        className={`inline-flex p-4 rounded-xl bg-linear-to-br ${feature.color} text-white`}
                                        whileHover={{ rotate: 360 }}
                                        whileTap={{ rotate: 360 }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                    >
                                        {feature.icon}
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-gray-800">
                                        {feature.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="relative"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl active:-translate-y-1 active:shadow-2xl focus-visible:-translate-y-2 focus-visible:shadow-2xl h-full border border-transparent hover:border-blue-200">

                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div
                                        className={`inline-flex p-4 rounded-xl bg-linear-to-br ${feature.color} text-white`}
                                        whileHover={{ rotate: 360 }}
                                        whileTap={{ rotate: 360 }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                    >
                                        {feature.icon}
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-gray-800">
                                        {feature.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </motion.div> */}

                {/* Additional Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 bg-linear-to-br from-[#1e40af] to-[#3b82f6] rounded-3xl p-6 sm:p-8 md:p-12 text-white overflow-hidden relative"
                >
                    {/* Background animation elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

                    {/* ✅ MOBILE VIEW */}
                    <div className="md:hidden space-y-6 relative">
                        <motion.h3
                            className="text-xl font-bold text-center"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5 }}
                        >
                            Why Customers Trust Us
                        </motion.h3>

                        <div className="grid grid-cols-1 gap-4">
                            {[
                                "90-day repair warranty",
                                "Free inspection & estimate",
                                "Local technicians, doorstep service"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm border border-white/20"
                                >
                                    <motion.div
                                        animate={pulseAnimation}
                                    >
                                        <CheckCircle className="h-5 w-5 text-green-300 shrink-0" />
                                    </motion.div>
                                    <span className="text-sm">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ✅ DESKTOP VIEW */}
                    <div className="hidden md:grid md:grid-cols-2 gap-8 items-center relative">
                        {/* Left column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                Our Commitment to Excellence
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <motion.div
                                        animate={pulseAnimation}
                                    >
                                        <CheckCircle className="h-5 w-5 text-green-300" />
                                    </motion.div>
                                    <span>90-day repair warranty on all AC & appliances</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <motion.div
                                        animate={pulseAnimation}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <CheckCircle className="h-5 w-5 text-green-300" />
                                    </motion.div>
                                    <span>Free inspection & upfront cost estimate</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <motion.div
                                        animate={pulseAnimation}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <CheckCircle className="h-5 w-5 text-green-300" />
                                    </motion.div>
                                    <span>Emergency service available 7 days a week</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <motion.div
                                        animate={pulseAnimation}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <CheckCircle className="h-5 w-5 text-green-300" />
                                    </motion.div>
                                    <span>Clean, professional, mess-free service</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Right column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h4 className="text-xl font-bold mb-6 text-center">
                                Our Service Promise
                            </h4>
                            <ul className="space-y-4 text-blue-100">
                                <li className="flex gap-3">
                                    <motion.div
                                        animate={pulseAnimation}
                                    >
                                        <CheckCircle className="h-5 w-5 text-green-300 mt-1" />
                                    </motion.div>
                                    <span>Local Navi Mumbai technicians (no outsiders)</span>
                                </li>
                                <li className="flex gap-3">
                                    <motion.div
                                        animate={pulseAnimation}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <CheckCircle className="h-5 w-5 text-green-300 mt-1" />
                                    </motion.div>
                                    <span>Doorstep AC & appliance service</span>
                                </li>
                                <li className="flex gap-3">
                                    <motion.div
                                        animate={pulseAnimation}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <CheckCircle className="h-5 w-5 text-green-300 mt-1" />
                                    </motion.div>
                                    <span>All major AC & appliance brands</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-14 sm:mt-16 text-center"
                >
                    <motion.h3
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6"
                        animate={{
                            scale: [1, 1.02, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        Ready for Professional Service?
                    </motion.h3>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="tel:+917666161814"
                            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1e40af] text-white font-semibold shadow-lg hover:bg-[#1e3a8a] transition hover:-translate-y-1 flex items-center justify-center gap-2 relative overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Call Now for Instant Help</span>
                            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Phone icon animation */}
                            <motion.span
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="relative z-10"
                            >
                                📞
                            </motion.span>
                        </motion.a>

                        <motion.button
                            suppressHydrationWarning
                            onClick={() =>
                                document.getElementById("serviceForm")?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white border-2 border-[#1e40af] text-[#1e40af] font-semibold hover:bg-[#1e40af] hover:text-white shadow-lg transition hover:-translate-y-1"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#1e40af",
                                color: "#ffffff"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book Free Inspection
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}