"use client";

import Link from "next/link"; // if using Next.js
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    CheckCircle,
    Phone,
    Star,
    Users,
    Award
} from "lucide-react";

// SEO-optimized Service Data (Service + Location + Brand)
const serviceDetails = {
    ac: {
        slug: "ac",
        tabTitle: "Air Conditioner",
        title: "AC Sales & Repair in Navi Mumbai",        // UI-friendly
        seoTitle: "AC Repair & Services in Navi Mumbai | Apple Aircon", // SEO
        subtitle: "Trusted AC repair, installation & maintenance experts",
        description:
            "Apple Aircon offers professional AC repair, installation, servicing, gas refilling, and maintenance in Navi Mumbai for homes and commercial spaces.",
        longText:
            "Apple Aircon is a trusted name for AC repair and services in Navi Mumbai, providing complete air conditioning solutions for residential and commercial customers. Our experienced technicians handle AC installation, preventive servicing, gas refilling, PCB repair, and emergency breakdowns with efficiency and care. We service all major AC brands including LG, Blue Star, Daikin, Samsung, Voltas, and Hitachi. In addition to repair services, we also deal in new air conditioners and buy & sell certified second-hand AC units, offering reliable and cost-effective cooling solutions across Navi Mumbai.",
        heroImage:
            "https://i.pinimg.com/1200x/03/2c/7b/032c7b2a865bb6c1f19892fbb8662179.jpg",
        image:
            "https://i.pinimg.com/1200x/03/2c/7b/032c7b2a865bb6c1f19892fbb8662179.jpg",
        portraitImage:
            "https://i.pinimg.com/736x/03/2c/7b/032c7b2a865bb6c1f19892fbb8662179.jpg",
        brands: [
            "LG",
            "Blue Star",
            "Daikin",
            "Samsung",
            "Voltas",
            "Hitachi",
            "Carrier",
            "Whirlpool",
            "Panasonic",
            "Godrej",
            "Haier",
        ],
        services: [
            "AC Repair",
            "Installation",
            "Gas Refilling",
            "Servicing",
            "Buy New AC",
            "Sell Old AC",
            "PCB Repair",
            "Maintenance",
        ],
        icon: "❄️",
    },

    washing: {
        slug: "washing",
        tabTitle: "Washing Machine",
        title: "Washing Machine Sales & Repair in Navi Mumbai",
        seoTitle: "Washing Machine Repair in Navi Mumbai | Apple Aircon",
        subtitle: "Expert repair for automatic & semi-automatic machines",
        description:
            "Apple Aircon provides reliable washing machine repair and maintenance services in Navi Mumbai for all major brands.",
        longText:
            "Looking for washing machine repair in Navi Mumbai? Apple Aircon offers expert repair services for fully automatic and semi-automatic washing machines. Our technicians fix common issues such as drum problems, motor failure, water leakage, PCB faults, and installation errors. We service leading brands including LG, Samsung, Whirlpool, IFB, Bosch, and Panasonic. With fast doorstep service and genuine spare parts, Apple Aircon ensures long-lasting performance and hassle-free washing machine service across Navi Mumbai.",
        heroImage: "/Washingmachine.png",
        image: "/Washingmachine.png",
        portraitImage: "/WM1.png",
        brands: [
            "LG",
            "Samsung",
            "Whirlpool",
            "IFB",
            "Bosch",
            "Panasonic",
            "Haier",
            "Godrej",
            "Electrolux",
            "Onida",
        ],
        services: [
            "Drum Repair",
            "Motor Replacement",
            "PCB Repair",
            "Installation",
            "Buy New",
            "Sell Old",
            "Water Leakage Fix",
            "Maintenance",
        ],
        icon: "🧺",
    },

    microwave: {
        slug: "microwave",
        tabTitle: "Microwave Oven",
        title: "Microwave Oven Sale & Repair in Navi Mumbai",
        seoTitle: "Microwave Oven Repair in Navi Mumbai | Apple Aircon",
        subtitle: "Fast, safe microwave repair with genuine spare parts",
        description:
            "Apple Aircon offers professional microwave oven repair services in Navi Mumbai for solo, grill, and convection models.",
        longText:
            "Apple Aircon specializes in microwave oven repair in Navi Mumbai, handling issues such as heating problems, control panel faults, magnetron replacement, and electrical safety checks. Our certified technicians service all major microwave brands including LG, IFB, Samsung, Panasonic, and Whirlpool. We ensure fast, safe, and reliable repair services for homes and commercial kitchens across Navi Mumbai using genuine spare parts.",
        heroImage:
            "https://media3.gaggenau.com/Images/1600x/MCIM03335919_Steam-landing-page-teaser-12x5.webp",
        image:
            "https://media3.gaggenau.com/Images/1600x/MCIM03335919_Steam-landing-page-teaser-12x5.webp",
        portraitImage:
            "https://media3.gaggenau.com/Images/1600x/20673399_gaggenau-benefit-combi-steam-combi-microwave-ovens-400-series.webp",
        brands: [
            "LG",
            "IFB",
            "Samsung",
            "Panasonic",
            "Whirlpool",
            "Bajaj",
            // "Morphy Richards",
            "Kenstar",
            "Haier",
        ],
        services: [
            "Heating Repair",
            "Control Panel",
            "Magnetron Replacement",
            "Installation",
            "Buy New",
            "Sell Old",
            "Safety Check",
            "Maintenance",
        ],
        icon: "🔥",
    },

    refrigerator: {
        slug: "refrigerator",
        tabTitle: "Refrigerator",
        title: "Refrigerator Sales & Repair in Navi Mumbai",
        seoTitle: "Refrigerator Repair Services in Navi Mumbai | Apple Aircon",
        subtitle: "Expert solutions for all refrigerator types & brands",
        description:
            "Apple Aircon provides fast and reliable refrigerator repair services in Navi Mumbai, including cooling issues, compressor repair, and gas charging.",
        longText:
            "Apple Aircon is a trusted provider of refrigerator repair services in Navi Mumbai, offering expert solutions for cooling problems, compressor faults, gas refilling, and thermostat repair. Our technicians service single-door, double-door, side-by-side, and commercial refrigerators from leading brands such as LG, Samsung, Whirlpool, Haier, Godrej, and Bosch. With quick response times and doorstep service, Apple Aircon ensures efficient and long-lasting refrigerator performance across Navi Mumbai.",
        heroImage:
            "https://media3.gaggenau.com/Images/4000x/27491816_GG-global-Vario-cooling-expressive-series-refrigerators-page-full-width.webp",
        image:
            "https://media3.gaggenau.com/Images/4000x/27491816_GG-global-Vario-cooling-expressive-series-refrigerators-page-full-width.webp",
        portraitImage:
            "https://media3.gaggenau.com/Images/1600x/23654387_GG-lux-landing-page-image-01.webp",
        brands: [
            "LG",
            "Samsung",
            "Whirlpool",
            "Haier",
            "Godrej",
            "Hitachi",
            "Panasonic",
            "Bosch",
            "Electrolux",
        ],
        services: [
            "Cooling Repair",
            "Compressor Fix",
            "Gas Charging",
            "Installation",
            "Buy New",
            "Sell Old",
            "Thermostat Repair",
            "Maintenance",
        ],
        icon: "🧊",
    },
};

