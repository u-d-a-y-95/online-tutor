import React, { useState } from "react";
import { LinkData } from "../assets/data/dummydata";
import { NavLink } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-white py-8 text-black sticky z-50 shadow-md top-0 left-0 w-full">
        <div className="container flex justify-between items-center">
          <div className="logo flex items-center gap-6">
            <p className=" font-bold text-lg">
              Online <span className=" text-red-600">Tutor</span>
            </p>
          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className="flex items-center gap-6">
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-red-600 font-bold" : ""
                    }
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flex items-center gap-5">
            <button>
              <BiShoppingBag size={25} />
            </button>
            <button>Login</button>{" "}
            <button className="open-menu" onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
