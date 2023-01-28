import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div id="home" className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div className="">
            <p className="uppercase text-lg tracking-widest text-black">
              My name is
            </p>
            <h1 className="py-4 text-gray-700">
              <span className="text-[#cca454]"> Abiola Batiste</span>
            </h1>
            <h1 className="py-1 text-black ">
              <TypeAnimation
                sequence={[
                  "Digital Animation Major", // Types 'One'
                  2500, // Waits 1s
                  "Enviroment Designer", // Deletes 'One' and types 'Two'
                  2500, // Waits 2s
                  "Photographer",
                  2500, // Types 'Three' without deleting 'Two'
                  () => {
                    console.log("Done typing!"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "0.5em" }}
              />
              <div className="text-center "></div>
            </h1>
            {/*spacers for the button downwards */}
            <div className="relative w-full pb-10"></div>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4 position-absolute bottom-0">
              <a
                href="https://www.linkedin.com/in/abiola-batiste-4827a9189/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://www.instagram.com/the_rastudios/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaInstagram />
                </div>
              </a>
              <Link href="/#contact">
                <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href="/resume">
                <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
