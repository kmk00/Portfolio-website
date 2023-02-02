import React from "react";
import { ProjectItem } from "./ProjectItem";
import dashboardImg from "./../public/assets/projects/dashboard.png";

export const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase">Projects</p>
        <h2 className="py-4">What i've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="React Js Project"
            backgroundImg={dashboardImg}
            projectUrl="/"
            desc="Description"
          />
          <ProjectItem
            title="React Js Project"
            backgroundImg={dashboardImg}
            projectUrl="/"
            desc="Description"
          />
          <ProjectItem
            title="React Js Project"
            backgroundImg={dashboardImg}
            projectUrl="/"
            desc="Description"
          />
          <ProjectItem
            title="React Js Project"
            backgroundImg={dashboardImg}
            projectUrl="/"
            desc="Description"
          />
          <ProjectItem
            title="React Js Project"
            backgroundImg=""
            projectUrl="/"
            desc="Description"
          />
        </div>
      </div>
    </div>
  );
};
