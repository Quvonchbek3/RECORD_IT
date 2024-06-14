import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function Footer() {

  useEffect(() => {
    Aos.init()
  })

  return (
    <footer
      className={`flex self-stretch justify-center items-center mt-[83px] pt-[42px] pb-[55px] md:py-5 bg-blue-200 dark:bg-[#2f607f] dark:text-gray-200`}
    >
      <div className="flex md:p-5">
        <div className="md:flex items-center gap-6 ml-10 sm:ml-10">
          <div data-aos="fade-right" className="flex w-[31%] flex-col gap-2.5">
            <div className="flex w-[68%] items-center md:w-full">
              <img src="images/img_logo_1_1.png" alt="logo image" className="w-[25%]" />
              <h3 className="text-blue-900 dark:text-gray-100 text-[30px] font-[700]">
                Record
              </h3>
            </div>
            <div className=" flex flex-col gap-5 md:ml-0">
              <p className="leading-[155%] w-[250px]">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat mauris non dictumst in leo etiam.
                Proin iaculis arcu iaculis egestas.
              </p>
              <div className="flex">
                <div className="flex flex-col items-start gap-5">
                  <h3 className="text-[25px] font-[700]">
                    Bizga obuna bo’ling
                  </h3>
                  <div className="flex gap-4">
                    <button className="w-[48px] h-[48px] bg-white flex items-center justify-center rounded-xl">
                      <img src="images/img_facebook.svg" />
                    </button>
                    <button className="w-[48px] h-[48px] bg-white flex items-center justify-center rounded-xl">
                      <img src="images/img_trash.svg" />
                    </button>
                    <button className="w-[48px] h-[48px] bg-white flex items-center justify-center rounded-xl">
                      <img src="images/img_info.svg" />
                    </button>
                    <button className="w-[48px] h-[48px] bg-white flex items-center justify-center rounded-xl">
                      <img src="images/img_link.svg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="relative mt-5 md:flex-none">
            <div className="flex">
              <div className=" grid grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col gap-[23px] ">
                  <h3 className="text-[28px] font-[700]">
                    Havolalar
                  </h3>
                  <ul className="flex flex-col gap-3.5">
                    <li>
                      <a href="#">
                        <div className="flex items-center gap-2 self-start">
                          <img
                            src="images/img_arrow_right_blue_a700.svg"
                            alt="about us icon"
                            className="h-[20px] w-[20px]"
                          />
                          <p className="text-gray-800 dark:text-gray-200">
                            About Us
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex items-center gap-2 self-start">
                          <img
                            src="images/img_arrow_right_blue_a700.svg"
                            alt="graduation icon"
                            className="h-[20px] w-[20px]"
                          />
                          <p className="text-gray-800 dark:text-gray-200">
                            Graduation
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex gap-2">
                          <img
                            src="images/img_arrow_right_blue_a700.svg"
                            alt="scholarship icon"
                            className="h-[20px] w-[20px] self-start"
                          />
                          <p className="text-gray-800 dark:text-gray-200">
                            Scholarship
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex items-center gap-2 self-start">
                          <img
                            src="images/img_arrow_right_blue_a700.svg"
                            alt="admissions icon"
                            className="h-[20px] w-[20px]"
                          />
                          <p className="text-gray-800 dark:text-gray-200">
                            Admissions
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex items-center gap-2 self-start">
                          <img
                            src="images/img_arrow_right_blue_a700.svg"
                            alt="international icon"
                            className="h-[20px] w-[20px]"
                          />
                          <p className="text-gray-800 dark:text-gray-200">
                            International
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex items-center gap-2 self-start">
                          <img
                            src="images/img_arrow_right_blue_a700.svg"
                            alt="events icon"
                            className="h-[20px] w-[20px]"
                          />
                          <p className="text-gray-800 dark:text-gray-200">
                            Events
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 ">
                  <h3 className="text-[28px] font-[700]">
                    Homiylar
                  </h3>
                  <ul className="flex flex-col gap-3.5">
                    <li>
                      <a href="#">
                        <div className="flex gap-2 self-start">
                          <img
                            src="images/img_arrow_right_blue_a700.svg"
                            alt="language icon"
                            className="h-[20px] w-[20px] self-start"
                          />
                          <p className="self-end text-gray-800 dark:text-gray-200">
                            Language
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex items-center gap-2 self-start">
                          <img
                            src="images/img_arrow_right_blue_a700.svg"
                            alt="wordpress icon"
                            className="h-[20px] w-[20px]"
                          />
                          <p className="text-gray-800 dark:text-gray-200">
                            WordPress
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex gap-2 self-start">
                          <img
                            src="images/img_arrow_right_blue_a700.svg"
                            alt="privacy icon"
                            className="h-[20px] w-[20px] self-start"
                          />
                          <p className="text-gray-800 dark:text-gray-200">
                            Privacy
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex gap-2 self-start">
                          <img
                            src="images/img_arrow_right_blue_a700.svg"
                            alt="faqs icon"
                            className="h-[20px] w-[20px] self-start"
                          />
                          <p className="text-gray-800 dark:text-gray-200">
                            FAQs
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex items-center gap-2 self-start">
                          <img
                            src="images/img_arrow_right_blue_a700.svg"
                            alt="support icon"
                            className="h-[20px] w-[20px]"
                          />
                          <p className="self-end text-gray-800 dark:text-gray-200">
                            Support
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <div className="flex flex-col">
                    <h3 className="text-[28px] font-[700]">
                      Bog’lanish
                    </h3>
                    <a href="#" className="mt-6">
            <p>
              230,Mirpur Area, Mirpur 10, Dhaka, <br />Bangladesh
            </p>
                      <p className="text-gray-800 dark:text-gray-200">
                        +017 4845 7269
                      </p>
                    </a>
                  </div>
                  <ul className="flex flex-col items-start gap-3.5">
                    <li>
                      <a href="#">
                        <div className="flex gap-2">
                          <img src="images/img_gmail_1.svg" alt="email icon" className="h-[20px] w-[20px] self-start" />
                          <p className="self-end text-gray-800 dark:text-gray-200">
                            info@gmail.com
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex items-center gap-2">
                          <img src="images/img_domain_1.svg" alt="website icon" className="h-[20px] w-[20px]" />
                          <p className="text-gray-800 dark:text-gray-200">
                            www.yourdomain.com
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
