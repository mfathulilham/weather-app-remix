import { NavLink } from "@remix-run/react";

export default function Navbar() {
  return (
    <div className="d-flex justify-center flex p-3 font-mono shadow-md mb-2 bg-orange-600">
      <NavLink to="/home" className="text-xl font-medium p-3 mr-3 hover:font-bold text-white hover:text-gray-600">
        CekCuaca.com
      </NavLink>
      <NavLink to="/projects" className="text-xl font-medium p-3 mr-3 hover:font-bold text-white hover:text-gray-600">
        Maros, Sulawesi Selatan 28`C
      </NavLink>
      <NavLink to="/download" className="text-xl font-medium p-3 mr-3 hover:font-bold text-white hover:text-gray-600">
        Cari
      </NavLink>
    </div>
  )
}