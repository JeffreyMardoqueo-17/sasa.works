"use client";

import React from "react";
import { FaGraduationCap, FaUsers, FaClipboardCheck, FaSuitcase } from "react-icons/fa";

const EntornosAdaptables: React.FC = () => {
    return (
        <section className="bg-gray-50 dark:bg-bagroundDark py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Columna de Texto */}
                <div>
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Perfecto para diversos entornos
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Workunity Manager se adapta a diferentes contextos y necesidades.
                    </p>
                    {/* Lista de ítems */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-4">
                            <FaGraduationCap className="text-purple-700 dark:text-purple-400 text-xl" />
                            <span className="text-gray-900 dark:text-white">Entornos educativos</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaSuitcase className="text-purple-700 dark:text-purple-400 text-xl" />
                            <span className="text-gray-900 dark:text-white">Equipos de trabajo</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaUsers className="text-purple-700 dark:text-purple-400 text-xl" />
                            <span className="text-gray-900 dark:text-white">Proyectos grupales</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaClipboardCheck className="text-purple-700 dark:text-purple-400 text-xl" />
                            <span className="text-gray-900 dark:text-white">Gestión personal</span>
                        </div>
                    </div>
                </div>

                {/* Columna de Imagen */}
                <div className="flex justify-center items-center">
                    <div className="w-full h-64 md:h-80 lg:h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex justify-center items-center">
                        <span className="text-gray-400 text-sm">[ Aquí irá la fotito ]</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EntornosAdaptables;
