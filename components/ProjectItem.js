import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProjectItem = () => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src="/assets/css.svg"
        width={300}
        height={300}
        alt="/"
      />
      <div className="hidden gorup-hover:flex absolute top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          Title
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React Js Project</p>
        <Link href="/">
          <p className="text-center pt-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};