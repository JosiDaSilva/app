

import React from "react";
import { RiSearch2Line } from "react-icons/ri";

import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <header>
      
      {/* Title and search */}
      <div className="flex  md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">Autopartes Sol</h1>
          <p className="text-gray-500">Repuestos para el Automotor</p>
        </div>
        <div>
        <img
        src={logo}
        className="w-15 h-15  -mt-10 shadow-2xl rounded-full"
      />
      
        </div>
        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Buscar"
            />
          </div>
        </form>
      </div>
      {/* Tabs */}
      
    </header>
  );
};

export default Header;
