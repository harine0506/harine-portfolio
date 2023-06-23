import React from 'react'

function Header() {
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
        <div className="flex gap-7 "> 
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
    </div>
)
            }
export default Header