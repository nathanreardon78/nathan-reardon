"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { COMPONENT_STYLES, GRADIENTS } from "@/constants/styles";

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
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span className={`text-transparent bg-clip-text ${GRADIENTS.heroText}`}>
                        Innovating Freedom,
                    </span>{" "}
                    <br />
                    <span className="text-white">Engineering the Future</span>
                </h1>

                <p className="text-gray-400 text-lg max-w-xl mx-auto md:mx-0">
                    I’m John Doe — inventor, author, and visionary. My work blends
                    technology, human potential, and the pursuit of true independence.
                </p>

                <div className="flex justify-center md:justify-start gap-4">
                    <button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
                        Explore My Work
                    </button>
                    <button className="border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                        Contact
                    </button>
                </div>
            </div>

            {/* Right Image (floating bounce) */}
            <motion.div
                className="z-10 flex-1 flex justify-center mt-12 md:mt-0"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="relative w-80 h-80 md:w-[24rem] md:h-[24rem] rounded-2xl overflow-hidden backdrop-blur-sm border border-red-700/20 shadow-2xl shadow-red-900/30">
                    <Image
                        src="/nathan-img.png" // replace with actual image path
                        alt="John Doe Portrait"
                        fill
                        className="object-contain brightness-110 contrast-105"
                        priority
                    />
                </div>
            </motion.div>
        </section>
    );
}
