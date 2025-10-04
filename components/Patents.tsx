"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GRADIENTS } from "@/constants/styles";

export default function Patents() {
    const patents = [
        {
            id: 1,
            title: "Radiation Remediation",
            year: 2024,
            image: "/patents/radia-mel.png",
        },
        {
            id: 2,
            title: "Vita Choice",
            year: 2023,
            image: "/patents/vita-choice.png",
        },
        {
            id: 3,
            title: "Patch Worx",
            year: 2022,
            image: "/patents/patch-worx.png",
        },
        {
            id: 4,
            title: "Quantum-Linked Communication Protocol",
            year: 2021,
            image: "/patents/quantum-comm.jpg",
        },
    ];

    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Dynamic background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            
            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
            {/* Section border */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
            
            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className={`text-5xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-6`}>
                        Patents & Innovations
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-red-500 mx-auto mb-16 rounded-full"></div>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {patents.slice(0, 3).map((patent, index) => (
                        <motion.div
                            key={patent.id}
                            className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-red-500 transition-all duration-500"
                            initial={{ opacity: 0, y: 40, rotateY: -15 }}
                            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative w-full h-64 overflow-hidden">
                                <Image
                                    src={patent.image}
                                    alt={patent.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                
                                {/* Year badge */}
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {patent.year}
                                </div>
                            </div>
                            
                            <div className="relative p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-red-500 transition-all duration-300">
                                    {patent.title}
                                </h3>
                                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent group-hover:via-red-500 transition-colors duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Link
                        href="/patents"
                        className="group relative inline-flex items-center bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-2 hover:scale-105"
                    >
                        <span className="relative z-10">View All Patents</span>
                        <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Animated arrows */}
                        <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
