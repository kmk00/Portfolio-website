import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosRadioButtonOn } from "react-icons/io";
import pokecardImg1 from "./../public/assets/projects/pokecard/pokecard.png";
import pokecardImg2 from "./../public/assets/projects/pokecard/pokecard1.png";

function memoryGame() {
  return (
    <div className="w-full flex-col flex items-center">
      <div className="mt-20 w-full text-white bg-black/80 z-10 p-8">
        <h2 className="py-2">Memory Card Game</h2>
        <h3>React / Tailwind / Firebase</h3>
      </div>
      <h2 className="p-4">Overview</h2>

      <div className="md:max-w-[1240px] w-full grid gap-4 xl:grid-cols-2 items-center justify-center">
        <div className="relative md:w-[600px] md:h-[300px] w-80 h-40 border-2 border-black shadow-gray-400 shadow-lg p-2">
          <Image src={pokecardImg1} fill alt="overwiev image 1"></Image>
        </div>
        <div className="relative md:w-[600px] md:h-[300px] w-80 h-40 border-2 border-black shadow-gray-400 shadow-lg p-2">
          <Image src={pokecardImg2} fill alt="overwiev image 2"></Image>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl mt-4">
            Players must select every card in the level. If a player chooses the
            same card twice, the game ends immediately. After each pick, the
            cards in the current level shuffle their positions. The goal is to
            score as many points as possible.
          </p>
          <p className="text-xl mt-4">
            Players must log into their Google account to play the game. When a
            player loses, their best results are retrieved from the Firebase
            database and displayed on the page.
          </p>
          <Link href="https://pokecard-memory.netlify.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/kmk00/MemoryCardGame">
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
                <IoIosRadioButtonOn className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosRadioButtonOn className="pr-1" /> Vite
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosRadioButtonOn className="pr-1" /> PokeAPI
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

export default memoryGame;
