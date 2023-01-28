import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/assets/src.png";

const Studio = () => {
  return (
    <div id="Studio" className="w-full md:h-screen p-2 flex items-center py-5">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="big-font text-center uppercase text-xl tracking-widest text-[#cca454]">
            Ra Studio
          </p>
          <h2 className="py-4">Vision</h2>
          <p className="py-2 text-gray-600">
            As a freelance visual effects artist and editor, my ultimate goal is
            to create my own studio where I can bring my visions to life. I am
            driven by my passion for visual storytelling and a desire to
            constantly push the boundaries of what is possible. Inspired by the
            ancient Egyptian god Ra, who was considered the creator of all
            things, I strive to be a creator in my own right. Using the latest
            technology and techniques, I aim to bring the impossible to life on
            screen. From creating stunning visual effects to expertly crafting a
            story through editing, I am dedicated to making every project the
            best it can be. In my work, I am constantly seeking new challenges
            and opportunities to grow as an artist and to contribute to the
            advancement of the industry. I am always looking for ways to improve
            my skills and to stay at the forefront of the latest trends and
            developments in the field.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-100 ease-in duration-300">
          <Image src={Logo} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Studio;
