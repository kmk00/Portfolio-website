import React from "react";
import { ProjectItem } from "./ProjectItem";
import dashboardImg from "./../public/assets/projects/dashboard.png";
import japaneseImg from "./../public/assets/projects/japanese/japanese-alphabet-practice.png";
import memoryGameImg from "./../public/assets/projects/pokecard-memory.png";
import portfolioSiteImg from "./../public/assets/projects/portfolio-website.png";
import messageMeImg from "./../public/assets/projects/messageMe.png";
import weatherAppImg from "./../public/assets/projects/weatherApp.png";
import quizzImg from "./../public/assets/projects/trivia-quizz.png";

export const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase">Projects</p>
        <h2 className="py-4">What i've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Japanese Practice - Alphabet"
            backgroundImg={japaneseImg}
            projectUrl="/japanese"
          />
          <ProjectItem
            title="Pokecards - Memory Game"
            backgroundImg={memoryGameImg}
            projectUrl="/memoryGame"
          />
          <ProjectItem
            title="Portfolio Website"
            backgroundImg={portfolioSiteImg}
            projectUrl="/portfolio"
          />
          <ProjectItem
            title="User Dashboard Panel"
            backgroundImg={dashboardImg}
            projectUrl="/dashboard"
          />
          <ProjectItem
            title="Message Me - Text App"
            backgroundImg={messageMeImg}
            projectUrl="/messageme"
          />
          <ProjectItem
            title="Weather App"
            backgroundImg={weatherAppImg}
            projectUrl="/weatherapp"
          />
          <ProjectItem
            title="Trivia Quizz App"
            backgroundImg={quizzImg}
            projectUrl="/quizz"
          />
        </div>
      </div>
    </div>
  );
};
