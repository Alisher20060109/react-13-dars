import { useEffect, useState } from "react";
import axios from "axios";

const useGet = ({ url, id = "" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Xatolik uchun state

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null); // Har safar yangi so'rovda xatoni tozalaymiz
      
      try {
        // Trim orqali ortiqcha bo'shliq yoki boshidagi slashelarni olib tashlaymiz
        const cleanUrl = url.startsWith('/') ? url.substring(1) : url;
        // const path = id ? `${cleanUrl}/${id}` : cleanUrl;
        
        const res = await axios.get(`https://dummyjson.com//${url}`);    

        setData(res?.data);
      } catch (err) {
        console.error("Xatolik tafsiloti:", err.response || err.message);
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }   
    };

    fetchData();
  }, [url, id]);

  return { data, loading, error }; // Error ham qaytadi
};

export default useGet;  