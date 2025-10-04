"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GRADIENTS } from '@/constants/styles';

export default function AchievementsPage() {
    const awards = [
        {
            id: 1,
            title: "2015 Industry Innovation Award",
            organization: "Automotive Excellence Society",
            year: "2015",
            category: "Innovation",
            description: "Recognized for groundbreaking automotive diagnostic solutions",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            )
        },
        {
            id: 2,
            title: "2016 Leadership Excellence Award", 
            organization: "Professional Development Institute",
            year: "2016",
            category: "Leadership",
            description: "Outstanding leadership in automotive industry transformation",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            )
        },
        {
            id: 3,
            title: "2017 Technical Achievement Award",
            organization: "National Automotive Association",
            year: "2017", 
            category: "Technical Excellence",
            description: "Revolutionary advances in automotive technology solutions",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.6-6.3 4.6 2.3-7.4-6-4.6h7.6z"/>
                </svg>
            )
        },
        {
            id: 4,
            title: "2018 Entrepreneur of the Year",
            organization: "Business Innovation Council",
            year: "2018",
            category: "Entrepreneurship",
            description: "Exceptional entrepreneurial success and innovation impact",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
            )
        },
        {
            id: 5,
            title: "2019 Patent Innovation Award",
            organization: "Inventors Guild",
            year: "2019",
            category: "Patents",
            description: "Outstanding contribution to patent development and innovation",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                </svg>
            )
        },
        {
            id: 6,
            title: "2020 Industry Pioneer Award",
            organization: "Technology Advancement Society",
            year: "2020",
            category: "Innovation",
            description: "Pioneering work in next-generation automotive solutions",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
            )
        },
        {
            id: 7,
            title: "2021 Excellence in Innovation",
            organization: "Professional Excellence Foundation",
            year: "2021",
            category: "Innovation",
            description: "Sustained excellence in innovative problem-solving approaches",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
            )
        },
        {
            id: 8,
            title: "2022 Lifetime Achievement Award",
            organization: "Automotive Industry Council",
            year: "2022",
            category: "Lifetime Achievement",
            description: "Recognition for 25+ years of transformative industry contributions",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm2.7-2h8.6l.9-5.4-2.1 1.4L12 8l-3.1 2L6.8 8.6L7.7 14z"/>
                </svg>
            )
        }
    ];

    const certifications = [
        {
            id: 1,
            title: "ASE Master Technician",
            organization: "National Institute for Automotive Service Excellence",
            year: "2001",
            level: "Triple Master",
            description: "Comprehensive automotive systems expertise across all major areas",
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 2,
            title: "2nd Degree Black Belt",
            organization: "International Martial Arts Federation",
            year: "2005",
            level: "Advanced",
            description: "Advanced martial arts mastery demonstrating discipline and precision",
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 3,
            title: "Advanced Patent Development",
            organization: "Patent Innovation Institute",
            year: "2010",
            level: "Expert",
            description: "Specialized training in patent research, development, and filing",
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
            ),
            status: "Active"
        },
        {
            id: 4,
            title: "Business Leadership Certification",
            organization: "Executive Development Academy",
            year: "2015",
            level: "Executive",
            description: "Advanced leadership strategies for technology-driven businesses",
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
            ),
            status: "Active"
        }
    ];

    const achievements = [
        {
            id: 1,
            title: "22 Patents Filed",
            description: "Comprehensive portfolio covering automotive, health, defense, and energy technologies",
            metric: "22",
            unit: "Patents",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
            )
        },
        {
            id: 2,
            title: "6 Published Books",
            description: "Authored comprehensive guides on automotive innovation and problem-solving",
            metric: "6",
            unit: "Books",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                </svg>
            )
        },
        {
            id: 3,
            title: "26 Years Experience",
            description: "Over two decades of hands-on automotive industry expertise and leadership",
            metric: "26",
            unit: "Years",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
                </svg>
            )
        },
        {
            id: 4,
            title: "Multiple Industries",
            description: "Innovation spanning automotive, healthcare, defense, energy, and consumer technology",
            metric: "5+",
            unit: "Industries",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
            )
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Back to Home Link */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link 
                        href="/"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                        Professional Achievements
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        A comprehensive overview of awards, certifications, and professional milestones 
                        spanning over two decades of innovation and excellence.
                    </p>
                </motion.div>

                {/* Key Metrics */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {achievements.map((achievement) => (
                        <motion.div
                            key={achievement.id}
                            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-red-500/50 transition-all duration-300"
                            variants={itemVariants}
                        >
                            <div className="text-red-400 mb-4 flex justify-center">{achievement.icon}</div>
                            <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                                {achievement.metric}
                            </div>
                            <div className="text-gray-400 text-sm mb-3">{achievement.unit}</div>
                            <h3 className="text-white font-semibold mb-2">{achievement.title}</h3>
                            <p className="text-gray-400 text-sm">{achievement.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Professional Awards */}
                <motion.section 
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className={`text-3xl font-bold mb-8 bg-gradient-to-r ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                        Professional Awards
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {awards.map((award, index) => (
                            <motion.div
                                key={award.id}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-blue-400">{award.icon}</div>
                                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-medium">
                                        {award.year}
                                    </span>
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                                    {award.title}
                                </h3>
                                <p className="text-blue-400 font-medium text-sm mb-2">{award.organization}</p>
                                <p className="text-gray-400 text-sm mb-3">{award.description}</p>
                                <span className="inline-block bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs">
                                    {award.category}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Certifications & Training */}
                <motion.section 
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className={`text-3xl font-bold mb-8 bg-gradient-to-r ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                        Certifications & Training
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="text-green-400">{cert.icon}</div>
                                    <div className="text-right">
                                        <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                                            {cert.status}
                                        </span>
                                        <div className="text-gray-400 text-sm mt-1">{cert.year}</div>
                                    </div>
                                </div>
                                <h3 className="text-white font-bold text-xl mb-2">{cert.title}</h3>
                                <p className="text-blue-400 font-medium text-sm mb-2">{cert.organization}</p>
                                <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">
                                        {cert.level}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Call to Action */}
                <motion.div
                    className="text-center bg-gradient-to-r from-blue-500/20 to-red-500/20 border border-blue-500/30 rounded-2xl p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Interested in Collaboration?</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        With this extensive background in innovation and professional excellence, 
                        I'm always open to discussing new opportunities and partnerships.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contact"
                            className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:text-white"
                        >
                            Get in Touch
                        </Link>
                        <Link 
                            href="/patents"
                            className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                        >
                            View Patents
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}