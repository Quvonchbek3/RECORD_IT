import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-multi-carousel/lib/styles.css";
import "../../../App.css";
import CountUp from 'react-countup';
import Card_Carousel from "./Card_Carousel";


function Record() { 
  useEffect(() => {
    Aos.init();
  });


  return (
    <>
      <div>
        <div className="relative z-[6] mx-auto mt-[-91px] flex w-full max-w-[1153px]">
          <div className="grid  sm:grid-cols-3 w-full justify-center rounded bg-white dark:bg-[#282525] dark:text-white pb-14 pr-14 pt-[55px] shadow-2xl pl-[80px]">
              <div className={`flex items-center md:w-full gap-4`}>
                <img
                  src={"images/img_lecture_1_1.svg"}
                  alt="lectureimage"
                  className="w-[52px] h-[52px] sm:w-[52px] sm:h-[52px] md:h-[72px] md:w-[72px]"
                />
                <div className="flex flex-col items-start gap-[9px]">
                  <h1 className=" text-[22px] md:text-[35px] font-[700]">
                    <CountUp end={1400} duration={5} />+
                  </h1>
                  <p className="!text-blue-600">{"Online Kurslar"}</p>
                </div>
              </div>
              <div className={`flex items-center md:w-full gap-4`}>
                <img
                  src={"images/img_instructor_1.svg"}
                  alt="lectureimage"
                  className="w-[52px] h-[52px] sm:w-[52px] sm:h-[52px] md:h-[72px] md:w-[72px]"
                />
                <div className="flex flex-col items-start gap-[9px]">
                  <h1 className=" text-[22px] md:text-[35px] font-[700]">
                    <CountUp end={1100} duration={5} />+
                  </h1>
                  <p className="!text-blue-600">{"Mutaxassislar"}</p>
                </div>
              </div>
              <div className={`flex items-center md:w-full gap-4`}>
                <img
                  src={"images/img_success_1.svg"}
                  alt="lectureimage"
                  className="w-[52px] h-[52px] sm:w-[52px] sm:h-[52px] md:h-[72px] md:w-[72px]"
                />
                <div className="flex flex-col items-start gap-[9px]">
                  <h1 className=" text-[22px] md:text-[35px] font-[700]">
                    <CountUp end={800} duration={5} />+
                  </h1>
                  <p className="!text-blue-600">{"Muvafaqqiyatli natijalar"}</p>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[63px]">
        <div className="w-[85%] grid sm:grid-cols-2">
          <div data-aos="fade-right" className="w-[80%]">
            <h1 className="text-[38px] sm:text-[30px] md:text-[38px] font-[700] dark:text-gray-200">
              Yorqin kelajakni <br /> yaratadigan <br /> kursingizni toping
            </h1>
            <p className="text-[16px] dark:text-gray-400 sm:text-[14px] md:text-[16px] text-gray-600 leading-6">
              Surxondaryo viloyatidagi Angor tumanida Recor IT Academiyasi
              2023-yil tashkil etilgan.Bu mazkazda siz ITdan malakali ustozlar
              yordamida bilim olishingiz mumkin.Bu o’quv markaz o’qitish bilan
              birga IT bo’yicha ishlarni ham qabul qiladi
            </p>
            <p className="text-[20px] sm:text-[16px] md:text-[20px] dark:text-gray-300 text-gray-800">
              Record IT Academiyasi Xalqaro komponiyalar bilan shartnoma qilgan
            </p>
            <button className="w-[150px] h-[50px] rounded-xl mt-3 text-white bg-blue-600 hover:text-blue-600 hover:bg-white hover:border-2 hover:border-blue-600">
              Batafsil
            </button>
          </div>
          <div
            data-aos="fade-left"
            className=" mt-6 sm:m-0 img_src h-[433px] sm:h-[403px] md:h-[433px] flex items-center justify-center w-[100%]"
          >
            <button className="relative bg-white flex justify-center items-center w-[80px] h-[80px] !rounded-[40px] sm:px-5">
              <img src="/public/images/img_play_1.svg" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <div
          id="kurs"
          data-aos="fade-up"
          className="dark:bg-[#2f607f] mt-14 flex flex-col items-center justify-center gap-[23px] self-stretch pb-[81px] pt-12 md:py-5"
        >
          <div className="pl-[50%] sm:pl-[30%] pr-[201px] md:p-5 md:px-5">
            <div className="flex flex-col items-center gap-[7px] text-center">
              <h2 className="text-black dark:text-gray-200 font-[700] text-[38px]">
                Bizning kurslarimiz
              </h2>
              <p className="text-center dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Placerat mauris non dictumst in <br /> leo. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex w-full items-center md:w-full md:flex-col md:p-5">
            <div className="flex flex-row caro w-full overflow-x-auto  h-[570px] sm:ml-0 max-w-[1154px] gap-[23px]">
                <Card_Carousel
                  imgs={"images/img_wonderlane_b9_o.png"}
                  usersImg={"images/img_ellipse_18.png"}
                  heading={"Backend darslari"}
                  price={"$ 450"}
                  description={
                    "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit."
                  }
                />
                                <Card_Carousel
                  imgs={"images/img_mr_bochelly_ibk.png"}
                  usersImg={"images/img_ellipse_21.png"}
                  heading={"Grafik darslari"}
                  price={"$ 370"}
                  description={
                    "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit."
                  }
                />
                                <Card_Carousel
                  imgs={"images/img_jeswin_thomas_6.png"}
                  usersImg={"images/img_ellipse_22.png"}
                  heading={"Frontend darslari"}
                  price={"$ 400"}
                  description={
                    "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit."
                  }
                />
                                <Card_Carousel
                  imgs={"images/img_mr_bochelly_ibk.png"}
                  usersImg={"images/img_ellipse_21.png"}
                  heading={"Grafik darslari"}
                  price={"$ 370"}
                  description={
                    "Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit."
                  }
                />
            </div>
          </div>
        </div>
        <div
          id="blog"
          data-aos="fade-up"
          className="flex flex-col items-center gap-12 pb-[58px] md:pb-5"
        >
          <div className="flex w-[51%] flex-col items-start gap-[7px] md:w-full">
            <h2 className="text-[38px] text-center font-[700] m-auto mt-9 dark:text-gray-200">
              Bizning xizmatlarimiz
            </h2>
            <p className="md:w-[568px] text-center text-gray-800 dark:text-gray-400 m-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              vestibulum euismod nullam elementum. Urna, posuere nisi sit
              gravida massa.
            </p>
          </div>

          <div className="caro sm:grid sm:grid-cols-2 md:grid-cols-3 gap-10 m-auto rounded-md bg-white-700 pb-[13px] shadow-sm">
            <div className="bg-white flex flex-col items-start mt-[4%] sm:hover:mt-0 transition-[2s] shadow-xl hover:shadow-2xl gap-[15px] m-auto w-[90%] sm:w-[350px] h-[100%] rounded-md self-stretch px-3.5">
              <img
                src="images/img_web_design_agency.png"
                alt="design image"
                className="w-[100%] h-[224px]"
              />
              <h3 className="!text-black-900 font-[700] text-[23px]">
                Web dizayn
              </h3>
              <p className="w-full leading-[155%]">
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat
                mauris non dictumst in leo. Lorem ipsum dolor sit.
              </p>
              <button className="ml-3.5 w-[120px] h-[56px] bg-blue-600 rounded-xl text-white font-medium md:ml-0 sm:px-5 mb-[4%]">
                Batafsil
              </button>
            </div>
            <div className="bg-white flex flex-col items-start mt-[13%] sm:mt-[4%] sm:hover:mt-0 transition-[2s] shadow-xl hover:shadow-2xl gap-[15px]  m-auto w-[90%] sm:w-[350px] h-[100%] rounded-md self-stretch px-3.5">
              <img
                src="images/img_boty_telegram_1.png"
                alt="design image"
                className="w-[70%] h-[224px] m-auto "
              />
              <h3 className="!text-black-900 font-[700] text-[23px]">
                Telegram bot yaratish
              </h3>
              <p className="w-full leading-[155%]">
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat
                mauris non dictumst in leo. Lorem ipsum dolor sit.
              </p>
              <button className="ml-3.5 w-[120px] h-[56px] bg-blue-600 rounded-xl text-white font-medium md:ml-0 sm:px-5 mb-[4%]">
                Batafsil
              </button>
            </div>
            <div className="bg-white flex flex-col items-start mt-[13%] sm:mt-[4%] sm:hover:mt-0 transition-[2s] shadow-xl hover:shadow-2xl gap-[15px]  m-auto w-[90%] sm:w-[350px] h-[100%] rounded-md self-stretch px-3.5">
              <img
                src="images\img_magento_website_development.png"
                alt="design image"
                className="w-[100%] h-[224px]  "
              />
              <h3 className="!text-black-900 font-[700] text-[23px]">
                Web sayt yaratish
              </h3>
              <p className="w-full leading-[155%]">
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat
                mauris non dictumst in leo. Lorem ipsum dolor sit.
              </p>
              <button className="ml-3.5 w-[120px] h-[56px] bg-blue-600 rounded-xl text-white font-medium md:ml-0 sm:px-5 mb-[4%]">
                Batafsil
              </button>
            </div>
          </div>

          <div className="mt-[91px] flex justify-center self-stretch bg-blue-100 dark:bg-[#2f607f] dark:text-gray-200 pb-[72px] pt-[70px] md:py-5">
            <div className="sm:gap-44 gap-12 pl-[134px] pr-36 md:p-5 md:px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <h2 className="font-[700] text-[38px]">
                <CountUp end={85} duration={5} />+</h2>
                <p className="m-auto">O’qituvchilar</p>
              </div>
              <div className="flex flex-col items-start gap-[3px]">
                <h3 className="font-[700] text-[38px]">
                  <CountUp end={850} duration={5} />+
                  </h3>
                <p className="m-auto">O’quvchilar</p>
              </div>
              <div className="flex flex-col items-start">
                <h5 className="font-[700] text-[38px]">
                <CountUp end={55} duration={5} />+
                </h5>
                <p className="m-auto ml-[5px] md:ml-0">Kurslar</p>
              </div>
              <div className="flex flex-col gap-0.5">
                <h5 className="font-[700] text-[38px]">
                <CountUp end={25} duration={5} />+
                </h5>
                <p className="m-auto">Mamlakatlar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        id="contact"
        className="container-xs mb-16 mt-[61px] flex justify-center pt-4 md:p-5"
      >
        <div className="flex w-full flex-col items-center">
          <h2 className="!text-black-900 font-[700] dark:text-gray-200 text-[38px]">
            O’quvchilarimiz fikri
          </h2>
          <p className="mt-[11px] dark:text-gray-400">
            Kurslarimiz tamomlagan o’quvchilar fikri
          </p>
          <div className="mt-[54px] grid sm:grid-cols-2  md:grid-cols-3 items-center gap-8 justify-center">
            <div className="mx-3 dark:bg-white rounded-lg flex sm:w-[300px] md:w-[360px] mt-[2%] hover:mt-0 transition-[2s] max-w-[1008px] gap-6 md:mx-0 shadow-3xl md:flex-col md:self-stretch">
              <div className="flex flex-col items-start gap-5 rounded-md bg-white-A700 px-[15px] pb-[38px] pt-[30px] shadow-2xl sm:py-5">
                <p className="w-[97%] leading-[155%] md:w-full">
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                  Placerat mauris non dictumst in leo etiam. Proin iaculis arcu
                  iaculis egestas.
                </p>
                <div className="flex w-[71%] items-center gap-4 md:w-full">
                  <img
                    src="images/img_ellipse_33.png"
                    alt="profile image"
                    className="h-[72px] w-[72px] rounded-[50%]"
                  />
                  <div className="flex flex-col items-start gap-[7px]">
                    <p className="text-gray-900 text-[20px] font-[500]">
                      Jony Ahmed
                    </p>
                    <p>UI/UX Student</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-3 dark:bg-white rounded-lg flex sm:w-[300px] md:w-[360px] mt-[2%] hover:mt-0 transition-[2s] max-w-[1008px] gap-6 md:mx-0 shadow-3xl md:flex-col md:self-stretch">
              <div className="flex flex-col items-start gap-5 rounded-md bg-white-A700 px-[15px] pb-[38px] pt-[30px] shadow-2xl sm:py-5">
                <p className="w-[97%] leading-[155%] md:w-full">
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                  Placerat mauris non dictumst in leo etiam. Proin iaculis arcu
                  iaculis egestas.
                </p>
                <div className="flex w-[71%] items-center gap-4 md:w-full">
                  <img
                    src="images/img_ellipse_34.png"
                    alt="profile image"
                    className="h-[72px] w-[72px] rounded-[50%]"
                  />
                  <div className="flex flex-col items-start gap-[7px]">
                    <p className="text-gray-900 text-[20px] font-[500]">
                      Mukter Hossain
                    </p>
                    <p>UI/UX Student</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-3 dark:bg-white rounded-lg flex sm:w-[300px] md:w-[360px] mt-[2%] hover:mt-0 transition-[2s] max-w-[1008px] gap-6 md:mx-0 shadow-3xl md:flex-col md:self-stretch">
              <div className="flex flex-col items-start gap-5 rounded-md bg-white-A700 px-[15px] pb-[38px] pt-[30px] shadow-2xl sm:py-5">
                <p className="w-[97%] leading-[155%] md:w-full">
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                  Placerat mauris non dictumst in leo etiam. Proin iaculis arcu
                  iaculis egestas.
                </p>
                <div className="flex w-[71%] items-center gap-4 md:w-full">
                  <img
                    src="images/img_ellipse_35.png"
                    alt="profile image"
                    className="h-[72px] w-[72px] rounded-[50%]"
                  />
                  <div className="flex flex-col items-start gap-[7px]">
                    <p className="text-gray-900 text-[20px] font-[500]">
                      Jony Sing
                    </p>
                    <p>UI/UX Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-full sm:w-[75%] mt-16 border-[10px] border-white m-0 md:m-auto "
      >
        <div className="rounded-md bg-blue-700 w-full">
              <h2 className="text-gray-200 pt-9 text-center text-[22px] sm:text-[36px] font-[700]">
                O’quvchilarimiz fikri
              </h2>
              <p className="text-center m-auto w-[250px] text-gray-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Placerat <br /> mauris non dictumst in leo. Lorem ipsum dolor
                sit amet.
              </p>
          <div className="mx-5 mt-10">
            <input
              className="outline-none mb-2 w-[100%] h-[60px] pl-2 rounded-sm"
              name="Name Field"
              placeholder={`ismingiz.....`}
            />
            <input
              className="outline-none mb-2 w-[100%] h-[60px] pl-2 rounded-[5px]"
              name="Surname Field"
              placeholder={`familyangiz`}
            />
            <input
              className="outline-none mb-2 w-[100%] h-[60px] pl-2 rounded-[5px]"
              name="Contact Field"
              placeholder={`Telefon nomer`}
            />
            <textarea
              name="Comment Box"
              placeholder={`Fikringizni qoldiring`}
              className="outline-none mb-10 text-gray-700 pt-2 w-[100%] h-[230px] pl-2 rounded-[5px]"
            />
          </div>
          </div>
        </div>
    </>
  );
}

export default Record;
