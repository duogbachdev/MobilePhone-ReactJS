import user from "../admin/img/icons-user.png";

export const User_product = () => {
    return (
        <div className="flex ml-[130px]">
            <div className="ml-[55px] mt-[30px] ">
                <div className="flex justify-between mb-[40px]">
                    <h1 className="text-balck font-serif text-[30px]">User</h1>
                    <button className="bg-slate-800 w-[100px] h-[35px] rounded-[5px] text-white font-serif">+New User</button>
                </div>

                <div className="bg-slate-100 w-[1152px] h-[96px] flex items-center rounded-t-[8px]">
                    <input className="w-[249px] h-[56px] items-center ml-[23px] border border-gray-300 rounded-[4px] pl-2" type="text" placeholder="Search user..." />
                </div>
                <div className="">

                    <div className="grid grid-cols-4 pl-[25px] bg-slate-400 h-[57px] items-center hover:bg-slate-300">
                        <div className="flex gap-[10px]">
                            <input type="checkbox" />
                            <p className="font-bold">Name</p>
                        </div>
                        <p>Company</p>
                        <p>Role</p>
                        <p>Verified</p>
                    </div>

                    <div className="grid grid-cols-4 pl-[25px] bg-slate-100 h-[57px] items-center hover:bg-slate-300">

                        <div className="flex gap-[10px]">
                            <input type="checkbox" />
                            <img className="w-[29px] h-[22px] mt-[5px]" src={user} />
                            <p>Name</p>
                        </div>
                        <p>Company</p>
                        <p>Role</p>
                        <p>Verified</p>
                    </div>


                    <div className="grid grid-cols-4 pl-[25px] bg-slate-100 h-[57px] items-center hover:bg-slate-300">
                        <div className="flex gap-[10px]">
                            <input type="checkbox" />
                            <img className="w-[29px] h-[22px] mt-[5px]" src={user} />
                            <p>Name</p>
                        </div>
                        <p>Company</p>
                        <p>Role</p>
                        <p>Verified</p>
                    </div>

                    <div className="grid grid-cols-4 pl-[25px] bg-slate-100 h-[57px] items-center hover:bg-slate-300">
                        <div className="flex gap-[10px]">
                            <input type="checkbox" />
                            <img className="w-[29px] h-[22px] mt-[5px]" src={user} />
                            <p>Name</p>
                        </div>
                        <p>Company</p>
                        <p>Role</p>
                        <p>Verified</p>
                    </div>

                    <div className="grid grid-cols-4 pl-[25px] bg-slate-100 h-[57px] items-center hover:bg-slate-300">
                        <div className="flex gap-[10px]">
                            <input type="checkbox" />
                            <img className="w-[29px] h-[22px] mt-[5px]" src={user} />
                            <p>Name</p>
                        </div>
                        <p>Company</p>
                        <p>Role</p>
                        <p>Verified</p>
                    </div>
                </div>


                {/* cần xem lại chia 4  */}




            </div>
        </div>
    )
}