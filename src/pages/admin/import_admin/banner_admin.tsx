import icon_dashboad from "../img/icon_dashboad.png";
import user from "../img/icons-user.png";
import cart from "../img/icons-cart.png";
import login from "../img/icons.login.png";
import { Link } from "react-router-dom";

export const Left_admin = () => {
    return(
        <div>
            <div className="ml-[20px]">
            <div className="mb-[29px] mt-[30px] ">
                <Link to={'/admin'}> 
            <p className="w-[40px] ml-[17px] mb-[25px] mt-[10px]">
            <img src="https://tse2.mm.bing.net/th?id=OIP.86yMn0E3bELRrnQII1TJOAHaHQ&pid=Api&P=0&h=180" alt="" />
            </p>
            </Link>
            <div className="flex bg-gray-100 w-[240px] h-[80px] pl-[25px] pt-[16px] gap-[10px] rounded-xl ">
                <img className="w-[40px] h-[40px] mt-[5px] rounded-3xl " src={user}/>
                <p className="pt-[12px] font-bold">Jaydon Frankie</p>
            </div>
            </div>


            <div className="flex mb-[9px] h-[50px] bg-blue-100 w-[240px] rounded-xl pt-[10px] pl-[32px] gap-[10px]">
            <img className="h-[24px] " src={icon_dashboad}/>
                <h1 className="hover:text-orange-600 ">Dashboard</h1>
            </div>

            <Link to={'/admin/user'}>
            <div className="flex mb-[9px] h-[50px] bg-blue-100 w-[240px] rounded-xl pt-[10px] pl-[32px] gap-[10px]">
            <img className="h-[26px]" src={user}/>
                <h1 className="hover:text-orange-600">User</h1>
               
            </div>
            </Link>
            
            <div className="flex mb-[9px] h-[50px] bg-blue-100 w-[240px] rounded-xl pt-[10px] pl-[32px] gap-[10px]">
            <img className="h-[24px]" src={cart}/>
                <h1 className="hover:text-orange-600">Cart</h1>
               
            </div>

            <div className="flex mb-[9px] h-[50px] bg-blue-100 w-[240px] rounded-xl pt-[10px] pl-[32px] gap-[10px]">
            <img className="h-[24px]" src={login}/>
                <h1 className="hover:text-orange-600 font-mono">Login</h1>
               
            </div>
            </div>
            
            </div>
    )
}