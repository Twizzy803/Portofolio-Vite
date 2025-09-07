import React from "react";
import ProjectCard from "./ProjectCard";
import AfterGuilty from "../assets/images/afterguilty.png";
import BlackWooden from "../assets/images/blackwooden.png";

// Ini adalah data proyek kita. Anda bisa mengambil ini dari database Laravel nanti.
const projects = [
  {
    id: 1,
    imageUrl: AfterGuilty,
    title: "After Guilty",
    description: "Website brand local clothing",
  },
  {
    id: 2,
    imageUrl: BlackWooden,
    title: "Black Wooden",
    description: "Mobile App furniture store",
  },
];

function ProjectGrid() {
  return (
    <div className="container mx-auto p-10">
      {/* Ini adalah gridnya */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Kita 'map' atau ulangi data proyek untuk setiap kartu */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectGrid;
