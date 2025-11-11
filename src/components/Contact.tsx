// src/components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Điện thoại",
      content: "(+84) 0962 661 756",
      href: "tel:+84962661756"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: "nguyenquangtuan24082000@gmail.com",
      href: "mailto:nguyenquangtuan24082000@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Địa chỉ",
      content: "Hà Nội, Việt Nam",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 animate-fade-in-up">
          Liên Hệ
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Thông Tin Liên Hệ</h3>
            
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start group transition-all duration-300 hover:bg-white/50 p-3 rounded-lg"
                >
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 transition-colors duration-300 group-hover:text-blue-600">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      {item.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up animation-delay-200">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Sẵn sàng cho dự án tiếp theo</h3>
            <p className="text-gray-700 mb-6">
              Tôi đang tìm kiếm cơ hội ở vị trí Middle .NET Developer để tiếp tục phát triển kỹ năng chuyên môn và đóng góp vào các dự án có tính thử thách cao.
            </p>
            <a 
              href="mailto:nguyenquangtuan24082000@gmail.com" 
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Gửi email ngay</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;