"use client"
import React from "react";
import { FaUsers, FaTasks, FaCalendarCheck } from "react-icons/fa";
import Card from "./Card";

const Caracteristicas: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-background dark:bg-tableDark">
            <div className="max-w-7xl mx-auto">
                {/* Título de la sección */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    Características principales
                </h2>
                {/* Grilla de tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card
                        icon={FaUsers}
                        title="Colaboración en equipo"
                        description="Trabaja de manera eficiente con tus compañeros, asigna tareas y comparte recursos fácilmente."
                    />
                    <Card
                        icon={FaCalendarCheck}
                        title="Gestión de proyectos"
                        description="Organiza tus proyectos, establece plazos y realiza un seguimiento del progreso en tiempo real."
                    />
                    <Card
                        icon={FaTasks}
                        title="Seguimiento de tareas"
                        description="Crea, asigna y supervisa tareas para mantener a tu equipo enfocado y productivo."
                    />
                </div>
            </div>
        </section>
    );
};

export default Caracteristicas;
