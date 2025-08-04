'use client';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row">
      <a href="/" className="md:text-2xl text-lg font-semibold text-[#000000]">
        CHIEN CHI
      </a>
      <nav className="flex gap-[2rem] md:flex-row md:gap-[5rem]">
        <a href="/" className="md:text-xl text-sm text-[#000000] hover:text-gray-600 transition-colors font-normal tracking-wide">
          WORK
        </a>
        <Link href="/Projects/about" className="md:text-xl text-sm text-[#000000] hover:text-gray-600 transition-colors font-normal tracking-wide">
          ABOUT
        </Link>
        <a href="/resume" className="md:text-xl text-sm text-[#000000] hover:text-gray-600 transition-colors font-normal tracking-wide">
          RESUME
        </a>
      </nav>
    </header>
  );
};

export default Header;