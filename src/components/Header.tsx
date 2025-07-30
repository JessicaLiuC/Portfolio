'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white px-4 sm:px-5 py-3 sm:py-4 mt-[1rem] mt-[3rem] flex sm:flex-row justify-between items-center max-w-[80%] sm:max-w-[90%] mx-auto">
      <a href="/" className="text-[18px] font-semibold text-[#000000] mb-3 sm:mb-0">
        CHIEN CHI
      </a>
      <nav className="flex space-x-[24px] sm:space-x-[48px]">
        <Link href="/work" className="text-[16px] sm:text-[18px] text-[#000000] hover:text-gray-600 transition-colors font-normal tracking-wide">
          WORK
        </Link>
        <Link href="/about" className="text-[16px] sm:text-[18px] text-[#000000] hover:text-gray-600 transition-colors font-normal tracking-wide">
          ABOUT
        </Link>
        <Link href="/resume" className="text-[16px] sm:text-[18px] text-[#000000] hover:text-gray-600 transition-colors font-normal tracking-wide">
          RESUME
        </Link>
      </nav>
    </header>
  );
};

export default Header;