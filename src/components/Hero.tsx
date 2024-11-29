import React from "react";

const Hero: React.FC = () => {
    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-orange-100 dark:from-pink-300 dark:via-pink-800 dark:to-orange-600 flex items-center justify-center pt-16 sm:pt-20">
            {/* Contenedor del Hero que ocupa toda la pantalla */}
            <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-white/30 dark:border-gray-700 flex items-center justify-center px-4 sm:px-8 lg:px-16">
                {/* Contenido */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 w-full max-w-6xl">
                    {/* Texto */}
                    <div className="text-center lg:text-left px-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-text-primary dark:text-dark-text leading-tight">
                            Diseñamos y coordinamos <br />
                            <span className="text-primary">momentos inolvidables</span>
                        </h1>
                        <p className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl text-text-secondary dark:text-dark-text">
                            En <strong>SASA</strong>, creamos detalles únicos y organizamos eventos con amor y dedicación para que cada momento sea especial e inolvidable.
                        </p>
                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
                            <button className="px-6 sm:px-10 py-3 sm:py-4 bg-primary text-white rounded-lg font-medium shadow-md hover:bg-accent-dark transition-all">
                                Conoce Nuestros Servicios
                            </button>
                            <button className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-primary dark:bg-dark-surface dark:text-dark-text rounded-lg font-medium border border-border dark:border-dark-border hover:bg-background-secondary dark:hover:bg-dark-hover shadow-md transition-all">
                                Contáctanos
                            </button>
                        </div>
                    </div>
                    {/* Imagen */}
                    <div className="flex justify-center px-4">
                        <div className="relative w-full max-w-sm h-48 sm:h-64 lg:h-80 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg flex justify-center items-center">
                            <img
                                src="/path-to-your-image.jpg"
                                alt="Imagen representativa de SASA"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
