"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const services = [
    {
        id: "ac",
        tabTitle: "Air Conditioner",
        title: "Air Conditioner Services in Navi Mumbai",
        description:
            "Reliable AC repair, installation, servicing, gas refilling, and maintenance for homes and commercial spaces in Navi Mumbai.",
        longText:
            "Apple Aircon provides complete air conditioning solutions including new AC installation, preventive servicing, gas refilling, and emergency breakdown repairs. We work with all major AC brands such as LG, Blue Star, Daikin, and Samsung. Along with professional repair services, we also deal in new air conditioners and buy & sell certified second-hand AC units, offering affordable and energy-efficient cooling solutions for residential and commercial customers across Navi Mumbai.",
        image: "https://i.pinimg.com/1200x/03/2c/7b/032c7b2a865bb6c1f19892fbb8662179.jpg",
    },
    {
        id: "washing",
        tabTitle: "Washing Machine",
        title: "Washing Machine Repair Services in Navi Mumbai",
        description:
            "Expert repair and maintenance for fully automatic and semi-automatic washing machines of all major brands in Navi Mumbai.",
        longText:
            "Apple Aircon offers professional washing machine repair services including drum and motor repair, water leakage fixes, and PCB replacement. We work with top brands such as LG, Samsung, Whirlpool, and IFB to ensure your washing machine runs smoothly. Our team provides timely, reliable, and cost-effective solutions for both residential and commercial washing machines across Navi Mumbai.",
        image: "https://www.lg.com/content/dam/lge/in/lifesgood/highlitght-washing/WM-NDTV-Award-Banner-1920x720-2.jpg",
    },
    {
        id: "microwave",
        tabTitle: "Microwave Oven",
        title: "Microwave Oven Repair Services in Navi Mumbai",
        description:
            "Reliable microwave oven repair services for solo, grill, and convection models with genuine spare parts in Navi Mumbai.",
        longText:
            "Apple Aircon specializes in microwave oven repair including heating issues, control panel repair, and safety checks. We service all major brands such as LG, IFB, Samsung, and Panasonic. Our certified technicians ensure fast, safe, and efficient repairs, helping you get your microwave oven back to perfect working condition. Available for residential and commercial clients across Navi Mumbai.",
        image: "https://media3.gaggenau.com/Images/1600x/MCIM03335919_Steam-landing-page-teaser-12x5.webp",
    },
    {
        id: "refrigerator",
        tabTitle: "Refrigerator",
        title: "Refrigerator Repair & Maintenance Services in Navi Mumbai",
        description:
            "Fast refrigerator repair including cooling issues, compressor faults, and gas charging for all brands in Navi Mumbai.",
        longText:
            "Apple Aircon provides comprehensive refrigerator services including cooling problem fixes, compressor repair, and gas refilling. We work with major brands such as LG, Samsung, Whirlpool, and Haier to ensure efficient, long-lasting performance. Our technicians offer prompt and professional repair services for home and commercial refrigerators across Navi Mumbai, ensuring your appliances remain in top condition.",
        image: "https://media3.gaggenau.com/Images/4000x/27491816_GG-global-Vario-cooling-expressive-series-refrigerators-page-full-width.webp",
    },
];

export default function ServicesHighlight() {
    const [activeService, setActiveService] = useState(services[0]);
    const router = useRouter();


    return (
        <section className="w-full bg-[#f6f7fb] py-18 px-6">
            <div className="max-w-7xl mx-auto">

                {/* HEADING */}
                <h2 className="text-4xl font-bold text-left mb-10">
                    Services
                </h2>

                {/* SERVICE TABS */}
                <div className="flex justify-flex gap-8 mb-14">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(service)}
                            className={`text-lg font-medium pb-1 transition
                                ${activeService.id === service.id
                                    ? "text-black border-b-2 border-black"
                                    : "text-gray-400 hover:text-black"
                                }`}
                        >
                            {service.tabTitle}
                        </button>
                    ))}
                </div>

                {/* BLACK CARD WITH FULL BACKGROUND IMAGE */}
                <div
                    className="relative rounded-3xl overflow-hidden shadow-xl min-h-80 md:min-h-140"
                    style={{
                        backgroundImage: `url(${activeService.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/30" />

                    {/* CONTENT */}
                    <div className="relative z-10 p-10 max-w-2xl">
                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                            {activeService.title}
                        </h3>

                        <p className="text-gray-200 mt-5">
                            {activeService.description}
                        </p>

                        <p className="text-gray-300 mt-4 leading-relaxed">
                            {activeService.longText}
                        </p>


                        <button
                            onClick={() => router.push("/services")}
                            className="mt-10 bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer"
                        >
                            Explore More
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
