import React from 'react';
import Image from 'next/image';

const VardaanSiddhi = () => {
  return (
    <div className="relative bg-white min-h-[80vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Vardaan Siddhi Sadhana Bg Image.png"
          alt="A group of people in orange robes meditating"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full h-auto min-h-[40vh] bg-white bg-opacity-90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
          <div className="relative z-10">
            {/* Header section with title and button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pl-0 sm:pl-2" 
                  style={{ font: 'Arial Regular' }}>
                Vardaan Siddhi Sadhna
              </h1>
              <button className="bg-yellow-400 text-black font-bold text-xl sm:text-2xl py-1 px-4 sm:px-5 
                               hover:bg-yellow-500 transition-colors self-start sm:self-center 
                               sm:mr-0 lg:mr-28 sm:mt-0">
                Register
              </button>
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl">
              Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui ratione 
              reprehenderit eos voluptatem distinctio. Vel possimus blanditiis est dolores eius hic 
              voluptatem nemo At esse quas aut distinctio distinctio.voluptatem distinctio. 
              autem qui ratione reprehenderit eos voluptatem distinctio.
            </p>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default VardaanSiddhi;