import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="text-gray-600 body-font">
      <div className="container mx-auto px-10 py-24 grid grid-cols-2 items-center">
        {/* Left Column */}
        <div className="flex flex-col">
          <div className="flex items-center">
            <h2 className="text-3xl font-semibold text-white">About</h2>
            <Image
              src="/header.svg"
              alt="header"
              width={150}
              height={150}
              className="ml-2 -mb-1"
            />
          </div>
          <p className="italic text-white font-medium py-2">
            Transparency. Accountability. Innovation.
          </p>
          <p className="text-white font-normal text-xl mt-2">
            WHITEBOX Transparency Model is a cutting-edge tool designed to bring
            clarity, accountability, and traceability to AI-generated images. By
            analyzing dataset contributions, tracking metadata, and providing
            real-time visual feedback, WHITEBOX ensures that every generated image
            is transparent.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex justify-center">
          <Image
            src="/green.svg"
            alt="hero"
            width={300}
            height={300}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
