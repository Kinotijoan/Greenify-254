import React from 'react';

interface categoryCardProps {
    title: string,
    description: string,
    link: string
}

const CategoryCard: React.FC<categoryCardProps> = ({ title, description, link }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <a href={link} className="inline-block px-4 py-2 bg-green-400 text-white font-semibold rounded-lg shadow-md hover:bg-transparent hover:border-2 hover:border-green-400 hover:text-green-400">Go to Page</a>
        </div>
    );
};

export default CategoryCard;
