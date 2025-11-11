import React from 'react';

interface Project {
  name?: string;
  description?: string;
  tech: string;
  contributions: string[];
}

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  projects: Project[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "CÔNG TY CỔ PHẦN Ichiba | Hà Nội",
      position: ".NET Developer",
      period: "10/2021 - Hiện tại",
      projects: [
        {
          name: "Hệ Thống Quản Lý Đơn Hàng (OMS) - Omnichannel",
          description: "Phần mềm quản lý và đồng bộ đơn hàng đa kênh",
          tech: ".NET 8, Entity Framework Core, PostgreSQL, Redis, Microservices, Dapr (Pub/Sub), ReactJS",
          contributions: [
            "Tham gia thiết kế cơ sở dữ liệu và kiến trúc Microservice cho hệ thống",
            "Phát triển các module nghiệp vụ cốt lõi: Quản lý Đơn hàng, Tồn kho, Sản phẩm",
            "Tối ưu hóa hiệu năng các truy vấn phức tạp, giảm thời gian xử lý",
            "Thiết kế và tích hợp RESTful API để đồng bộ hóa dữ liệu đơn hàng, sản phẩm từ các sàn TMĐT (Shopee, Tiktok, Lazada)",
            "Ứng dụng Dapr Pub/Sub để xây dựng cơ chế giao tiếp bất đồng bộ, linh hoạt giữa các service",
            "Tham gia phát triển giao diện người dùng với ReactJS"
          ]
        },
        {
          name: "Hệ Thống Quản Lý Hội Thoại (Social Chat)",
          description: "Phần mềm đồng bộ và quản lý tin nhắn, bài viết từ các nền tảng mạng xã hội, hỗ trợ bộ phận CSKH",
          tech: ".NET 8, Entity Framework Core, PostgreSQL, Redis, SignalR, ReactJS",
          contributions: [
            "Thiết kế và xây dựng lược đồ cơ sở dữ liệu cho module Hội thoại và Bài viết",
            "Phát triển Backend API cho các tính năng quản lý hội thoại, trang, bài đăng",
            "Tích hợp API từ các nền tảng Facebook Fanpage, Zalo OA, Instagram Business",
            "Xây dựng cơ chế phân quyền chi tiết (RBAC) và logic tự động phân phối hội thoại cho nhân viên CSKH",
            "Triển khai SignalR để xây dựng tính năng thông báo và cập nhật real-time"
          ]
        }
      ]
    },
    {
      company: "CÔNG TY TNHH MIGVIET | Hà Nội",
      position: "Developer",
      period: "04/2021 - 10/2021",
      projects: [
        {
          tech: "Python, ERPNext Framework, JavaScript, Flutter",
          contributions: [
            "Phát triển và tùy chỉnh các module trên nền tảng ERPNext theo yêu cầu nghiệp vụ",
            "Xây dựng tính năng check-in cho nhân viên dựa trên vị trí GPS (Geolocation) và đồng bộ dữ liệu về hệ thống"
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Kinh Nghiệm Làm Việc</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                    <p className="text-lg text-blue-600 font-medium">{exp.position}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                {exp.projects.map((project, pIndex) => (
                  <div key={pIndex} className="mb-6 last:mb-0">
                    {project.name && (
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h4>
                    )}
                    {project.description && (
                      <p className="text-gray-600 mb-2">{project.description}</p>
                    )}
                    <div className="bg-gray-100 p-3 rounded-lg mb-3">
                      <span className="text-sm font-medium text-gray-700">Công nghệ: </span>
                      <span className="text-sm text-gray-600">{project.tech}</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      {project.contributions.map((contribution, cIndex) => (
                        <li key={cIndex}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;