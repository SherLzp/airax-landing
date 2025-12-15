import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center overflow-hidden bg-[#001F5B]">
      {/* 背景装饰效果 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C2FF] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center space-y-10 max-w-4xl">
        {/* Logo */}
        <div className="w-48 h-48 md:w-64 md:h-64 animate-pulse-slow">
          <Logo className="w-full h-full drop-shadow-[0_0_25px_rgba(0,194,255,0.6)]" />
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00C2FF] to-white">
            多言語AIで、
          </span>
          <span className="block text-white">
            企業のフロント対応を自動化する
          </span>
        </h1>

        {/* Subheadline
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Automating enterprise front-line interactions with multilingual AI.
          <br className="hidden md:block" />
          提升效率，降低成本，创造无缝的全球客户体验。
        </p> */}

        {/* CTA Button */}
        {/* <div>
          <Link
            href="mailto:lzp.sher@gmail.com"
            className="inline-block px-8 py-4 text-lg font-bold text-[#001F5B] bg-gradient-to-r from-[#00C2FF] to-white rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(0,194,255,0.8)] transform hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;