// Map of brands to their online logo URLs
const brandLogos = {
    "LG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRraVvIfk4RZE6AyAWJXI-LBnQTaO48xIV4zQ&s",
    "Blue Star": "https://www.bluestarindia.com/img/logo.png",
    "Daikin": "https://www.daikin.com/-/media/Project/Daikin/daikin_com/dg_common/images/logo_daikin-png.png?rev=-1&hash=1F64F477E5561302A1D2A31DC3D59580",
    "Samsung": "https://i.pinimg.com/1200x/e8/31/88/e8318867025e2d1a39e5b502874bcb71.jpg",
    "Voltas": "https://cdn.shopify.com/s/files/1/0578/6845/2026/files/Voltas-beko-logo-svg.svg",
    "Hitachi": "https://www.hitachi.com/content/dam/hitachi/common/image/hitachi-logo.png",
    "Carrier": "https://images.carriercms.com/image/upload/h_150,q_100,f_auto/v1573562016/common/logos/carrier-corp-logo.png",
    "Whirlpool": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAATCAMAAADyMz7ZAAAAxlBMVEX///8AAAAiHh/y8vK2trZhX2ArKCmnpqZGREUzMDHm5ubyxnaIh4f5+fnR0dF6eHn88+XLy8u/v7+WlZWOjo5VVFRLSUk6NzhmZWWfnp/Y2NhbWVmwr7D0zo7vuEfspwDuszXwvVzuryDywmtfUDr5xF/55cYQCQtgWFD3263GiQDk6O9ycHDat3r1qwBJMABZXGP/9d7AqYMkKTZ8Yzj/78mRlZyMbTX+tgCigEJ7gIgaFRa3r6JGPzaGi5U8Qk1lTyjqnQAtAZXUAAAB0ElEQVQ4jZWSiXLaMBBAd5HkQz6EhW/siJAU6talSa+kpRf//1NdGdMJxDNppZn1jrxvb4CXz7y9Mqv5PxheYNctQeuby3dPkEiwIrlAwHB41Dkbvs4SgnbQroMzSqG1Bkgxsz7yE6gwPoK3r8YUzeYcnEFsbYot4RGFxXR4j44cOK9Hw87AJQi4AIYKE8q3BixVkUngGdOKF7EvoHTDQkizqYWfJYSERZEewdwDjZJChRQVHdWjBy4yjk5ZE+hjnuGbm7eYc0GeM6wq7AewQltqX4BfwpBqj0dQUqoEUvPeGZliRH9DZrtIESxYYzxT0FDQBobmpOfgEja793Hp2JJFTSVZWwsCCuQgScpJ8O7+8AFPYPwU7LdIU5ttByfPwI+fdp+/ILMNAFQM3b+pkgN/GJ16Ds6W8PD49RtNuUahBU3Ow8bFEtSejGVu1ybJbbM9Ul0Pvv9g2iOw/Nk9PvxyFDUm8dDTNGG135PzhZjez6uTEux+302bTJ523K+5WdmuUjWyqZtY60TXmrlJzZNkElyP/IEWfJYDsIZrVzWx21Q61Jw3Li+nuPuVlZ1Z2wWPpW0DXcaARRGjG1llEjy0XWBM9x/FjScw62Dzgs0fqAwe+RSqANAAAAAASUVORK5CYII=",
    "Panasonic": "https://www.panasonic.com/content/dam/panasonic/common/plogo-horizontal.svg",
    "Godrej": "https://static.godrejenterprises.com/godrej_enterprises_group_logo_611fba0ba8.webp",
    "Haier": "https://upload.wikimedia.org/wikipedia/commons/6/64/Haier_logo.svg",
    "IFB": "https://upload.wikimedia.org/wikipedia/commons/4/49/IFB.png",
    "Bosch": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/500px-Bosch-logo.svg.png",
    "Electrolux": "https://www.electrolux.in/globalassets/homepage/electrolux-logo.svg",
    "Onida": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Onida_Electronics.svg/330px-Onida_Electronics.svg.png",
    "Bajaj": "https://www.bajajelectricals.com/cdn/shop/files/simply-otp-login-banner.png?v=1722601845&width=220",
    // "Morphy Richards": "https://upload.wikimedia.org/wikipedia/commons/3/36/Morphy_Richards_logo.svg",
    "Kenstar": "https://kenstar.in/cdn/shop/files/Kenstar_LTKL_Logo-02_1.png?v=1709534315",
};


