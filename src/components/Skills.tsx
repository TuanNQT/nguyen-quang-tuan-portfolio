import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Backend & Ngôn ngữ",
      skills: [
        ".NET 8, .NET Core, C#",
        "Entity Framework Core, LINQ",
        "RESTful API, Microservices Architecture, Clean Architecture",
        "Dapr (Pub/Sub, Actors, Service Invocation)",
        "OOP, SOLID Principles, Design Patterns (CQRS, Repository, DI, Factory, Saga, Outbox...)",
        "Async/Await Programming, Message Queues, Event-Driven Architecture, Unit of Work Pattern"
      ]
    },
    {
      title: "Cơ sở dữ liệu & Caching",
      skills: [
        "PostgreSQL, SQL (Query Optimization, Indexing)",
        "Redis (Caching, Pub/Sub)"
      ]
    },
    {
      title: "Frontend & Khác",
      skills: [
        "ReactJS, Vue 3 (Basic)",
        "HTML5, CSS3, JavaScript",
        "Git, Docker (Basic)",
        "AI tool (copilot, claude, grok,...)"
      ]
    },
    {
      title: "Kỹ năng mềm & Ngôn ngữ",
      skills: [
        "Làm việc nhóm (Agile/Scrum)",
        "Giải quyết vấn đề",
        "Giao tiếp",
        "Tiếng Anh: Đọc hiểu tài liệu kỹ thuật tốt"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Kỹ Năng Công Nghệ</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;