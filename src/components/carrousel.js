import ArrowRight from '../assets/chevron_carousel_right.png';
import ArrowLeft from '../assets/chevron_carousel_left.png';
import { useState } from 'react';
import housingData from '../data/housings.json';
import '../styles/carrousel.scss';

export const Carrousel = () => {
    const [imageSlider, setImageSlider] = useState(housingData[0].pictures);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            return nextIndex === imageSlider.length ? 0 : nextIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const prevIndexValue = prevIndex - 1;
            return prevIndexValue < 0 ? imageSlider.length - 1 : prevIndexValue;
        });
    };

    return (
        <section
            style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
            className="carousel"
        >
            {imageSlider.length > 1 && (
                <>
                    <img
                        className= "carousel_arrow_right"
                        src={ArrowRight}
                        alt="show next slider"
                        onClick={nextSlide}
                    />
                    <img
                        className="carousel_arrow_left"
                        src={ArrowLeft}
                        alt="show previous slider"
                        onClick={prevSlide}
                    />
                    <p className="slideCount">
                        {currentIndex + 1} / {imageSlider.length}
                    </p>
                </>
            )}
        </section>
    );
};

