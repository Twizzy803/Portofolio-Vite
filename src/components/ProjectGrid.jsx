import React from "react";
import ProjectCard from "./ProjectCard";
import AfterGuilty from "../assets/images/afterguilty.jpg";
import BlackWooden from "../assets/images/blackwooden.jpg";
import Indomas from "../assets/images/indomas.jpg";
import AgriIn from "../assets/images/agriin.jpg";

// Ini adalah data proyek kita. Anda bisa mengambil ini dari database Laravel nanti.
const projects = [
  {
    id: 1,
    imageUrl: AfterGuilty,
    title: "After Guilty",
    description: "Website brand local clothing",
    projectUrl: "https://github.com/Twizzy803/Afterguilty-WebsiteNative.git",
  },
  {
    id: 2,
    imageUrl: BlackWooden,
    title: "Black Wooden",
    description: "Mobile App furniture store",
    projectUrl: "https://github.com/Twizzy803/BlackWooden-MobileFlutter.git",
  },
  {
    id: 3,
    imageUrl: Indomas,
    title: "INDOMAS",
    description: "Website legal comunity",
    projectUrl: "https://github.com/Twizzy803/INDOMAS-BAKESBANGPOL.git",
  },
  {
    id: 4,
    imageUrl: AgriIn,
    title: "AgriIn",
    description: "Mobile Diagnosis Plant Disease",
    projectUrl: "https://github.com/Twizzy803/AgriIn-MobileFlutter.git",
  },
];

function ProjectGrid() {
  return (
    <div className="container relative mx-auto p-10">
      {/* Ini adalah gridnya */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {/* Kita 'map' atau ulangi data proyek untuk setiap kartu */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectGrid;
