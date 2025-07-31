'use client';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-[8%] py-12 bg-gray-50 relative overflow-hidden">
      {/* Character Image - Large and Centered Behind Everything */}
      <div className="absolute inset-0 flex items-center justify-center z-0 ml-30">
        <div className="w-[80vw] h-[120vh] max-w-[800px] max-h-[1000px]">
          <img src="/image/hero_image.svg" alt="Hero Image" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-full mx-auto flex justify-between items-center">
        {/* Left Side - Creative/Designer */}
        <div className="text-left flex-1">
          <h2 className="text-3xl lg:text-5xl font-normal text-gray-600 mb-4 montserrat-alternates-regular">
            CREATIVE LIKE
          </h2>
          <h1 className="text-5xl lg:text-8xl font-bold bg-gradient-to-r from-[#7F85FF] to-[#FF9E75] bg-clip-text text-transparent mb-8 montserrat-alternates-medium">
            DESIGNER
          </h1>
          <div className="flex flex-col gap-10 items-start mt-20">
            <span className="px-4 py-2 bg-blue-100 text-black rounded-lg font-medium text-2xl">
              UX RESEARCHER
            </span>
            <span className="px-4 py-2 bg-blue-100 text-black rounded-lg font-medium text-2xl">
              UIUX DESIGNER
            </span>
          </div>
        </div>

        {/* Spacer for center character space */}
        <div className="flex-1 max-w-lg"></div>

        {/* Right Side - Logical/Developer */}
        <div className="text-right flex-1">
          <h2 className="text-3xl lg:text-4xl font-normal text-gray-600 mb-4 montserrat-regular">
            LOGICAL LIKE
          </h2>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#595127] mb-8 montserrat-medium">
            &lt;/DEV&gt;
          </h1>
          <div className="flex flex-col gap-10 items-end mt-20">
            <span className="px-4 py-2 bg-[#FFE0D3] text-black rounded-lg font-medium text-2xl">
              FRONTEND DEVELOPER
            </span>
            <span className="px-4 py-2 bg-[#FFE0D3] text-black rounded-lg font-medium text-2xl">
              SOFTWARE ENGINEER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 