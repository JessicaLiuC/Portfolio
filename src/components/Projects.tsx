'use client';

interface Project {
  id: number;
  title: string;
  description: string;
  type: string;
  devices: string[];
  mockupContent: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      description: "Furniture and home goods shopping experience",
      type: "Mobile App",
      devices: ["smartphone"],
      mockupContent: "Kitchen Chair - Add to cart"
    },
    {
      id: 2,
      title: "Video Editing Software & Mobile App",
      description: "Professional video editing with mobile companion",
      type: "Desktop & Mobile",
      devices: ["laptop", "smartphone"],
      mockupContent: "Timeline - Preview - Controls"
    },
    {
      id: 3,
      title: "University Portal",
      description: "Student engagement and organization platform",
      type: "Web Application",
      devices: ["laptop"],
      mockupContent: "Find Organizations - Attend Events - Track Involvement"
    },
    {
      id: 4,
      title: "Travel Planning Mobile App",
      description: "Trip planning and itinerary management",
      type: "Mobile App",
      devices: ["smartphone"],
      mockupContent: "Trip to New York - Plan a trip"
    },
    {
      id: 5,
      title: "Healthcare Dashboard",
      description: "Patient management and analytics platform",
      type: "Web Application",
      devices: ["laptop"],
      mockupContent: "Patient Data - Analytics - Reports"
    },
    {
      id: 6,
      title: "Social Media Platform",
      description: "Community building and content sharing",
      type: "Mobile App",
      devices: ["smartphone"],
      mockupContent: "Feed - Profile - Messages"
    }
  ];

  return (
    <section id="work" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Projects I've worked on recently
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {project.type}
                </span>
              </div>
              
              {/* Device Mockups */}
              <div className="p-6 bg-gray-100">
                <div className="flex justify-center space-x-4">
                  {project.devices.map((device, index) => (
                    <div key={index} className="relative">
                      {device === 'smartphone' && (
                        <div className="w-24 h-48 bg-black rounded-2xl p-1">
                          <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                            <div className="text-xs text-gray-600 text-center px-2">
                              {project.mockupContent}
                            </div>
                          </div>
                        </div>
                      )}
                      {device === 'laptop' && (
                        <div className="w-32 h-20 bg-gray-800 rounded-lg p-1">
                          <div className="w-full h-full bg-white rounded flex items-center justify-center">
                            <div className="text-xs text-gray-600 text-center px-2">
                              {project.mockupContent}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
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