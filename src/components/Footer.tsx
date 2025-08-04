'use client';
import { LinkedinLogoIcon, EnvelopeIcon, GithubLogoIcon } from "@phosphor-icons/react"

const Footer = () => {
  return (
    <footer className="py-10 lg:py-16 px-[15%] border-t border-gray-400 mt-5 lg:mt-20">
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="flex space-x-4 mt-6 justify-center">
          <a href="mailto:jessicaliu4011@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <EnvelopeIcon size={32} />
          </a>
          <a href="https://www.linkedin.com/in/chienchi/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <LinkedinLogoIcon size={32} />
          </a>
          <a href="https://github.com/JessicaLiuC" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <GithubLogoIcon size={32} />
          </a>
        </div>
        <p className="text-gray-500 text-md mt-8 montserrat-regular text-center">
            © 2025 Chien-Chi Liu.
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 m-10">
        <div>
          <h3 className="text-xl text-gray-800 mb-6 montserrat-medium">
            CHIEN-CHI LIU ®
          </h3>
          
          <div className="flex space-x-4 mt-6">
            <a href="mailto:jessicaliu4011@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <EnvelopeIcon size={32} />
            </a>
            <a href="https://www.linkedin.com/in/chienchi/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <LinkedinLogoIcon size={32} />
            </a>
            <a href="https://github.com/JessicaLiuC" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <GithubLogoIcon size={32} />
            </a>
          </div>
          
          <p className="text-gray-500 text-md mt-8 montserrat-regular">
            © 2025 Chien-Chi Liu. All rights reserved
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-6 montserrat-semibold">
            SITEMAP
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="/about" className="text-gray-600 hover:text-gray-800 transition-colors montserrat-regular">
                ABOUT
              </a>
            </li>
            <li>
              <a href="/work" className="text-gray-600 hover:text-gray-800 transition-colors montserrat-regular">
                WORK
              </a>
            </li>
            <li>
              <a href="/resume" className="text-gray-600 hover:text-gray-800 transition-colors montserrat-regular">
                RESUME
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg text-gray-800 mb-6 montserrat-medium">
            WANNA HAVE A COFFEE CHAT?<br />
            LET'S CONNECT AT
          </h4>
          <a 
            href="mailto:jessicaliu4011@gmail.com" 
            className="text-gray-800 text-xl border-b-2 border-gray-800 hover:text-gray-600 transition-colors montserrat-medium"
          >
            jessicaliu4011@gmail.com
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer; 