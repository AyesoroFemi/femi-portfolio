import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/logo2.png";
import { Link } from "@remix-run/react";

function Nav() {
  return (
    <div className="bg-[#1C1C1C]">
      <nav className="flex items-center justify-between text-white pt-4 max-w-[1440px] mx-auto px-8">
        <div className="flex basis-1/3 justify-between">
          <div className="">
            <img
              className="rounded-full w-[50px] h-[50px]"
              src={Logo}
              alt="nav__logo"
            />
          </div>
          <div className="flex items-center space-x-1">
            <MdPhoneIphone size={24} color="#F9C221" />
            <p>+2349132717758</p>
          </div>
          <div className="flex items-center space-x-1">
            <HiOutlineMail size={24} color="#F9C221" />
            <p>femiayesoro@gmail.com</p>
          </div>
        </div>
        <div>
          <Link className="mr-6" to="/">
            About
          </Link>
          <Link className="mr-6" to="/">
            Project
          </Link>
          <Link className="mr-6" to="/">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
