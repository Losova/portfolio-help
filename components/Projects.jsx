import React from "react";
import blackhole from "public/assets/images/blackhole.png";
import ForestScene from "public/assets/images/forestwide.png";
import JapaneseShrine from "public/assets/images/Japan3.png";
import websitepicture from "public/assets/images/websitepicture.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="Projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="big-font text-center text-md tracking-widest uppercase text-[#cca454] py-3">
          Projects
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Black hole"
            backgroundImg={blackhole}
            builtin="Blender"
            projectUrl="/Blackhole"
          />
          <ProjectItem
            title="Forest Scene"
            backgroundImg={ForestScene}
            builtin="UE5"
            projectUrl="/ForestScene"
          />
          <ProjectItem
            title="Japanese Shrine"
            backgroundImg={JapaneseShrine}
            builtin="UE5"
            projectUrl="/JapaneseShrine"
          />
          <ProjectItem
            title="Portfolio Website"
            backgroundImg={websitepicture}
            builtin="next.js and tailwindcss"
            projectUrl="/PortfolioWebsite"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
