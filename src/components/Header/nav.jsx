import React, { useEffect, useState } from "react";
import '../../App.css'
import { Link } from "react-scroll";
import { CiDark, CiLight } from "react-icons/ci";
import { MdLightMode, MdNightlight } from "react-icons/md";
import darkModeZustand from "../../zustand/storage";

function Header() {
 const { darkMode, toggleDarkMode } = darkModeZustand()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode])

  return (
    <div className="justify-center flex pt-5">
    <header
      className='flex w-[82%] items-center'
    >
      <div className="flex items-center w-full">
        <img src="images/img_logo_1_1.png" alt="primary logo" className="w-[15%] h-[25%]" />
        <h2 className="font-bold !text-blue-700 text-[27px]">
          Record
        </h2>
      </div>
      <div className="flex items-center md:w-full sm:flex-col mr-28 text-[18px] font-[600]">
        <div className="md:flex hidden">
          <ul className="flex gap-[42px]">
            <li>
              <Link to="home" spy={true} smooth={true} offset={-90} duration={500}>
                <h5 className="cursor-pointer text-black-900 dark:text-white">
                  Bosh sahifa
                </h5>
              </Link>
            </li>
            <li>
              <Link to="kurs" spy={true} smooth={true} offset={-90} duration={500}>
                <h5 className="cursor-pointer text-black-900 dark:text-white">
                  Kurslar
                </h5>
              </Link>
            </li>
            <li>
              <Link to="blog" spy={true} smooth={true} offset={-90} duration={500}>
                <h5 className="cursor-pointer text-black-900 dark:text-white">
                  Bloglar
                </h5>
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={-90} duration={500}>
                <h5 className="cursor-pointer text-black-900 dark:text-white">
                  Bog’lanish
                </h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div onClick={() => toggleDarkMode()} className={`h-[25%] w-[25%] rounded-[20px] cursor-pointer object-contain`}>
      {darkMode ? <MdLightMode className="text-[25px] dark:text-yellow-400" /> : <MdNightlight className="-rotate-45 text-[20px]" />}
    </div>    </header>
    </div>
  );
}

export default Header;
