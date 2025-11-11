import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Học Vấn</h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">CAO ĐẲNG CÔNG NGHỆ BÁCH KHOA HÀ NỘI</h3>
            <p className="text-lg text-gray-700 mb-1">Chuyên ngành: Công nghệ Thông tin</p>
            <p className="text-gray-600">Tốt nghiệp: 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;