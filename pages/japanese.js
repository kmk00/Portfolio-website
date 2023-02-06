import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosRadioButtonOn } from "react-icons/io";
import japaneseImg1 from "./../public/assets/projects/japanese/japanese1.png";
import japaneseImg2 from "./../public/assets/projects/japanese/japanese2.png";

function japanese() {
  return (
    <div className="w-full flex-col flex items-center">
      <div className="mt-20 w-full text-white bg-black/80 z-10 p-8">
        <h2 className="py-2">Japanese Practice - Alphabet</h2>
        <h3>React / Tailwind</h3>
      </div>
      <h2 className="p-4">Overview</h2>

      <div className="md:max-w-[1240px] w-full grid gap-4 xl:grid-cols-2 items-center justify-center">
        <div className="relative md:w-[600px] md:h-[300px] w-80 h-40 border-2 border-black shadow-gray-400 p-2">
          <Image src={japaneseImg1} fill alt="overwiev image 1"></Image>
        </div>
        <div className="relative md:w-[600px] md:h-[300px] w-80 h-40 border-2 border-black shadow-gray-400 ">
          <Image src={japaneseImg2} fill alt="overwiev image 2"></Image>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl mt-4">
            The purpose of the site is likely to help users improve their
            Japanese language skills through various exercises or resources.
            Exercises available on the site:
          </p>
          <ul className=" list-disc p-4 pl-8 cursor-default text-xl">
            <li>Practice Drawing Kana</li>
            <li>Guessing Kana</li>
            <li>Practice wrting Kana</li>
            <li>Practice writing the alphabet</li>
            <li>Listen to the sound of Kana</li>
          </ul>
          <Link href="https://kmk00-practice-japanese.netlify.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/kmk00/practice-japanese">
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
                <IoIosRadioButtonOn className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosRadioButtonOn className="pr-1" /> NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosRadioButtonOn className="pr-1" /> Context API
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

export default japanese;
