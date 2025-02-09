import React, { useState } from "react";
import { FaRegSun } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <nav className="flex items-center">
        <div className="flex items-center">
          <div className="text-20 font-extrabold mr-2">NerdCard</div>
          <FaRegSun className="text-20 cursor-pointer text-orange-400" />
        </div>
        <ul className="ml-auto text-20 font-semibold">
          {openMenu ? (
            <FaWindowClose className="text-20" onClick={handleMenu} />
          ) : (
            <IoMdMenu className="text-20" onClick={handleMenu} />
          )}
          {openMenu && (
            <div className="absolute text-black bg-white p-5 right-8 flex flex-col items-center">
              <li>Features</li>
              <li>Menu</li>
              <li>Our Story</li>
              <li>Contact</li>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
}
