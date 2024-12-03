import ArrowRight from '../assets/chevron_carousel_right.png';
import ArrowLeft from '../assets/chevron_carousel_left.png';
import { useState } from 'react';
import '../styles/carrousel.scss';

export const Carrousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            return nextIndex === images.length ? 0 : nextIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const prevIndexValue = prevIndex - 1;
            return prevIndexValue < 0 ? images.length - 1 : prevIndexValue;
        });
    };

    return (
        <section className="carrousel">
            {images.length > 0 && (
                <img
                    className="carrousel-image"
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />
            )}
            
            {images.length > 1 && (
                <>
                    <img
                        className="carousel_arrow carousel_arrow_right"
                        src={ArrowRight}
                        alt="show next slider"
                        onClick={nextSlide}
                    />
                    <img
                        className="carousel_arrow carousel_arrow_left"
                        src={ArrowLeft}
                        alt="show previous slider"
                        onClick={prevSlide}
                    />
                    <p className="slideCount">
                        {currentIndex + 1} / {images.length}
                    </p>
                </>
            )}
        </section>
    );
};


