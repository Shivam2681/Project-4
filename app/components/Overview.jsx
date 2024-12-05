import React from "react";
import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";

function Overview() {
    return (
        <div className="bg-customBlue flex flex-col items-center self-center min-h-screen">
            {/* First Section */}
            <div className="bg-white mx-auto px-4 md:px-10 pt-5 flex flex-col md:flex-row w-full max-w-6xl self-center">
                {/* Left Content (Text Section) */}
                <div className="md:w-1/2 md:pr-5 md:mr-5">
                    <h1 className="text-2xl md:text-3xl text-red-900 font-bold mb-4">Overview</h1>
                    <p className="text-black text-base md:text-xl leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque?
                        Perferendis tempora est, at minima repudiandae similique a id tenetur temporibus
                        consectetur error ratione nesciunt, autem impedit, facere labore ipsam! Ipsam eveniet,
                        illum mollitia omnis nam voluptatem fuga provident placeat, voluptatibus, facilis tempora
                        aliquam reiciendis? Ipsam quod at distinctio iusto. Ipsam vitae maxime, cumque totam
                        dignissimos porro omnis velit earum. Officia quos ullam consectetur laboriosam illo dolor
                        saepe aperiam, quis dolore voluptate? Quisquam ducimus eaque velit facilis et saepe ea
                        quo excepturi, aperiam, consequatur quam nobis officiis veritatis voluptate facere...
                    </p>

                    <div className="py-7 w-full max-w-sm">
                        <div className="flex justify-between items-center text-red-800 border-red-800 border-2 px-2 font-bold text-base md:text-xl mb-2">
                            <span>Benefits</span>
                            <span className="text-lg font-bold">+</span>
                        </div>
                        <div className="flex justify-between items-center text-red-800 border-red-800 border-2 px-2 font-bold text-base md:text-xl mb-2">
                            <span>Program Schedule</span>
                            <span className="text-lg font-bold">+</span>
                        </div>
                        <div className="flex justify-between items-center text-red-800 border-red-800 border-2 px-2 text-base md:text-xl font-bold">
                            <span>Enquire Now</span>
                            <span className="text-lg font-bold">+</span>
                        </div>
                    </div>
                </div>

                {/* Right Content (Image Section) */}
                <div className="flex flex-col justify-center items-center mt-4 md:mt-0">
                    <div className="flex justify-center w-full">
                        <Image
                            src="/Section 1 Side Image.png"
                            alt="Overview Image"
                            width={500}
                            height={500}
                            className=""  // Removed responsive classes to keep original styling
                        />
                    </div>

                    <div className="my-6">
                        <button className="bg-yellow-400 font-bold px-4 text-base md:text-xl py-1 flex flex-row text-black">
                            <IoPlayCircleOutline className="w-6 h-6 md:w-9 md:h-9 mr-3" />
                            Watch Glimeses
                        </button>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col md:flex-row items-center p-4 md:p-5 mb-5 w-full max-w-6xl self-center mx-auto">
                {/* Left Image - Hidden on small screens */}
                <div className="hidden md:block md:w-1/4 flex justify-center -mt-16 mb-4 md:mb-0">
                    <Image
                        src="/Design3.png"
                        alt="Ganesh Image"
                        width={500}
                        height={500}
                        className="ml-10"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl text-center font-extrabold text-textColor1 mb-2 mt-8" style={{ fontFamily: 'Arial' }}>
                        Ganesh Lakshmi Yagya
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-orange-900 mb-4 text-center">
                        C e l e b r a t i o n s
                    </h2>
                    <p className="text-black leading-relaxed text-center">
                        Lorem ipsum dolor sit amet. Qui distinctio porro in dolores autem qui <br />
                        ratione reprehenderit eos voluptatem distinctio.
                    </p>
                </div>

                {/* Right Image - Hidden on small screens */}
                <div className="hidden md:block md:w-1/4 flex justify-center -mt-16 mb-4">
                    <Image
                        src="/Design4.png"
                        alt="Lakshmi Image"
                        width={500}
                        height={500}
                        className="mr-10"
                    />
                </div>
            </div>

            {/* Remaining sections with similar responsive adjustments */}
            <div className="mb-5 px-4 flex flex-col md:flex-row w-full max-w-6xl self-center">
                {/* Left Content (Text Section) */}
                <div className="md:w-1/2 md:ml-6">
                    <h1 className="text-3xl md:text-4xl text-textColor font-bold mb-4">
                        Pran Pratistha of Shree Yantra
                    </h1>
                    <p className="text-black leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque?
                        Perferendis tempora est, at minima repudiandae similique a id tenetur temporibus
                        consectetur error ratione nesciunt, autem impedit, facere labore ipsam! Ipsam eveniet,
                        illum mollitia omnis nam voluptatem fuga provident placeat, voluptatibus, facilis tempora
                        aliquam reiciendis?.
                    </p>
                </div>

                {/* Right Content (Image Section) */}
                <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
                    <Image
                        src="/Section 2 Side Image.png"
                        alt="Overview Image"
                        width={450}
                        height={450}
                        className="w-full max-w-md"
                    />
                </div>
            </div>

            <div className="mb-5 px-4 flex flex-col md:flex-row w-full max-w-6xl self-center">
                {/* Left Content (Image Section) */}
                <div className="md:w-1/2 flex justify-center items-center md:ml-[-12px] mt-4 md:mt-0">
                    <Image
                        src="/Section 2 1 Side Image.png"
                        alt="Overview Image"
                        width={450}
                        height={450}
                        className="w-full max-w-md"
                    />
                </div>

                {/* Right Content (Text Section) */}
                <div className="md:w-1/2">
                    <h1 className="text-3xl md:text-4xl text-textColor font-bold mb-4 pt-5">
                        Shree Ganesh Lakshmi oblation (Mantrahuti)
                    </h1>
                    <p className="text-black leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque?
                        Perferendis tempora est, at minima repudiandae similique a id tenetur temporibus
                        consectetur error ratione nesciunt, autem impedit, facere labore ipsam! Ipsam eveniet,
                        illum mollitia
                    </p>
                </div>
            </div>

            <div className="mx-2 mb-5 p-4 flex flex-col md:flex-row w-full max-w-6xl self-center">
                {/* Left Content (Text Section) */}
                <div className="md:w-1/2">
                    <h1 className="text-3xl md:text-4xl text-red-900 font-bold mb-3 pt-5">Yagya by</h1>
                    <h2 className="text-4xl md:text-5xl text-red-900 font-bold mb-4">Sankalpit Yajman</h2>
                    <p className="text-black leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque?
                        Perferendis tempora est, at minima repudiandae similique a id tenetur temporibus
                        consectetur error ratione nesciunt, autem impedit, facere labore ipsam! Ipsam eveniet,
                        illum mollitia omnis nam voluptatem fuga provident placeat, voluptatibus, facilis tempora
                    </p>
                    <div className="my-6">
                        <button className="bg-yellow-400 font-bold px-4 text-xl md:text-2xl py-1 text-black">
                            Register
                        </button>
                    </div>
                </div>

                {/* Right Content (Image Section) */}
                <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
                    <Image
                        src="/Sankalpit Yajman.png"
                        alt="Overview Image"
                        width={450}
                        height={450}
                        className="w-full max-w-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default Overview;