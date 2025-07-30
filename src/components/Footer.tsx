'use client';

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-gray-600">
          © 2024 by Chien-Chi Liu
        </div>
        <div className="flex space-x-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition-colors font-medium"
          >
            GITHUB
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="text-black hover:text-gray-600 transition-colors font-medium"
          >
            EMAIL
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition-colors font-medium"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 