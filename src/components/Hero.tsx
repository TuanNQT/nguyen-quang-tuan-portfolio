// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">
            Nguyễn Quang Tuấn
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-in-up animation-delay-200">
            .NET Backend Developer
          </h2>
          <p className="text-xl max-w-2xl mb-8 animate-fade-in-up animation-delay-400">
            Lập trình viên .NET với gần 4 năm kinh nghiệm phát triển các hệ thống phần mềm doanh nghiệp quy mô vừa và lớn.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-600">
          <a 
            href="#contact" 
            className="group bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
          >
            <span>Liên hệ ngay</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a 
            href="#experience" 
            className="group bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
          >
            <span>Xem kinh nghiệm</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

        {/* Animated scroll indicator */}
        <div className="mt-16 animate-bounce-slow">
          <a 
            href="#about" 
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-2">Khám phá thêm</span>
            <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/5 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/8 rounded-full animate-float animation-delay-500"></div>
    </section>
  );
};

export default Hero;