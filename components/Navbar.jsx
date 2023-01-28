import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import { VscClose } from "react-icons/vsc";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

{
  /* Navbar logo setups */
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/../public/assets/src.png"
            alt="/"
            width="125"
            height="100"
          />
        </Link>

        <div>
          {/* list for navbar */}

          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#Projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#Studio">
              <li className="ml-10 text-sm uppercase hover:border-b">Studio</li>
            </Link>
            <Link href="/#Contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <SlMenu size={26} />
          </div>
        </div>
      </div>
      {/* mini menu, hover color followed by menu color, logo size for menu and then close out box */}
      <div
        className={
          !nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#e2dfdf] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/../public/assets/src.png"
                  alt="/"
                  width="150"
                  height="50"
                />
              </Link>

              <div
                onClick={handleNav}
                className="rounded-md shadow-xl shadow-[#cca454] p-3 cursor-pointer"
              >
                <VscClose size={33} />
              </div>
            </div>
            {/* words for mini menu */}

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Explore</p>
            </div>
          </div>
          <ul className="uppercase">
            <Link href="/">
              <li onClick={() => setNav(!nav)} className="py-4 text-sm">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li onClick={() => setNav(!nav)} className="py-4 text-sm">
                About
              </li>
            </Link>
            <Link href="/#Projects">
              <li onClick={() => setNav(!nav)} className="py-4 text-sm">
                Projects
              </li>
            </Link>
            <Link href="/#Studio">
              <li onClick={() => setNav(!nav)} className="py-4 text-sm">
                Studio
              </li>
            </Link>
            <Link href="/#Contact">
              <li onClick={() => setNav(!nav)} className="py-4 text-sm">
                Contact
              </li>
            </Link>
            {/*let's connect icons and shit */}
          </ul>
          <div className="pt-40">
            <p className="uppercase tracking-widest text-[#000000]">
              Let's Connect
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease in duration-300">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease in duration-300">
                <FaInstagram />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease in duration-300">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease in duration-300">
                <BsFillPersonFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
