import React from 'react';

import { slides } from '../utils/constants';

const Carousal = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  return (
    <div className='carousel w-full'>
      {slides.map((slide) => (
        <div
          key={slide.id}
          id={slide.id}
          className='carousel-item relative w-full'
        >
          {/* 1. The Image */}
          <img
            src={slide.img}
            className='w-screen h-[70vh] md:h-[90vh] object-cover'
            alt={slide.title}
          />

          {/* 2. Text Overlay (Left Side) */}
          {/* Adjusted px-12 to px-6 on mobile, and removed fixed pl-15 for mobile */}
          <div className='absolute inset-0 flex items-center justify-start px-6 md:px-12 bg-linear-to-r from-black/70 via-black/30 to-transparent'>
            <div className='max-w-xl text-white md:pl-15'>
              {/* Responsive Font Size: 5xl on mobile, 8xl on desktop */}
              <h2 className='uppercase text-5xl md:text-8xl md:text-left sm  font-light mb-2 drop-shadow-lg font-oranienbaum leading-tight'>
                {slide.title}
              </h2>
              <button className='btn uppercase border-0 bg-white/20 mt-4 md:mt-6 font-bold md:text-md tracking-wider hover:bg-slate-300/40 px-8 md:px-12 py-3 md:pt-4 md:pb-4'>
                See more...
              </button>
            </div>
          </div>

          {/* 3. Navigation Arrows */}
          {/* Slightly smaller arrows on mobile so they don't overlap text */}
          <div className='absolute left-2 right-2 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10'>
            <a
              href={`#${slide.prev}`}
              onClick={(e) => handleScroll(e, slide.prev)}
              className='btn btn-sm md:btn-md btn-circle bg-white/20 border-none text-white hover:bg-white/40 backdrop-blur-sm'
            >
              ❮
            </a>
            <a
              href={`#${slide.next}`}
              onClick={(e) => handleScroll(e, slide.next)}
              className='btn btn-sm md:btn-md btn-circle bg-white/20 border-none text-white hover:bg-white/40 backdrop-blur-sm'
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousal;
