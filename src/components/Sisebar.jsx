import React, { useState } from "react";
import logo from "./assets/Vector.png";
import Navbar from '../components/Nav'

function Sisebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">

      <div>
      <button className="sm:block md:hidden p-4" onClick={ ()=> setMenuOpen(!menuOpen)}>
        <span className="material-symbols-outlined">
          {menuOpen ? 'close':'menu'}
        </span>

      </button>

       <div className={`fixed top-0 left-0 bg-white shadow-lg h-full w-60 p-5 pt-10 transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 md:block`}>
       
       <div className="flex justify-between items-center">
       <img className="w-13 h-10" src={logo} alt="logo" />
       <button className="sm:block md:hidden text-gray-500 " onClick={ ()=> setMenuOpen(false)}>
        <span className="material-symbols-outlined">
          close
        </span>
       </button>
       </div>

      <div className="pt-10  ">
        <ul>
          <li className=" p-5 gap-3 hover:bg-gray-200 rounded flex ">
            {" "}
            <span class="material-symbols-outlined ">
              swap_driving_apps_wheel
            </span>
            Dashboard
          </li>
          <li className="p-5 gap-3 hover:bg-gray-200 rounded flex">
            {" "}
            <span class="material-symbols-outlined">dictionary</span> Student
          </li>
          <li className="p-5 gap-3 hover:bg-gray-200 rounded flex">
            {" "}
            <span class="material-symbols-outlined">developer_guide</span>
            Chapter
          </li>
          <li className="p-5 gap-3 hover:bg-gray-200 rounded flex">
            {" "}
            <span class="material-symbols-outlined">help</span>Help
          </li>
          <li className="p-5 gap-3 hover:bg-gray-200 rounded flex">
            {" "}
            <span class="material-symbols-outlined">donut_small</span>Report
          </li>
          <li className="p-5 gap-3 hover:bg-gray-200 rounded flex">
            {" "}
            <span class="material-symbols-outlined">settings</span>Setting
          </li>
        </ul>
      </div>
    </div>
      </div>
      <div>
        <Navbar/>
      </div>
    </div>

   
  );
}

export default Sisebar;
