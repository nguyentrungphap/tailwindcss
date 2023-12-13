import React from "react";

function Header() {
  return (
    <div className="bg-[#015f95]">
      <div className="container mx-auto flex justify-between">
        <div className="logo">
          <img
            className="w-[200px]"
            src="https://mauweb.monamedia.net/hanoicomputer/wp-content/uploads/2019/06/logo-final.png"
            alt=""
          />
        </div>
        <div className="user flex items-center">
          <a
            className="p-3 text-xl font-bold text-white  hover:text-red-500"
            href="#a"
          >
            Home
          </a>
          <a
            className="p-3 text-xl font-bold text-white  hover:text-red-500"
            href="#a"
          >
            Product
          </a>
          <a
            className="p-3 text-xl font-bold text-white  hover:text-red-500"
            href="#a"
          >
            About
          </a>
          <a
            className="p-3 text-xl font-bold text-white  hover:text-red-500"
            href="#a"
          >
            Contact
          </a>

          <a
            className="p-3 text-xl font-bold text-white rounded-3xl  hover:text-red-500 hover:bg-white "
            href="#a"
          >
            0909.099.999
          </a>
          <a
            className="p-3 text-xl font-bold text-white  hover:text-red-500"
            href="#a"
          >
            Login/Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
