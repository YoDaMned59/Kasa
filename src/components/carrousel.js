import React, { useState } from 'react';

export const Carrousel = ({ images }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="carrousel">
            <button onClick={prevSlide}>Previous</button>
            <img src={images[current]} alt={`Slide ${current + 1}`} />
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};
