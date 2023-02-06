import React from "react";
import ProjectItemSm from "./ProjectItemSm";

export const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase">Projects</p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItemSm
            title="Japanese Practice - Alphabet"
            projectUrl="/japanese"
          />
          <ProjectItemSm
            title="Pokecards - Memory Game"
            projectUrl="/memoryGame"
          />
          <ProjectItemSm title="Portfolio Website" projectUrl="/portfolio" />
          <ProjectItemSm title="User Dashboard Panel" projectUrl="/dashboard" />
          <ProjectItemSm title="Message Me - Text App" />
          <ProjectItemSm title="Weather App" />
          <ProjectItemSm title="Trivia Quizz App" />
        </div>
      </div>
    </div>
  );
};
