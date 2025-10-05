"use client";

import { motion } from 'framer-motion';

interface AnimatedStarsProps {
    count?: number;
}

export default function AnimatedStars({ count = 300 }: AnimatedStarsProps) {
    // Generate animated stars for galaxy background
    const stars = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        color: ['red', 'white', 'blue'][Math.floor(Math.random() * 3)],
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3
    }));

    return (
        <>
            {stars.map(star => (
                <motion.div
                    key={star.id}
                    className={`absolute rounded-full ${
                        star.color === 'red' ? 'bg-red-400' :
                        star.color === 'blue' ? 'bg-blue-400' :
                        'bg-white'
                    }`}
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </>
    );
}
