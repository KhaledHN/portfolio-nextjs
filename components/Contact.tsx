import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
const Contact = () => {
  const [state, handleSubmit] = useForm("xeqbogvy");
  if (state.succeeded) {
    return (
      <div className="pb-5 px-10 flex justify-center">
        <p className="w-[100px] py-3 rounded-xl text-center bg-gradient-to-r from-[#5752e5] to-[#6f9dff]">
          {" "}
          Email sent{" "}
        </p>
      </div>
    );
  }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 ">
            <div className=" lg:p-3 h-full ">
              <div>
                <Image
                  className=" rounded-xl hover:scale-105 ease-in duration-300 "
                  src="/assets/contactpic.jpg"
                  alt="/"
                  width={500}
                  height={350}
                />
              </div>
              <div>
                <h2 className="py-2">Khaled Hazem</h2>
                <p>Front-End Developer</p>
                <p>
                  I am available for freelance or part-time positions. Contact
                  me and let`s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Contact With Me</p>
                <div className="flex items-center justify-between py-4">
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
              <Link href="https://www.instagram.com/halittenbisigitti/">
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

          {/* right */}
          <div className=" col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      id="name"
                      name="name"
                    />
                  </div>

                  <ValidationError
                    prefix="Named"
                    field="name"
                    errors={state.errors}
                  />

                  <div className=" flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      id="email"
                      type="email"
                      name="email"
                    />
                  </div>

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />

                  <div className=" flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows={10}
                      id="message"
                      name="message"
                    ></textarea>
                  </div>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <div className="w-full p-4 text-center text-gray-100 rounded-xl mt-4 bg-gradient-to-r from-[#5752e5] to-[#6f9dff] ">
                    <button type="submit" disabled={state.submitting}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full scale-200 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className=" h-5 w-5 text-[#5651e1]"
                scale={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
