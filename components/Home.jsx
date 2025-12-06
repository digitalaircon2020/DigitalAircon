import React from "react";
import ServicesHighlight from "./ServicesHighlight";

function Home() {
    return (
        <>
            <div className="w-full min-h-screen bg-linear-to-br from-[#eef4ff] via-[#d9e8ff] to-[#bbd4ff] flex items-center justify-center px-4 md:px-6 py-8">
                <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

                    {/* LEFT CONTENT - SEO Optimized */}
                    <div className="text-center md:text-left">

                        {/* Main Heading with SEO Keywords */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#0f172a] leading-tight text-left">
                            <span className="text-[#1e40af]">Professional AC Repair</span>
                            <span className="block mt-2">
                                & Appliance in
                                <span className="text-[#1e40af] ml-2">Navi Mumbai</span>
                            </span>
                        </h1>

                        {/* SEO-rich Description */}
                        <div className="mt-6 text-left">
                            <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed">
                                <strong>Apple Aircon</strong> in Navi Mumbai offers fast, reliable, and affordable
                                <span className="font-semibold text-[#1e40af]"> AC repair, installation, and maintenance</span>, along with
                                <span className="font-semibold text-[#1e40af]"> home appliance services</span> for refrigerators, washing machines, microwaves, and deep freezers.
                                We also provide <span className="font-semibold text-[#1e40af]">PCB repair and sales for ACs and appliances</span>, trusted by residential and commercial clients.
                            </p>
                        </div>


                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="tel:+918879873774"
                                className="px-7 py-3.5 rounded-xl bg-[#1e40af] text-white font-semibold shadow-lg hover:bg-[#1e3a8a] transition transform hover:-translate-y-1 duration-300 flex items-center justify-center gap-2"
                                aria-label="Call AC Repair Service Navi Mumbai"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Now
                            </a>

                            <button
                                className="px-7 py-3.5 rounded-xl bg-white border-2 border-[#1e40af] text-[#1e40af] font-semibold hover:bg-[#1e40af] hover:text-white shadow-lg transition transform hover:-translate-y-1 duration-300"
                                aria-label="Book AC Service Appointment cursor-pointer"
                            >
                                Book Free Inspection
                            </button>

                            {/* <a
                            href="#service-form"
                            className="inline-block px-7 py-3.5 rounded-xl bg-white border-2 border-[#1e40af] 
               text-[#1e40af] font-semibold hover:bg-[#1e40af] hover:text-white 
               shadow-lg transition transform hover:-translate-y-1 duration-300 
               cursor-pointer"
                            aria-label="Book AC Service Appointment"
                        >
                            Book Free Inspection
                        </a> */}
                        </div>
                    </div>

                    {/* RIGHT IMAGE - Optimized */}
                    <div className="w-full flex justify-center relative">
                        <div className="relative w-full max-w-md sm:max-w-xl lg:max-w-2xl rounded-3xl overflow-hidden shadow-2xl bg-white border border-[#d0ddf5] transform hover:scale-[1.02] transition duration-500">

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-tr from-[#1e40af]/5 via-transparent to-[#3b82f6]/10 z-10"></div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-[#1e40af]/20 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-linear-to-tl from-[#3b82f6]/20 to-transparent rounded-full translate-x-24 translate-y-24"></div>

                            {/* Optimized Image */}
                            <img
                                src="https://i.pinimg.com/1200x/4c/cb/cc/4ccbcca00d460a6b76a2dd4d9ec0e892.jpg"
                                alt="Professional AC Repair Service Technician working on air conditioner installation in Navi Mumbai"
                                title="AC Service and Repair in Navi Mumbai | Apple Aircon"
                                className="w-full h-64 sm:h-80 lg:h-[400px] object-cover relative z-0"
                                loading="lazy"
                            />
                        </div>
                    </div>

                </div>
            </div>
            {/* ✅ SERVICES HIGHLIGHT (LG-STYLE) */}
            <ServicesHighlight />
        </>
    );
}

export default Home;