// src/components/Hero.tsx
import React, { useState } from 'react';
import { profile } from '../data/portfolio';

const Hero: React.FC = () => {
  const [avatarMissing, setAvatarMissing] = useState(false);
  const avatarSrc = `${import.meta.env.BASE_URL}${profile.avatarPath}`;
  const heroBgSrc = `${import.meta.env.BASE_URL}${profile.heroBackgroundImagePath}`;
  const isSoftGrain = profile.heroBackgroundVariant === 'soft-grain';
  const isTechImage = profile.heroBackgroundVariant === 'tech-image';

  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950 text-white overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 ${isTechImage ? 'opacity-[0.12]' : 'opacity-[0.09]'}`}
          style={{
            backgroundImage:
              isTechImage
                ? 'radial-gradient(circle at 20% 18%, rgba(125,211,252,0.22) 0, rgba(125,211,252,0) 36%), radial-gradient(circle at 82% 16%, rgba(255,255,255,0.16) 0, rgba(255,255,255,0) 32%), radial-gradient(circle at 70% 80%, rgba(165,180,252,0.18) 0, rgba(165,180,252,0) 34%)'
                : isSoftGrain
                ? 'radial-gradient(circle at 18% 22%, rgba(255,255,255,0.30) 0, rgba(255,255,255,0) 34%), radial-gradient(circle at 82% 12%, rgba(125,211,252,0.20) 0, rgba(125,211,252,0) 30%), radial-gradient(circle at 74% 78%, rgba(191,219,254,0.16) 0, rgba(191,219,254,0) 32%)'
                : 'radial-gradient(circle at 18% 22%, rgba(255,255,255,0.32) 0, rgba(255,255,255,0) 34%), radial-gradient(circle at 82% 12%, rgba(125,211,252,0.22) 0, rgba(125,211,252,0) 30%), radial-gradient(circle at 74% 78%, rgba(191,219,254,0.18) 0, rgba(191,219,254,0) 32%)',
          }}
        ></div>
        {isTechImage && (
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage: `linear-gradient(rgba(6,18,46,0.42), rgba(6,18,46,0.28)), url(${heroBgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        )}
        <div
          className={`absolute inset-0 ${isTechImage ? 'opacity-[0.025]' : isSoftGrain ? 'opacity-[0.08]' : 'opacity-[0.045]'}`}
          style={{
            backgroundImage:
              isTechImage
                ? 'linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)'
                : isSoftGrain
                ? 'radial-gradient(rgba(255,255,255,0.18) 0.7px, transparent 0.7px), radial-gradient(rgba(255,255,255,0.14) 0.7px, transparent 0.7px)'
                : 'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
            backgroundSize: isTechImage ? '72px 72px' : isSoftGrain ? '3px 3px, 5px 5px' : '56px 56px',
            backgroundPosition: isSoftGrain ? '0 0, 1.5px 1.5px' : '0 0',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in-up">
            <p className="uppercase tracking-[0.2em] text-xs md:text-sm text-blue-100 dark:text-blue-200 mb-3">.NET Backend Engineer</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in-down">{profile.name}</h1>
            <h2 className="text-xl md:text-2xl mt-3 text-blue-100 dark:text-blue-200">{profile.title}</h2>
            <p className="text-base md:text-lg mt-5 text-blue-50 dark:text-slate-200 leading-relaxed max-w-2xl">{profile.headline}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.highlights.map((item, index) => (
                <span key={item} className={`px-3 py-1.5 rounded-full text-sm bg-white/15 border border-white/20 animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8 animate-fade-in-up animation-delay-300">
              <a
                href="#experience"
                className="group bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                <span>Xem kinh nghiệm</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="group border-2 border-white/70 hover:border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>Liên hệ nhanh</span>
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-300/30 to-indigo-200/20 blur-lg"></div>
              <div className="relative rounded-2xl bg-white/10 border border-white/25 p-3 shadow-2xl">
                {!avatarMissing ? (
                  <img src={avatarSrc} alt={`${profile.name} avatar`} className="w-full h-[420px] md:h-[500px] object-cover rounded-xl" loading="eager" onError={() => setAvatarMissing(true)} />
                ) : (
                  <div className="w-full h-[420px] md:h-[500px] rounded-xl bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center">
                    <span className="text-6xl font-bold text-slate-600">NQT</span>
                  </div>
                )}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/55 backdrop-blur-sm rounded-lg px-4 py-3">
                  <p className="text-sm text-blue-100">{profile.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 -left-10 w-40 h-40 bg-cyan-300/20 rounded-full blur-2xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-10 -right-10 w-44 h-44 bg-indigo-200/15 rounded-full blur-2xl animate-float animation-delay-300 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
