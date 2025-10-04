"use client";

import { Users, Award, Target, Zap, Heart, Globe } from "lucide-react";
import { GRADIENTS } from "@/constants/styles";

export default function About() {

    const personalValues = [
        {
            icon: Heart,
            title: "Father of Five",
            description: "Family values drive every business decision"
        },
        {
            icon: Users,
            title: "Global Network",
            description: "Collaborations with world-class executives"
        },
        {
            icon: Target,
            title: "Precision Focus",
            description: "Every solution reflects purpose and execution"
        }
    ];

    const expertise = [
        { area: "Automotive Systems", impact: "Revolutionary efficiency" },
        { area: "Property Development", impact: "Advanced solutions" },
        { area: "Health Technology", impact: "Next-generation care" },
        { area: "Consumer Innovation", impact: "Market-changing products" }
    ];

    return (
        <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent mb-4`}>
                        The Man Behind the Innovation
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Where family values meet unrelenting innovation
                    </p>
                </div>

                {/* Personal Values Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {personalValues.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="group"
                            >
                                <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-red-500/50 transition-all duration-300">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="p-3 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-xl group-hover:from-red-500/30 group-hover:to-blue-500/30 transition-colors">
                                            <Icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Main Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    
                    {/* Left: Story Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="bg-gray-800/30 border-l-4 border-blue-500 pl-6 py-4 rounded-r-lg">
                                <p className="text-gray-300 leading-relaxed">
                                    <span className="text-white font-semibold">A lifelong problem solver</span> who balances family values with an unrelenting drive for innovation.
                                </p>
                            </div>

                            <div className="bg-gray-800/30 border-l-4 border-red-500 pl-6 py-4 rounded-r-lg">
                                <p className="text-gray-300 leading-relaxed">
                                    His professional network includes <span className="text-blue-400 font-medium">collaborations and relationships with some of the world's top business executives and entrepreneurs</span>—alliances that have accelerated his ability to commercialize new technologies.
                                </p>
                            </div>

                            <div className="bg-gray-800/30 border-l-4 border-white pl-6 py-4 rounded-r-lg">
                                <p className="text-gray-300 leading-relaxed">
                                    As an <span className="text-red-400 font-medium">ASE Triple Master and 2nd Degree Black Belt</span>, he brings the same discipline to business that he does to life—turning bold ideas into lasting impact.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Discipline & Philosophy */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <Award className="w-8 h-8 text-yellow-400" />
                                <h3 className="text-2xl font-bold text-white">Disciplined Excellence</h3>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                                    <span className="text-gray-300">Precision</span>
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-3 h-3 text-red-500"
                                            >
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                                    <span className="text-gray-300">Purpose</span>
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-3 h-3 text-blue-500"
                                            >
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                                    <span className="text-gray-300">Execution</span>
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-3 h-3 text-white"
                                            >
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Industry Expertise Grid */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-center text-white mb-12">
                        Multi-Industry Innovation
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {expertise.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden"
                            >
                                <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:border-blue-500/50 transition-all duration-300">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/10 to-transparent rounded-bl-full"></div>
                                    
                                    <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {item.area}
                                    </h4>
                                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                                        {item.impact}
                                    </p>
                                    
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
                        <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-4">Global Reach, Personal Touch</h3>
                        <p className="text-gray-300 mb-6">
                            From automotive systems to health solutions, every innovation reflects the same principle: turning bold ideas into lasting impact.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <div className="px-4 py-2 bg-red-500/20 rounded-full">
                                <span className="text-red-400 font-medium">22 Patents</span>
                            </div>
                            <div className="px-4 py-2 bg-blue-500/20 rounded-full">
                                <span className="text-blue-400 font-medium">26 Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
