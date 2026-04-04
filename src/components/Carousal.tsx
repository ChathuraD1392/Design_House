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
            className='w-screen h-[90vh] object-cover'
            alt={slide.title}
          />

          {/* 2. Text Overlay (Left Side) */}
          <div className='absolute inset-0 flex items-center justify-start px-12 bg-linear-to-r from-black/60 to-transparent'>
            <div className='max-w-xl text-white pl-15'>
              <h2 className='text-8xl font-light mb-2 drop-shadow-lg font-oranienbaum'>
                {slide.title}
              </h2>
              <button className='btn border-0 bg-white/20 mt-6 font-light text-md tracking-wider hover:bg-slate-300/40 pl-12 pr-12 pt-4 pb-4'>
                More...
              </button>
            </div>
          </div>

          {/* 3. Navigation Arrows */}
          <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10'>
            <a
              href={`#${slide.prev}`}
              onClick={(e) => handleScroll(e, slide.prev)}
              className='btn btn-circle bg-white/20 border-none text-white hover:bg-white/40 backdrop-blur-sm'
            >
              ❮
            </a>
            <a
              href={`#${slide.next}`}
              onClick={(e) => handleScroll(e, slide.next)}
              className='btn btn-circle bg-white/20 border-none text-white hover:bg-white/40 backdrop-blur-sm'
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
