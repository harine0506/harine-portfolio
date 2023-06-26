import React,{ useState} from 'react'
import { HiBars3BottomRight,HiPause } from "react-icons/hi2";
import MenuOverlay from './MenuOverlay'
function Header() {
    const[toggle,setToggle]=useState(false)
    const menuList=[
        {
            id:1,
            title:'Home'
        },
        {
            id:1,
            title:'About'
        },
        {
            id:1,
            title:'service'
},
{
    id:1,
    title:'portfolio'
},
    ]


  return (
    <div className="flex item- justify-between">
        <div> 
            <h2 className="text-white font-bold">Harine
            <span className=" text-customRed"> G.S</span></h2>
        </div>
        <div className="hidden md:flex gap-4 "> 
            {menuList.map((item)=>(
                <div>
                    <h2 className="text-white hover:border-[1px] border-red-500 rounded-fulltext-[15px]">
                    {item.title}
                    </h2>
                </div>
            ))}
            <h2 className='text-white
            hover:border-[1px] border-red-500 rounded-full
            text-[15px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-red-500 to-red-800'>Hire Me</h2>
        </div>
        <div className='md:hidden'>
            {toggle?<HiBars3BottomRight onClick={()=>setToggle(!toggle)} className="text-white text-[22px] cursor-pointer"/>
            :<HiPause onClick={()=>setToggle(!toggle)} className="text-white text-[22px]"/>}
            {toggle?<MenuOverlay menuList={menuList}/>:null}
            
        </div>
    </div>
)
            }
export default Header