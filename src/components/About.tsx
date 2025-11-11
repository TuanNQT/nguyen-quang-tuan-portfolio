// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  const stats = [
    { number: "4+", label: "Năm kinh nghiệm" },
    { number: "10+", label: "Dự án hoàn thành" },
    { number: "5+", label: "Công nghệ chính" }
  ];

  return (
    <section id="about" className="py-16 bg-white scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 animate-fade-in-up">
          Tóm Tắt Năng Lực
        </h2>
        
        <div className="max-w-4xl mx-auto bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up animation-delay-200">
          <p className="text-lg text-gray-700 leading-relaxed">
            Lập trình viên .NET với gần 4 năm kinh nghiệm phát triển các hệ thống phần mềm doanh nghiệp quy mô vừa và lớn. 
            Có kiến thức vững chắc về kiến trúc Microservice, DDD và các design pattern. 
            Kinh nghiệm thực tế trong việc xây dựng, tối ưu hóa hiệu năng và tích hợp hệ thống với các nền tảng TMĐT và Mạng xã hội. 
            Đang tìm kiếm cơ hội ở vị trí Middle .NET Developer để tiếp tục phát triển kỹ năng chuyên môn và đóng góp vào các dự án có tính thử thách cao.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center group cursor-pointer"
              >
                <div className="text-2xl font-bold text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                  {stat.number}
                </div>
                <div className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;