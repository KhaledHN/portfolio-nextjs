import React from "react";
import Link from "next/link";
import Image from "next/image";
import TraveL from "../projects assets/Travelious.jpeg";
import { RiRadioButtonFill } from "react-icons/ri";
import Navbar from "@/components/NavBar/Navbar";

const Travel = () => {
  return (
    <div className="w-full ">
      <Navbar isDark={true} />
      <div className="w-sceen h-[30vh] lg:h-[40vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={TraveL}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2">Travelious</h2>
          <h3>React | Typescript | Tailwind</h3>
        </div>
      </div>

      <div className="mac-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gab-8 pt-8 ">
        <div className="col-span-4">
          <p className="p-4 text-[#5651e5] ">Project</p>
          <h2 className=" p-4">Overview</h2>
          <p className="p-4">
            Travelious is a comprehensive travel platform that uses advanced
            technology and personalized recommendations to simplify travel
            planning, offering a seamless booking experience and extensive
            destination information. It provides tailored suggestions based on
            user preferences, offers a wide range of travel resources, and
            fosters a community of travelers. Overall, Travelious aims to
            enhance the travel experience and empower individuals to embark on
            memorable journeys.
          </p>
          <div className="pl-4">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
            <button className="px-8 py-2 mt-4">Code</button>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-3 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>

              <p className="text-gray-600 py-3 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>

              <p className="text-gray-600 py-3 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>

              <p className="text-gray-600 py-3 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Open Graph
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className=" px-4 underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Travel;
