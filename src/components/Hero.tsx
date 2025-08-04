'use client';

const Hero = () => {
  return (
    <section className="lg:min-h-screen min-h-[50vh] lg:flex items-center justify-center lg:px-[8%] px-[2%] py-8 bg-gray-50 relative overflow-hidden">
      {/* Character Image - Large and Centered Behind Everything */}
      <div className="absolute inset-0 flex items-center justify-center z-0 lg:ml-30">
        <div className="w-[50vw] h-[60vh] lg:w-[80vw] lg:h-[120vh] max-w-[800px] max-h-[1000px]">
          <img src="/image/hero_image.svg" alt="Hero Image" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-full mx-auto lg:flex lg:justify-between lg:items-center">
        {/* Left Side - Creative/Designer */}
        <div className="text-left lg:flex-1">
          <h2 className="text-md lg:text-3xl text-gray-600 lg:mb-4 montserrat-alternates-regular">
            CREATIVE LIKE
          </h2>
          <h1 className="text-xl lg:text-5xl font-bold bg-gradient-to-r from-[#7F85FF] to-[#FF9E75] bg-clip-text text-transparent mb-4 lg:mb-8 montserrat-alternates-medium">
            DESIGNER
          </h1>
          <div className="flex flex-col gap-2 lg:gap-10 items-start mt-4 lg:mt-20">
            <span className="px-2 py-1 lg:px-4 lg:py-2 bg-blue-100 text-black rounded-lg font-medium text-xs lg:text-2xl">
              UX RESEARCHER
            </span>
            <span className="px-2 py-1 lg:px-4 lg:py-2 bg-blue-100 text-black rounded-lg font-medium text-xs lg:text-2xl">
              UIUX DESIGNER
            </span>
          </div>
        </div>

        {/* Spacer for desktop */}
        <div className="hidden lg:block flex-1 max-w-lg"></div>

        {/* Right Side - Logical/Developer - Positioned absolutely on mobile, normal on desktop */}
        <div className="absolute top-0 right-0 lg:relative lg:top-auto lg:right-auto text-right lg:flex-1">
          <h2 className="text-md lg:text-3xl text-gray-600 lg:mb-4 montserrat-regular">
            LOGICAL LIKE
          </h2>
          <h1 className="text-xl lg:text-5xl font-bold text-[#595127] mb-4 lg:mb-8 montserrat-medium">
            &lt;/DEV&gt;
          </h1>
          <div className="flex flex-col gap-2 lg:gap-10 items-end mt-4 lg:mt-20">
            <span className="px-2 py-1 lg:px-4 lg:py-2 bg-[#FFE0D3] text-black rounded-lg font-medium text-xs lg:text-2xl">
              FRONTEND DEVELOPER
            </span>
            <span className="px-2 py-1 lg:px-4 lg:py-2 bg-[#FFE0D3] text-black rounded-lg font-medium text-xs lg:text-2xl">
              SOFTWARE ENGINEER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 