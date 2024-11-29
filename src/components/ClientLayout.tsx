"use client";

import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";

interface ClientLayoutProps {
    children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Inicializa el tema basado en localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        const isDark = storedTheme === "dark";
        setIsDarkMode(isDark);
        document.documentElement.classList.toggle("dark", isDark);
    }, []);

    // Alterna el tema entre claro y oscuro
    const toggleTheme = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <div className={`flex h-screen ${isDarkMode ? "dark" : ""}`}>
            <div className="flex-1 flex flex-col bg-background dark:bg-bagroundDark">
                <NavBar
                    onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                    isDarkMode={isDarkMode}
                    toggleTheme={toggleTheme}
                />
                <main className="flex-1 overflow-y-auto  dark:text-white">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default ClientLayout;
