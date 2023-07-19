import React from "react";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center pt-20 pb-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I have always had a knack for technology and working with computers.
            In 2019 I started working with C# to make small games on Unity, then
            I started working with HTML & CSS to make some minor edits on a
            small website that I was operating. What I thought was just a few
            small edits turned into love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be, I was quickly drawn
            to learn more. I started learning JavaScript and was even more
            enthused with making websites interactive. I started freelancing for
            e-commerce companies on the Shopify platform. Now, I am spending my
            time building projects with React JS, Next JS, and learning new technologies.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">
            Check out some of my latest projects.
            
            </Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex item-center justify-center hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/aboutassets/ProfilePic.jpg"
            alt="/"
            width={443}
            height={316}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
