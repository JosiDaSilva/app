import React from "react";
import { NavLink } from "react-router-dom";
import { RiShoppingBagLine} from "react-icons/ri";

export default function ActiveLink ({ruta, nombre}){
const LinkActivo= "group-hover:bg-[#f07c04] p-4 flex justify-center rounded-xl text-[#f07c04] group-hover:text-white transition-colors"
const LinkInactivo = "hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors"
return (
    <div className="relative">
<NavLink to={"/src/components/shared/Car.jsx"}>Carrito</NavLink>
    </div>
)


}