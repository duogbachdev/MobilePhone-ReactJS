import { Outlet } from 'react-router-dom'
import { Header_admin } from "./import_admin/header_import"
import { Left_admin } from "./import_admin/banner_admin"





export const Admin = () => {
    return(
        <div className='flex'>

        <div>
            <Left_admin/>
            </div>
            <div>
            <Header_admin/> 
         <Outlet/>
         </div>
          
       
       
        

        
        

     
        
        {/* <Outlet/> */}
   
        

        
   




        
        </div>
    )
}