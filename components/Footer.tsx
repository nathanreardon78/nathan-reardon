export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-400 py-8 mt-20 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <p>
                    © {new Date().getFullYear()} <span className="text-red-500 font-medium">Nathan Reardon</span>.
                    Shaping the future, one idea at a time.
                </p>

                <div className="space-x-5">
                    <a href="#" className="hover:text-blue-400 hover:drop-shadow-[0_0_4px_#3b82f6] transition">LinkedIn</a>
                    <a href="#" className="hover:text-blue-400 hover:drop-shadow-[0_0_4px_#3b82f6] transition">ResearchGate</a>
                    <a href="#" className="hover:text-red-500 hover:drop-shadow-[0_0_4px_#dc2626] transition">Instagram</a>
                </div>
            </div>
        </footer>
    );
}
