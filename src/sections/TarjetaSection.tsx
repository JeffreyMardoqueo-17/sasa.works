import React from "react";
import Tarjeta from "@/components/Tarjeta";

const products = [
    {
        id: 1,
        name: "Producto 1",
        price: "$25.99",
        imageUrl: "https://i.pinimg.com/originals/02/98/0c/02980ce8acf294a13899163936ab0a09.png",
        whatsappNumber: "521234567890",
    },
    {
        id: 2,
        name: "Producto 2",
        price: "$39.99",
        imageUrl: "https://i.pinimg.com/originals/02/98/0c/02980ce8acf294a13899163936ab0a09.png",
        whatsappNumber: "521234567890",
    },
    {
        id: 3,
        name: "Producto 3",
        price: "$39.99",
        imageUrl: "https://i.pinimg.com/originals/02/98/0c/02980ce8acf294a13899163936ab0a09.png",
        whatsappNumber: "521234567890",
    },
    {
        id: 4,
        name: "Producto 4",
        price: "$39.99",
        imageUrl: "https://i.pinimg.com/originals/02/98/0c/02980ce8acf294a13899163936ab0a09.png",
        whatsappNumber: "521234567890",
    },
    {
        id: 5,
        name: "Producto 5",
        price: "$39.99",
        imageUrl: "https://i.pinimg.com/originals/02/98/0c/02980ce8acf294a13899163936ab0a09.png",
        whatsappNumber: "521234567890",
    },
    {
        id: 6,
        name: "Producto 6",
        price: "$39.99",
        imageUrl: "https://i.pinimg.com/originals/02/98/0c/02980ce8acf294a13899163936ab0a09.png",
        whatsappNumber: "521234567890",
    },
];

const TarjetaSection: React.FC = () => {
    return (
        <section className="bg-background-secondary py-6 container mx-auto">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <Tarjeta
                            key={product.id}
                            imagen={product.imageUrl}
                            nombre={product.name}
                            precio={product.price}
                            whatsappNumber={product.whatsappNumber}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TarjetaSection;
