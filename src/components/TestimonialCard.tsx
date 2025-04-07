import React from 'react';

// Definir la interfaz para las props
interface TestimonialCardProps {
    image: string;
    name: string;
    title: string;
    quote: {
        title: string;
        text: string;
    };
    company: string;
}

// Componente TestimonialCard con las props tipadas
const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, name, title, quote, company }) => (
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{quote.title}</h3>
            <p className="my-4">{quote.text}</p>
        </blockquote>
        <figcaption className="flex items-center justify-center">
            <img className="rounded-full w-9 h-9" src={image} alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>{name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{title} at {company}</div>
            </div>
        </figcaption>
    </figure>
);

export default TestimonialCard;
