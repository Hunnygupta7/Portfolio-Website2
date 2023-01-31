import React from "react";
import ApkiChat from "../assets/projects/ApkiChat.png";
import InstagramClone from "../assets/projects/InstagramClone.png";
import python_projects from "../assets/projects/python_projects.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      src: InstagramClone,
      link: "https://github.com/Hunnygupta7/Instagram-Clone",
    },
    {
      id: 2,
      src: ApkiChat,
      link: "https://github.com/Hunnygupta7/ChatApplication",
    },
    {
      id: 3,
      src: python_projects,
      link: "https://github.com/Hunnygupta7/Mini-Python-Projects",
    },

  ];

  return (
    <div

    
      name="projects"
      
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
      style={{ top: "-50px" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105 text-xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

