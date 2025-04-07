"use client";

import React, { useState, useEffect } from "react";

const images = [
    { id: 1, src: "https://i.pinimg.com/originals/02/98/0c/02980ce8acf294a13899163936ab0a09.png", alt: "Imagen representativa 1" },
    { id: 2, src: "https://i.pinimg.com/originals/02/98/0c/02980ce8acf294a13899163936ab0a09.png", alt: "Imagen representativa 2" },
    { id: 3, src: "https://i.etsystatic.com/22497945/r/il/e26ad4/4070086848/il_1080xN.4070086848_mn1c.jpg", alt: "Imagen representativa 3" },
];

const Hero: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-orange-100 dark:from-pink-300 dark:via-pink-800 dark:to-orange-600 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-16">
            {/* Contenedor del Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-4xl lg:max-w-6xl">
                {/* Imagen (Carrusel) */}
                <div className="flex justify-center">
                    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-56 sm:h-64 lg:h-80 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
                        {images.map((image, index) => (
                            <img
                                key={image.id}
                                src={image.src}
                                alt={image.alt}
                                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Texto */}
                <div className="text-center lg:text-left px-4">
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-text-primary dark:text-dark-text leading-tight">
                        Diseñamos y coordinamos <br />
                        <span className="text-red-700">momentos inolvidables</span>
                    </h1>
                    <p className="mt-4 text-sm sm:text-base lg:text-lg text-text-secondary dark:text-dark-text">
                        En <strong>SASA</strong>, creamos detalles únicos y organizamos eventos con amor y
                        dedicación para que cada momento sea especial e inolvidable.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                        <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-md hover:bg-accent-dark transition-all">
                            Conoce Nuestros Servicios
                        </button>
                        <button className="px-6 py-3 bg-white text-primary dark:bg-dark-surface dark:text-dark-text rounded-lg font-medium border border-border dark:border-dark-border hover:bg-background-secondary dark:hover:bg-dark-hover shadow-md transition-all">
                            Contáctanos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
