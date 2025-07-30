'use client';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Side - Creative/Designer */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-normal text-gray-600 mb-4">
            CREATIVE LIKE
          </h2>
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
            DESIGNER
          </h1>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <span className="px-4 py-2 bg-blue-100 text-black rounded-lg font-medium text-sm">
              UX RESEARCHER
            </span>
            <span className="px-4 py-2 bg-blue-100 text-black rounded-lg font-medium text-sm">
              UIUX DESIGNER
            </span>
          </div>
        </div>

        {/* Center - 3D Character Illustration */}
        <div className="flex justify-center order-2">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            {/* Placeholder for 3D character - you can replace this with an actual image */}
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <div className="text-white text-4xl font-bold">👤</div>
            </div>
            {/* Split overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>

        {/* Right Side - Logical/Developer */}
        <div className="text-center lg:text-right order-3">
          <h2 className="text-3xl lg:text-4xl font-normal text-gray-600 mb-4">
            LOGICAL LIKE
          </h2>
          <h1 className="text-5xl lg:text-6xl font-bold text-green-700 mb-8">
            &lt;/DEV&gt;
          </h1>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
            <span className="px-4 py-2 bg-orange-100 text-black rounded-lg font-medium text-sm">
              FRONTEND DEVELOPER
            </span>
            <span className="px-4 py-2 bg-orange-100 text-black rounded-lg font-medium text-sm">
              SOFTWARE ENGINEER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 