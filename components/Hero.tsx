"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { COMPONENT_STYLES, GRADIENTS } from "@/constants/styles";
import Link from 'next/link';
import AnimatedStars from "@/components/AnimatedStars";

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 15 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 15 });

    const blob1X = useTransform(springX, [0, 1], [0, 40]);
    const blob1Y = useTransform(springY, [0, 1], [0, 50]);
    const blob2X = useTransform(springX, [0, 1], [0, -30]);
    const blob2Y = useTransform(springY, [0, 1], [0, -40]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            mouseX.set(x);
            mouseY.set(y);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="min-h-[95vh] flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 relative overflow-hidden">
            {/* Parallax Background Blobs */}
            <motion.div
                style={{ x: blob1X, y: blob1Y }}
                className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
                style={{ x: blob2X, y: blob2Y }}
                className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-red-600/10 rounded-full blur-3xl"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/30 pointer-events-none" />

            {/* Animated Stars Background */}
            <div className="absolute inset-0 opacity-10">
                <AnimatedStars count={200} />
            </div>

            {/* Left Content */}
            <div className="z-10 w-full md:flex-1 text-center md:text-left space-y-6">
                {/* Global/Innovation Logo */}
                <motion.div
                    className="flex justify-center md:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="h-32" />
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-6xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className={`text-transparent bg-clip-text ${GRADIENTS.heroText}`}>
                        NATHAN REARDON</span>
                </motion.h1>

                <motion.p
                    className="text-sm font-medium text-white tracking-widest"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    FATHER • ENTREPRENEUR • AUTHOR • INVENTOR
                </motion.p>

                

                <motion.p
                    className="text-white text-lg max-w-xl mx-auto md:mx-0 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                   Nathan Reardon is a prolific American inventor, entrepreneur, 
                   and strategist with 22 active patents spanning automotive engineering, 
                   real estate development, health technology, and consumer innovation.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <Link
                        href="/patents"
                        className={`${COMPONENT_STYLES.heroButton}`}>
                        <span>Explore Patents</span>
                    </Link>
                    <Link
                        href="/achievements"
                        className="inline-block border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-all duration-300 text-base md:text-lg bg-transparent"
                    >
                        <span>View Achievements</span>
                    </Link>
                </motion.div>
            </div>

            {/* Right Image (floating bounce) with Stars at Bottom */}
            <motion.div
                className="z-10 flex-1 justify-center mt-12 md:mt-0 hidden md:flex"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <motion.div
                    className="relative"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Stars at the bottom of the image */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-8 flex justify-center">
                        {/* Central star cluster */}
                        <div className="relative w-full max-w-sm">
                            {/* Center star - White */}
                            <motion.div
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 text-white"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </motion.div>

                            {/* Left side stars */}
                            <motion.div
                                className="absolute bottom-2 left-1/3 w-3 h-3 text-red-400"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-4 left-1/4 w-2.5 h-2.5 text-white/80"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-6 left-1/5 w-3 h-3 text-blue-400"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-8 left-8 w-2 h-2 text-red-300"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 2.8, repeat: Infinity, delay: 0.2 }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-3 left-4 w-2 h-2 text-blue-300"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
                                transition={{ duration: 2.4, repeat: Infinity, delay: 1.4 }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-7 left-0 w-3 h-3 text-white/70"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2.6, repeat: Infinity, delay: 1.6 }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </motion.div>

                            {/* Right side stars */}
                            <motion.div
                                className="absolute bottom-2 right-1/3 w-3 h-3 text-blue-500"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2.8, repeat: Infinity, delay: 1 }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-4 right-1/4 w-2.5 h-2.5 text-red-400"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
                                transition={{ duration: 2.3, repeat: Infinity, delay: 0.3 }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-6 right-1/5 w-3 h-3 text-white"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 2.7, repeat: Infinity, delay: 1.2 }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-8 right-8 w-2 h-2 text-blue-300"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 1.8 }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-3 right-4 w-2 h-2 text-red-300"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
                                transition={{ duration: 2.1, repeat: Infinity, delay: 0.9 }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-7 right-0 w-3 h-3 text-blue-400"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2.9, repeat: Infinity, delay: 0.4 }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </motion.div>

                            {/* Top center star */}
                            <motion.div
                                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 text-white/60"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
                                transition={{ duration: 3.2, repeat: Infinity, delay: 0.6 }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* Main Image Container */}
                    <div className="relative w-80 h-80 md:w-[24rem] md:h-[24rem] rounded-2xl overflow-hidden backdrop-blur-sm border border-red-700/20 shadow-2xl shadow-red-900/30">
                        <Image
                            src="/nathan-img.png"
                            alt="Nathan Reardon - Automotive Industry Leader & Innovator"
                            fill
                            className="object-contain brightness-110 contrast-105"
                            priority
                        />

                        {/* Subtle overlay glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-red-900/5 pointer-events-none"></div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
