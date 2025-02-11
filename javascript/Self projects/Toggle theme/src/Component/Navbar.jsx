import React from "react";
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = ({ toggle, handleToggle }) => {
  return (
    <div className="flex text-white border border-white justify-between items-center p-10 h-20">
      <div className="logo text-lg font-bold">Toggle Theme</div>
      <div className="right flex justify-between items-center gap-10">
        <div
          className="themeflex items-center justify-center cursor-pointer"
          onClick={handleToggle}
        >
          {toggle ? (
            <MdOutlineWbSunny className="h-8 w-auto hover:scale-110 hover:rotate-180 transition-all duration-300" />
          ) : (
            <LuMoon className="h-8 w-auto hover:scale-110 hover:rotate-180 transition-all duration-300" />
          )}
        </div>
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
