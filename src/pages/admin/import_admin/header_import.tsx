import thongbao from "../img/icons-thongbao.png";
import seach from "../img/icons-search.png";
import user from "../img/icons-user.png";

import { useState } from 'react';

export const Header_admin = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className=" flex mt-auto">



      {/* button và input */}
      <div>
        <button className="ml-[50px] mt-[35px] " onClick={() => setShowInput(true)}>
          <img className="h-[30px] w-[30px]" src={seach} alt="search" />
        </button>

        {showInput && (
          <input className="bg-slate-200 w-[1070px] h-[55px]"
            type="text"
            placeholder="Nhập thông tin..."
            onBlur={() => setShowInput(false)} // Khi mất focus, ẩn đi
          />
        )}
      </div>




      {/* 3 icon  */}
      <div className="flex mt-[25px] gap-[18px] mr-[45px] w-auto h-auto absolute c top-0 right-0">
        <img className="w-[29px] h-[22px] mt-[5px]" src="https://tse2.mm.bing.net/th?id=OIP.t-radEfSWomeN4-i-MIA6gAAAA&pid=Api&P=0&h=180" alt="" />

        <img className="w-[29px] h-[29px]" src={thongbao} />

        <img className="w-[32px] h-[32px] rounded-3xl " src={user} />

      </div>

    </div>


  )
}