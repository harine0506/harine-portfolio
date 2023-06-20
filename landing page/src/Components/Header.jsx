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
    <div>
        <div> //TODO name
            <h2 className="text-[30px] font-bold">Harine
            <span className=" text-red-500"> G.S</span></h2>
        </div>
        <div> //TODO list components
            {menuList.map((item)=>(
                <div>
                    <h2>{item.title}</h2>
                </div>
            ))}
        </div>
    </div>
)
            }
export default Header