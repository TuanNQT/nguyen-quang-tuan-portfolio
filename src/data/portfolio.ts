export interface NavItem {
  href: string;
  label: string;
}

export interface AboutStat {
  number: string;
  label: string;
}

export interface Project {
  name?: string;
  description?: string;
  tech: string;
  impact?: string[];
  contributions: string[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  projects: Project[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactItem {
  type: "phone" | "email" | "linkedin" | "github" | "location";
  title: string;
  content: string;
  href: string;
}

export type HeroBackgroundVariant = "subtle-grid" | "soft-grain" | "tech-image";

export const profile = {
  name: "Nguyễn Quang Tuấn",
  title: ".NET Backend Developer",
  avatarPath: "avatar.jpg",
  heroBackgroundImagePath: "hero-tech-bg.png",
  // Options: "subtle-grid" | "soft-grain" | "tech-image"
  heroBackgroundVariant: "tech-image" as HeroBackgroundVariant,
  summary:
    "Backend Developer với hơn 4 năm kinh nghiệm xây dựng hệ thống doanh nghiệp, tập trung vào hiệu năng, độ ổn định và khả năng mở rộng.",
  headline:
    "Kinh nghiệm thực tế trong việc xây dựng API và hệ thống backend cho bài toán đơn hàng, hội thoại đa kênh và tích hợp nền tảng bên thứ ba.",
  seekingLine:
    "Với hơn 4 năm kinh nghiệm phát triển các hệ thống phần mềm doanh nghiệp quy mô vừa và lớn. Có kiến thức về kiến trúc Microservice, DDD và các design pattern. Kinh nghiệm thực tế trong việc xây dựng, tối ưu hóa hiệu năng và tích hợp hệ thống với các nền tảng TMĐT và Mạng xã hội. Đang tìm kiếm cơ hội ở vị trí Middle .NET Developer để tiếp tục phát triển kỹ năng chuyên môn và đóng góp vào các dự án có tính thử thách cao.",
  coreStrengths: [
    "Thiết kế kiến trúc Microservice theo domain",
    "Tối ưu truy vấn và hiệu năng backend",
    "Tích hợp API TMĐT, Social và cơ chế đồng bộ dữ liệu",
    "Xây dựng real-time workflow với SignalR và Pub/Sub",
    "Ứng dụng AI tools để tăng tốc coding, debug và review tài liệu kỹ thuật",
  ],
  highlights: [
    "4+ năm kinh nghiệm .NET",
    "10+ module/dự án đã triển khai",
    ".NET 8, PostgreSQL, Redis, Dapr, SignalR",
  ],
  phone: "(+84) 0962 661 756",
  phoneHref: "tel:+84962661756",
  email: "nguyenquangtuan24082000@gmail.com",
  emailHref: "mailto:nguyenquangtuan24082000@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/quangtuan2k/",
  linkedinLabel: "linkedin.com/in/quangtuan2k",
  githubUrl: "https://github.com/TuanNQT",
  githubLabel: "github.com/TuanNQT",
  location: "Hà Nội, Việt Nam",
  locationMapUrl: "https://maps.google.com/?q=Ha+Noi,+Viet+Nam",
};

export const navItems: NavItem[] = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#experience", label: "Kinh nghiệm" },
  { href: "#skills", label: "Kỹ năng" },
  { href: "#contact", label: "Liên hệ" },
];

export const aboutStats: AboutStat[] = [
  { number: "4+", label: "Năm kinh nghiệm" },
  { number: "10+", label: "Module/Dự án" },
  { number: "5+", label: "Nền tảng tích hợp" },
];

export const experiences: ExperienceItem[] = [
  {
    company: "CÔNG TY CỔ PHẦN Ichiba | Hà Nội",
    position: ".NET Developer",
    period: "10/2021 - Hiện tại",
    projects: [
      {
        name: "Hệ Thống Quản Lý Đơn Hàng (OMS) - Omnichannel",
        description:
          "Quản lý và đồng bộ đơn hàng đa kênh cho vận hành thương mại điện tử.",
        tech: ".NET 8, EF Core, PostgreSQL, Redis, Microservices, Dapr, ReactJS",
        impact: [
          "Thiết kế kiến trúc service theo domain đơn hàng, tồn kho, sản phẩm.",
          "Tối ưu truy vấn nghiệp vụ trọng yếu để giảm độ trễ xử lý.",
          "Đồng bộ dữ liệu từ Shopee, TikTok Shop, Lazada qua RESTful API.",
        ],
        contributions: [
          "Thiết kế cơ sở dữ liệu và luồng xử lý nghiệp vụ cốt lõi.",
          "Phát triển API backend phục vụ xử lý đơn hàng đa kênh.",
          "Ứng dụng Dapr Pub/Sub để xử lý bất đồng bộ giữa các service.",
          "Phối hợp frontend ReactJS cho các màn hình vận hành.",
          "Ứng dụng AI assistant để scaffold endpoint/template code và rút ngắn thời gian xử lý task lặp.",
        ],
      },
      {
        name: "Hệ Thống Quản Lý Hội Thoại (Social Chat)",
        description:
          "Đồng bộ và quản lý hội thoại, bài viết từ social platform để hỗ trợ đội CSKH.",
        tech: ".NET 8, EF Core, PostgreSQL, Redis, SignalR, ReactJS",
        impact: [
          "Xây dựng cơ chế RBAC và phân phối hội thoại tự động cho nhân viên CSKH.",
          "Triển khai cập nhật real-time bằng SignalR.",
          "Tích hợp Facebook Fanpage, Zalo OA, Instagram Business.",
        ],
        contributions: [
          "Thiết kế schema dữ liệu cho module hội thoại và bài viết.",
          "Xây dựng backend API cho quản lý hội thoại, trang và bài đăng.",
          "Triển khai tích hợp API bên thứ ba theo quy trình xác thực phù hợp.",
          "Dùng AI hỗ trợ phân tích log/error và đề xuất hướng debug khi xử lý integration issue.",
        ],
      },
    ],
  },
  {
    company: "CÔNG TY TNHH MIGVIET | Hà Nội",
    position: "Developer",
    period: "04/2021 - 10/2021",
    projects: [
      {
        name: "ERPNext Customization",
        description:
          "Tùy biến module ERP và tích hợp dữ liệu phục vụ vận hành nội bộ.",
        tech: "Python, ERPNext, JavaScript, Flutter",
        impact: [
          "Tùy chỉnh module theo yêu cầu nghiệp vụ thực tế.",
          "Xây dựng tính năng check-in theo GPS cho nhân sự hiện trường.",
        ],
        contributions: [
          "Phát triển và maintain module ERPNext.",
          "Đồng bộ dữ liệu check-in về hệ thống trung tâm.",
          "Dùng AI để tạo nhanh tài liệu kỹ thuật nội bộ và checklist kiểm thử.",
        ],
      },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Kiến trúc",
    skills: [
      ".NET 8, .NET Core, C#",
      "RESTful API, Microservices",
      "Dapr (Pub/Sub, Actors, Service Invocation)",
      "OOP, SOLID, Design Patterns (CQRS, Repository, DI)",
      "Async/Await, xử lý bất đồng bộ",
    ],
  },
  {
    title: "Dữ liệu & Hiệu năng",
    skills: [
      "PostgreSQL, SQL Optimization, Indexing",
      "Entity Framework Core, LINQ",
      "Redis (Caching, Pub/Sub)",
      "Phân tích bottleneck và tối ưu truy vấn",
    ],
  },
  {
    title: "Frontend & Công cụ",
    skills: [
      "ReactJS, Vue 3 (cơ bản)",
      "HTML5, CSS3, JavaScript",
      "Git, Docker (cơ bản)",
      "Làm việc với AI tools trong quy trình dev",
    ],
  },
  {
    title: "AI-assisted Development",
    skills: [
      "Code scaffolding cho API/CRUD và utility components",
      "AI-assisted debugging từ stack trace, log và lỗi integration",
      "Sinh test case/checklist kiểm thử cho luồng nghiệp vụ chính",
      "Tạo nhanh tài liệu kỹ thuật, release note và mô tả task",
    ],
  },
  {
    title: "Làm việc nhóm",
    skills: [
      "Làm việc theo Agile/Scrum",
      "Giao tiếp kỹ thuật với cross-functional team",
      "Chủ động ownership và xử lý vấn đề",
      "Tiếng Anh đọc hiểu tài liệu kỹ thuật tốt",
    ],
  },
];

export const education = {
  school: "CAO ĐẲNG CÔNG NGHỆ BÁCH KHOA HÀ NỘI",
  major: "Chuyên ngành: Công nghệ Thông tin",
  graduation: "Tốt nghiệp: 2021",
};

export const contactItems: ContactItem[] = [
  {
    type: "phone",
    title: "Điện thoại",
    content: profile.phone,
    href: profile.phoneHref,
  },
  {
    type: "email",
    title: "Email",
    content: profile.email,
    href: profile.emailHref,
  },
  {
    type: "linkedin",
    title: "LinkedIn",
    content: profile.linkedinLabel,
    href: profile.linkedinUrl,
  },
  {
    type: "github",
    title: "GitHub",
    content: profile.githubLabel,
    href: profile.githubUrl,
  },
  {
    type: "location",
    title: "Địa chỉ",
    content: profile.location,
    href: profile.locationMapUrl,
  },
];
