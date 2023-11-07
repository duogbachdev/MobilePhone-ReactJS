export const Header = () => {
    return (
        <>
        <div className="bg-[#c69a39] h-[110px] w-full ">
            <div className="flex gap-[25px]  text-center justify-center items-center ">
                <div className="w-[190px] h-[55px] overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://cdn.mobilecity.vn/mobilecity-vn/images/2023/04/w300/logo-mobilecity-1.png.webp" alt="" />
                </div>

                <div className="bg-[#825f00] rounded-[5px] text-[#ffffff] w-[140px] h-[41px]">
                    <p className="text-[11px]">Xem giá, tồn kho tại:</p>
                    <select className="bg-[#825f00] text-[14px] h-[18px] " name="" id="">
                        <option value="">Hà Nội</option>
                        <option value="">Hồ Chí Minh</option>
                        <option value="">Đà Nẵng</option>
                    </select>
                </div>

                <div className="">
                    <input className="w-[292px] h-[41px] rounded-[4px] " type="text" name="" id="" placeholder="Tìm Kiếm Sản Phẩm..." />
                </div>


                <div className="bg-[#825f00] rounded-[4px] w-[89px] h-[44px] pt-[2px]">
                    <img className="w-[20px] h-[20px] mx-auto" src="https://mobilecity.vn/public/assets/img/icon_login.png" />
                    <span className="text-[11px] text-[#ffffff]">Đăng Nhập</span>

                </div>

                <div className="bg-[#825f00] rounded-[4px] w-[89px] h-[44px] pt-[2px]">
                    <img className="w-[20px] h-[20px] mx-auto" src="https://mobilecity.vn/public/assets/img/icon_login.png" />
                    <span className="text-[11px] text-[#ffffff]">Đăng Nhập</span>


                </div>

                <div className="text-[#ffffff] text-[17px] font-bold	">
                    <h1>TIN TỨC | EVENTS | TRA CỨU BH </h1>
                </div>
                </div>

                
                <div className="flex justify-center items-center gap-[37px] mt-[20px] text-[16px] font-bold">
                    <div className="flex gap-[6px]">
                    <img src="https://mobilecity.vn/public/assets/img/icon_header/smartPhone.png" alt="" />
                    <h1 className="text-[#ffffff]">Điện thoại</h1>
                    </div>

                    <div className="flex gap-[6px]">
                        <img src="https://mobilecity.vn/public/assets/img/icon_header/tablet.png" alt="" />
                        <h1 className="text-[#ffffff]">Máy tính bảng</h1>
                    </div>

                    <div className="flex gap-[6px]">
                        <img src="https://mobilecity.vn/public/assets/img/icon_header/laptop.png" alt="" />
                        <h1 className="text-[#ffffff]">Laptop</h1>
                    </div>

                    <div className="flex gap-[6px]">
                        <img src="https://mobilecity.vn/public/assets/img/icon_header/tv.png" alt="" />
                        <h1 className="text-[#ffffff]">Tivi</h1>
                    </div>

                    <div className="flex gap-[6px]">
                    <img src="https://mobilecity.vn/public/assets/img/icon_header/charging.png" alt="" />
                    <h1 className="text-[#ffffff]">Phụ kiện</h1>
                    </div>

                    <div className="flex gap-[6px]">
                        <img src="	https://mobilecity.vn/public/assets/img/icon_header/watch.png" alt="" />
                        <h1 className="text-[#ffffff]">Đồng hồ thông minh </h1>
                    </div>

                    <div className="flex gap-[6px]">
                        <img src="https://mobilecity.vn/public/assets/img/icon_header/headphone.png" alt="" />
                        <h1 className="text-[#ffffff]">Tai nghe</h1>
                    </div>

                    <div className="flex gap-[6px]">
                        <img src="	https://mobilecity.vn/public/assets/img/icon_header/repair.png" alt="" />
                        <h1 className="text-[#ffffff]">Sửa chữa</h1>
                    </div>

                </div>
                
            
            </div>

            


            
        </>
    )
}