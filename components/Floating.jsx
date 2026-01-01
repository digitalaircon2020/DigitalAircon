"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function FloatingContactButtons() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeTooltip, setActiveTooltip] = useState(null);

    // Check for mobile screen
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Automatic tooltip cycling for mobile
    useEffect(() => {
        if (!isMobile) return;

        const interval = setInterval(() => {
            setActiveTooltip(prev => {
                if (prev === "whatsapp") return "call";
                if (prev === "call") return null;
                return "whatsapp";
            });
        }, 3000); // Change tooltip every 3 seconds

        return () => clearInterval(interval);
    }, [isMobile]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.5
            }}
            className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
        >
            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/917666161814"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: 0.3,
                    type: "spring",
                    stiffness: 200
                }}
                whileHover={!isMobile ? {
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: {
                        scale: { type: "spring", stiffness: 400 },
                        rotate: { duration: 0.5 }
                    }
                } : undefined}
                whileTap={{ scale: 0.9 }}
                className="group relative flex items-center justify-center w-14 h-14 rounded-full
                   bg-linear-to-br from-green-500 via-green-600 to-emerald-600
                   shadow-xl shadow-green-500/40 hover:shadow-green-500/60"
            >
                {/* Multiple Pulse Rings */}
                <motion.span
                    animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.6, 0, 0.6]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full bg-green-400"
                />

                <motion.span
                    animate={{
                        scale: [1, 2, 1],
                        opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    className="absolute inset-0 rounded-full bg-green-300"
                />

                <FaWhatsapp className="relative z-10 text-white text-2xl" />

                {/* Enhanced Tooltip with animation */}
                <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    whileHover={!isMobile ? { opacity: 1, x: 0 } : undefined}
                    animate={isMobile ? {
                        opacity: activeTooltip === "whatsapp" ? 1 : 0,
                        x: activeTooltip === "whatsapp" ? 0 : 20
                    } : {}}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute right-16
                     bg-linear-to-r from-green-600 to-emerald-700
                     text-white text-sm font-medium px-4 py-2 rounded-lg
                     shadow-xl shadow-green-500/30 whitespace-nowrap z-50"
                >
                    Chat on WhatsApp
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-emerald-700" />
                </motion.span>
            </motion.a>

            {/* Call Button */}
            <motion.a
                href="tel:+917666161814"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200
                }}
                whileHover={!isMobile ? {
                    scale: 1.1,
                    rotate: [0, 360],
                    transition: {
                        scale: { type: "spring", stiffness: 400 },
                        rotate: { duration: 0.8, ease: "easeInOut" }
                    }
                } : undefined}
                whileTap={{ scale: 0.9 }}
                className="group relative flex items-center justify-center w-14 h-14 rounded-full
                   bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600
                   shadow-xl shadow-blue-500/40 hover:shadow-blue-500/60"
            >
                {/* Floating Animation with rotation */}
                <motion.div
                    animate={{
                        y: [0, -8, 0],
                        rotate: [0, 360]
                    }}
                    transition={{
                        y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        rotate: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }
                    }}
                    className="absolute inset-0 rounded-full"
                />

                {/* Pulsing effect */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full bg-blue-400"
                />

                <motion.div
                    animate={{ rotate: [0, -360] }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <Phone className="relative z-10 text-white h-6 w-6" />
                </motion.div>

                {/* Enhanced Tooltip with animation */}
                <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    whileHover={!isMobile ? { opacity: 1, x: 0 } : undefined}
                    animate={isMobile ? {
                        opacity: activeTooltip === "call" ? 1 : 0,
                        x: activeTooltip === "call" ? 0 : 20
                    } : {}}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute right-16
                     bg-linear-to-r from-blue-600 to-indigo-700
                     text-white text-sm font-medium px-4 py-2 rounded-lg
                     shadow-xl shadow-blue-500/30 whitespace-nowrap z-50"
                >
                    Call for Service Inquiry
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-indigo-700" />
                </motion.span>
            </motion.a>
        </motion.div>
    );
}