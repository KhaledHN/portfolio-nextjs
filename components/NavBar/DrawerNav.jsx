import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function DrawerNav(props) {
  const { nav, handleNav } = props;

  return (
    <div
      className={
        nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
      }
    >
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Link onClick={handleNav} href="">
              <Image
                src="/navbar assets/navLogo.png"
                alt=""
                width="100"
                height="50"
              />
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:[90%] py-4">
              Lets build something legendary together
            </p>
          </div>
          <div>
            <ul className="py-4 flex-col">
              <Link href="">
                <li onClick={handleNav} className="py-4 text-sm">
                  {" "}
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={handleNav} className="py-4 text-sm">
                  {" "}
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={handleNav} className="py-4 text-sm">
                  {" "}
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={handleNav} className="py-4 text-sm">
                  {" "}
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={handleNav} className="py-4 text-sm">
                  {" "}
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w[80%] ">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://www.linkedin.com/in/khaled-hazem-711527223/">
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://github.com/KhaledHN">
                    <FaGithub />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJqXxhFbpRhxNlVPhLsSwWrlkqhLtXRKFkCtRfxVBnfFHZrnmZNmzdTStkWKskMNjXHPRhg">
                    <AiOutlineMail />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJqXxhFbpRhxNlVPhLsSwWrlkqhLtXRKFkCtRfxVBnfFHZrnmZNmzdTStkWKskMNjXHPRhg">
                    <BsFillPersonLinesFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawerNav;
