/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I'am <span className="text-[#5651e1]">Khaled</span>{" "}
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'am a passionate trainee web developer specializing in React,
            Tailwind CSS, GitHub, and Vercel. Skilled in creating engaging web
            applications with dynamic UIs. Proficient in Reacts component-based
            architecture, state management, and efficient routing. Experienced
            in utilizing Tailwind CSS for streamlined styling. Actively
            contributing on GitHub and deploying applications with Vercel.
            Seeking new opportunities and collaborations in web development.
            <span className="text-[#5651e1]">Lets connect!</span>
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/khaled-hazem-711527223/">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/KhaledHN">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJqXxhFbpRhxNlVPhLsSwWrlkqhLtXRKFkCtRfxVBnfFHZrnmZNmzdTStkWKskMNjXHPRhg">
                <AiOutlineMail />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://about.me/khaledhazem">
                <BsFillPersonLinesFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
