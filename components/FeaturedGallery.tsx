// src/components/FeaturedGallery.tsx
const images = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg", "/photo4.jpg"];

export default function FeaturedGallery() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-semibold text-white mb-10 text-center">
                Featured Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((src, idx) => (
                    <div key={idx} className="relative group overflow-hidden rounded-2xl">
                        <img
                            src={src}
                            alt={`Photo ${idx + 1}`}
                            className="object-cover w-full h-64 transform group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <button className="text-red-500 hover:text-red-400 font-semibold">
                    View Full Gallery →
                </button>
            </div>
        </section>
    );
}
