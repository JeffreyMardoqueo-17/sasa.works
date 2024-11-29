import React from "react";
import { FaBullseye, FaEye, FaUsers, FaLightbulb } from "react-icons/fa";

const MisionVision: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Columna de Texto */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Nuestra Misión y Visión
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        En <span className="text-purple-700 font-bold">Workunity Manager</span>, estamos
                        comprometidos en brindar herramientas que transformen la forma en que las personas
                        trabajan y colaboran. Creemos en la organización, la eficiencia y la creatividad como
                        pilares fundamentales para el éxito.
                    </p>
                    <div className="space-y-6">
                        {/* Misión */}
                        <div className="flex items-start space-x-4">
                            <FaBullseye className="text-purple-700 text-3xl mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Misión
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Empoderar a equipos, estudiantes y profesionales con una plataforma intuitiva que
                                    simplifique la gestión de tareas y proyectos, permitiéndoles alcanzar sus objetivos
                                    de manera eficiente.
                                </p>
                            </div>
                        </div>
                        {/* Visión */}
                        <div className="flex items-start space-x-4">
                            <FaEye className="text-purple-700 text-3xl mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Visión
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Ser la herramienta de referencia global para la gestión de proyectos, fomentando la
                                    colaboración y la innovación en cada rincón del mundo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna de Imágenes */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Imagen 1 */}
                    <div className="relative w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                        <img
                            src="/images/mision.jpg"
                            alt="Nuestra misión"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-purple-700/50 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
                            Misión
                        </div>
                    </div>
                    {/* Imagen 2 */}
                    <div className="relative w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                        <img
                            src="/images/vision.jpg"
                            alt="Nuestra visión"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-purple-700/50 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
                            Visión
                        </div>
                    </div>
                    {/* Imagen 3 */}
                    <div className="relative w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                        <img
                            src="/images/equipo.jpg"
                            alt="Trabajo en equipo"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-purple-700/50 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
                            Trabajo en equipo
                        </div>
                    </div>
                    {/* Imagen 4 */}
                    <div className="relative w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                        <img
                            src="/images/creatividad.jpg"
                            alt="Innovación"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-purple-700/50 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
                            Innovación
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MisionVision;