export default function ServiceDetailPage() {
    const searchParams = useSearchParams();
    const slug = searchParams.get("service");
    const router = useRouter();
    const [showAllBrands, setShowAllBrands] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);

    const service = serviceDetails[slug];

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f6f7fb]">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#1e40af] mb-4">Service Not Found</h2>
                    <button
                        onClick={() => router.push("/")}
                        className="px-6 py-3 bg-[#1e40af] text-white rounded-full hover:bg-blue-700 transition"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#f6f7fb]">
            <h2 className=" pt-10 text-4xl text-center font-extrabold text-[#1e40af]">
                Service Details
            </h2>

            {/* Hero Section */}
            <section className="relative overflow-hidden">

                <div className="relative rounded-3xl overflow-hidden mx-4 sm:mx-6 mt-6 mb-10 shadow-2xl">
                    {/* Background Image with Overlay */}
                    <div
                        className="hidden md:block absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div
                        className="md:hidden absolute inset-0 bg-cover"
                        style={{
                            backgroundImage: `url(${service.portraitImage || service.image})`,
                            backgroundPosition: "top center"
                        }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/50 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 p-8 sm:p-12 md:p-16 min-h-[500px] md:min-h-[600px] flex flex-col justify-end">
                        <div className="max-w-4xl">
                            {/* Service Tag */}
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <span className="text-xl">{service.icon}</span>
                                <span className="font-semibold text-white">{service.tabTitle} Services</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                                {service.title}
                            </h1>

                            <p className="text-gray-200 mt-4 text-lg max-w-2xl">
                                {service.subtitle}
                            </p>

                            {/* Stats Bar */}
                            <div className="mt-8 flex flex-wrap gap-6">
                                <div className="flex items-center gap-2 text-white">
                                    <Star className="h-5 w-5 text-yellow-400" />
                                    <span className="font-bold">4.9</span>
                                    <span className="text-gray-300">Rating</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <Users className="h-5 w-5 text-green-400" />
                                    <span className="font-bold">500+</span>
                                    <span className="text-gray-300">Happy Customers</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <Award className="h-5 w-5 text-blue-400" />
                                    <span className="font-bold">10+</span>
                                    <span className="text-gray-300">Years Experience</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="mt-10 flex flex-wrap gap-4">
                                <a href="tel:+91 8879873774"
                                    className="px-8 py-3.5 rounded-full bg-white border-2 border-[#1e40af] text-black font-semibold transition transform hover:-translate-y-1 hover:bg-[#1e40af] hover:text-white duration-300 flex items-center gap-2">
                                    <Phone size={10} />
                                    Book Service Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Content - Services & Description */}
                    <div className="lg:col-span-2 space-y-8 mt-12">
                        {/* Description Card */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-[#1e40af] mb-4">About Our Service</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                {service.longText}
                            </p>
                        </div>

                        {/* Services Offered */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-[#1e40af] mb-6">Our Services Include</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.services.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-linear-to-r from-blue-50 to-transparent hover:from-blue-100 transition-all group"
                                    >
                                        <div className="h-10 w-10 rounded-lg bg-[#1e40af] flex items-center justify-center text-white">
                                            {i + 1}
                                        </div>
                                        <span className="font-semibold text-gray-800 group-hover:text-[#1e40af] transition">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <aside className="space-y-8 mt-12">
                        {/* Brands Card */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-8">
                            <h3 className="text-xl font-bold text-[#1e40af] mb-6">Brands We Service</h3>

                            {/* Brands Grid */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                {service.brands
                                    .slice(0, showAllBrands ? service.brands.length : 9)
                                    .map((brand, i) => (
                                        <div
                                            key={i}
                                            className="bg-gray-50 rounded-xl p-4 text-center transition group flex flex-col items-center justify-center gap-2"
                                        >
                                            <img
                                                src={brandLogos[brand]}
                                                alt={brand}
                                                className="h-12 object-contain"
                                            />
                                            {/* <span className="text-gray-800 font-semibold">{brand}</span> */}
                                        </div>
                                    ))}
                            </div>

                            {/* Show More Button */}
                            {service.brands.length > 9 && (
                                <button
                                    onClick={() => setShowAllBrands(!showAllBrands)}
                                    className="w-full py-3 rounded-xl bg-gray-100 text-[#1e40af] font-semibold hover:bg-gray-200 transition"
                                >
                                    {showAllBrands ? "Show Less" : `Show All ${service.brands.length} Brands`}
                                </button>
                            )}

                            {/* Service Process */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="font-bold text-gray-800 mb-4">Service Process</h4>
                                <div className="space-y-3">
                                    {["Book Service", "Schedule Visit", "Expert Diagnosis", "Quality Service", "Follow-up"].map((step, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="h-6 w-6 rounded-full bg-[#1e40af] text-white text-xs flex items-center justify-center">
                                                {i + 1}
                                            </div>
                                            <span className="text-gray-700">{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Contact */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="font-bold text-gray-800 mb-4">Need Help?</h4>
                                <a
                                    href="tel:+918879873774"
                                    className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl bg-[#1e40af] text-white font-semibold hover:bg-blue-700 transition mb-3"
                                >
                                    <Phone size={10} />
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
