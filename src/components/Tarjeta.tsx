import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importar el ícono de WhatsApp

interface TarjetaProps {
    imagen: string; // URL de la imagen
    nombre: string; // Título o nombre del producto
    precio: string; // Precio o información adicional
    whatsappNumber: string; // Número de WhatsApp para el botón
    className?: string; // Clases adicionales para personalización
    style?: React.CSSProperties; // Estilo inline opcional
}

const Tarjeta: React.FC<TarjetaProps> = ({
    imagen,
    nombre,
    precio,
    whatsappNumber,
    className = "",
    style,
}) => {
    // Mensaje predeterminado para el WhatsApp
    const whatsappMessage = `Hola, estoy interesado en el producto "${nombre}" que cuesta ${precio}.`;

    return (
        <div
            className={`bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden flex flex-col justify-between 
        w-[200px] sm:w-[220px] lg:w-[240px] ${className}`} // Ajuste responsivo del ancho
            style={style}
        >
            {/* Imagen */}
            <div className="flex justify-center items-center bg-gray-50 rounded-lg mb-4">
                <img
                    src={imagen}
                    alt={nombre}
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover rounded-lg"
                />
            </div>

            {/* Contenedor Horizontal */}
            <div className="flex items-center justify-between mt-1 p-2">
                {/* Nombre y Precio */}
                <div>
                    <h3 className="text-sm font-bold text-gray-700">{nombre}</h3>
                    <p className="text-sm text-gray-400 font-semibold">{precio}</p>
                </div>

                {/* Botón con Ícono de WhatsApp */}
                <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-800 text-white p-2 rounded-full shadow-md transition-all flex items-center justify-center"
                >
                    <FaWhatsapp size={20} /> {/* Ícono de WhatsApp */}
                </a>
            </div>
        </div>

    );
};

export default Tarjeta;
