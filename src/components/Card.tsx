import React from "react";
import { IconType } from "react-icons";

interface CardProps {
    icon: IconType; // Permite usar cualquier ícono de react-icons
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 hover:shadow-md transition-all">
            <Icon className="text-purple-700 dark:text-purple-400 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
};

export default Card;
