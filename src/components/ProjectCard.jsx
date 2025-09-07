import React from "react";

// Komponen ini menerima data satu proyek sebagai 'props'
function ProjectCard({ project }) {
  return (
    // 'group' adalah kunci untuk efek hover
    <div className="group relative aspect-square overflow-hidden rounded-lg">
      {/* Gambar Proyek */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      {/* Overlay yang muncul saat hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-tertinary opacity-0 transiton-opacity duration-300 group-hover:opacity-50">
        {/* ikon kaca pembesar */}
        <i className="fa-solid fa-magnifying-glass text-4xl mb-4"></i>
        {/* judul proyek */}
        <h3 className="text-xl font-bold uppercase tracking-wider">
          {project.title}
        </h3>

        {/* Deskripsi singkat */}
        <p className="mt-2 text-sm">{project.description}</p>
      </div>
    </div>
  );
}
export default ProjectCard;
