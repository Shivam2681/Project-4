"use client";

import React from 'react';
import Image from 'next/image';

const OnlineVardan = () => {
  return (
    <div
      className="w-full py-8 sm:py-16 md:py-24 lg:py-40"
      style={{
        backgroundImage: 'url("Vardaan Siddhi Sadhana 1 Bg Image.png")',
        backgroundSize: 'cover',
        backgroundPosition: {
          '@media (max-width: 768px)': 'left center',
          '@media (min-width: 769px)': 'center',
        },
        '@media (maxWidth: 768px)': {
          backgroundPosition: 'left center'
        }
      }}
    >
      {/* Semi-transparent overlay for better text readability on mobile */}
      <div className="relative w-full h-full">
        {/* Mobile-only semi-transparent background */}
        <div className="absolute inset-0 md:bg-transparent">
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left side - empty for background */}
            <div className="w-full md:w-1/2">
              {/* Background image is applied to the main div */}
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start  md:bg-transparent p-6 md:p-0 rounded-lg md:rounded-none">
              {/* Heading Group */}
              <div className="w-full text-center md:text-left">
                <h1
                  className="text-xl sm:text-2xl md:text-3xl text-gray-500 mb-2 md:pl-52"
                  style={{ fontFamily: 'Arial Black' }}
                >
                  Online
                </h1>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 mb-4"
                  style={{ font: 'Arial Regular' }}
                >
                  Vardaan Siddhi Sadhna
                </h2>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-black mb-8 text-center md:text-left max-w-2xl">
                Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem
                qui ratione reprehenderit eos voluptatem distinctio. Vel possimus
                blanditiis est dolores eius hic voluptatem nemo At esse quas aut
                distinctio distinctio.blanditiis est dolores
              </p>

              {/* Button Container */}
              <div className="w-full flex justify-center md:justify-end">
                <button className="bg-yellow-400 hover:bg-yellow-600 text-black text-xl sm:text-2xl font-bold px-6 py-1 transition-colors duration-300">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineVardan;