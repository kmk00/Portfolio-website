import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { IoMdDocument } from "react-icons/io";

export const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1290px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-2 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Łukasz</span>
          </h1>

          <div className="flex items-center justify-between max-w-[430px] m-auto gap-6 py-4">
            <a href="https://www.linkedin.com/in/%C5%82ukasz-kamiski-427955264/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiFillLinkedin size={25} />
              </div>
            </a>
            <a href="https://github.com/kmk00">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiFillGithub size={25} />
              </div>
            </a>
            <a href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiFillMail size={25} />
              </div>
            </a>
            <Link href="/pdf/CV.pdf">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <IoMdDocument size={25} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
