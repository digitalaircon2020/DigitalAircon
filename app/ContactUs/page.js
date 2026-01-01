// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
// import ServiceForm from "../../components/ServiceForm";
// // import Floating from "../../components/Floating";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// export default function ContactUsPage() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => setIsLoaded(true), []);

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
//   };

//   const cardThemeClasses =
//     "bg-white/60 backdrop-blur-lg border border-blue-300/20 shadow-lg rounded-2xl p-6 text-center transition hover:shadow-xl";

//   const iconWrapperClasses =
//     "w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4";

//   const cardData = [
//     {
//       icon: <MapPin className="w-6 h-6 text-blue-700" />,
//       title: "Our Location",
//       value: "Kharghar, Navi Mumbai",
//       link: "https://maps.app.goo.gl/h6krcSSLbCLRyErr8",
//     },
//     {
//       icon: <Phone className="w-6 h-6 text-blue-700" />,
//       title: "Phone Number",
//       value: "+91 88798 73774",
//       link: "tel:+917666161814",
//     },
//     {
//       icon: <Mail className="w-6 h-6 text-blue-700" />,
//       title: "Email Address",
//       value: "digitalaircon2020@gmail.com",
//       link: "mailto:digitalaircon2020@gmail.com",
//     },
//     {
//       icon: <MessageSquare className="w-6 h-6 text-blue-700" />,
//       title: "WhatsApp Chat",
//       value: "Chat with us instantly",
//       link: "https://wa.me/917666161814?text=Hello%20Apple%20Aircon!",
//     },
//   ];

//   return (
//     <AnimatePresence>
//       <Navbar />
//       <main className="min-h-screen bg-linear-to-br from-[#eef4ff] via-[#d9e8ff] to-[#bbd4ff] pt-26 pb-20">
//         {/* HERO */}
//         <motion.div
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           variants={fadeInUp}
//           className="text-center mb-10"
//         >
//           <h1 className="text-5xl font-extrabold text-[#1e40af]">
//             Contact <span className="text-black">Digital Aircon</span>
//           </h1>

//           <p className="text-gray-700 max-w-2xl mx-auto mt-4 text-lg">
//             Have a question or need urgent help? Reach out to us — we respond
//             quickly.
//           </p>
//         </motion.div>

//         {/* CLICKABLE THEME CARDS */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeInUp}
//           viewport={{ once: true }}
//           className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
//         >
//           {cardData.map((card, index) => (
//             <a
//               key={index}
//               href={card.link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <motion.div variants={fadeInUp} className={cardThemeClasses}>
//                 <div className={iconWrapperClasses}>{card.icon}</div>
//                 <h3 className="font-semibold text-lg text-[#1e40af]">
//                   {card.title}
//                 </h3>
//                 <p className="text-gray-600 mt-1 text-sm">{card.value}</p>
//               </motion.div>
//             </a>
//           ))}
//         </motion.div>
//         {/* SERVICE FORM */}
//         <div className="mt-10">
//           <ServiceForm />
//         </div>

//         {/* MAP SECTION (LIKE YOUR IMAGE) */}
//         <section className="max-w-7xl mx-auto mt-16 px-4">
//           <h2 className="text-3xl text-center font-extrabold text-[#1e40af] mb-6">
//             Our Location
//           </h2>
//           {/* MAP LIKE IMAGE */}
//           <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg border border-blue-300/20">
//             <iframe
//               title="Digital Aircon Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3084156334367!2d73.07206217466452!3d19.05017285278392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c17aaecbfed1%3A0xe35e63b26012dd5d!2sApple%20Aircon!5e0!3m2!1sen!2sin!4v1765545562950!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         </section>
//         {/* <Floating /> */}
//       </main>
//       <Footer />
//     </AnimatePresence>
//   );
// }

import { createMetadata } from "../lib/seo";
import ContactUsClient from "./ContactUsClient";

export const generateMetadata = () =>
  createMetadata({
    title: "Contact Digital Aircon – AC & Appliance Service",
    description:
      "Contact Digital Aircon for AC repair, appliance servicing, and quick support in Navi Mumbai.",
    path: "/ContactUs",
  });

export default function Page() {
  return <ContactUsClient />;
}
