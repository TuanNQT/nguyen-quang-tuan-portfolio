// src/components/Contact.tsx
import React from 'react';
import { contactItems, profile, ContactItem } from '../data/portfolio';

const ContactIcon: React.FC<{ type: ContactItem['type'] }> = ({ type }) => {
  if (type === 'phone') {
    return (
      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    );
  }

  if (type === 'email') {
    return (
      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }

  if (type === 'location') {
    return (
      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }

  if (type === 'linkedin') {
    return (
      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-9.5 6.5H7V17h2.5V9.5zM8.25 7.9a1.45 1.45 0 100-2.9 1.45 1.45 0 000 2.9zM17 12.5c0-2.3-1.23-3.37-2.87-3.37-1.32 0-1.91.72-2.24 1.23V9.5H9.4c.03.58 0 7.5 0 7.5h2.5v-4.19c0-.22.01-.44.08-.6.17-.44.56-.9 1.22-.9.86 0 1.2.66 1.2 1.62V17H17v-4.5z" />
      </svg>
    );
  }

  return (
    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.22 1.83 1.22 1.05 1.82 2.77 1.29 3.45.98.11-.77.42-1.29.75-1.58-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.23-3.22-.13-.3-.53-1.51.12-3.15 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.64.25 2.85.12 3.15.77.84 1.23 1.91 1.23 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.28c0 .32.22.69.83.58A12 12 0 0012 .5z" />
    </svg>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-slate-900 scroll-mt-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-slate-100 animate-fade-in-up">Liên hệ</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
            <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100 mb-6">Thông tin liên hệ</h3>

            <div className="space-y-4">
              {contactItems.map((item) => {
                const isExternal = item.href.startsWith('http');

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer noopener' : undefined}
                    className="flex items-start group transition-all duration-300 hover:bg-white/50 dark:hover:bg-slate-700/40 p-3 rounded-lg"
                  >
                    <div className="bg-blue-100 dark:bg-slate-700 p-3 rounded-lg mr-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200 dark:group-hover:bg-slate-600">
                      <ContactIcon type={item.type} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-slate-200 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{item.title}</h4>
                      <p className="text-gray-600 dark:text-slate-400 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-slate-300">{item.content}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up animation-delay-200">
            <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100 mb-6">Sẵn sàng cho dự án tiếp theo</h3>
            <p className="text-gray-700 dark:text-slate-300 mb-6">{profile.seekingLine}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={profile.emailHref}
                className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Gửi email ngay</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Kết nối LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
