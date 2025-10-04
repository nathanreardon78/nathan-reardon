"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, FileText, ExternalLink, Search, Filter } from "lucide-react";
import { GRADIENTS } from "@/constants/styles";

export default function PatentsPage() {
    const allPatents = [
        {
            id: 1,
            title: "Apex Air™ with Swarm",
            status: "Pending",
            category: "Defense Technology",
            image: "/patents/apex-air.png",
            description: "Autonomous Aerial Security Grid deploying fleets of coordinated drones operating as an intelligent swarm. These drones provide 360° surveillance, real-time threat analysis, and rapid response in urban, battlefield, or event settings.",
            applications: ["Crowd safety", "Border defense", "Critical infrastructure protection", "Law enforcement"],
            patentNumber: "Patent Pending"
        },
        {
            id: 2,
            title: "Apex Alert™",
            status: "Pending",
            category: "Security Technology",
            image: "/patents/apex-alert.png",
            description: "AI-Powered Threat Detection and Early Warning system integrating advanced sensors and artificial intelligence to identify weapons, contraband, or suspicious behavior before danger escalates.",
            applications: ["Schools", "Airports", "Correctional facilities", "Public venues"],
            patentNumber: "Patent Pending"
        },
        {
            id: 3,
            title: "Apex Drone & Garage™",
            status: "Pending",
            category: "Security Technology",
            image: "/patents/apex-defender.png",
            description: "Autonomous Aerial Policing and Support System equipped with full-spectrum vision systems capable of seeing through tinted glass, detecting concealed weapons, and scanning for drugs or threats.",
            applications: ["Urban law enforcement", "Officer safety", "Threat assessment", "Non-lethal policing"],
            patentNumber: "Patent Pending"
        },
        {
            id: 4,
            title: "AutophaShield™",
            status: "Pending",
            category: "Health Technology",
            image: "/patents/auto-phashield.png",
            description: "Unlocking the Body's Repair Switch - safely triggers autophagy without fasting, mimicking the body's repair process on demand with potential to combat cancer, neurodegeneration, and metabolic disease.",
            applications: ["Anti-aging therapy", "Cancer treatment", "Neurodegeneration", "Metabolic health"],
            patentNumber: "Patent Pending"
        },
        {
            id: 5,
            title: "Core Volt™",
            status: "Pending",
            category: "Energy Technology",
            image: "/patents/core-volt.png",
            description: "Infinite, Clean, Earth-Powered Energy system that taps directly into near-magma heat, producing limitless clean electricity without solar farms or wind turbines.",
            applications: ["Clean energy generation", "Grid independence", "Industrial power", "Climate solutions"],
            patentNumber: "Patent Pending"
        },
        {
            id: 6,
            title: "Invisi Glass™",
            status: "Pending",
            category: "Automotive Technology",
            image: "/patents/invisi-shield.png",
            description: "Perfect Visibility, Zero Bugs or Rain Distortion system that prevents water distortion and keeps bugs from sticking to windshields and windows.",
            applications: ["Automotive safety", "Aviation", "Marine vessels", "Building windows"],
            patentNumber: "Patent Pending"
        },
        {
            id: 7,
            title: "Invisi Shield™",
            status: "Pending",
            category: "Defense Technology",
            image: "/patents/invisi.png",
            description: "Affordable Vehicle & Building Armoring system offering retrofit bulletproof glass and doors for under $5,000 with minimal added weight.",
            applications: ["Police vehicles", "Civilian protection", "School security", "Emergency services"],
            patentNumber: "Patent Pending"
        },
        {
            id: 8,
            title: "Kirk Collar™",
            status: "Pending",
            category: "Medical Technology",
            image: "/patents/kirk-collar.png",
            description: "Instant Trauma Response for Neck Injuries designed to slow or stop catastrophic bleeding from neck wounds in seconds using rapid, targeted compression.",
            applications: ["Military medicine", "Emergency response", "Trauma care", "First aid"],
            patentNumber: "Patent Pending"
        },
        {
            id: 9,
            title: "Never Forget™",
            status: "Pending",
            category: "Safety Technology",
            image: "/patents/never-forget.png",
            description: "Ending Child & Pet Car Deaths Forever using seat sensors, smartphone alerts, and escalation to emergency services to ensure no child is ever left behind.",
            applications: ["Child safety", "Pet protection", "Vehicle safety", "Emergency alert systems"],
            patentNumber: "Patent Pending"
        },
        {
            id: 10,
            title: "No Sweat™",
            status: "Pending",
            category: "Consumer Technology",
            image: "/patents/no-sweat.png",
            description: "Ending Condensation Forever - a clear coating that prevents fogging and dripping on cups, pipes, windows, and vehicles.",
            applications: ["Food service", "HVAC systems", "Automotive", "Building materials"],
            patentNumber: "Patent Pending"
        },
        {
            id: 11,
            title: "Patch Worx™",
            status: "Pending",
            category: "Infrastructure",
            image: "/patents/patch-worx.png",
            description: "Pavement That Lasts 3× Longer using next-generation materials that repair potholes permanently and extend new pavement life by 3×.",
            applications: ["Road maintenance", "Infrastructure repair", "Municipal services", "Highway construction"],
            patentNumber: "Patent Pending"
        },
        {
            id: 12,
            title: "Poo Gone™",
            status: "Pending",
            category: "Sanitation Technology",
            image: "/patents/poo-gone.png",
            description: "Revolutionizing Waste Handling by chemically breaking down human and animal waste on contact, without hauling, odor, or traditional infrastructure.",
            applications: ["Disaster relief", "Developing nations", "Parks & recreation", "Agricultural waste"],
            patentNumber: "Patent Pending"
        },
        {
            id: 13,
            title: "No Dry Starts® Oil Pump",
            status: "Pending",
            category: "Automotive Technology",
            image: "/patents/no-dry-starts.jpeg",
            description: "Engines That Last Half a Million Miles by priming the engine with oil before ignition, preventing most engine wear that happens in the first seconds after startup.",
            applications: ["Automotive engines", "Fleet vehicles", "Marine engines", "Industrial machinery"],
            patentNumber: "Patent Pending"
        },
        {
            id: 14,
            title: "Quantus™",
            status: "Pending",
            category: "Physics Technology",
            image: "/patents/quantus.png",
            description: "A New Law of Physics for Propulsion and Shielding representing what may be a fifth, undiscovered law of physics—an asymmetric thrust and shielding effect with no modern parallel.",
            applications: ["Aerospace", "Defense systems", "Space exploration", "Planetary protection"],
            patentNumber: "Patent Pending"
        },
        {
            id: 15,
            title: "Radiamel™",
            status: "Pending",
            category: "Medical Technology",
            image: "/patents/radia-mel.png",
            description: "The First True Radiation Eater - the world's only solution that can metabolically neutralize radiation before it damages the body.",
            applications: ["Cancer treatment", "Nuclear cleanup", "Medical imaging", "Space travel"],
            patentNumber: "Patent Pending"
        },
        {
            id: 16,
            title: "Sani Spray™",
            status: "Pending",
            category: "Health Technology",
            image: "/patents/sani-spray.png",
            description: "Self-Sanitizing Surfaces Everywhere - automatically disinfects knobs and handles after each use, reducing spread of infections in hospitals, schools, transit hubs, and offices.",
            applications: ["Healthcare facilities", "Public transportation", "Schools", "Office buildings"],
            patentNumber: "Patent Pending"
        },
        {
            id: 17,
            title: "Scentinel™",
            status: "Pending",
            category: "Fire Safety",
            image: "/patents/scentinel.png",
            description: "Fires Stopped Before They Start - 'smells' hot wires and gases before combustion, preventing disasters with truly preventative fire detection.",
            applications: ["Aviation safety", "Data centers", "Residential homes", "Industrial facilities"],
            patentNumber: "Patent Pending"
        },
        {
            id: 18,
            title: "Solin™",
            status: "Pending",
            category: "Medical Technology",
            image: "/patents/solin.png",
            description: "Shelf-Stable Sublingual Insulin - for the first time, insulin can be taken like a breath strip under the tongue, no refrigeration needed, with a shelf life of 18+ months.",
            applications: ["Diabetes treatment", "Developing nations", "Emergency medicine", "Patient convenience"],
            patentNumber: "Patent Pending"
        },
        {
            id: 19,
            title: "Storm Defender™",
            status: "Pending",
            category: "Weather Technology",
            image: "/patents/storm-defender.png",
            description: "Stopping Hurricanes & Tornadoes by redistributing airflow and heat on a macro-scale to diffuse catastrophic storms before they destroy lives.",
            applications: ["Disaster prevention", "Climate protection", "Insurance", "Emergency management"],
            patentNumber: "Patent Pending"
        },
        {
            id: 20,
            title: "The Reardon Cancer Protocol™",
            status: "Pending",
            category: "Medical Protocol",
            image: "/patents/reardon-cancer-protocol.png",
            description: "A Body Where Cancer Cannot Survive - combines immune modulation, natural compounds, and metabolic rebalancing to create an internal environment where cancer cannot thrive.",
            applications: ["Cancer treatment", "Immune therapy", "Preventive medicine", "Metabolic health"],
            patentNumber: "Patent Pending"
        },
        {
            id: 21,
            title: "The Reardon Diabetes Protocol™",
            status: "Pending",
            category: "Medical Protocol",
            image: "/patents/the-reardon-protocol.png",
            description: "The first credible path to a functional cure for both Type 2 and potentially Type 1 diabetes by restoring pancreatic and metabolic function.",
            applications: ["Type 1 diabetes", "Type 2 diabetes", "Metabolic restoration", "Chronic disease management"],
            patentNumber: "Patent Pending"
        },
        {
            id: 22,
            title: "Vita Choice™",
            status: "Pending",
            category: "Health Technology",
            image: "/patents/vita-choice.png",
            description: "The World's First Customizable Liquid Multivitamin delivering a liquid base with 1,100 customizable nutrients. Every bottle can be built for the individual's exact needs.",
            applications: ["Personalized nutrition", "Health supplements", "Medical nutrition", "Wellness optimization"],
            patentNumber: "Patent Pending"
        }
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    // Generate categories dynamically based on patents that exist
    const usedCategories = [...new Set(allPatents.map(patent => patent.category))].sort();
    const categories = ["All", ...usedCategories];

    const filteredPatents = allPatents.filter(patent => {
        const matchesCategory = selectedCategory === "All" || patent.category === selectedCategory;
        const matchesSearch = patent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            patent.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Header */}
            <div className="relative pt-20 pb-12 px-4">
                <div className="w-full max-w-7xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors duration-300 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="text-sm">Back to Home</span>
                    </Link>

                    {/* Page Title */}
                    <div className="text-center">
                        <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-4`}>
                            Patent Portfolio
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-3">
                            22 Revolutionary Patents Spanning Multiple Industries
                        </p>
                        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
                            From world-changing defense systems to life-saving medical breakthroughs, explore a comprehensive collection 
                            of patents that represent the cutting edge of innovation across technology, healthcare, and beyond.
                        </p>
                        
                        {/* Stats */}
                        <div className="flex justify-center gap-6 mt-6">
                            <div className="text-center">
                                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-red-400">22</div>
                                <div className="text-gray-400 text-xs md:text-sm">Patents Pending</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-400">{usedCategories.length}</div>
                                <div className="text-gray-400 text-xs md:text-sm">Categories</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">26</div>
                                <div className="text-gray-400 text-xs md:text-sm">Years Experience</div>
                            </div>
                        </div>
                        
                        {/* Decorative line */}
                        <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="relative w-full px-4 mb-8">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col gap-4">
                        {/* Search and Filter Toggle */}
                        <div className="flex flex-col gap-3 items-stretch">
                            {/* Search */}
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
                                <input
                                    type="text"
                                    placeholder="Search patents..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 text-sm"
                                />
                            </div>

                            {/* Filter Toggle Button */}
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-400 hover:text-white hover:border-blue-500 transition-all duration-300 w-full"
                            >
                                <Filter className="w-4 h-4 flex-shrink-0" />
                                <span className="text-sm font-medium">
                                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                                </span>
                                <svg 
                                    className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${showFilters ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        {/* Category Filter - Hidden by default */}
                        {showFilters && (
                            <div className="flex flex-wrap gap-2 p-3 bg-gray-800/30 rounded-xl border border-gray-700/50">
                                <div className="w-full text-xs text-gray-400 mb-2">Filter by category:</div>
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                                            selectedCategory === category
                                                ? "bg-gradient-to-r from-red-500 to-blue-500 text-white"
                                                : "bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-600/50"
                                        }`}
                                        style={{ wordBreak: 'break-word' }}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Patents Grid */}
            <div className="relative w-full px-4 pb-16">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {filteredPatents.map((patent, index) => (
                            <div
                                key={patent.id}
                                className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 w-full"
                            >
                                {/* Patent Image */}
                                <div className="relative h-40 md:h-48 overflow-hidden">
                                    <Image
                                        src={patent.image}
                                        alt={patent.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    
                                    {/* Status Badge */}
                                    <div className="absolute top-3 left-3 bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                                        {patent.status}
                                    </div>

                                    {/* Category Tag */}
                                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-blue-400 px-2 py-1 rounded-full text-xs">
                                        {patent.category}
                                    </div>
                                </div>

                                {/* Patent Content */}
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-red-500 transition-all duration-300 line-clamp-2">
                                        {patent.title}
                                    </h3>
                                    
                                    <p className="text-gray-300 text-xs mb-3 line-clamp-3">
                                        {patent.description}
                                    </p>

                                    {/* Patent Number */}
                                    <div className="flex items-center text-gray-400 text-xs mb-3">
                                        <FileText className="w-3 h-3 mr-1 flex-shrink-0" />
                                        <span className="truncate">{patent.patentNumber}</span>
                                    </div>

                                    {/* Applications */}
                                    <div className="space-y-2">
                                        <div className="text-gray-400 text-xs font-medium">Key Applications:</div>
                                        <div className="flex flex-wrap gap-1">
                                            {patent.applications.slice(0, 3).map((app, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs inline-block"
                                                    style={{ wordBreak: 'break-word', maxWidth: '100%' }}
                                                >
                                                    {app}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredPatents.length === 0 && (
                        <div className="text-center py-12 px-4">
                            <div className="text-gray-400 text-base">No patents found matching your criteria.</div>
                            <button
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedCategory("All");
                                }}
                                className="mt-4 text-blue-400 hover:text-white transition-colors duration-300 text-sm"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Contact CTA */}
            <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-t border-gray-700/50">
                <div className="w-full max-w-4xl mx-auto px-4 py-12 text-center">
                    <Award className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Interested in Licensing or Collaboration?
                    </h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                        These world-changing innovations represent breakthrough opportunities across defense, healthcare, energy, and beyond. 
                        Explore partnership opportunities for technology transfer and commercial applications.
                    </p>
                    
                    {/* Contact Information */}
                    <div className="bg-gray-800/30 rounded-2xl p-4 mb-6 max-w-sm mx-auto w-full">
                        <div className="text-white mb-2 text-sm md:text-base">
                            <strong>Nathan Reardon</strong>
                        </div>
                        <div className="text-gray-300 text-xs md:text-sm space-y-1">
                            <div style={{ wordBreak: 'break-all' }}>nathan@membershipauto.com</div>
                            <div>207-745-7575</div>
                            <div>PO Box 52, Detroit, ME 04929</div>
                        </div>
                    </div>
                    
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:-translate-y-1 hover:scale-105"
                    >
                        Get in Touch
                        <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
