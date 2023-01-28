import React from "react";
import Image from "next/image";
import AboutImg from "public/assets/images/me.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-5">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="big-font text-center uppercase text-xl tracking-widest text-[#cca454]">
            About
          </p>
          <h2 className="py-4">Biography</h2>
          <p className="py-2 text-gray-600">
            I am a Junior Unreal Engine artist with a strong passion for
            learning Virtual Production and mixing 3D art in the real world. My
            goal is to learn these skills to escape the limitations of a
            constantly changing and dying world, and to give hope to future
            generations by creating immersive and engaging experiences that push
            the boundaries of what is possible. I am constantly seeking new
            challenges and opportunities to grow as an artist and to contribute
            to the advancement of the industry.
          </p>
          <p className="py-2 text-gray-600">
            In addition to my passion for Virtual Production, I am also a
            student at KSU, where I am constantly honing my skills in video
            editing and photography. I have a love for vintage looks and enjoy
            incorporating that aesthetic into my work. Whether it's through film
            or photographs, I am always looking for ways to capture the beauty
            and nostalgia of the past.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-100 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
