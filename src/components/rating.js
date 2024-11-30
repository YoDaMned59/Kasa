import React from 'react';


export const Rating = ({ rating }) => {
    // Crée un tableau d'étoiles pour la note
    const filledStars = Array.from({ length: Math.round(rating) }, (_, index) => index);
    const emptyStars = Array.from({ length: 5 - filledStars.length }, (_, index) => index);

    return (
        <div className="rating">
            {filledStars.map((_, index) => (
                <i key={index} className="fa fa-star filled"></i>
            ))}
            {emptyStars.map((_, index) => (
                <i key={index} className="fa fa-star"></i>
            ))}
        </div>
    );
};
