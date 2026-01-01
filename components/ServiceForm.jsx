"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";

export default function AppleAirconForm() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        service: "",
        location: "Navi Mumbai",
        message: "",
    });

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();

        if (!form.phone || form.phone.length !== 10) {
            alert("Please enter a valid 10-digit phone number");
            return;
        }

        const whatsappNumber = "917666161814";

        const text = `
Hello Digital Aircon 👋

👤 Name: ${form.name || "N/A"}
📞 Phone: +91${form.phone}
🔧 Service: ${form.service || "Not selected"}
📍 Location: ${form.location}
📝 Issue: ${form.message || "Not specified"}
`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <section className="bg-[#f7faff] py-16 px-4">
            <h1 className="text-4xl md:text-5xl text-center font-extrabold text-[#1e40af]">
                Send Us a Message
            </h1>
            <div className="max-w-6xl mt-12 mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <p className="text-sm font-semibold text-[#1e40af] uppercase tracking-wide mb-3">
                        We’re Here to Help
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
                        Book Trusted <br />
                        <span className="text-[#1e40af]">Complete AC & Appliance Solutions
                        </span>
                    </h2>

                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-6">
                        Digital Aircon provides reliable AC and home appliance sales, repair,
                        installation, maintenance, and PCB solutions across Navi Mumbai for
                        both residential and commercial clients.
                    </p>

                    <div className="space-y-3 text-sm text-gray-700">
                        <div className="flex items-center gap-3">
                            <Mail className="text-[#1e40af]" size={18} />
                            digitalaircon2020@gmail.com
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-[#1e40af]" size={18} />
                            +91 7666161814
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM CARD */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                suppressHydrationWarning
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                placeholder="Enter your name"
                                className="w-full border rounded-lg px-4 py-3 text-sm
                focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>

                            <div className="flex">
                                <div className="flex items-center gap-1 bg-gray-100 border border-r-0 rounded-l-lg px-3 text-sm">
                                    🇮🇳 <span className="ml-1">+91</span>
                                </div>

                                <input
                                    suppressHydrationWarning
                                    type="tel"
                                    maxLength={10}
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    placeholder="Enter 10-digit number"
                                    className="w-full border rounded-r-lg px-4 py-3 text-sm
                  focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Service Required
                            </label>
                            <select
                                value={form.service}
                                onChange={(e) => setForm({ ...form, service: e.target.value })}
                                className="w-full border rounded-lg px-4 py-3 text-sm bg-white
                focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
                            >
                                <option value="">Select Service</option>
                                <option>Repair</option>
                                <option>New Purchase</option>
                                <option>Installation</option>
                                <option>Maintenance</option>
                                <option>Used Appliance Sale</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Location
                            </label>
                            <input
                                type="text"
                                value={form.location}
                                onChange={(e) => setForm({ ...form, location: e.target.value })}
                                placeholder="Navi Mumbai"
                                className="w-full border rounded-lg px-4 py-3 text-sm
                focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Issue Description
                            </label>
                            <textarea

                                rows="3"
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                placeholder="Tell us what you need?"
                                className="w-full border rounded-lg px-4 py-3 text-sm resize-none
                focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
                            />
                        </div>

                        <button
                            suppressHydrationWarning
                            type="submit"
                            className="
                w-full bg-[#1e40af] text-white rounded-lg py-3
                flex items-center justify-center gap-2
                text-sm font-semibold transition-all duration-200
                hover:bg-[#1e3a8a]
                active:bg-[#1e3a8a] active:scale-[0.98]
                focus-visible:ring-2 focus-visible:ring-[#1e40af] focus-visible:ring-offset-2 cursor-pointer"
                        >
                            Send Message
                            {/* <Send size={16} /> */}
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
}
