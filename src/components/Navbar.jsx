"use client";
import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
const Navbar = ({ show, setShow }) => {
  return (
    <div className="navbar bg-[#5C7457]">
      <div className="flex-none">
        <label
          htmlFor="my-drawer"
          onClick={() => setShow(!show)}
          className="btn btn-square btn-ghost text-2xl"
        >
          <span className={`${show && "text-[#E2DADA]"}`}>
            <BiMenuAltLeft />
          </span>
        </label>
      </div>
      <div className="flex-1"></div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <span className="text-3xl text-pink-700">
            {show && <FaUserAlt />}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
