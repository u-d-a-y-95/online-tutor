import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white my-24">
      <div className="w-4/5 flex flex-col sm:flex-row justify-between m-auto">
        <div className="logo w-full sm:w-1/4">
          <p className=" font-bold text-lg">
            Online <span className=" text-red-600">Tutor</span>
          </p>
          <span className="text-[14px]">
            Great lesson ideas and lesson plans for ESL teachers! Educators can
            customize lesson plans to best.
          </span>
        </div>
        <div className="mt-12 sm:mt-0 sm:w-2/6 flex justify-between">
          <li>
            <h4 className="text-black text-sm font-semibold mb-5">Company</h4>
            <NavLink to="#" className=" text-[14px] block mb-2 ">
              Contact
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              Portfolio
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              Blog
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              Our team
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              Blog
            </NavLink>
          </li>
          <li>
            <h4 className="text-black text-sm font-semibold mb-5">Platform</h4>
            <NavLink to="#" className=" text-[14px] block mb-2">
              Shop
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              Pricing
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              Blog
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              Landing
            </NavLink>
          </li>
          <li>
            <h4 className="text-black text-sm font-semibold mb-5">Subscribe</h4>
            <NavLink to="#" className=" text-[14px] block mb-2">
              About us
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              Contact
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              Reviews
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              Services
            </NavLink>
          </li>
        </div>
      </div>
    </footer>
  );
};
