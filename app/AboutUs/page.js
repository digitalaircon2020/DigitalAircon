"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Shield,
  Users,
  MapPin,
  Award,
  Target,
  Heart,
  Clock,
  CheckCircle,
  Phone,
  Star,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";

export default function AboutUsPage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setIsLoaded(true);
  }, []);

  // Animation variants for different sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardHover = {
    rest: {
      scale: 1,
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 20px 40px rgba(30, 64, 175, 0.2)",
      y: -15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const floatAnimation = {
    initial: { y: 0 },
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const values = [
    {
      title: "Expert AC & Appliance Service",
      description:
        "Reliable AC & appliance repairs in Navi Mumbai with high-quality results.",
      icon: <Heart className="h-10 w-10" />,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Rapid & Same-Day Repairs",
      description:
        "Quick and efficient service to minimize downtime for your appliances.",
      icon: <Award className="h-10 w-10" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Trusted & Transparent Solutions",
      description:
        "Genuine parts, fair pricing, and guaranteed quality for every repair.",
      icon: <Shield className="h-10 w-10" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Community-Focused Service",
      description:
        "Proudly serving Navi Mumbai with friendly, local AC & appliance support.",
      icon: <MapPin className="h-10 w-10" />,
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const milestones = [
    {
      year: "2012",
      title: "Foundation",
      description:
        "Apple Aircon started as a small AC service center in Navi Mumbai",
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Added home appliance repair services to our portfolio",
    },
    {
      year: "2018",
      title: "Brand Partnership",
      description: "Became authorized service partner for major AC brands",
    },
    {
      year: "2020",
      title: "Digital Presence",
      description: "Launched online booking system for easy service access",
    },
    {
      year: "2023",
      title: "Market Leader",
      description:
        "Became Navi Mumbai's most trusted AC & appliance service provider",
    },
  ];

  return (
    <AnimatePresence>
      <main className="min-h-screen bg-linear-to-br from-[#eef4ff] via-[#d9e8ff] to-[#bbd4ff] pt-16 overflow-x-hidden">
        {/* Hero Section with enhanced animations */}
        <motion.section
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative overflow-hidden"
        >
          {/* Animated background elements */}
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-linear-to-br from-[#1e40af]/10 via-[#3b82f6]/5 to-transparent"
          />

          {/* Floating bubbles */}
          <motion.div
            animate="float"
            variants={floatAnimation}
            className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"
          />
          <motion.div
            animate="float"
            variants={{
              ...floatAnimation,
              float: { ...floatAnimation.float, delay: 1 },
            }}
            className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200/20 rounded-full blur-xl"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 relative">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Animated title with character stagger */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1e40af] mb-6"
              >
                About{" "}
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-black"
                >
                  Apple Aircon
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-8"
              >
                <motion.span
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-lg"
                >
                  🏆
                </motion.span>
                <span className="font-semibold text-[#1e40af]">
                  Navi Mumbai's Trusted AC & Appliance Experts
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-gray-700 leading-relaxed mb-8"
              >
                We provides professional{" "}
                <strong>
                  AC repair, installation, and home appliance services
                </strong>{" "}
                in Navi Mumbai. With over{" "}
                <strong>12+ years of experience</strong>, we are known for
                reliable service, transparent pricing, and long-term customer
                satisfaction.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Story Section */}
        <section ref={containerRef} className="py-16 md:py-20 bg-[#f7faff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInLeft}
                className="space-y-6"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl sm:text-4xl font-extrabold text-[#1e40af]"
                >
                  What We Do
                </motion.h2>

                <motion.div variants={staggerContainer} className="space-y-4">
                  {[
                    "Apple Aircon offers complete repair, service, installation, and buying & selling solutions for all types of air conditioners, refrigerators, washing machines, microwave ovens, and deep freezers. We handle both new and old appliances, providing reliable support for residential, commercial, and industrial needs across Navi Mumbai.",
                    "Our team also specializes in PCB repair and sales for ACs, refrigerators, washing machines, and microwave ovens. Using tested components and advanced diagnostic tools, we ensure every repair is safe, efficient, and long-lasting.",
                    "With skilled technicians and genuine spare parts, Apple Aircon delivers reliable, cost-effective solutions across all major appliance brands in Navi Mumbai.",
                  ].map((text, index) => (
                    <motion.p
                      key={index}
                      variants={fadeInUp}
                      className="text-gray-700 leading-relaxed"
                    >
                      {text}
                    </motion.p>
                  ))}
                </motion.div>

                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="mt-8 p-6 bg-linear-to-r from-[#1e40af] to-[#3b82f6] rounded-2xl text-white"
                >
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p>
                    Provide reliable and professional AC and home appliance
                    services with transparency and efficiency. Ensure customer
                    satisfaction through expert solutions and long-lasting
                    performance.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInRight}
                className="relative"
              >
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-6 shadow-2xl"
                >
                  <motion.img
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    src="https://i.pinimg.com/1200x/4c/cb/cc/4ccbcca00d460a6b76a2dd4d9ec0e892.jpg"
                    alt="Apple Aircon team providing professional AC service in Navi Mumbai"
                    className="w-full h-64 object-cover rounded-2xl mb-6"
                  />

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Why Choose Us?
                  </h3>

                  <motion.ul variants={staggerContainer} className="space-y-3">
                    {[
                      "Certified & Experienced Technicians",
                      "Same-Day Service Available",
                      "Genuine Spare Parts Warranty",
                      "Transparent Pricing - No Hidden Costs",
                      "Emergency AC Repair Services",
                      "Residential & Commercial Services",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </motion.div>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-linear-to-br from-[#eef4ff] via-[#d9e8ff] to-[#bbd4ff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e40af] mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide our service and define who we are
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={cardHover}
                  initial="rest"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="bg-linear-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 relative overflow-hidden group"
                >
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Icon + Title: inline on mobile, stacked on desktop */}
                  <div className="flex items-center gap-4 mb-4 md:flex-col md:items-start">
                    {/* Icon animation - only icon animates, not the layout */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", delay: index * 0.1 }}
                      className={`inline-flex p-4 rounded-xl bg-linear-to-br ${value.color} text-white relative z-10`}
                    >
                      {value.icon}
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-800 relative z-10 md:text-center md:mt-4">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description - appears below on all devices */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-gray-600 leading-relaxed relative z-10 md:text-center"
                  >
                    {value.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Milestones Timeline */}
        <section className="py-16 bg-[#f7faff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-extrabold text-[#1e40af] text-center mb-12"
            >
              Our Growth Journey
            </motion.h2>

            <div className="relative">
              {/* Animated timeline line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-[#1e40af] to-[#3b82f6] origin-top"
              />

              <div className="space-y-8 md:space-y-0">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className={`relative md:flex ${
                      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <div
                      className={`md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-2xl p-6 shadow-lg"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.2 + 0.3 }}
                          className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-3"
                        >
                          <span className="text-sm font-bold text-[#1e40af]">
                            {milestone.year}
                          </span>
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </motion.div>
                    </div>

                    {/* Animated timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: index * 0.2 + 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 bg-[#1e40af] rounded-full border-4 border-white shadow-lg z-10"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        className="w-2 h-2 bg-white rounded-full"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="py-16 bg-linear-to-br from-[#eef4ff] via-[#d9e8ff] to-[#bbd4ff]"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              variants={cardHover}
              initial="rest"
              whileInView="visible"
              whileHover="hover"
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Animated background pattern */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl"
              />

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-extrabold text-[#1e40af] mb-6"
              >
                Experience the Apple Aircon Difference
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
              >
                Join thousands of satisfied customers in Navi Mumbai who trust
                Apple Aircon for their AC and appliance needs. Let us solve your
                cooling and home appliance problems with expertise and care.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+918879873774"
                  className="px-8 py-3.5 rounded-xl bg-[#1e40af] text-white font-semibold shadow-lg hover:bg-[#1e3a8a] transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  {/* Button hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <Phone size={18} className="relative z-10" />
                  <span className="relative z-10">
                    Call Now: +91 8879873774
                  </span>
                </motion.a>

                <motion.button
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    document
                      .getElementById("serviceForm")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-3.5 rounded-xl bg-white border-2 border-[#1e40af] text-[#1e40af] font-semibold hover:bg-[#1e40af] hover:text-white shadow-lg transition-all relative overflow-hidden group"
                >
                  {/* Button hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-[#1e40af]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">
                    Book Free Service Consultation
                  </span>
                </motion.button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-gray-600 text-sm"
              >
                ⏰ <strong>Service Hours:</strong> Monday - Sunday: 8:00 AM -
                10:00 PM | Emergency Service: 24/7
              </motion.p>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </AnimatePresence>
  );
}
