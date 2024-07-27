"use client";

import Image from "next/image";
import Link from "next/link";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { useState } from "react";

/* 

    1- Next js 14 Tutorial - Sticky Navbar on Scroll With Tailwind CSS : 

        Link : https://www.youtube.com/watch?v=YHMyYgaaEm8

    2- Creating a Navigation Bar with Next.js & Tailwind CSS: A Step-by-Step Guide :

        Link : https://www.youtube.com/watch?v=8s4DK5PkRNQ



*/

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      {/* Desktop menu */}
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        {/* Left Side that will display the logo :  
            -> Remote Images in NextJs : 
            
                Link_1 : https://nextjs.org/docs/pages/building-your-application/optimizing/images#remote-images
                Link_2 : https://www.youtube.com/watch?v=7Ib2lfxkWvQ       
        */}
        <Link href="/">
          <Image
            src="https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Dr+Edwige_Logos/Data_Portfolio_Logo_3.jpg"
            alt="My Brand or Website Logo"
            //   width="205"
            //   height="75"
            width={80}
            height={80}
            className="cursor-pointer"
            priority
          />
        </Link>

        {/* Right Side  */}
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="ml-10 uppercase hover:border-b text-xl">
                {" "}
                About{" "}
              </li>
            </Link>

            <Link href="/">
              <li className="ml-10 uppercase hover:border-b text-xl">
                {" "}
                Projects{" "}
              </li>
            </Link>

            <Link href="/">
              <li className="ml-10 uppercase hover:border-b text-xl">
                {" "}
                Services{" "}
              </li>
            </Link>

            <Link href="/">
              <li className="ml-10 uppercase hover:border-b text-xl">
                {" "}
                Contact{" "}
              </li>
            </Link>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 w-[65%] p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer ">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className=" flex-col py-4">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                {" "}
                About{" "}
              </li>
            </Link>

            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                {" "}
                Projects{" "}
              </li>
            </Link>

            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                {" "}
                Services{" "}
              </li>
            </Link>

            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                {" "}
                Contact{" "}
              </li>
            </Link>
          </ul>
        </div>

        {/* Social Media Icons : */}
        <div className=" flex flex-row justify-around pt-10 items-center">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
          <AiOutlineLinkedin size={30} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
