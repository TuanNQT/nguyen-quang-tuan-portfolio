import React from 'react';
import { profile } from '../data/portfolio';

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-slate-950 text-white py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">{profile.name}</h3>
            <p className="text-gray-400 dark:text-slate-400">{profile.title}</p>
          </div>

          <div className="flex space-x-4">
            <a href={profile.phoneHref} className="text-gray-400 dark:text-slate-400 hover:text-white transition-colors">
              {profile.phone}
            </a>
            <a href={profile.emailHref} className="text-gray-400 dark:text-slate-400 hover:text-white transition-colors">
              Email
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer noopener" className="text-gray-400 dark:text-slate-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer noopener" className="text-gray-400 dark:text-slate-400 hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-slate-700 mt-6 pt-6 text-center text-gray-400 dark:text-slate-400">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
