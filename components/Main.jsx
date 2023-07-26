import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import Navbar from "./NavBar/Navbar";

const Main = () => {
  return (
    <div id="home" className="w-full lg:h-screen text-center  ">
      <Navbar />
      <div className="max-w-[1240px] w-full h-full mx-auto py-10 flex justify-center items-center ">
        <div>
          <h1 className="pt-20 pb-4 text-gray-700">
            Hi, I&apos;am <span className="text-[#5651e1]">Khaled</span>{" "}
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;am a passionate trainee web developer specializing in React,
            Tailwind CSS, GitHub, and Vercel. Skilled in creating engaging web
            applications with dynamic UIs. Proficient in Reacts component-based
            architecture, state management, and efficient routing. Experienced
            in utilizing Tailwind CSS for streamlined styling. Actively
            contributing on GitHub and deploying applications with Vercel.
            Seeking new opportunities and collaborations in web development.
            <span className="text-[#5651e1]">
              <Link href="/#contact">Lets connect!</Link>
            </span>
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/khaledHN/">
                <FaLinkedinIn className="text-[#5651e1] " />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/KhaledHN">
                <FaGithub className="text-[#5651e1] " />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJqXxhFbpRhxNlVPhLsSwWrlkqhLtXRKFkCtRfxVBnfFHZrnmZNmzdTStkWKskMNjXHPRhg">
                <AiOutlineMail className="text-[#5651e1] " />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://about.me/khaledhazem">
                <BsFillPersonLinesFill className="text-[#5651e1] " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
