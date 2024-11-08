"use client";
import Script from 'next/script'

import { CiSearch } from "react-icons/ci";

import { useState } from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
// import { Skills } from "./Skills/Skill";

const navigation = [
  {
    name: "Home",
    link: "/",
  },

  {
    name: "Blog",
    link: "/Blog",
  },

  {
    name: "Contact",
    link: "/Contact",
  },
];

export function Nav() {
  // let [open, isDark] = useState(true);
  // let [dark, setOpen] = useState(false);

  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);

  function modeHandler() {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  }

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
    console.log("working");
  }

  return (
    <div className="container mx-auto px-8 text-black  dark:text-white dark:bg-[#030712]">
      <div className="flex justify-between  rounded py-8">
        <div className="">
          <img
            src="/Logo.png"
            alt="logo"
            className="dark:bg-white md:w-full rounded-lg px-1 py-1"
          />
        </div>

        <div className="flex gap-[24px] py-[0] items-center">
          <Link href={"/"} className="hidden text-black lg:block dark:text-white">
            Home
          </Link>
          <Link href={"/Blog"} className="text-black hidden lg:block dark:text-white">
            Blog
          </Link>
          <Link href={"/Contact"} className="text-black hidden lg:block dark:text-white">
            Contact
          </Link>
          <div className="hidden lg:block">
            <label className="grid cursor-pointer place-items-center">
              <input
                onClick={modeHandler}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          <div className="hidden lg:block">
            <form action='/Search' className="input input-bordered flex items-center gap-2 bg-gray-100">
              <input
                name='q'
                type="text"
                className="grow text-black dark:text-black"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </form>
          </div>

          <div className="flex justify-between  gap-4 lg:hidden z-20 dark:text-white">
            <button onClick={openMenu}>
              <IoMdMenu size={35} />
            </button>

            <div>
              <div
                className={`fixed transition-all inset-0 bg-slate-500/90 ${
                  open ? "block" : "hidden"
                }`}
                onClick={closeMenu}
              ></div>
              <div
                className={`fixed dark:bg-[#030712] dark:text-[#D1D5DB] top-0 bottom-0 transition-all w-64 text-black bg-white shadow-lg ${
                  open ? "right-0" : "-right-full"
                }`}
              >
                <div className="flex items-center justify-between p-4 ">
                  <div className="text-2xl font-bold ">
                    <img
                      src="/Logo.png"
                      alt="logo"
                      className="bg-white rounded-lg px-1 py-1"
                    />
                  </div>
                  <button onClick={closeMenu}>
                    <IoMdClose />
                  </button>
                </div>
                <hr className="mb-4" />

                <div className="flex flex-col ml-4 gap-4 ">
                  {navigation.map((nav) => (
                    <Link
                      key={nav.link}
                      href={nav.link}
                      className="text-gray-600 font-medium text-base"
                    >
                      {nav.name}
                    </Link>
                  ))}
                </div>
                <hr className="my-4" />
                <div className="flex flex-col gap-4 mx-3 text-gray-600 font-medium text-base ">
                  <div className="flex items-center justify-between mr-3">
                    <div>Switch Theme</div>
                    <div className='bg-white dark:bg-black'>
                      <IoSunnyOutline className='bg-white dark:bg-black' onClick={modeHandler} />
                    </div>
                  </div>
                  <button className=" py-2.5 bg-gray-900 dark:bg-white dark:text-gray-500 text-gray-50 rounded-lg text-sm font-medium">
                    <p className="font-normal text-xl">
                      Download
                      <span className="font-extrabold text-xl">Blog</span>
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
