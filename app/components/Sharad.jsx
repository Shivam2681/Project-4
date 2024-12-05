import Head from 'next/head';
import Image from 'next/image';

const Sharad = () => {
  return (
    <>
      <Head>
        <title>Sharad Purnima</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      <div className="relative w-full min-h-[60vh] md:min-h-[80vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Sharad Purnima Image.png"
            alt="A large crowd of people celebrating Sharad Purnima"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50">
          {/* Content Container */}
          <div className="relative h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-32">
            <div className="max-w-4xl">
              {/* Heading Group */}
              <div className="space-y-2">
                <h1 
                  className="text-white text-2xl sm:text-3xl md:text-4xl pl-0 sm:pl-12 md:pl-20"
                  style={{ fontFamily: 'Arial Regular' }}
                >
                  Sharad
                </h1>
                <h2 
                  className="text-yellow-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                  style={{ fontFamily: "'Brush Script MT', cursive, Regular" }}
                >
                  Purnima
                </h2>
              </div>

              {/* Description */}
              <p className="text-white mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg max-w-full md:max-w-3xl lg:max-w-2xl leading-relaxed">
                Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem
                qui ratione reprehenderit eos voluptatem distinctio. Vel possimus
                blanditiis est dolores eius hic voluptatem nemo At esse quas aut
                distinctio distinctio.voluptatem distinctio. est dolores eius hic voluptatem nemo At esse quas aut
                distinctio distinctio.voluptatem distinctio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sharad;