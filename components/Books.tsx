"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ButtonStyles, TextStyles, CardStyles } from "@/constants/styleUtils";
import { GRADIENTS } from "@/constants/styles";

export default function Books() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const { scrollLeft, clientWidth } = scrollRef.current;
        const scrollAmount = direction === "left" ? -clientWidth / 1.2 : clientWidth / 1.2;
        scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    };

    const books = [
        { title: "Both Sides of POOR and RICH", year: 2024, cover: "/books/both-sides.jpeg" },
        { title: "How To Get A Job And Keep It", year: 2023, cover: "/books/get-a-job.jpeg" },
        { title: "Why Liberty Is so Important", year: 2022, cover: "/books/liberty.jpeg" },
        { title: "They Never Saw It Coming", year: 2021, cover: "/books/never-saw-it.png" },
        { title: "Overwhelming Force", year: 2020, cover: "/books/overwhelming-force.jpeg" },
        { title: "The Risk of Success", year: 2019, cover: "/books/success-risk.png" },
    ];

    return (
        <section className="relative py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
            {/* Animated background particles */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-red-300 rounded-full animate-ping delay-1000"></div>
                <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-500"></div>
            </div>
            
            {/* Diagonal accent lines */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-red-500/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-blue-500/5 to-transparent"></div>
            
            <div className="relative text-center">
                <h2 className={`text-5xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-4`}>
                    Books Authored
                </h2>
                <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
                    A collection of thought-provoking works that challenge conventional wisdom and inspire innovation
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Enhanced Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-red-500/20 to-blue-500/20 backdrop-blur-md border border-gray-600 p-4 rounded-full hover:from-red-500/40 hover:to-blue-500/40 hover:border-red-500 transition-all duration-300 transform hover:scale-110 hidden md:flex group"
                >
                    <ChevronLeft className="text-white w-6 h-6 group-hover:text-red-300 transition-colors" />
                </button>

                {/* Scrollable container with enhanced styling */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto px-1 pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                >
                    {books.map((book, index) => (
                        <div
                            key={book.title}
                            className="group flex-shrink-0 snap-center w-[85%] sm:w-[60%] md:w-[30%] relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm border border-gray-700 p-1 rounded-2xl hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
                        >
                            {/* Animated border gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={book.cover}
                                        alt={book.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Year badge */}
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                                        {book.year}
                                    </div>
                                </div>
                                
                                <div className="p-4 text-center">
                                    <h3 className={`text-lg font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300`}>
                                        {book.title}
                                    </h3>
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-blue-500/20 to-red-500/20 backdrop-blur-md border border-gray-600 p-4 rounded-full hover:from-blue-500/40 hover:to-red-500/40 hover:border-blue-500 transition-all duration-300 transform hover:scale-110 hidden md:flex group"
                >
                    <ChevronRight className="text-white w-6 h-6 group-hover:text-blue-300 transition-colors" />
                </button>

                {/* Enhanced gradient fade edges */}
                <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-950 via-gray-950/80 to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
}
