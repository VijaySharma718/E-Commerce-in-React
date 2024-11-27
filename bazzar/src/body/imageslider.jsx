import React, { useState, useEffect } from 'react';

function ImageSlider() {
    const images = [
        '/banner/01.webp',
        '/banner/02.jpg',
        '/banner/03.jpg',
        '/banner/04.jpg',
        '/banner/05.jpg',
        '/banner/06.png',
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalId);
    }, [images.length]);
    return (
        <div className=" bg-white relative w-full h-60 sm:h-[450px] overflow-hidden">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`absolute sm:p-10 sm:mt-0 px-5 mt-4 sm:h-full h-[200px] w-full object-fit transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}
            <div className="absolute bottom-0 left-0 w-full flex justify-center py-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-1 mx-2 bg-blue-900  rounded-full ${currentSlide === index ? 'bg-red-600' : ''
                            }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;

