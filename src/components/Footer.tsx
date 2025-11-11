import React from 'react';

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Nguyễn Quang Tuấn</h3>
            <p className="text-gray-400">.NET Backend Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="tel:+84962661756" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              (+84) 0962 661 756
            </a>
            <a 
              href="mailto:nguyenquangtuan24082000@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p>© {currentYear} Nguyễn Quang Tuấn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;