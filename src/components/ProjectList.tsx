'use client';

interface Project {
  id: number;
  title: string;
  description: string;
  type: string;
  role: string;
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "CULINARY ESSENTIALS MOBILE APP",
      description: "A B2C mobile app for customers to purchase kitchen utilities",
      type: "SELF PROJECT",
      role: "UIUX DESIGNER & DEVELOPER",
      image: "/image/kitchen_utility_cover.svg"
    },
    {
      id: 2,
      title: "MARK & SNIP",
      description: "A Video Editing Platform that Revolutionizing Employee Training Through Social Media-Inspired Content Management",
      type: "CLIENT PROJECT",
      role: "UIUX DESIGNER & RESEARCHER",
      image: "/image/mark_snip.svg"
    },
    {
      id: 3,
      title: "UMD\nSOCIAL LIFE",
      description: "A UX client project focusing on undergraduate students' social life, identifying engagement challenges, and design solutions to enhance their experience.",
      type: "COURSE PROJECT",
      role: "UIUX DESIGNER & RESEARCHER",
      image: "/image/social_life.svg"
    },
    {
      id: 4,
      title: "COIN TOSS",
      description: "An AI Powered Trip Planning and Itinerary Management App",
      type: "HACKATHON PROJECT",
      role: "UIUX DESIGNER & RESEARCHER",
      image: "/image/coin_toss.svg"
    }
  ];

  return (
    <section id="work" className="py-16 bg-white px-[8%]">
      <div className="max-w-full mx-auto">
        <h2 className="text-4xl montserrat-medium text-center text-gray-800 mb-20 mt-40">
          Projects I've worked on recently
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative group overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-start">
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative text-white w-3/4 text-left p-8 pb-12 pl-12 z-10">
                  <div className="inline-block px-8 py-2 bg-[#FFE0D3] text-black rounded-lg text-lg font-medium mb-4 montserrat-alternates-medium">
                    {project.type}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 montserrat-semibold leading-tight whitespace-pre-line">
                    {project.title}
                  </h3>
                  <div className="w-100 h-0.5 bg-white mb-4"></div>
                  <p className="text-xl text-white montserrat-alternates-medium">
                    {project.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 