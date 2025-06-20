export default function FlipImageCards() {
    return (
      <div>
        <h2 className="text-3xl font-semibold text-white flex items-center justify-center mb-10">
          Coming Soon
        </h2>
  
        {/* Flex container with gap between cards */}
        <div className="flex justify-center items-center gap-12 pb-20">
          
          {/* First Card */}
          <div className="group w-[450px] h-51 perspective relative">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              
              {/* Front Side (Black & White Image) */}
              <div className="absolute w-full h-full backface-hidden">
                <img
                  src="/image 1.png"
                  alt="Car"
                  className="w-full h-full object-cover rounded-lg shadow-lg grayscale group-hover:grayscale-0"
                />
              </div>
  
              {/* Back Side (Color Image) */}
              <div className="absolute w-full h-full bg-gray-800 text-white rounded-lg shadow-lg rotate-y-180 backface-hidden">
                <img
                  src="/image 1.png"
                  alt="Car"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
  
            </div>
  
            {/* Non-Mirrored Text - Placed Outside Flipping Container */}
            <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
              Realistic Human Creation with your own dataset
            </div>
          </div>
  
          {/* Second Card */}
          <div className="group w-[450px] h-51 perspective relative">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              
              {/* Front Side (Black & White Image) */}
              <div className="absolute w-full h-full backface-hidden">
                <img
                  src="/image 2.png"
                  alt="Car"
                  className="w-full h-full object-cover rounded-lg shadow-lg grayscale group-hover:grayscale-0"
                />
              </div>
  
              {/* Back Side (Color Image) */}
              <div className="absolute w-full h-full bg-gray-800 text-white rounded-lg shadow-lg rotate-y-180 backface-hidden">
                <img
                  src="/image 2.png"
                  alt="Car"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
  
            </div>
  
            {/* Non-Mirrored Text - Placed Outside Flipping Container */}
            <div className="absolute bottom-4 left-4 text-white font-semibold text-xl">
            Environment Generation
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  