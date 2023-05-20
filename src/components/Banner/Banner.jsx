import React, { useEffect, useRef } from "react";

const Banner = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let currentSlide = 0;

    const slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % carousel.children.length;
      carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="carousel w-full h-64 sm:h-96 overflow-hidden">
      <div
        ref={carouselRef}
        className="carousel-wrapper flex transition-transform duration-500"
      >
        <div className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/fYLbhM1/DC-Direct-Banner.jpg"
            className="w-full"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/nsmDGJK/download.jpg"
            className="w-full"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/VC5ZS6q/maxresdefault.jpg"
            className="w-full"
            alt="Slide 3"
          />
        </div>
        <div className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/PFp396q/Mc-Farlane-Toys-DC-Multiverse-SDCC-2020-2-Packs-2.jpg"
            className="w-full"
            alt="Slide 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
