import React from "react";
import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase">Projects</p>
        <h2 className="py-4">What i've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="" backgroundImg="" projectUrl="" />
          <ProjectItem title="" backgroundImg="" projectUrl="" />
          <ProjectItem title="" backgroundImg="" projectUrl="" />
          <ProjectItem title="" backgroundImg="" projectUrl="" />
          <ProjectItem title="" backgroundImg="" projectUrl="" />
        </div>
      </div>
    </div>
  );
};
