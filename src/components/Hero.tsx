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
        }, 3000); // Cambiar la imagen cada 3 segundos

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, []);

    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-orange-100 dark:from-pink-300 dark:via-pink-800 dark:to-orange-600 flex flex-col-reverse lg:flex-row items-center justify-center pt-16 sm:pt-20">
            {/* Contenedor del Hero que ocupa toda la pantalla */}
            <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-white/30 dark:border-gray-700 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-16">
                {/* Contenido */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 w-full max-w-6xl">
                    {/* Imagen (Carrusel) */}
                    <div className="order-1 lg:order-none flex justify-center px-4">
                        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-56 sm:h-72 lg:h-96 xl:h-[28rem] bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg flex justify-center items-center">
                            {images.map((image, index) => (
                                <img
                                    key={image.id}
                                    src={image.src}
                                    alt={image.alt}
                                    className={`object-cover w-full h-full absolute transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Texto */}
                    <div className="text-left px-4 order-2 lg:order-none">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-text-primary dark:text-dark-text leading-snug sm:leading-tight">
                            Diseñamos y coordinamos <br />
                            <span className="text-primary">momentos inolvidables</span>
                        </h1>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl xl:text-2xl text-text-secondary dark:text-dark-text leading-relaxed">
                            En <strong>SASA</strong>, creamos detalles únicos y organizamos eventos con amor y dedicación para que cada momento sea especial e inolvidable.
                        </p>
                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-start">
                            <button className="px-6 sm:px-10 py-3 sm:py-4 bg-primary text-white rounded-lg font-medium shadow-md hover:bg-accent-dark transition-all">
                                Conoce Nuestros Servicios
                            </button>
                            <button className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-primary dark:bg-dark-surface dark:text-dark-text rounded-lg font-medium border border-border dark:border-dark-border hover:bg-background-secondary dark:hover:bg-dark-hover shadow-md transition-all">
                                Contáctanos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
