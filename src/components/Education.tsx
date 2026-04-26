import React from 'react';
import { education } from '../data/portfolio';

const Education: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-slate-100">Học vấn</h2>

        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100 mb-2">{education.school}</h3>
            <p className="text-lg text-gray-700 dark:text-slate-300 mb-1">{education.major}</p>
            <p className="text-gray-600 dark:text-slate-400">{education.graduation}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
