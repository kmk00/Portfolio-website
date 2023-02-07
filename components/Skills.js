import React from "react";
import { Technology } from "./Technology";

export const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="pt-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Technology image="/../assets/html.svg" name="HTML" />
          <Technology image="/../assets/css.svg" name="CSS" />
          <Technology image="/../assets/javascript.svg" name="JAVASCRIPT" />
          <Technology image="/../assets/react.svg" name="REACT" />
          <Technology image="/../assets/tailwind.svg" name="TAILWINDCSS" />
          <Technology image="/../assets/git.svg" name="GIT" />
          <Technology image="/../assets/github.svg" name="GITHUB" />
          <Technology image="/../assets/photoshop.svg" name="PHOTOSHOP" />
        </div>
        <h2 className="mt-8 pt-4">What I Want to Learn in 2023</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Technology image="/../assets/nextjs.svg" name="NEXT JS" />
          <Technology image="/../assets/typescript.svg" name="TYPESCRIPT" />
          <Technology image="/../assets/firebase.svg" name="FIREBASE" />
        </div>
      </div>
    </div>
  );
};
