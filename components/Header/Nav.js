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
    link: "/home",
  },

  {
    name: "Blog",
    link: "/blog",
  },

  {
    name: "Contact",
    link: "/contact",
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
    <div className="container mx-auto px-8  max-w-[1215px]">
      <div className="flex justify-between dark:text-[#D1D5DB] dark:bg-[#030712] py-8 px-3">
        <div className="">
          <img src="/Logo.png" alt="logo" className="dark:z-10" />
        </div>

        <div className="flex gap-[24px] py-[0] items-center">
          <Link href={"/"} className="hidden lg:block">
            Home
          </Link>
          <Link href={"/Blog"} className="hidden lg:block">
            Blog
          </Link>
          <Link href={"/Contact"} className="hidden lg:block">
            Contact
          </Link>
          <div className="hidden lg:block">
            <IoSunnyOutline onClick={modeHandler} />
          </div>
          <div className="hidden lg:block">
            <label className="input input-bordered flex items-center gap-2 bg-gray-100">
              <input type="text" className="grow" placeholder="Search" />
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
            </label>
          </div>

          <div className="flex justify-between  gap-4 lg:hidden z-20 ">
            <button onClick={openMenu}>
              <IoMdMenu />
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
                    <img src="/Logo.png" alt="logo" className="" />
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
                    <IoSunnyOutline onClick={modeHandler} />
                  </div>
                  <button className=" py-2.5 bg-gray-900 text-gray-50 rounded-lg text-sm font-medium">
                    Download CV
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
