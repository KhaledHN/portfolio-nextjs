import React from "react";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Navbar from "components/NavBar";

const Main = () => {
  return (
    <div id="home" className="w-full lg:h-screen text-center  ">
      <Navbar isLight={false}/>
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
            <span className="text-[#5651e1] underline ">
              <Link href="/#contact" className=" " >Lets connect!</Link>
            </span>
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
          <div className="rounded-3xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/khaledHN/">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-3xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/KhaledHN">
                <FaGithub className=" scale-110 " />
              </Link>
            </div>
            <div className="rounded-3xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.instagram.com/halittenbisigitti/"  >
                <FaInstagram className=" scale-125 " />
              </Link>
            </div>
            <div className="rounded-3xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.facebook.com/khaled.hazem.988926/">
                <FaFacebook className=" scale-110 " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
