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
            demoUrl="https://kmk00-practice-japanese.netlify.app/"
            codeUrl="https://github.com/kmk00/practice-japanese"
          />
          <ProjectItemSm
            title="Pokecards - Memory Game"
            projectUrl="/memoryGame"
            demoUrl="https://pokecard-memory.netlify.app/"
            codeUrl="https://github.com/kmk00/MemoryCardGame"
          />
          <ProjectItemSm
            title="Portfolio Website"
            projectUrl="/portfolio"
            demoUrl="/"
            codeUrl="https://github.com/kmk00/portfolio-website"
          />
          <ProjectItemSm
            title="User Dashboard Panel"
            projectUrl="/dashboard"
            demoUrl="https://kmk00-user-dashboard.netlify.app/"
            codeUrl="https://github.com/kmk00/userdashboard"
          />
          <ProjectItemSm
            title="Message Me - Text App"
            demoUrl="https://kmk00-message-me.netlify.app/"
            codeUrl="https://github.com/kmk00/messageMe"
          />
          <ProjectItemSm
            title="Weather App"
            demoUrl="https://kmk00-weatherapp.netlify.app/"
            codeUrl="https://github.com/kmk00/WeatherAppv2"
          />
          <ProjectItemSm
            title="Trivia Quizz App"
            demoUrl="https://randomquizzz.netlify.app/"
            codeUrl="https://github.com/kmk00/quizzz"
          />
        </div>
      </div>
    </div>
  );
};
