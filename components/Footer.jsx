"use client";

import Link from "next/link";
import { Phone, MapPin, Mail, Calendar, Star } from "lucide-react";
import Floating from "./Floating"

export default function Footer() {
    return (
        <footer className="bg-[#0f1b4d] text-white pt-14 pb-6 relative z-50">

            {/* Top Section */}
            <div className="max-w-full mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Digital Aircon</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Expert AC & appliance repair services in Navi Mumbai with reliable
                        technicians, transparent pricing, and same-day support.
                    </p>

                    <div className="mt-5 space-y-3 text-gray-300">
                        <div className="flex items-start gap-2">
                            <Phone className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                            <span>+91 7666161814</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <Mail className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                            <span>digitalaircon2020@gmail.com</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <MapPin className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                            <span>Shop no 05, Meera sadan, plot 36/B, Sector 20, Kharghar, Navi Mumbai.</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="hidden md:block">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/AboutUs" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/#servicesHighlight" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="/ContactUs" className="hover:text-white transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* MOBILE VIEW SIDE-BY-SIDE SECTION */}
                <div className="block md:hidden">
                    <div className="grid grid-cols-2 gap-6 mt-8">
                        {/* Quick Links (Repeat on Mobile Right Side) */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li><Link href="/" className="hover:text-white">Home</Link></li>
                                <li><Link href="/AboutUs" className="hover:text-white">About Us</Link></li>
                                <li><Link href="/#servicesHighlight" className="hover:text-white">Services</Link></li>
                                <li><Link href="/ContactUs" className="hover:text-white">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Services on Right Side */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li><Link href="/services?service=ac" className="hover:text-white transition-colors">AC Repair & Installation</Link></li>
                                <li><Link href="/services?service=washing" className="hover:text-white transition-colors">Washing Machine Repair</Link></li>
                                <li><Link href="/services?service=refrigerator" className="hover:text-white transition-colors">Refrigerator Repair</Link></li>
                                <li><Link href="/services?service=microwave" className="hover:text-white transition-colors">Microwave Oven Repair</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Desktop Services Section */}
                <div className="hidden md:block">
                    <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li><Link href="/services?service=ac" className="hover:text-white transition-colors">AC Repair & Installation</Link></li>
                        <li><Link href="/services?service=washing" className="hover:text-white transition-colors">Washing Machine Repair</Link></li>
                        <li><Link href="/services?service=refrigerator" className="hover:text-white transition-colors">Refrigerator Repair</Link></li>
                        <li><Link href="/services?service=microwave" className="hover:text-white transition-colors">Microwave Oven Repair</Link></li>
                    </ul>
                </div>

                {/* Service Hours & Quick Booking Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Service Information</h3>

                    {/* Service Hours */}
                    <div className="mb-4 p-4 rounded-lg bg-blue-900/20 border border-blue-300/20">

                        {/* Operating Hours */}
                        <div className="flex items-center gap-3 mb-3">
                            <Calendar className="w-5 h-5 text-blue-300" />
                            <h4 className="font-medium text-white">Operating Hours</h4>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300 text-sm">Monday - Sunday</span>
                                <span className="text-white font-medium text-sm">9:00 AM - 11:00 PM</span>
                            </div>
                            {/* <div className="flex justify-between items-center">
                                <span className="text-gray-300 text-sm">Sunday</span>
                                <span className="text-white font-medium text-sm">10:00 AM - 11:00 PM</span>
                            </div> */}
                        </div>

                        {/* Rating Section (Same Style as Hours) */}
                        <div className="flex items-center gap-3 mb-3">
                            <Star className="w-5 h-5 text-yellow-400" />
                            <h4 className="font-medium text-white">Customer Rating</h4>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300 text-sm">Google Rating</span>
                                <span className="text-white font-medium text-sm flex items-center gap-1">
                                    ⭐ 4.9/5
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300 text-sm">Based on Reviews</span>
                                <span className="text-yellow-300 font-medium text-sm">45+ Reviews</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-blue-300/20 mt-10 pt-4 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Digital Aircon — All Rights Reserved.
            </div>
            <Floating />
        </footer>
    );
}