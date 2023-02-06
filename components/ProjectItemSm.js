import Link from "next/link";
import React from "react";

function ProjectItemSm({ title, projectUrl = null }) {
  return (
    <div className="relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r ">
      <h3 className="text-2xl text-black tracking-wider text-center pb-4 pt-2">
        {title}
      </h3>
      {projectUrl !== null ? (
        <div className="flex flex-col items-center">
          <Link href={projectUrl}>
            <button className="px-8 py-2">More info</button>
          </Link>
          <div className="flex items-center justify-center gap-4">
            <Link href="https://kmk00-user-dashboard.netlify.app/">
              <button className="px-8 py-2 mt-4 ">Demo</button>
            </Link>
            <Link href="https://github.com/kmk00/userdashboard">
              <button className="px-8 py-2 mt-4">Code</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="">
          <Link href="https://kmk00-user-dashboard.netlify.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/kmk00/userdashboard">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProjectItemSm;
