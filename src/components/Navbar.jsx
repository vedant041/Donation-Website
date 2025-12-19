import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const baseStyle = "relative text-sm text-gray-700 hover:text-emerald-700 transition flex items-center h-[40px]";
  const activeStyle = "relative text-sm text-emerald-700 font-semibold flex items-center h-[40px] after:absolute after:left-0 after:-bottom-[1px] after:h-[2px] after:w-full after:bg-emerald-700";

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center">
        <div className="flex items-center gap-2 font-semibold flex-1">
          <span className="text-2xl">🫶</span>
          <span className="text-[16px]">Charitifx</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>About</NavLink>
          <NavLink to="/donation" className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>Donation</NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>Blog</NavLink>
          <NavLink to="/pages" className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>Pages</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>Contact</NavLink>
        </div>

        <div className="flex items-center gap-3 flex-1 justify-end">
          {showSearch && ( <input type="text" placeholder="Search..."  className="hidden sm:block w-44 px-3 py-2 text-sm border rounded-full focus:outline-none focus:border-emerald-600" /> )}
          <button onClick={() => setShowSearch(!showSearch)} className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center" >
            🔍
          </button>
          <NavLink to="/login" className="hidden sm:block px-5 py-2 text-sm rounded-full bg-emerald-600 text-white">
            Log in
          </NavLink>

          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl ml-1" >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-5">
          <div className="flex flex-col gap-4">
            <NavLink to="/" onClick={() => setOpen(false)} className={baseStyle}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={baseStyle}>About</NavLink>
            <NavLink to="/donation" onClick={() => setOpen(false)} className={baseStyle}>Donation</NavLink>
            <NavLink to="/blog" onClick={() => setOpen(false)} className={baseStyle}>Blog</NavLink>
            <NavLink to="/pages" onClick={() => setOpen(false)} className={baseStyle}>Pages</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={baseStyle}>Contact</NavLink>

            <NavLink to="/login" onClick={() => setOpen(false)} className="mt-3 block w-full text-center py-3 rounded-full bg-emerald-600 text-white">
              Log in
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

