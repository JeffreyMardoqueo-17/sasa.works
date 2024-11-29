import React from "react";
import { FaClipboardList, FaChartBar, FaShieldAlt, FaUserFriends, FaComments } from "react-icons/fa";
import Card from "./Card";

const Servicios: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-white dark:bg-tableDark">
            <div className="max-w-7xl mx-auto">
                {/* Título de la sección */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    Servicios destacados
                </h2>
                {/* Grilla de servicios */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <Card
                        icon={FaClipboardList}
                        title="Organización avanzada"
                        description="Gestiona listas de tareas, proyectos y recursos con herramientas avanzadas."
                    />
                    <Card
                        icon={FaChartBar}
                        title="Análisis de datos"
                        description="Obtén estadísticas claras sobre el progreso de tu equipo y tus objetivos."
                    />
                    <Card
                        icon={FaShieldAlt}
                        title="Seguridad integrada"
                        description="Tus datos están protegidos con los más altos estándares de seguridad."
                    />
                    <Card
                        icon={FaUserFriends}
                        title="Colaboración sin límites"
                        description="Facilita el trabajo en equipo con herramientas de comunicación integradas."
                    />
                    <Card
                        icon={FaComments}
                        title="Foro y sesión de chat"
                        description="Comunícate en tiempo real o a través de foros con tu equipo para mantener todo organizado."
                    />
                </div>
            </div>
        </section>
    );
};

export default Servicios;
