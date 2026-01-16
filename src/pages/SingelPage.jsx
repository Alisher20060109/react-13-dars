import React from 'react';
import { useParams } from 'react-router-dom';
import useGet from '../hook/useGet';

const SingelPage = () => {
  const { id } = useParams();
  
  // 1. Hookdan ma'lumotni olamiz
  const { data: product, loading } = useGet({ url: "products", id });

  // 2. LOGIKA: Birinchi navbatda yuklanish holatini tekshiramiz
  if (loading) {
    return <div className="h-screen flex justify-center items-center text-xl">Yuklanmoqda...</div>;
  }

  // 3. LOGIKA: Ma'lumot kelmagan bo'lsa (masalan 404), xato chiqaramiz
  if (!product) {
    return <div className="h-screen flex justify-center items-center text-red-500">Mahsulot topilmadi!</div>;
  }

  // 4. ENDI ASOSIY QISM: Bu yerga kelganda product aniq mavjud bo'ladi
  return (
    <div className="max-w-7xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="border rounded-lg p-5 flex justify-center bg-gray-50">
        <img 
          src={product.thumbnail} // Obyekt emas, aniq URL
          alt={product.title} 
          className="max-h-125 object-contain"
        />
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-500 text-lg">{product.description}</p>
        
        <div className="text-2xl font-semibold text-blue-600">
          ${product.price} 
          <span className="ml-3 text-sm text-gray-400 line-through">${(product.price * 1.2).toFixed(2)}</span>
        </div>

        <div className="flex gap-4">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors">
            SAVATCHAGA QO'SHISH
          </button>
          <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-md font-bold hover:bg-orange-50 transition-colors">
            HOZIROQ SOTIB OLISH
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingelPage;