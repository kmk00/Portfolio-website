import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

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
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">gfdssssss</p>
          <div className="flex items-center justify-between max-w-[430px] m-auto gap-6 py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiFillLinkedin size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiFillGithub size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiFillMail size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiFillLinkedin size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
