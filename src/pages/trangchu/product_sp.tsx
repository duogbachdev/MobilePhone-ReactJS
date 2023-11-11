// App.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Iproduct } from '~/interface/interface';

const Product_sp: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/product');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mt-8 flex  mb-[100px] text-center gap-[10px] ml-20 mr-20'>
                {data.map((products : Iproduct) => {
                    return (
                        <div className='mx-auto' key={products.id}>
                            <img className='w-[212px]' src={products.img} />
                            <span className="text-xl font-light text-[#000] ">{products.name}</span><br />
                            <span className='text-[#000] font-[20px]'>{products.price}đ</span> <br />
                        </div>

                    )
                })}
            </div>
  );
};

export default Product_sp;
