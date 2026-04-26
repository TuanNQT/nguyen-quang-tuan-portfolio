// src/components/About.tsx
import React from 'react';
import { aboutStats, profile } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-900 scroll-mt-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-slate-100 animate-fade-in-up">Tóm tắt năng lực</h2>
          <p className="text-center text-gray-600 dark:text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-100">{profile.seekingLine}</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-5 text-center">
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">{stat.number}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-50 to-sky-50 dark:from-slate-800 dark:to-slate-800 border border-blue-100 dark:border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Điểm mạnh cốt lõi</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {profile.coreStrengths.map((strength) => (
                <li key={strength} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"></span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
