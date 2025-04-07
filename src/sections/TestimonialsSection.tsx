import React from 'react';
import TestimonialCard from '@/components/TestimonialCard'; // Asumiendo que TestimonialCard está en el mismo directorio

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
            name: "Bonnie Green",
            title: "Developer",
            quote: { title: "Very easy this was to integrate", text: "If you care for your time, I hands down would go with this." },
            company: "Open AI"
        },
        {
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
            name: "Roberta Casas",
            title: "Lead designer",
            quote: { title: "Solid foundation for any project", text: "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!" },
            company: "Dropbox"
        },
        {
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
            name: "Jese Leos",
            title: "Software Engineer",
            quote: { title: "Mindblowing workflow", text: "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application." },
            company: "Facebook"
        },
        {
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
            name: "Joseph McFall",
            title: "CTO",
            quote: { title: "Efficient Collaborating", text: "You have many examples that can be used to create a fast prototype for your team." },
            company: "Google"
        },
    ];

    return (
        <section className="grid mb-8 border border-gray-200 rounded-lg shadow-xs dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={index}
                    image={testimonial.image}
                    name={testimonial.name}
                    title={testimonial.title}
                    quote={testimonial.quote}
                    company={testimonial.company}
                />
            ))}
        </section>
    );
};

export default TestimonialsSection;
