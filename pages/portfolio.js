import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosRadioButtonOn } from "react-icons/io";

function portfolio() {
  return (
    <div className="w-full flex-col flex items-center">
      <div className="mt-20 w-full text-white bg-black/80 z-10 p-8">
        <h2 className="py-2">Japanese Practice - Alphabet</h2>
        <h3>React / Tailwind</h3>
      </div>
      <h2 className="p-4">Overview</h2>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl mt-4">
            This project is a portfolio website that display projects and
            skills. This project is a portfolio website that showcases projects
            and skills. The website allows users to view details of each
            project, access demos and source code, and contact the author by
            sending a message.
          </p>
          <Link href="https://pokecard-memory.netlify.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/kmk00/portfolio-website">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosRadioButtonOn className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosRadioButtonOn className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosRadioButtonOn className="pr-1" /> Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosRadioButtonOn className="pr-1" /> getform.io
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default portfolio;
