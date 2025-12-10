"use client";

import { useState, useEffect } from "react";
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
        portraitImage: "https://i.pinimg.com/736x/03/2c/7b/032c7b2a865bb6c1f19892fbb8662179.jpg",
    },
    {
        id: "washing",
        tabTitle: "Washing Machine",
        title: "Washing Machine Services in Navi Mumbai",
        description:
            "Expert repair and maintenance for fully automatic and semi-automatic washing machines of all major brands in Navi Mumbai.",
        longText:
            "Apple Aircon offers professional washing machine repair services including drum and motor repair, water leakage fixes, and PCB replacement. We work with top brands such as LG, Samsung, Whirlpool, and IFB to ensure your washing machine runs smoothly. Our team provides timely, reliable, and cost-effective solutions for both residential and commercial washing machines across Navi Mumbai.",
        // image: "https://www.lg.com/content/dam/lge/in/lifesgood/highlitght-washing/WM-NDTV-Award-Banner-1920x720-2.jpg",
        image: "/Washingmachine.png",
        // portraitImage: "https://www.lg.com/content/dam/lge/in/lifesgood/highlitght-washing/M-WM-NDTV-Award-720x960-2.jpg",
        portraitImage: "/WM1.png",
    },
    {
        id: "microwave",
        tabTitle: "Microwave Oven",
        title: "Microwave Oven Services in Navi Mumbai",
        description:
            "Reliable microwave oven repair services for solo, grill, and convection models with genuine spare parts in Navi Mumbai.",
        longText:
            "Apple Aircon specializes in microwave oven repair including heating issues, control panel repair, and safety checks. We service all major brands such as LG, IFB, Samsung, and Panasonic. Our certified technicians ensure fast, safe, and efficient repairs, helping you get your microwave oven back to perfect working condition. Available for residential and commercial clients across Navi Mumbai.",
        image: "https://media3.gaggenau.com/Images/1600x/MCIM03335919_Steam-landing-page-teaser-12x5.webp",
        portraitImage: "https://media3.gaggenau.com/Images/1600x/20673399_gaggenau-benefit-combi-steam-combi-microwave-ovens-400-series.webp",
    },
    {
        id: "refrigerator",
        tabTitle: "Refrigerator",
        title: "Refrigerator Services in Navi Mumbai",
        description:
            "Fast refrigerator repair including cooling issues, compressor faults, and gas charging for all brands in Navi Mumbai.",
        longText:
            "Apple Aircon provides comprehensive refrigerator services including cooling problem fixes, compressor repair, and gas refilling. We work with major brands such as LG, Samsung, Whirlpool, and Haier to ensure efficient, long-lasting performance. Our technicians offer prompt and professional repair services for home and commercial refrigerators across Navi Mumbai, ensuring your appliances remain in top condition.",
        image: "https://media3.gaggenau.com/Images/4000x/27491816_GG-global-Vario-cooling-expressive-series-refrigerators-page-full-width.webp",
        portraitImage: "https://media3.gaggenau.com/Images/1600x/23654387_GG-lux-landing-page-image-01.webp",
    },
];

export default function ServicesHighlight() {
    const [activeService, setActiveService] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();

    // Initialize activeService on mount
    useEffect(() => {
        if (!activeService && services.length > 0) {
            setActiveService(services[0]);
        }
    }, [activeService]);

    // Reset expanded state when service changes
    useEffect(() => {
        setExpanded(false);
    }, [activeService]);

    // Return null or loading state while activeService is not set
    if (!activeService) {
        return (
            <section className="w-full bg-[#f6f7fb] py-15 px-4 sm:px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="animate-pulse">
                        <div className="h-10 w-48 bg-gray-300 rounded mb-10"></div>
                        <div className="h-96 bg-gray-300 rounded-3xl"></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full bg-[#f6f7fb] py-15 px-4 sm:px-6 overflow-hidden pt-22">
            <div className="max-w-7xl mx-auto">

                {/* HEADING */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-left mb-8 sm:mb-10 text-[#1e40af]">
                    Our Expertise
                </h2>

                {/* SERVICE TABS */}
                <div className="flex gap-6 sm:gap-8 mb-8 sm:mb-10 overflow-x-auto md:overflow-visible pb-2 sm:pb-4 border-b border-gray-300 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(service)}
                            className={`text-base sm:text-lg font-medium pb-1 whitespace-nowrap transition shrink-0
                                ${activeService.id === service.id
                                    ? "border-b-2 border-[#1e40af] text-[#1e40af]"
                                    : "text-gray-600 hover:text-black"
                                }`}
                        >
                            {service.tabTitle}
                        </button>
                    ))}
                </div>

                {/* RESPONSIVE CARD WITH DIFFERENT IMAGE RATIOS */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                    {/* DESKTOP: Background image for landscape */}
                    <div
                        className="hidden md:block absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${activeService.image})` }}
                    />

                    {/* MOBILE: Background image for portrait */}
                    <div
                        className="md:hidden absolute inset-0 bg-cover"
                        style={{
                            backgroundImage: `url(${activeService.portraitImage || activeService.image})`,
                            backgroundPosition: "top center"
                        }}
                    />

                    {/* DARK OVERLAY - Adjust opacity for mobile/desktop */}
                    <div className="absolute inset-0 bg-black/40 md:bg-black/40" />

                    {/* CONTENT CONTAINER - Different layouts for mobile/desktop */}
                    <div className="relative z-10 p-10 sm:p-8 md:p-10 min-h-[500px] md:min-h-[550px] flex flex-col justify-end">
                        <div className="max-w-2xl">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                                {activeService.title}
                            </h3>

                            {/* Desktop: Full paragraph always visible */}
                            <div className="hidden md:block">
                                <p className="text-gray-200 mt-5">
                                    {activeService.description}
                                </p>

                                <p className="text-gray-300 mt-4 leading-relaxed">
                                    {activeService.longText}
                                </p>

                            </div>

                            {/* Mobile/Tablet: Truncated with show more/less */}
                            <div className="md:hidden">
                                {/* Short description always visible */}
                                <p className="text-gray-200 mt-6 text-base">
                                    {activeService.description}
                                </p>

                                {/* Long text with line-clamp and show more */}
                                <div className=" mt-4">
                                    <p className="text-gray-300 leading-relaxed transition-all duration-300 line-clamp-4">
                                        {activeService.longText}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => router.push(`/services?service=${activeService.id}`)}
                                className="mt-8 sm:mt-10 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white border-2 border-[#1e40af] text-black font-semibold transition transform hover:-translate-y-1 hover:bg-[#1e40af] hover:text-white active:bg-[#1e40af] active:text-white focus-visible:-translate-y-1 focus-visible:bg-[#1e40af] focus-visible:text-white duration-300 cursor-pointer text-sm sm:text-base"
                            >
                                Explore More
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}