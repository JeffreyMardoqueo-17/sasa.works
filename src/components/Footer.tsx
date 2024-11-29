import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 dark:bg-tableDark py-12 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna 1: Logo y descripción */}
                <div>
                    <h2 className="text-2xl font-bold text-purple-700">Workunity Manager</h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-4">
                        Una plataforma intuitiva para gestionar tareas, proyectos y fomentar la colaboración
                        entre equipos y profesionales.
                    </p>
                </div>

                {/* Columna 2: Contacto */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Contacto</h3>
                    <ul className="mt-4 space-y-4">
                        <li className="flex items-center space-x-4">
                            <FaEnvelope className="text-purple-700 text-xl" />
                            <span className="text-gray-600 dark:text-gray-300">contacto@workunitymanager.com</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <FaPhone className="text-purple-700 text-xl" />
                            <span className="text-gray-600 dark:text-gray-300">(+503) 6984-2090</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Línea divisoria y copyright */}
            <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Workunity Manager. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
