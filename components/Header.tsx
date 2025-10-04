"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { COMPONENT_STYLES } from "@/constants/styles";

const navItems = ["Home", "Patents", "Gallery", "Contact"];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-colors duration-300 ${scrolled
                    ? "bg-gray-900/90 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className={COMPONENT_STYLES.logo}
                >
                    Nathan Reardon
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-8 text-gray-300">
                    {navItems.map((item) => (
                        <li key={item}>
                            <Link
                                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                                className={COMPONENT_STYLES.navLink}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-900/95 border-t border-gray-800">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        {navItems.map((item) => (
                            <li key={item}>
                                <Link
                                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                                    className={COMPONENT_STYLES.navLink}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
