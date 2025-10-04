"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { COMPONENT_STYLES, GRADIENTS } from "@/constants/styles";
import Link from 'next/link';

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

            {/* Left Content */}
            <div className="z-10 flex-1 text-center md:text-left space-y-6">
                {/* Global/Innovation Logo */}

                <motion.h1 
                    className="text-4xl md:text-6xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className={`text-transparent bg-clip-text ${GRADIENTS.heroText}`}>
                        NATHAN
                    </span>{" "}
                    <span className="text-blue-400">REARDON</span>
                </motion.h1>

                <motion.p 
                    className="text-sm font-medium text-gray-300 tracking-widest"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    FATHER - ENTREPRENEUR - AUTHOR - INVENTOR
                </motion.p>

                <motion.h3 
                    className="text-xl md:text-2xl text-white font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    World changer - ASE Triple Master,<br />
                    2nd Degree Black Belt
                </motion.h3>

                <motion.p 
                    className="text-gray-400 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    Nathan is driven and passionate about the auto industry and has dealt with major setbacks 
                    in his 18 years of experience. His superior industry innovations have culminated into one 
                    of the most amazing opportunities for car & truck owners the world has ever seen!
                </motion.p>

                <motion.div 
                    className="flex justify-center md:justify-start gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <Link 
                        href="/patents"
                        className={`${COMPONENT_STYLES.heroButton}`}>
                        <span>Explore Now</span>
                    </Link>
                    <Link 
                        href="/patents"
                        className="border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                        Learn More
                    </Link>
                </motion.div>
            </div>

            {/* Right Image (floating bounce) with Stars at Bottom */}
            <motion.div
                className="z-10 flex-1 flex justify-center mt-12 md:mt-0"
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
                            {/* Center star */}
                            <motion.div 
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/60"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            ></motion.div>
                            
                            {/* Left side stars */}
                            <motion.div 
                                className="absolute bottom-2 left-1/3 w-1.5 h-1.5 bg-red-400 rounded-full shadow-md shadow-red-400/70"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                            ></motion.div>
                            <motion.div 
                                className="absolute bottom-4 left-1/4 w-1 h-1 bg-white/80 rounded-full shadow-sm shadow-white/50"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                            ></motion.div>
                            <motion.div 
                                className="absolute bottom-6 left-1/5 w-1.5 h-1.5 bg-blue-300 rounded-full shadow-md shadow-blue-300/60"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }}
                            ></motion.div>
                            
                            {/* Right side stars */}
                            <motion.div 
                                className="absolute bottom-2 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-md shadow-blue-400/70"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2.8, repeat: Infinity, delay: 1 }}
                            ></motion.div>
                            <motion.div 
                                className="absolute bottom-4 right-1/4 w-1 h-1 bg-red-300 rounded-full shadow-sm shadow-red-300/60"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
                                transition={{ duration: 2.3, repeat: Infinity, delay: 0.3 }}
                            ></motion.div>
                            <motion.div 
                                className="absolute bottom-6 right-1/5 w-1.5 h-1.5 bg-white rounded-full shadow-md shadow-white/70"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 2.7, repeat: Infinity, delay: 1.2 }}
                            ></motion.div>
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
