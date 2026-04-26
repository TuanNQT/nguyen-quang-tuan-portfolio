import React from 'react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-slate-50 dark:bg-slate-950 scroll-mt-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-gray-800 dark:text-slate-100">Kinh nghiệm làm việc</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-10">Tập trung vào backend hiệu năng cao, tích hợp đa hệ thống và real-time workflow.</p>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.period}`} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">{exp.company}</h3>
                  <p className="text-blue-700 dark:text-blue-400 font-semibold">{exp.position}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-1.5 text-sm font-medium w-fit">{exp.period}</span>
              </div>

              <div className="space-y-6">
                {exp.projects.map((project, idx) => (
                  <div key={`${exp.company}-project-${idx}`} className="rounded-xl border border-slate-200 dark:border-slate-700 p-5">
                    {project.name && <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{project.name}</h4>}
                    {project.description && <p className="text-slate-600 dark:text-slate-400 mt-1">{project.description}</p>}

                    <div className="mt-3 text-sm rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-2">
                      <span className="font-semibold text-slate-700 dark:text-slate-200">Tech stack: </span>
                      <span className="text-slate-600 dark:text-slate-400">{project.tech}</span>
                    </div>

                    {project.impact && project.impact.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Kết quả nổi bật</p>
                        <ul className="space-y-2">
                          {project.impact.map((item, impactIdx) => (
                            <li key={`${exp.company}-impact-${idx}-${impactIdx}`} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                              <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <details className="mt-4 group">
                      <summary className="cursor-pointer text-sm font-medium text-blue-700 dark:text-blue-400 select-none">Xem chi tiết phần việc</summary>
                      <ul className="mt-3 list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
                        {project.contributions.map((item, contributionIdx) => (
                          <li key={`${exp.company}-contribution-${idx}-${contributionIdx}`}>{item}</li>
                        ))}
                      </ul>
                    </details>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
