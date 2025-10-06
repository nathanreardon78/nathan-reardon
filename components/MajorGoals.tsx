"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GRADIENTS } from "@/constants/styles";

const goals = [
    {
        id: 1,
        title: "End Hunger",
        description: "Working to ensure no person goes without food, developing solutions for global food security and sustainable agriculture.",
        image: "/goals/hunger-goal.png",
        color: "from-green-500 to-emerald-600",
        textColor: "text-green-400"
    },
    {
        id: 2,
        title: "End Homelessness",
        description: "Creating innovative housing solutions and support systems to provide shelter and stability for everyone.",
        image: "/goals/homeless-goal.jpeg",
        color: "from-blue-500 to-cyan-600",
        textColor: "text-blue-400"
    },
    {
        id: 3,
        title: "Bring Clean Water to the Entire World",
        description: "Developing breakthrough technologies to purify water and deliver clean, safe drinking water to every corner of the globe.",
        image: "/goals/water-goal.jpeg",
        color: "from-cyan-500 to-blue-600",
        textColor: "text-cyan-400"
    }
];

export default function MajorGoals() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-cyan-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    
                >
                    <h2 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                        My Three Major Life Goals
                    </h2>
                    <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
                        Beyond innovation and invention, I'm committed to solving humanity's greatest challenges. 
                        These are the missions that drive my passion for creating meaningful change in the world.
                    </p>
                </motion.div>

                {/* Goals Grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {goals.map((goal, index) => (
                        <motion.div
                            key={goal.id}
                            className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-500/50 transition-all duration-500"
                            variants={itemVariants}
                        >
                            {/* Goal Image */}
                            <div className="relative h-64 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-20`}></div>
                                <Image
                                    src={goal.image}
                                    alt={goal.title}
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                
                                {/* Goal Number */}
                                <div className="absolute top-4 right-4">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${goal.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                        {goal.id}
                                    </div>
                                </div>
                            </div>

                            {/* Goal Content */}
                            <div className="p-8">
                                <h3 className={`text-2xl font-bold mb-4 ${goal.textColor} group-hover:text-white transition-colors duration-300`}>
                                    {goal.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                    {goal.description}
                                </p>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
