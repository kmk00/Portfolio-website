import Link from "next/link";
import React from "react";

function ProjectItemSm({ title, demoUrl, codeUrl, projectUrl = null }) {
  return (
    <div className="relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r ">
      <h3 className="text-2xl text-black tracking-wider text-center pb-4 pt-2">
        {title}
      </h3>
      <div className="flex flex-col-reverse  items-center justify-center">
        {projectUrl !== null && (
          <div className="flex flex-col items-center gap-8">
            <Link href={projectUrl}>
              <button className="px-8 py-2  hover:scale-105 duration-200 ease-in-out">
                More info
              </button>
            </Link>
          </div>
        )}
        <div className="flex items-center justify-center gap-8 mb-6">
          <Link href={demoUrl}>
            <button className="px-8 py-2 mt-4  hover:scale-105 duration-200 ease-in-out">
              Demo
            </button>
          </Link>
          <Link href={codeUrl}>
            <button className="px-8 py-2 mt-4  hover:scale-105 duration-200 ease-in-out">
              Code
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectItemSm;
