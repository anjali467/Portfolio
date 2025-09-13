import React from "react";
import project1Img from "../../assets/picture1.png";  
import project2Img from "../../assets/picture2.jpg";  
import project3Img from "../../assets/picture3.jpg";  

// Reusable Project Card component
const ProjectCard = ({ img, title, main, demoLink, sourceLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate900 rounded-2xl">
      <img className="p-4 rounded-lg" src={img} alt={title} />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
          hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Demo
        </a>
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
          hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

// Main Projects section
const Projects = () => {
  return (
    <div id="projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          img={project1Img}
          title="Mood Tracker Website"
          main="This is a mood tracker website created using HTML, CSS and JS."
          demoLink="https://moodtrackerhub.netlify.app/"
          sourceLink=""
        />
        <ProjectCard
          img={project2Img}
          title="Portfolio Website"
          main="This is a Portfolio website created in React and used some component library."
          demoLink="https://your-demo-link2.com"
          sourceLink=""
        />
        <ProjectCard
          img={project3Img}
          title="Accessory Recommendation System"
          main="This is a Consultancy project for Adikriti Apparels, built in Python with ML libraries. It recommends accessories and applies them on uploaded user photos."
          demoLink="https://your-demo-link3.com"
          sourceLink="https://github.com/anjali467/Accessories-Recommendation-System/tree/main"
        />
      </div>
    </div>
  );
};

export default Projects;
