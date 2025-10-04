import Link from "next/link";
import Image from "next/image";
import { COMPONENT_STYLES, GRADIENTS } from "@/constants/styles";
import { ChevronRight } from "lucide-react";

export default function GalleryPreview() {
    // Featured images from the gallery
    const featuredImages = [
        "/gallery/IMG_3862.jpeg",
        "/gallery/photo2.jpeg",
        "/gallery/photo5.jpeg",
        "/gallery/photo8.jpeg"
    ];
    return (
        <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 overflow-hidden">
            {/* Geometric background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.1),transparent_50%)]"></div>
            </div>
            
            {/* Floating camera icons */}
            <div className="absolute top-20 left-20 w-8 h-8 text-red-400/20">
                <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l1.86-1.46c.25-.2.25-.43.16-.65l-1.67-2.89c-.12-.22-.39-.3-.61-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.34c-.24 0-.44.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.49 0-.61.22L2.74 8.87c-.09.22-.09.45.16.65L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-1.87 1.46c-.25.2-.25.43-.16.65l1.67 2.89c.12.22.39.3.61.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.03.24.23.41.47.41h3.34c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.49 0 .61-.22l1.67-2.89c.09-.22.09-.45-.16-.65l-1.86-1.46z"/>
                </svg>
            </div>
            <div className="absolute bottom-32 right-16 w-6 h-6 text-blue-400/20 rotate-45">
                <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l1.86-1.46c.25-.2.25-.43.16-.65l-1.67-2.89c-.12-.22-.39-.3-.61-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.34c-.24 0-.44.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.49 0-.61.22L2.74 8.87c-.09.22-.09.45.16.65L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-1.87 1.46c-.25.2-.25.43-.16.65l1.67 2.89c.12.22.39.3.61.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.03.24.23.41.47.41h3.34c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.49 0 .61-.22l1.67-2.89c.09-.22.09-.45-.16-.65l-1.86-1.46z"/>
                </svg>
            </div>
            
            <div className="relative max-w-6xl mx-auto px-6 text-center">
                <h2 className={`text-5xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-6`}>
                    Nathan at Work
                </h2>
                <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
                    Behind the scenes of innovation - where ideas become reality
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {featuredImages.map((image, i) => (
                        <div
                            key={i}
                            className="group relative bg-gray-800 aspect-square rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-red-500/20"
                        >
                            {/* Image container with gradient overlay */}
                            <div className="relative w-full h-full">
                                <Image
                                    src={image}
                                    alt={`Nathan at work ${i + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                
                                {/* Hover overlay with gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Corner accent */}
                                <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-red-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            {/* Border glow effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-red-500/50 group-hover:to-blue-500/50 rounded-2xl transition-all duration-300"></div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/gallery"
                        className={`${COMPONENT_STYLES.heroButton}`}
                    >
                        <span className="mr-3">View Full Gallery</span>

                    </Link>
                </div>
            </div>
        </section>
    );
}
