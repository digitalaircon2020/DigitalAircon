"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const [openSubmenu, setOpenSubmenu] = useState(null);


    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "/", type: "direct" },
        {
            name: "Services",
            href: "#servicesHighlight",
            type: "navigate",
            submenu: [
                { name: "AC Repair & Service", href: "/services?service=ac" },
                { name: "Washing Machine", href: "/services?service=washing" },
                { name: "Refrigerator", href: "/services?service=refrigerator" },
                { name: "Microwave Oven", href: "/services?service=microwave" },
            ],
        },
        { name: "About", href: "/AboutUs", type: "navigate" },
        { name: "Contact", href: "/contact", type: "navigate" },
    ];

    const isActive = (href) => {
        if (href === "/") return pathname === href;
        return pathname.startsWith(href);
    };

    const handleServiceClick = (e, href) => {
        e.preventDefault();
        if (pathname === "/") {
            const section = document.querySelector(href);
            if (section) section.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/" + href);
        }
        setIsOpen(false);
    };

    return (
        <nav
            className={`w-full fixed z-50 transition-all duration-300
            ${scrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-md py-2"
                    : "bg-linear-to-b from-white/90 to-white/70 backdrop-blur-md py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex flex-col">
                        <h1 className="text-xl font-extrabold text-[#0f172a] tracking-tight">
                            Apple Aircon
                        </h1>
                        <p className="text-xs text-gray-600 font-medium tracking-wide">
                            Air Conditioning & Appliance Services
                        </p>
                    </Link>

                    {/* Desktop Navigation + CTA */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navItems.map((item) => (
                            <div key={item.name} className="relative group">
                                {item.name === "Services" ? (
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleServiceClick(e, item.href)}
                                        className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition
                                        ${isActive(item.href)
                                                ? "text-[#1e40af]"
                                                : "text-gray-700 hover:text-[#1e40af]"
                                            }`}
                                    >
                                        {item.name}
                                        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#1e40af] transition-all group-hover:w-full"></span>
                                    </a>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`relative text-sm font-semibold tracking-wide transition
                                        ${isActive(item.href)
                                                ? "text-[#1e40af]"
                                                : "text-gray-700 hover:text-[#1e40af]"
                                            }`}
                                    >
                                        {item.name}
                                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#1e40af] transition-all group-hover:w-full"></span>
                                    </Link>
                                )}

                                {/* Submenu */}
                                {item.submenu && (
                                    <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                                        <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border min-w-60 py-3">
                                            {item.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#1e40af] rounded-lg transition"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* ✅ NAVBAR CTA (Soft, Balanced) */}
                        <a
                            href="tel:+918879873774"
                            className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                            border-2 border-[#1e40af] text-[#1e40af] text-sm font-semibold
                            hover:bg-[#1e40af] hover:text-white
                            transition transform hover:-translate-y-0.5"
                        >
                            <Phone className="h-4 w-4" />
                            Call Now
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl bg-white/70 backdrop-blur border shadow"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="lg:hidden bg-white/95 backdrop-blur-xl shadow-xl border-t rounded-b-2xl"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    {item.name === "Services" ? (
                                        <a
                                            href={item.href}
                                            onClick={(e) => handleServiceClick(e, item.href)}
                                            className={`block px-4 py-3 rounded-xl text-sm font-semibold transition
                                            ${isActive(item.href)
                                                    ? "bg-blue-50 text-[#1e40af]"
                                                    : "text-gray-700 hover:bg-gray-50"
                                                }`}
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-3 rounded-xl text-sm font-semibold transition
                                            ${isActive(item.href)
                                                    ? "bg-blue-50 text-[#1e40af]"
                                                    : "text-gray-700 hover:bg-gray-50"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    )}

                                    {item.submenu && (
                                        <div className="ml-5 mt-2 space-y-1 border-l border-gray-200 pl-4">
                                            {item.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block py-2.5 text-sm text-gray-600 hover:text-[#1e40af] transition"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}