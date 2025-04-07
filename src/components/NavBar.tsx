"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaSun, FaMoon, FaTimes } from "react-icons/fa";

const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
];

const NavBar: React.FC<{
    onSidebarToggle: () => void;
    isDarkMode: boolean;
    toggleTheme: () => void;
}> = ({ onSidebarToggle, isDarkMode, toggleTheme }) => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            {/* NavBar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-background/80 backdrop-blur-md shadow-md py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-dark-border">
                {/* Title */}
                <h1 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
                    SASA
                </h1>

                {/* Links & Theme Toggle for Large Screens */}
                <div className="hidden lg:flex items-center space-x-8">
                    {menuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-accent-light transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                    {/* Theme Toggle Button */}
                    {/* <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-200/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-200 hover:scale-110 transition-transform"
                    >
                        {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button> */}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
                >
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Overlay and Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 flex h-full">
                    {/* Overlay (Left Side) */}
                    <div
                        className="absolute inset-0 bg-white/30 backdrop-blur-sm"
                        onClick={toggleMenu}
                    ></div>

                    {/* Mobile Menu (Right Side) */}
                    <div
                        className={`relative h-full w-64 bg-white dark:bg-dark-background z-50 shadow-md border-l border-gray-200 dark:border-dark-border transform transition-transform duration-300`}
                        style={{ marginLeft: "auto" }}
                    >
                        <div className="flex flex-col items-start space-y-6 py-8 px-6">
                            {menuItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-accent-light transition-colors w-full"
                                    onClick={toggleMenu}
                                >
                                    {item.label}
                                </a>
                            ))}
                            {/* Theme Toggle Button */}
                            {/* <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-gray-200/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-200 hover:scale-110 transition-transform"
                            >
                                {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                            </button> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;
