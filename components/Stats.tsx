import { GRADIENTS } from "@/constants/styles";

export default function Stats() {
    const stats = [
        { label: "Years Innovating", value: "12+" },
        { label: "Patents Filed", value: "18" },
        { label: "Books Authored", value: "3" },
        { label: "Awards Received", value: "9" },
    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            </div>
            
            {/* Animated border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            
            <div className="relative max-w-6xl mx-auto px-6 text-center">
                <h2 className={`text-4xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-16`}>
                    By The Numbers
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div 
                            key={stat.label}
                            className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300 hover:scale-105"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                            
                            <div className="relative">
                                <h3 className={`text-4xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-2`}>
                                    {stat.value}
                                </h3>
                                <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
