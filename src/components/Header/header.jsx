import React, { useEffect } from "react";
import Header from "./nav";
import darkModeZustand from "../../zustand/storage";

function Headers() {
  const {darkMode} =darkModeZustand()


  return (
    <div id="home">
    <div className="bg-[rgb(237,248,255)] dark:bg-[#2f607f]">
      <Header />
      <div className="flex justify-between">
      <div className={`${darkMode ? "header" : "headres"} h-[300px] sm:h-[600px]`}>
      <div className="flex justify-center pr-[80px] pt-[4%]">
        <div className="w-[40%]" data-aos="fade-right">
          <h1 className="text-blue-600 ml-7 sm:ml-0 dark:text-gray-200 font-[700] text-[100%] sm:text-[200%] md:text-[300%]">
            Xalqaro&nbsp;darajadagi&nbsp;IT<br /> companiyaga <br /> xush kelibsizlar
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-[400] text-[65%] ml-7 sm:ml-0 sm:text-[100%]">Sizni ko’rib turganimizdan <br /> juda ham xursandmiz!</p>
        </div>
        <div className="flex w-[full] sm:w-[35%] items-center"  data-aos="fade-left">
        <div className="sm:w-[100%]">
            <img src="/public/images/img_img_boy.png" className="w-full" alt="logo" />
        </div>
        <div>
            <img src="/public/images/Group boys icons.png" className="w-[200px] sm:w-[80%]" alt="logo" />
        </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Headers;
