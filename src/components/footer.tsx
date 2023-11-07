export const Footer = () => {
    return (
        <>
            <div className="flex bg-slate-100 mt-[200px] pt-[30px]">

                <div className="mx-auto flex gap-[60px]">

                {/* Hệ Thống của hàng  */}
                <div className="text-left  ">

                    <h1 className="mb-[10px] font-bold text-[#c69a39]">HỆ THỐNG CỬA HÀNG</h1>
                    <h2 className="mb-[5px] font-medium">Hà Nội</h2>
                    <div className="text-[15px] ">
                        <p className="mb-[8px]">
                            120 Thái Hà, Q. Đống Đa | <a href="">Xem bản đồ</a> <br />
                            Điện thoại: 0969.120.120 - 037.437.9999
                        </p>
                        <p className="mb-[8px]">
                            398 Cầu Giấy, Q. Cầu Giấy | <a href="">Xem bản đồ</a> <br />
                            Điện thoại: 096.1111.398 - 037.437.9999
                        </p>

                        <p>
                            42 Phố Vọng, Hai Bà Trưng | <a href="">Xem bản đồ</a> <br />
                            Điện thoại: 0979.884242 - 037.437.9999
                        </p>
                    </div>

                    <div>
                        <h1 className="mb-[7px] mt-[20px] font-bold">Hồ Chí Minh</h1>
                        <div className="text-[15px] ">
                        <p className="mb-[8px]">
                            123 Trần Quang Khải, Q.1 | <a href="">Xem bản đồ</a> <br />
                            Điện thoại: 096.1111.398 - 037.437.9999
                        </p>

                        <p className="">
                            602 Lê Hồng Phong, P.10, Q.10 | <a href="">Xem bản đồ</a> <br />
                            Điện thoại: 097.1111.602 - 097.3333.602
                        </p>
                        </div>

                        <div>
                        <h1 className="mb-[7px] mt-[20px] font-bold">Đà Nẵng</h1>
                        <p className="">
                        97 Hàm Nghi, Q.Thanh Khê | <a href="">Xem bản đồ</a> <br />
                        Điện thoại: 096.123.9797 - 097.123.9797
                        </p>
                        </div>
                    </div>


                </div>

                {/* Quy định-chính sách  */}
                <div className="text-left">
  <h1 className="mb-3 font-bold text-[#c69a39]">QUY ĐỊNH CHÍNH SÁCH</h1>
  <ul className="list-disc space-y-1">
  <li>
      <a href="">Chính sách bảo hành</a>
    </li>
    <li>
      <a href="">Chính sách vận chuyển</a>
    </li>
    <li>
      <a href="">Chính sách đổi trả hàng</a>
    </li>
    <li>
      <a href="">Chính sách bảo mật thông tin</a>
    </li>
    <li>
      <a href="">Hướng dẫn thanh toán</a>
    </li>
    <li>
      <a href="">Hướng dẫn mua hàng Online</a>
    </li>
    <li>
      <a href="">Dịch vụ Ship COD Toàn quốc</a>
    </li>
    <li>
      <a href="">Chính sách đại lý linh, phụ kiện</a>
    </li>
  </ul>
</div>








                {/* Đăng ký nhận bảng tin  */}
                <div className="text-left">
                    <h1 className="font-bold text-[18px] text-[#c69a39] mb-[10px]">Đăng ký nhận bảng tin</h1>
                    <div className="flex text-[13px] gap-[5px]">
                    <input className="w-[170px] h-[27px] rounded-[4px] border-[1px] border-black " type="text" name="" id="" placeholder="Nhập email của bạn..."/>
                    <button className="w-[55px] h-[27px] bg-[#c69a39] rounded-[4px]">Gửi</button>
                    </div>

                    <div className="gap-[20px] list-disc space-y-2">
                    <h1 className="mt-[12px] mb-[8px] font-bold text-[#c69a39] ">LIÊN KẾT</h1>
                    <p>Facebook</p>
                    <p>Youtube</p>
                    <p>OA Zalo</p>
                    <p>Instagram</p>
                    <p>Tiktok</p>
                    <p>Twiter</p>
                    </div>
                </div>


                {/* logo footer */}
                <div className="">
                    <img className="w-[160px] h-[70px] my-[90px]" src="https://tse4.mm.bing.net/th?id=OIP.KCfy7WKnTXvnUARUTNX_owHaCQ&pid=Api&P=0&h=180" alt="" />
                    <img className="w-[160px] h-[70px]" src="https://tse1.mm.bing.net/th?id=OIP.OgkhG3XEt7K3jwFSO7eMoAHaDt&pid=Api&P=0&h=180" alt="" />
                </div>

                </div>

            </div>
        </>
    )
}