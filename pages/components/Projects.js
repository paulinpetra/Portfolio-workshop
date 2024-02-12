import React, { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project One",
      description: "Description for Project.",
      image: "https://picsum.photos/150?id=${1}",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Description for Project.",
      image: "https://picsum.photos/150?id=${2}",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Description for Project.",
      image: "https://picsum.photos/150?id=${3}",
    },
    {
      id: 4,
      title: "Project Four",
      description: "Description for Project.",
      image: "https://picsum.photos/150?id=${4}",
    },
    {
      id: 5,
      title: "Project Five",
      description: "Description for Project.",
      image: "https://picsum.photos/150?id=${5}",
    },
    {
      id: 6,
      title: "Project Six",
      description: "Description for Project.",
      image: "https://picsum.photos/150?id=${6}",
    },
  ]);

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold py-5">My Projects</h1>
        <p className="text-xl">A collection of my work.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto my-4"
          >
            <img className="w-full" src={project.image} alt={project.title} />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{project.title}</h2>
              <p className="text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;

//Improvements for later:
//Move the hardcoded data outside of the component (Separate Concerns)
//Rename Projects to ProjectGrid
//Create a separate ProjectCard component: const ProjectCard = ({ title, description, image })
//Destructure the project object inside the .map():
//{projects.map(({ id, title, description, image }) => (
//          <ProjectCard
//            key={id}
//            title={title}
//            description={description}
//            image={image}
//          />
