import React from 'react'
import './SideNavbar.css'
import { NavLink } from 'react-router-dom'
import { SlPin } from "react-icons/sl";
import { MdNoteAlt } from "react-icons/md";
import { ImBin } from "react-icons/im";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

const SideNavbar = () => {


// ========== state
const [toggleValue, setToggleValue] = useState(false);
// ========== saving the mode when user  visitor
useEffect(() => {
  const savedMode = localStorage.getItem("mode") || "light";
  localStorage.setItem("mode", savedMode);
  document
    .querySelector("html")
    .classList.toggle("dark", savedMode === "dark");
}, []);
// ========== changing the mode on toggle
const handelMode = () => {
  if (localStorage.getItem("mode") == "light") {
    localStorage.setItem("mode", "dark");
    document.querySelector("html").classList.add("dark");
    setToggleValue(!toggleValue);
  } else {
    localStorage.setItem("mode", "light");
    document.querySelector("html").classList.remove("dark");
    setToggleValue(!toggleValue);
  }
};



  return (
    <nav className='Sidenav dark:bg-black'>

        <div className="sidemain">
            <div className="Side_text">
            <h1 className='all_notes'>All Notes</h1>
            </div>
        </div>

        <ul>
            <li>


            <NavLink
            to="/"
            className={({ isActive }) => [isActive ? "bg-[#ffa89b] dark:bg-[#cc7e72] p-5 w-full flex gap-2  text-[18px] font-serif font-semibold text-black  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] dark:text-black"
                
                
                : " p-5 w-full flex gap-2 text-[17px] font-serif font-semibold text-gray-500 dark:text-slate-300"
                ,
            
            ].join(" ")
  }
              >
            <FaHome className='text-[26px] dark:text-gray-50 text-yellow-400'/> Home
             </NavLink>






        
             <NavLink
            to="/allnote"
            className={({ isActive }) => [isActive ? "bg-[#ffa89b] dark:bg-[#cc7e72] p-5 w-full flex gap-2  text-[18px] font-serif font-semibold text-black  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] dark:text-black"
                
                
                : " p-5 w-full flex gap-2 text-[17px] font-serif font-semibold text-gray-500 dark:text-slate-300"
                ,
            
            ].join(" ")
  }
              >
            <MdNoteAlt className='text-[27px] dark:text-yellow-500 text-gray-900'/> All Notes
             </NavLink>


             <NavLink
            to="/pin"
            className={({ isActive }) => [isActive ? "bg-[#ffa89b] dark:bg-[#cc7e72] p-5 w-full flex gap-2 text-[18px] font-serif font-semibold text-black  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] dark:text-black"
                
                
                : " p-5 w-full flex gap-2 text-[17px] font-serif font-semibold text-gray-500  dark:text-slate-300"
                ,
            
            ].join(" ")
  }
              >
             <SlPin className='text-[24px] dark:text-green-500 text-green-700'/>  Pin Notes
             </NavLink>



             <NavLink
            to="/bin"
            className={({ isActive }) => [isActive ? "bg-[#ffa89b] dark:bg-[#cc7e72] p-5 w-full  flex gap-2 text-[18px] font-serif font-semibold text-black  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] dark:text-black"
                
                
                : " p-5 w-full flex gap-2 text-[17px] font-serif font-semibold text-gray-500  dark:text-slate-300"
                ,
            
            ].join(" ")
  }
              >
             <ImBin className='text-[21px] text-red-500' />  Bin
             </NavLink>

            </li>
        </ul>

        
        
        {localStorage.getItem("mode") == "light" ? (
          <button
            className="py-1 px-3 mt-16 ml-12 font-bold bg-black text-xl text-white rounded-sm"
            onClick={handelMode}
          >
            Dark
          </button>
        ) : (
          <button
            className="py-1 px-3 mt-16 ml-12 font-bold bg-yellow-200 text-bleck rounded-sm text-xl"
            onClick={handelMode}
          >
            Light
          </button>
        )}



    </nav>
  )
}

export default SideNavbar