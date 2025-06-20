import Image from "next/image";

const Features = () => {
    return (
        <section className="text-gray-600 body-font">

            <div className="container mx-auto px-20 py-24 items-center">
                <h2 className="text-3xl font-semibold text-white flex items-center justify-center mb-10">Features</h2>
                <div className="grid grid-cols-2">
                    {/* Left Column */}
                    <div className="flex flex-col">
                        <p className="text-white py-2 font-semibold text-2xl">
                            Transparent <br />AI Image Generation
                        </p>
                        <p className="text-white font-normal text-xl mt-2">
                            WHITEBOX ensures complete traceability and visibility in AI-generated images by tracking and displaying the original dataset sources used in the creation process.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="flex justify-center">
                        <Image
                            src="/1.svg"
                            alt="hero"
                            width={500}
                            height={500}
                            className=""
                        />
                    </div>


                    <div className="flex justify-center -mt-20">
                        <Image
                            src="/2.svg"
                            alt="hero"
                            width={500}
                            height={500}
                            className=""
                        />
                    </div>

                    <div className="flex flex-col">
                        <p className="text-white py-2 font-semibold text-2xl">
                            Backtrace<br /> Image Sources
                        </p>
                        <p className="text-white font-normal text-xl mt-2">
                            Allows users to trace the origins of AI-generated images with precision and clarity. By linking every generated image to its original dataset sources, users can explore the source the images used in the creative process.
                        </p>
                    </div>


                    {/* Left Column */}
                    <div className="flex flex-col">
                        <p className="text-white py-2 font-semibold text-2xl">
                            Real-Time feedback <br />& Data Export
                        </p>
                        <p className="text-white font-normal text-xl mt-2">
                            Track dataset sources live with real-time visualisation, ensuring full transparency. See referenced images as AI generates content and export source details.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="flex justify-center -mt-20">
                        <Image
                            src="/3.svg"
                            alt="hero"
                            width={500}
                            height={500}
                            className=""
                        />
                    </div>
                </div>



            </div>
        </section>
    );
};

export default Features;
