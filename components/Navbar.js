import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { useState } from "react";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav((prevNav) => !prevNav);

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]">
      <div className="flex items-center float-right w-full h-full px-8 2xl:px-16">
        <ul className="hidden md:flex gap-12 font-bold">
          <Link href="/">
            <li className="text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="/">
            <li className="text-sm uppercase hover:border-b">About</li>
          </Link>
          <Link href="/">
            <li className="text-sm uppercase hover:border-b">Skills</li>
          </Link>
          <Link href="/">
            <li className="text-sm uppercase hover:border-b">Projects</li>
          </Link>
          <Link href="/">
            <li className="text-sm uppercase hover:border-b">Contact</li>
          </Link>
        </ul>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />{" "}
        </div>
      </div>

      {/* MENU */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in-out duration-500"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[55%] sm:w-[75%] h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500 "
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
          }
        >
          <div className="flex w-full items-center">
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className=" py-4">Let's build something</p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="text-sm py-4  ">Home</li>
              </Link>
              <Link href="/">
                <li className="text-sm py-4 ">About</li>
              </Link>
              <Link href="/">
                <li className="text-sm py-4 ">Skills</li>
              </Link>
              <Link href="/">
                <li className="text-sm py-4 ">Projects</li>
              </Link>
              <Link href="/">
                <li className="text-sm py-4 ">Contact</li>
              </Link>
            </ul>
            <div className="pt-8 flex flex-col items-center">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-around my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillLinkedin />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
