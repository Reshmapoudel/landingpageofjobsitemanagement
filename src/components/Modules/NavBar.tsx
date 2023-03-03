import Image from "next/image";
import React from "react";
import logo from "../../../public/assests/logo.svg";
import Button from "../widgets/Button";
import MenuIcon from "@mui/icons-material/Menu";
const NavBar = () => {
  return (
    <div className="flex items-center w-full mt-12  py-4 px-5 sm:px-14">
      <div className="w-32 sm:w-52">
        <Image src={logo} alt="record time logo" />
      </div>
      <div className="flex items-center gap-12 w-full justify-end">
        <ul className="sm:flex hidden md:gap-8 lg:gap-16 gap-4">
          <li className="text-lg font-bold text-primary-green">Home</li>
          <li className="text-lg font-medium text-dar-blue text-opacity-80">
            About us
          </li>
          <li className="text-lg font-medium text-dar-blue text-opacity-80">
            Features
          </li>
          <li className="text-lg font-medium text-dar-blue text-opacity-80">
            Blog
          </li>

          <li className="text-lg font-medium text-dar-blue text-opacity-80">
            FAQs
          </li>

          <li className="text-lg font-medium text-dar-blue text-opacity-80">
            Contact
          </li>
        </ul>
        <Button
          value="Get started"
          className=" border-primary-color rounded py-3 px-5 sm:px-9 sm:py-4 border-2 capitalize text-primary-color"
        />
        <div className="sm:hidden block">
          <MenuIcon className="text-primary-color" fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
